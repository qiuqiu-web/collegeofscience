import React from "react";
import "./PageTemplate.css";
import s1 from "../images/SWPU2020年教学成果二等奖.png";
import s2 from "../images/SWPU研究生三等奖1.png";
import s3 from "../images/SWPU研究生三等奖2.png";
import s4 from "../images/统计二等奖.png";
import s5 from "../images/统计一等奖.png";
import s6 from "../images/25研究生一等奖.png";
import s7 from "../images/25建设一等奖.png";
import s8 from "../images/数竞三等奖.png";
import s9 from "../images/数竞三等奖2.png";

import w1 from "../images/优秀科技论文一等奖.png";
import w2 from "../images/合作创新成果奖.png";
import w3 from "../images/科学技术进步二等奖.png";
import w4 from "../images/石化协会进步二等奖.png";
import w5 from "../images/石化自然一等奖.png";
import w6 from "../images/发明协会成果奖二等奖.png";
import w7 from "../images/统计入库证书.png";

const Application = () => {
  return (
    <div className="page-template">
      <h1 className="page-title">教学成果及应用证明材料</h1>

      <div className="content-section">
        <h2>
          <b>目录</b>
        </h2>
        <p>
          <b>2.1成果相关获奖证书</b>
        </p>
        <ul className="content-list">
          <li>2.1.1 教学成果类获奖9项</li>
          <li>2.1.2 “数学+”教学科研类获奖7项</li>
          <li>2.1.3 AI辅助教学获奖2项</li>
        </ul>
        <p>
          <b>2.2教学成果及应用证明材料</b>
        </p>
        <ul className="content-list">
          <li>2.2.1 成果鉴定书</li>
          <li>2.2.2 3门优质课程、5部教材</li>
          <li>.2.3 应用案例库（部分）</li>
          <li>2.2.4 教学教改研究项目（省级3项校级13项）</li>
          <li>2.2.5 部分教学教改研究项目结题报告6项</li>
          <li>2.2.6 课程资源</li>
          <li>2.2.7 学生科研能力提升</li>
          <li>2.2.8 多维质量评价与跟踪反馈体系</li>
        </ul>
        <p>
          <b>2.3 辐射推广效果</b>
        </p>
        <ul className="content-list">
          <li>2.3.1 教学成果推广应用证明</li>
          <li>2.3.2 国际合作</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>2.1 成果相关获奖证书</h3>
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
      {/*从这里开始是2.1.2的展示 */}
      <div>
        <div>
          <h4>2.1.2 “数学+”教学科研类获奖7项</h4>
          <div className="image-container">
            <h5>1. 优秀科技论文奖一等奖</h5>
            <img src={w1} alt="优秀科技论文奖一等奖"></img>
            <h5>2. 2021年中国产学研合作创新与促进奖产学研合作创新成果奖</h5>
            <img src={w2} alt="合作创新成果奖"></img>
            <h5>3. 四川省科学技术进步奖二等奖</h5>
            <img src={w3} alt="科学技术进步奖二等奖"></img>
            <h5>4. 2020年度中国石油和化工自动化应用协会科技进步奖二等奖</h5>
            <img src={w4} alt="石化协会进步奖二等奖"></img>
            <h5>5. 2023年度中国石油和化工自动化应用协会自然科学奖一等奖</h5>
            <img src={w5} alt="石化自然一等奖"></img>
            <h5>6. 2024年度中国发明协会发明创业奖成果奖二等奖</h5>
            <img src={w6} alt="发明协会成果奖二等奖"></img>
            <h5>7. 2024年全国应用统计专业学位教育教学案例库入库证书</h5>
            <img src={w7} alt="统计入库证书"></img>
          </div>
        </div>
      </div>
      {/*从这里开始是2.1.3的展示 */}
    </div>
  );
};

export default Application;
