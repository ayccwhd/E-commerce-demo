import React, { Component } from 'react'
import {PlusCircleOutlined} from '@ant-design/icons';
import PopForm from '../PopForm'
import { Button } from 'antd';

export default class Cnee extends Component {
    addAddress = ()=>{

    }
  render() {
    
    const {consignee,setConsignee} = this.props;
    const {name,phone,address} = consignee;
    return (
        <div className='address'>
      <div className='card-head bt_20 bm_20'>
          <span>收货人信息</span>
          <span>管理收货人地址</span>

      </div>
      <div className='address-manage'>
          {/* 下面的div需要遍历所有地址来得到 */}
          <div className='address-item'>
              <div>
                <span>姓名：{name}</span>
              </div>
              <div>
                <span>电话：{phone}</span>
              </div>
              <div>
                <span>地址：{address}</span>
              </div>
              <div className='modifyMessage'>
                <PopForm setConsignee={setConsignee}/>

              </div>
          </div>
          <div className='add-address'>
            {/* <Icon type="plus-circle-o" /> */}
            <div onClick={this.addAddress}>
                {/* <PlusCircleOutlined style={{fontSize:'25px'}}/> */}
                <PopForm icon={<PlusCircleOutlined />}/>
                <div>
                    添加新地址
                </div>
            </div>
          </div>
      </div>
        </div>

    )
  }
}
