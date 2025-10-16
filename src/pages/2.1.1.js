import React from "react";
import "./PageTemplate.css";
import "./Application.css";

// 2.1.1的图片
import s1 from "../images/SWPU2020年教学成果二等奖.png";
import s2 from "../images/SWPU研究生三等奖1.png";
import s3 from "../images/SWPU研究生三等奖2.png";
import s4 from "../images/统计二等奖.png";
import s5 from "../images/统计一等奖.png";
import s6 from "../images/25研究生一等奖.png";
import s7 from "../images/25建设一等奖.png";
import s8 from "../images/数竞三等奖.png";
import s9 from "../images/数竞三等奖2.png";

const Section211 = () => {
  return (
    <div>
      <h1 className="page-title">2.1 成果相关获奖证书</h1>

      <div className="content-section">
        <div>
          <h4>2.1.1 教学成果类获奖9项</h4>
          <div className="image-container">
            <h5>1. 西南石油大学2020年教学成果奖二等奖</h5>
            <img src={s1} alt="西南石油大学2020年教学成果奖二等奖"></img>
            <h5>2. 2018-2020年西南石油大学教学成果奖（研究生组）三等奖</h5>
            <img
              src={s2}
              alt="2018-2020年西南石油大学教学成果奖（研究生组）三等奖"
            ></img>
            <h5>3. 2016-2018年西南石油大学教学成果奖（研究生组）三等奖</h5>
            <img
              src={s3}
              alt="2016-2018年西南石油大学教学成果奖（研究生组）三等奖"
            ></img>
            <h5>4. 四川省现场统计学会第一届教学成果奖二等奖</h5>
            <img src={s4} alt="四川省现场统计学会第一届教学成果奖二等奖"></img>
            <h5>5. 四川省现场统计学会第二届教学成果奖一等奖</h5>
            <img src={s5} alt="四川省现场统计学会第二届教学成果奖一等奖"></img>
            <h5>6. 西南石油大学2025年研究生教学成果奖一等奖</h5>
            <img src={s6} alt="西南石油大学2025年研究生教学成果奖一等奖"></img>
            <h5>7. 西南石油大学2025年研究生教材建设一等奖</h5>
            <img
              src={s7}
              alt="西南石油大学2025年教学成果奖（建设类）一等奖"
            ></img>
            <h5>8. 第五届数学建模微课程(案例)教学竞赛三等奖</h5>
            <img
              src={s8}
              alt="四川省数学竞赛学术委员会第三届教学成果奖三等奖"
            ></img>
            <h5>9. 第五届数学建模微课程(案例)教学竞赛三等奖</h5>
            <img
              src={s9}
              alt="四川省数学竞赛学术委员会第三届教学成果奖三等奖"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section211;