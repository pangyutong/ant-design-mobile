import React from 'react'
import { Form, Input, Button } from 'antd-mobile'
import { AddSquareOutline } from 'antd-mobile-icons'
import { DemoBlock } from '../../../demos'

export default function () {
  const [form] = Form.useForm()
  return (
    <DemoBlock
      title='在表单字段内增加额外内容'
      padding='0'
      border='none'
      background='transparent'
    >
      <Form
        form={form}
        layout='horizontal'
        footer={
          <Button block type='submit' color='primary'>
            提交
          </Button>
        }
      >
        <Form.Item label='运输车辆'>
          <Form.Item
            name='cph'
            noStyle
            rules={[{ required: true, message: '请选择运输车辆' }]}
          >
            <Input />
          </Form.Item>
          <AddSquareOutline />
        </Form.Item>
      </Form>
    </DemoBlock>
  )
}
