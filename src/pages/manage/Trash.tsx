import React, { FC, useState } from "react";
// import QuestionCard from "../components/QuestionCard";
import styles from "./Common.module.scss"; 
import ListSearch from "../../components/ListSearch";

import { ExclamationCircleOutlined} from "@ant-design/icons";
import {
  Table,
  Tag,
  Typography,
  Button,
  Space,
  Empty,
  message,
  Modal
} from "antd";
const { Title } = Typography;
const { confirm } = Modal;

const rawQuestionsList = [
  {
    _id: 1,
    name: "问题1",
    isPublished: false,
    isStarred: false,
    answerCount: 1,
    createAt: "3月10日  19:32",
  },
  {
    _id: 2,
    name: "问题2",
    isPublished: false,
    isStarred: false,
    answerCount: 6,
    createAt: "3月19日  16:30",
  },
  {
    _id: 3,
    name: "问题3",
    isPublished: false,
    isStarred: false,
    answerCount: 4,
    createAt: "3月10日  12:29",
  },
  {
    _id: 4,
    name: "问题4",
    isPublished: false,
    isStarred: false,
    answerCount: 2,
    createAt: "3月18日  12:30",
  },
  {
    _id: 5,
    name: "问题5",
    isPublished: false,
    isStarred: false,
    answerCount: 1,
    createAt: "3月15日  10:30",
  },
];
const Trash: FC = () => {
  const [questionsList, setQuestionsList] = useState(rawQuestionsList);

  const [selectedId, setSelectId] = useState<number[]>([]);

  function del(){
        confirm({
            title: "确定要彻底删除吗？",
            content: "删除后将无法恢复",
            icon: <ExclamationCircleOutlined />,
            onOk: ()=> alert(`删除 ${JSON.stringify(selectedId)}`),
        });
}

  const columns = [
    {
      title: "标题",
      dataIndex: "name",
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) =>
        isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>,
    },
    {
      title: "是否收藏",
      dataIndex: "isStarred",
      render: (isStarred: boolean) =>
        isStarred ? <Tag color="processing">已收藏</Tag> : <Tag>未收藏</Tag>,
    },
    {
      title: "回答数",
      dataIndex: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
    },
  ];

  const tableItem = (
    <>
      <div style={{ marginBottom: "16px" }}>
        <Space>
          <Button type="primary" disabled={selectedId.length === 0}>
            恢复
          </Button>
          <Button type="primary" danger disabled={selectedId.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionsList}
        columns={columns}
        rowKey={(q) => q._id}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            // console.log(selectedRowKeys, 111);
            setSelectId(selectedRowKeys as number[]);
          },
        }}
      ></Table>
    </>
  );

  return (
    <div>
      {/* 头部 */}
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </div>
      {/* 主体 */}
      <div className={styles.content}>
        {questionsList.length === 0 && <Empty />}
        {questionsList.length !== 0 && tableItem}
      </div>
      {/* 底部 */}
      <div className={styles.footer}>LoadMore</div>
    </div>
  );
};

export default Trash;
