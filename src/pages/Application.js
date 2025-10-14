import React from "react";
import "./PageTemplate.css";
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
// 2.1.2的图片
import w1 from "../images/优秀科技论文一等奖.png";
import w2 from "../images/合作创新成果奖.png";
import w3 from "../images/科学技术进步二等奖.png";
import w4 from "../images/石化协会进步二等奖.png";
import w5 from "../images/石化自然一等奖.png";
import w6 from "../images/发明协会成果奖二等奖.png";
import w7 from "../images/统计入库证书.png";
// 2.1.3的图片
import a1 from "../images/ai辅助1.png";
import a2 from "../images/ai辅助2.png";
//2.2.1的图片
import c1 from "../images/成果鉴定1.png";
import c2 from "../images/成果鉴定2.png";
//2.2.2的图片
import j1 from "../images/优质课程1.png";
import j2 from "../images/优质课程2.png";
//一堆教材的照片
import book1 from "../images/教材1.png";
import book2 from "../images/教材2.png";
import book3 from "../images/教材3.png";
import book4 from "../images/教材4.png";
import book5 from "../images/教材5.png";
import book6 from "../images/教材6.png";
import book7 from "../images/教材7.png";
import book8 from "../images/教材8.png";
import book9 from "../images/教材9.png";
import book10 from "../images/教材10.png";
import book11 from "../images/教材11.png";
import book12 from "../images/教材12.png";
import book13 from "../images/教材13.png";
import book14 from "../images/教材14.png";
import book15 from "../images/教材15.png";
import book16 from "../images/教材16.png";
import book17 from "../images/教材17.png";
import book18 from "../images/教材18.png";
import book19 from "../images/教材19.png";
import book20 from "../images/教材20.png";
import book21 from "../images/教材21.png";
import book22 from "../images/教材22.png";
import book23 from "../images/教材23.png";
import book24 from "../images/教材24.png";
import book25 from "../images/教材25.png";
import book26 from "../images/教材26.png";
import book27 from "../images/教材27.png";
import book28 from "../images/教材28.png";
//import j3 from "../images/优质课程3.png";

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

        {/*从这里开始是2.1.2的展示 */}
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
        {/*从这里开始是2.1.3的展示 */}
        <div>
          <h4>2.1.3 AI辅助教学获奖2项</h4>
          <div className="image-container">
            <h5>
              1.
              AI助教“西小理”-AI教育智能体设计与创新应用人工智能应用能力大赛二等奖
            </h5>
            <img src={a1}></img>
            <h5>
              2.
              优化建模问答系统-AI教育智能体设计与创新应用人工智能应用能力大赛二等奖
            </h5>
            <img src={a2}></img>
          </div>
        </div>
      </div>

      {/* 2.2 教学成果及应用证明材料 */}
      <div className="content-section">
        <h3>2.2教学成果及应用证明材料</h3>
        <div>
          <h4>2.2.1 成果鉴定书</h4>
          <div className="image-container">
            <img src={c1} alt="成果鉴定书"></img>
            <img src={c2} alt="成果鉴定书"></img>
          </div>
          <h4>2.2.2 3门优质课程、5部教材</h4>
          <div className="image-container">
            <h5>1. 3门优质课程</h5>
            <p>
              2018年研究生院《研究生优质课程及教改教研项目》批准了《最优化理论与方法》、《数值分析》和《应用统计》3门优质课程建设，于2020年通过中期检查，2022年成功结题。
            </p>
            <img src={j1} alt="1"></img>
            <img src={j2} alt="2"></img>
            <h5>2. 5部教材</h5>
            <p>经学校资助理学院已完成5部高等院校研究生规划教材。</p>
            <h2>
              （1）《最优化方法及应用案例》教材
              <br />
              该教材目前由四川省教育厅推荐参评全国优秀教材
            </h2>
            <img src={book1} alt="1"></img>
            <img src={book2} alt="2"></img>
            <img src={book3} alt="3"></img>
            <img src={book4} alt="4"></img>
            <img src={book5} alt="5"></img>
            <img src={book6} alt="6"></img>
            <h4>重庆国家应用数学中心主任杨新民教授评价最优化教材</h4>

            <img src={book7} alt="7"></img>

            <h4>中国工程院院士孙金声教授评价最优化教材</h4>
            <img src={book8} alt="8"></img>
            <h4>该教材参评全国优秀教材专家和省级教育行政部门意见</h4>
            <img src={book9} alt="9"></img>
            <img src={book10} alt="10"></img>
            <img src={book11} alt="11"></img>
            <h2>（2）《高等数值计算方法》教材</h2>
            <img src={book12} alt="12"></img>
            <img src={book13} alt="13"></img>
            <img src={book14} alt="14"></img>
            <img src={book15} alt="15"></img>
            <h2>（3）《泛函分析基础》教材</h2>
            <img src={book16} alt="16"></img>
            <img src={book17} alt="17"></img>
            <img src={book18} alt="18"></img>
            <img src={book19} alt="19"></img>
            <h2>（4）《工程数学模型及数值计算方法》教材</h2>
            <img src={book20} alt="20"></img>
            <img src={book21} alt="21"></img>
            <img src={book22} alt="22"></img>
            <img src={book23} alt="23"></img>
            <h2>（5）《应用数值分析》教材</h2>
            <img src={book24} alt="24"></img>
            <img src={book25} alt="25"></img>
            <img src={book26} alt="26"></img>
            <img src={book27} alt="27"></img>
            <img src={book28} alt="28"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
