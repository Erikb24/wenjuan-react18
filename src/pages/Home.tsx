import React, { FC } from "react";
import { Button, Typography } from "antd";
import { useNavigate, Link } from "react-router-dom";
// import { MANAGE_INDEX_PATHNAME } from "../router";
import styles from "./Home.module.scss";

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  return (
    <div  className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已票计创建问卷1090 份，发布问卷100份，收到答卷10000份
        </Paragraph>
      </div>
      <div className={styles.button}>
        <Button type="primary">
          <Link to="/manage/list">开始使用</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
