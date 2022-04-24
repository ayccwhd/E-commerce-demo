import React, { Component } from 'react'
import { Modal, Button, Space } from 'antd';

export default class WaringPage extends Component {
  render() {
    return (
      <div>
        <Button onClick={warning}>Warning</Button>
      </div>
    )
  }
}



function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    content: 'some messages...some messages...',
  });
}

function error() {
  Modal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}



ReactDOM.render(
  <Space wrap>
    <Button onClick={info}>Info</Button>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
  </Space>,
  mountNode,
);