import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="修改收货人信息"
      okText="确定"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: '请输入姓名!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="电话">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="address" label="地址">
          <Input type="textarea" />
        </Form.Item>
        {/* <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

const CollectionsPage = (props) => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    props.setConsignee(values);
    // console.log(props.setConsignee);
    // console.log('ok');
    setVisible(false);
  };
  const {icon} = props;

  return (
    <div>
      <Button style={{display:icon===undefined?'none':'block'}}
        type="text"
        onClick={() => {
          setVisible(true);
        }}
        icon={icon}
      >
        {/* New Collection */}
        {/* <PlusCircleOutlined style={{fontSize:'25px'}}/> */}
        {/* <PopForm/> */}
      </Button>
      <Button style={{display:icon===undefined?'block':'none'}}
        
        onClick={() => {
          setVisible(true);
        }}
      >
        修改
        {/* New Collection */}
        {/* <PlusCircleOutlined style={{fontSize:'25px'}}/> */}
        {/* <PopForm/> */}
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default CollectionsPage;