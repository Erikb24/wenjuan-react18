import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Space } from 'antd';
import Logo from "./Logo";

import styles from "./MainLayout.module.scss";
import Login from "../components/Login";

const { Header, Footer, Content } = Layout;
const MainLayout: FC = () => {
    
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
            <Logo />
        </div>
        <div className={styles.right}>
            <Login></Login>
        </div>
      </Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>Created By Erik</Footer>
    </Layout>
  );
};

export default MainLayout;
