import { Modal,Toast} from 'antd-mobile-v2'
const alert = Modal.alert;
export default function alertFun (num,type,callback){
    return(
        num? alert(`${type}这${num}个宝贝`, '确定吗?', [
            {
                text: '我再想想', style: {
                    backgroundColor: '#777',
                    color: '#fff',
                    fontWeight: 700
                }
            },
            {
                text: `${type}`, style: {
                    backgroundColor: 'rgb(244, 51, 60)',
                    color: '#fff',
                    fontWeight: 700
                }, onPress: () => callback()
            },
        ]):Toast.fail('您还没选择宝贝呢',2)
    )
}
