import React, { FC } from "react";
import styles from "./QuestionCard.module.scss";
import { Button, Divider, Space , Tag , Popconfirm ,message} from "antd";
import {
  EditFilled,
  PieChartFilled,
  CopyFilled,
  StarFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";


//范型
type PropsType = {
  _id: number;
  name: string;
  isPublished: boolean;
  isStarred: boolean;
  answerCount: number;
  createAt: string;
};

const QuestionCard: FC<PropsType>= (props ) => {
  const nav = useNavigate();
  const { _id, name, createAt, isPublished, answerCount, isStarred } = props;

  const copy = () => {
    message.success('复制成功');
  }

  return (
    <div className={styles.container}>
      {/* 上部分 */}
      <div className={styles.topItem}>
        <div className={styles.left}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStarred && <StarFilled style={{ color: "red" }} />}
              {name}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            <span>
              {isPublished ? <Tag color="processing">已发布</Tag> : <Tag >未发布</Tag>}
            </span>
            <span>答卷：{answerCount}</span>
            <span>{createAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin : '12px' }}></Divider>
      {/* 下部分 */}
      <div className={styles.bottomItem}>
        <div className={styles.left}>
          <Space>
            <Button
              type="text"
              icon={<EditFilled />}
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              icon={<PieChartFilled />}
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="text"  icon={<StarFilled />}>
              {isStarred ? "标星" : "已标星"}
            </Button>
            <Popconfirm
                title="确定要复制吗？"
                onConfirm={copy}
                onCancel={()=>{}}
                okText="确定"
                cancelText="取消"
            >
                <Button type="text"  icon={<CopyFilled />}>复制</Button>
            </Popconfirm>
            <Button type="text" icon={<DeleteFilled />}>删除</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
