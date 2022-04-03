import React, { Component } from 'react'
import { Radio, Input, Space } from 'antd';

export default class RadioPage extends Component {
    state = {
        value: 1,
      };
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    
      render() {
          const inner = this.props.inner;
          console.log(inner);
        const { value } = this.state;
        return (
          <Radio.Group onChange={this.onChange} value={value}>
            <Space direction="vertical">
            {inner.map((item,key) => {
                  return (
                      <Radio value={key}>{item}</Radio> 
                  )
              })}
              {/* <Radio value={1}>Option A</Radio>
              <Radio value={2}>Option B</Radio>
              <Radio value={3}>Option C</Radio>
              <Radio value={4}>
                More...
                {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
              </Radio> */}
            </Space>
          </Radio.Group>
        );
      }
}