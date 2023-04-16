import React, { FC } from "react";
import { Outlet , useNavigate , useLocation} from "react-router-dom";
import { PlusOutlined , StarOutlined , BarsOutlined , AntCloudOutlined} from "@ant-design/icons";
import styles from "./ManageLayout.module.scss";

import { Button, Tooltip, Space , Divider } from "antd";

const MainLayout: FC = () => {
    const nav = useNavigate();
    const { pathname } = useLocation();


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* <p>ManageLayout</p> */}
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            新建问卷
          </Button>
          <Divider style={{ borderTop : 'transparent' }}/>
          <Button type={pathname.startsWith('/manage/list') ? 'default' : 'text'} size="large" icon={<BarsOutlined />} onClick={()=>nav('/manage/list')}>
            我的问卷
          </Button>
          <Button type={pathname.startsWith('/manage/star') ? 'default' : 'text'} size="large" icon={<StarOutlined />} onClick={()=>nav('/manage/star')}>
            星标问卷
          </Button>
          <Button type={pathname.startsWith('/manage/trash') ? 'default' : 'text'} size="large" icon={<AntCloudOutlined />} onClick={()=>nav('/manage/trash')}>
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
