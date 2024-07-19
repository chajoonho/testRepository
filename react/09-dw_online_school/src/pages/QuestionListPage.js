import React, { useState } from "react";
import ListPage from "../components/ListPage";
import styles from "./QuestionListPage.module.css";
import Input from "../components/Input";
import searchImg from "../assets/search.svg";

// const [items, setItems] = useState();
function QuestionListPage(props) {
  return (
    <ListPage variant="community">
      <div className={styles.container}>
        <Input placeholder="검색으로 질문 찾기" />
        {/* <p className={styles.count}>총 {items.length}개 코스</p> */}
        <button>
          <img src={searchImg} />
        </button>
      </div>
      <div className={styles.box}>
        <Input />
        <Input />
        <Input />
      </div>
    </ListPage>
  );
}

export default QuestionListPage;
