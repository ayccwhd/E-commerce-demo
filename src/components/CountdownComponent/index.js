import React from 'react';

//容器组件，负责逻辑
export default class CountdownComponent extends React.Component {
   state = {
      mode:'seckill'
   }
   constructor(props) {
      super(props);
      this.state = { countdownShow: "" };
      if (!this.props.endTime && !this.props.second) {//应传入这两个参数中一个
         throw new TypeError('need this props: endTime or second! You can use this component like this: <CountdownComponent endTime={"2022/11/11 18:30:00"} />');
      }
      if( this.props.timeoutFn !== undefined && typeof this.props.timeoutFn !== 'function') {
         throw new TypeError('timeoutFn is not a function');
      }

      if (this.props.second) {//当有second属性时
         this.time = {//都转成毫秒数
            endTime: Date.parse(new Date()) + this.props.second * 1000,
            myCorrNowTime: Date.parse(new Date()),//传入了时间，就是传入的客户端时间，否则就是自己的时间
         }
      } else {
         this.time = {//都转成毫秒数
            endTime: Date.parse(this.props.endTime),
            myCorrNowTime: Date.parse(this.props.myCorrNowTime) || Date.parse(new Date()),//传入了时间，就是传入的客户端时间，否则就是自己的时间
         }
      }
      this.time.hasPassTime = 0;//已经走过的时间，初始0

      this._xTime = Date.parse(new Date()) - this.time.myCorrNowTime;//时间差值。只在最开始的构造函数中执行计算一次，算出本地与传入的时间差值，进行误差的回复
      this.countdownTotalTime = this.time.endTime - this.time.myCorrNowTime;
      this.timerId = 0;//计数器序号

      this.isTimeOut = this.isTimeOut.bind(this);
   }

   //在组件即将进入的时候开启周期性计时器
   componentWillMount() {
      this.timerId = setInterval(() => {
         this.tick();
      }, 1)
   }

   //在组件卸载时，删除计时器
   componentWillUnmount() {
      clearInterval(this.timerId);
   }

   tick() {
      this.time.hasPassTime = Date.parse(new Date()) - this.time.myCorrNowTime - this._xTime;
      this.setState({
         countdownShow: this.time.endTime - this.time.myCorrNowTime - this.time.hasPassTime
      });
      //判断是否倒计时结束
      this.isTimeOut();
   }

   //判断是否时间到了，则   停止周期性计时器 && 执行您传入的timeoutFn()
   isTimeOut() {
      if (this.state.countdownShow <= 0) {
         clearInterval(this.timerId);
         this.props.timeoutFn && this.props.timeoutFn();
      }
   }

   //格式化日期
   dateFormat(arg) {
      arg = parseInt(arg, 10);//下取整
      return (arg < 10 ? "0" + arg : arg);//转格式
   }

   render() {
      const totalSecond = parseInt(this.state.countdownShow / 1000, 10);
      const d = this.dateFormat(totalSecond / 60 / 60 / 24);
      const h = this.dateFormat(totalSecond / 60 / 60 % 24);
      const m = this.dateFormat(totalSecond / 60 % 60);
      const s = this.props.second ? totalSecond : this.dateFormat(totalSecond % 60);

      const countdownTime = this.props.second ? `${s}秒` : `${d}天${h}:${m}:${s}`;
      return (
         //下面代码可以修改成您想要的格式
         <div>
            <h3  style={{color: "red" }}>倒计时还剩：{countdownTime}</h3>
         </div>
      )
   }
}