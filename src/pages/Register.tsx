import React, { FC } from "react";
import { Space, Typography, Button, Form, Input } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

import { LOGIN_PATHNAME } from "../router";

const { Title } = Typography;
const Register: FC = () => {
  const onFinsh = (values: any) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}  style={{ marginLeft: "55px"}}>
        <Space>
          <Title>
            <FormOutlined style={{ fontSize: "28px" }}/>
          </Title>
          <Title level={3}>注册新用户</Title>
        </Space>
      </div>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinsh}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="请确认密码"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="昵称"
          name="nickname"
          rules={[{ required: true, message: "Please input your nickname!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" size="middle" htmlType="submit">
              注册
            </Button>
            <Link to={LOGIN_PATHNAME}>
              <Title level={5} style={{ marginTop: "10px"}}>已注册</Title>
            </Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
