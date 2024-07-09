import React, { useState } from "react";
import styles from "./ColorSurvey.module.css";

function ColorSurvey(props) {
  //   const [mbti, setMbti] = useState("");

  //   const MbtiArr = mbti;
  //   setMbti(MbtiArr);
  const { id, mbti, arrow, colorChip, colorCode } = mbti;
  return (
    <div className={styles.colorSurvey}>
      <div className={styles.id}>{mbti.id}</div>
      <div className={styles.mbti}>{mbti.mbti}</div>
      <div className={styles.arrow}>
        <img className={styles.arrowIcon} src="/images/arrow.svg" />
      </div>
      <div
        className={styles.colorChip}
        style={{ backgroundColor: "#d9d9d9" }}
      ></div>
      <div className={styles.colorCode}>#D9D9D9</div>
    </div>
  );
}

export default ColorSurvey;
