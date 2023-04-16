import React, { FC , useState} from "react";
// import QuestionCard from "../components/QuestionCard";
import styles from "./Common.module.scss";
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";

import { Typography } from "antd";
const { Title } = Typography;

const List: FC = () => {
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
      isPublished: true,
      isStarred: true,
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
      isPublished: true,
      isStarred: false,
      answerCount: 2,
      createAt: "3月18日  12:30",
    },
    {
      _id: 5,
      name: "问题5",
      isPublished: false,
      isStarred: true,
      answerCount: 1,
      createAt: "3月15日  10:30",
    },
  ];

  const [questionsList, setQuestionsList] = useState(rawQuestionsList);
  return (
    <div >
    {/* 头部 */}
      <div className={styles.header}>
        <div className={styles.left}>
            <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
            <ListSearch></ListSearch>
        </div>
      </div>
    {/* 主体 */}
      <div className={styles.content}>
         {questionsList.length >0 && questionsList.map(q => {
            const { _id } = q;
            return (
                <QuestionCard key={_id} {...q}/>
            );
         })
         }
      </div>
    {/* 底部 */}
      <div className={styles.footer}>
        LoadMore
      </div>
    </div>
  );
};

export default List;
