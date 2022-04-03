import React, { Component } from 'react';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;



export default class SearchBox extends Component{
  suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  // onSearch = value => console.log(value);
  onSearch = (value) => {
    console.log(value)
  };
    render() {
      return (
        <div>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={this.suffix}
            onSearch={this.onSearch}
          />
        </div>
      )
    }
}