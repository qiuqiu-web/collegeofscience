import React from "react";
import "./PageTemplate.css";
import "./Application.css";
import biaoge1 from "./biaoge1";
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
// 公式图片导入
import formula1 from "../images/公式1.png";
import formula2 from "../images/公式2.png";
import formula3 from "../images/公式3.png";
import formula4 from "../images/公式4.png";
import formula5 from "../images/公式5.png";
import formula6 from "../images/公式6.png";
import formula7 from "../images/公式7.png";
// 变量图片导入
import variable0 from "../images/变量0.png";
import variable1 from "../images/变量1.png";
import variable2 from "../images/变量2.png";
import variable3 from "../images/变量3.png";
import variable4 from "../images/变量4.png";
import variable5 from "../images/变量5.png";
import variable6 from "../images/变量6.png";
import variable7 from "../images/变量7.png";
import variable8 from "../images/变量8.png";
import variable9 from "../images/变量9.png";
import variable10 from "../images/变量10.png";
import variable11 from "../images/变量11.png";
import variable12 from "../images/变量12.png";
import variable13 from "../images/变量13.png";
import variable14 from "../images/变量14.png";
import variable15 from "../images/变量15.png";
import variable16 from "../images/变量16.png";
import variable17 from "../images/变量17.png";
import variable18 from "../images/变量18.png";
import variable19 from "../images/变量19.png";
import variable20 from "../images/变量20.png";
import variable21 from "../images/变量21.png";
import variable22 from "../images/变量22.png";
import variable23 from "../images/变量23.png";
import variable24 from "../images/变量24.png";
import variable25 from "../images/变量25.png";
import variable26 from "../images/变量26.png";
import variable27 from "../images/变量27.png";
import variable28 from "../images/变量28.png";
import variable29 from "../images/变量29.png";
import variable30 from "../images/变量30.png";
import variable31 from "../images/变量31.png";
import variable32 from "../images/变量32.png";
import variable33 from "../images/变量33.png";
import variable34 from "../images/变量34.png";
import variable35 from "../images/变量35.png";
import variable36 from "../images/变量36.png";
import variable37 from "../images/变量37.png";
import variable38 from "../images/变量38.png";
// 新增公式图片导入
import formula8 from "../images/公式8.png";
import formula9 from "../images/公式9.png";
import formula10 from "../images/公式10.png";
import formula11 from "../images/公式11.png";
import formula12 from "../images/公式12.png";
import formula13 from "../images/公式13.png";
import formula14 from "../images/公式14.png";
import formula15 from "../images/公式15.png";
import formula16 from "../images/公式16.png";
import formula17 from "../images/公式17.png";
import formula18 from "../images/公式18.png";
import formula19 from "../images/公式19.png";
import formula20 from "../images/公式20.png";
import formula21 from "../images/公式21.png";
import formula22 from "../images/公式22.png";
import formula23 from "../images/公式23.png";
import formula24 from "../images/公式24.png";
import formula25 from "../images/公式25.png";
import formula26 from "../images/公式26.png";
import formula27 from "../images/公式27.png";
import formula28 from "../images/公式28.png";
import formula29 from "../images/公式29.png";
import formula30 from "../images/公式30.png";
import tu1 from "../images/图1.png";
//钻头相关图片
import bg1 from "../images/表格1.png";
import bg2 from "../images/表格2.png";
import bg3 from "../images/表格3.png";
import bg4 from "../images/表格4.png";
import bg5 from "../images/表格5.png";
import bg6 from "../images/表格6.png";
import z1 from "../images/钻头1.png";
import z2 from "../images/钻头2.png";
import z3 from "../images/钻头3.png";
import z4 from "../images/钻头4.png";
import z5 from "../images/钻头5.png";
//2.2.3.7中的公式变量图片
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import v1 from "../images/v1.png";
import v2 from "../images/v2.png";
import v3 from "../images/v3.png";
import v4 from "../images/v4.png";
import v5 from "../images/v5.png";
import v6 from "../images/v6.png";
import v7 from "../images/v7.png";
import v8 from "../images/v8.png";
import v9 from "../images/v9.png";
import v10 from "../images/v10.png";
import v11 from "../images/v11.png";
// 继续添加新的变量和公式图片
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";
import p10 from "../images/p10.png";
import p11 from "../images/p11.png";
import p12 from "../images/p12.png";
import p13 from "../images/p13.png";

import x1 from "../images/x1.png";
import x2 from "../images/x2.png";
import x3 from "../images/x3.png";
import x4 from "../images/x4.png";
import x5 from "../images/x5.png";
import x6 from "../images/x6.png";
import x7 from "../images/x7.png";
import x8 from "../images/x8.png";
import x9 from "../images/x9.png";
import x10 from "../images/x10.png";
import x11 from "../images/x11.png";
import x12 from "../images/x12.png";
import x13 from "../images/x13.png";
import x14 from "../images/x14.png";
import p14 from "../images/p14.png";
import p15 from "../images/p15.png";
import p16 from "../images/p16.png";
import x15 from "../images/x15.png";
import x16 from "../images/x16.png";
import x17 from "../images/x17.png";
import x18 from "../images/x18.png";
import x19 from "../images/x19.png";
import x20 from "../images/x20.png";
import x21 from "../images/x21.png";
import p17 from "../images/p17.png";
import p18 from "../images/p18.png";
import p19 from "../images/p19.png";
import p20 from "../images/p20.png";
import p21 from "../images/p21.png";
import p22 from "../images/p22.png";
import p23 from "../images/p23.png";
import p24 from "../images/p24.png";
import p25 from "../images/p25.png";
import p26 from "../images/p26.png";
import p27 from "../images/p27.png";
import x22 from "../images/x22.png";
import x23 from "../images/x23.png";
import x24 from "../images/x24.png";
import x25 from "../images/x25.png";
import x26 from "../images/x26.png";
import x27 from "../images/x27.png";
import x28 from "../images/x28.png";
import x29 from "../images/x29.png";
import x30 from "../images/x30.png";
import x31 from "../images/x31.png";
import x32 from "../images/x32.png";
import x33 from "../images/x33.png";
import x34 from "../images/x34.png";
import x35 from "../images/x35.png";
import x36 from "../images/x36.png";
import x37 from "../images/x37.png";
// import x38 from "../images/x38.png";
// import x39 from "../images/x39.png";
// import x40 from "../images/x40.png";
// import x41 from "../images/x41.png";
// import x42 from "../images/x42.png";
// import x43 from "../images/x43.png";
// import x44 from "../images/x44.png";
// import x45 from "../images/x45.png";
// import x46 from "../images/x46.png";
// import x47 from "../images/x47.png";
import p28 from "../images/p28.png";
import p29 from "../images/p29.png";
import p30 from "../images/p30.png";
import p31 from "../images/p31.png";
import p32 from "../images/p32.png";
import p33 from "../images/p33.png";
import p34 from "../images/p34.png";
import p35 from "../images/p35.png";
import p36 from "../images/p36.png";
import p37 from "../images/p37.png";
import p38 from "../images/p38.png";
import p39 from "../images/p39.png";
import p40 from "../images/p40.png";
import p411 from "../images/p41(1).png";
import p412 from "../images/p41（2）.png";
import p42 from "../images/p42.png";
import p43 from "../images/p43.png";
import p44 from "../images/p44.png";
import p45 from "../images/p45.png";
import p46 from "../images/p46.png";
import p47 from "../images/p47.png";
import p48 from "../images/p48.png";
import p49 from "../images/p49.png";
import p50 from "../images/p50.png";
import p51 from "../images/p51.png";
import p52 from "../images/p52.png";
import p53 from "../images/p53.png";
import p54 from "../images/p54.png";
import p55 from "../images/p55.png";
import p56 from "../images/p56.png";
import p57 from "../images/p57.png";
import p58 from "../images/p58.png";
import p59 from "../images/p59.png";
// import x37 from "../images/x37.png";
import x38 from "../images/x38.png";
import x39 from "../images/x39.png";
import x40 from "../images/x40.png";
import x41 from "../images/x41.png";
import x42 from "../images/x42.png";
import x43 from "../images/x43.png";
import x44 from "../images/x44.png";
import x45 from "../images/x45.png";
import p60 from "../images/p60.png";
import p61 from "../images/p61.png";
import p62 from "../images/p62.png";
import p63 from "../images/p63.png";
import p64 from "../images/p64.png";
import p65 from "../images/p65.png";
import p66 from "../images/p66.png";
//2.2.5-2.2.8的图片
import y1 from "../images/y1.png";
import y2 from "../images/y2.png";
import y3 from "../images/y3.png";
import y4 from "../images/y4.png";
import y5 from "../images/y5.png";
import y6 from "../images/y6.png";
import y7 from "../images/y7.png";
import y8 from "../images/y8.png";
import y9 from "../images/y9.png";
import y10 from "../images/y10.png";
import y11 from "../images/y11.png";
import y12 from "../images/y12.png";
import y13 from "../images/y13.png";
import y14 from "../images/y14.png";
import y15 from "../images/y15.png";
import y16 from "../images/y16.png";
//最后十五张图片
import cg1 from "../images/成果1.png";
import cg2 from "../images/成果2.png";
import cg3 from "../images/成果3.png";
import cg4 from "../images/成果4.png";
import cg5 from "../images/成果5.png";
import cg6 from "../images/成果6.png";
import cg7 from "../images/成果7.png";
import cg8 from "../images/成果8.png";
import cg9 from "../images/成果9.png";
import cg10 from "../images/成果10.png";
import cg11 from "../images/成果11.png";
import cg12 from "../images/成果12.png";
import cg13 from "../images/成果13.png";
import cg14 from "../images/成果14.png";
import cg15 from "../images/成果15.png";

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
      {/* 2.2.3开始 */}
      <div>
        <h4>2.2.3 应用案例库（部分）</h4>
        <h5>2.2.3.1 油藏数值模拟的线性求解算法</h5>
        <p>
          油藏数值模拟起源于20世纪50年代,它是定量描述非均质储油地层中多相流体流动规律的工具，在油藏管理、动态预测、二次开采、井位部署、方案调整等方面起着非常重要的作用.
          随着油藏描述技术的不断进步，大量的地震、地质、测井、动态油藏数据可供油藏工程师用来建立越来越精细的数值模型.
          目前，大型油田的油藏数值模拟釆用的水平方向网格尺寸多为100m量级，而高分辨率的油藏数值模拟的网格尺寸需要25m甚至更小，这就需要模拟计算千万以上量级网格单元的模型，对现有模拟器是一个巨大的挑战.
          油藏数值模拟过程中通常需要求解大规模的线性代数方程组.
          在全隐式离散方法中线性方程组的求解时间通常占到模拟时间的80%以上.
          由于离散方程的条件数与网格尺寸有关，网格尺寸越小矩阵条件数越坏，线性方程组的求解难度也越大.
          模拟千万量级模型对线性求解算法及其软件模块的性能提出了较高的要求.
        </p>
      </div>
      <div>
        <h5>2.2.3.2 黑油模型及其离散</h5>
        <p>
          黑油模型的偏微分方程组具有高度非线性和强耦合性，常釆用全隐式方法进行求解，其中需要求解大规模、非对称、强耦合的雅可比方程组.
          Krylov子空间方法,如广义最小残量法(GMRES)、双共轭梯度法(BiCGstab)等，是求解这类方程组的常用方法.
          但直接应用这些方法一般收敛较慢，必须使用合适的预条件子来进行加速.
          研究人员针对黑油模型的求解进行了大量尝试，并提出了很多求解算法:一类是基于矩阵分解的整体型预条件子,如ILU、嵌套分解等；另一类是多阶段预条件算法,如组合型预条件子、约束残量预条件子(CPR)等.
          老一代油藏数值模拟器中常用矩阵分解型预条件子,但这类方法在求解大规模问题时速度较慢。本案例介绍了一种适用于超大规模精细油藏全隐式模拟的稳健、高效的雅可比方程求解算法。研究人员提出了一种分裂型预条件子，其中的左预条件子釆用工程界常用的ABF解耦方法，ABF方法能有效地减弱不同物理量之间的耦合关系，极大地改善雅可比矩阵的特征值分布。然后，根据
          ABF
          解耦后雅可比矩阵的特点,有针对性地设计了一种多阶段子空间校正右预条件子.
          为了测试该分裂型预条件子的高效性和稳健性，研究人员在台式机上进行了数十万至千万网格节点算例的模拟计算，并通过一个实际油田模型验证了精细模拟的重大实际价值.
        </p>
        <p>
          油藏多孔介质中的多相渗流一般包含油、气、水三相三组分流体的流动，在流动过程中会发生油气两相之间的质量交换.黑油模型给出了水、油、气三种组分的质量守恒方程:
        </p>
        <div className="formulas-container">
          <div className="formula-item">
            <p>水相质量守恒方程：</p>
            <div className="formula-with-number">
              <img src={formula1} alt="公式1 - 水相质量守恒方程"></img>
              <span className="formula-number">(1.1)</span>
            </div>
          </div>

          <div className="formula-item">
            <p>油相质量守恒方程：</p>
            <div className="formula-with-number">
              <img src={formula2} alt="公式2 - 油相质量守恒方程"></img>
              <span className="formula-number">(1.2)</span>
            </div>
          </div>

          <div className="formula-item">
            <p>气相质量守恒方程：</p>
            <div className="formula-with-number">
              <img src={formula3} alt="公式3 - 气相质量守恒方程"></img>
              <span className="formula-number">(1.3)</span>
            </div>
          </div>

          <div className="formula-item">
            <p>假设多孔介质中流体运动遵循达西定律：</p>
            <div className="formula-with-number">
              <img src={formula4} alt="公式4 - 达西定律"></img>
            </div>
          </div>

          <div className="formula-item">
            <p>另外，这些变量之间还满足如下本构关系：</p>
            <div className="formula-with-number">
              <img src={formula5} alt="公式5 - 饱和度约束"></img>
              {/* <span className="formula-number">(1.5)</span> */}
            </div>
          </div>

          <div className="formula-item">
            <div className="formula-with-number">
              <img src={formula6} alt="公式6 - 毛管压力关系"></img>
              {/* <span className="formula-number">(1.6)</span> */}
            </div>
          </div>
        </div>
        <p>
          油藏数值模拟中边界条件分为外边界条件和内边界条件两大类，其中外边界条件指油藏流体在外边界所处的状态，内边界条件是指生产井或注入井所处的状态。外边界条件主要有给定油藏边界区域压力或者给定油藏区域边界流量两种，内边界条件则分为给定井产量(产油量或产液量)或者给定井筒底部压力。在实际问题中，内边界条件一般比较复杂并常随时间发生变化，在这里不加详述。
        </p>
        <p>
          该案例只考虑采用全隐式方法对黑油模型方程(1.1)-(1.3)进行离散(Newton
          线性化，时间上采用一阶向后欧拉格式，空间上采用网格块中心有限体积格式)，离散过程中将
          <img src={variable0} alt="J_RW" className="inline-math" />
          作为主变量。全隐式离散后所得到的雅克比线性代数系统如下：
        </p>
        <div className="equation-container">
          <img src={formula7} alt="公式7 - 雅可比线性系统"></img>
          <span className="formula-number">(1.4)</span>
        </div>
        <p>
          其中
          <img src={variable1} alt="J_RR" className="inline-math" />
          为模型方程对油藏变量的导数的系数，
          <img src={variable2} alt="J_RW" className="inline-math" />
          为油藏方程对井变量的导数，
          <img src={variable3} alt="J_WR" className="inline-math" />
          为井方程对油藏变量的导数的系数，
          <img src={variable4} alt="J_WW" className="inline-math" />
          为井方程对井变量的导数的系数。
        </p>
        <p>
          一般来说，井方程和油藏方程的特点截然不同，将它们耦合在一起求解可能会破坏雅克比矩阵的一些性质，可以将(1.4)中井方程和油藏方程分开单独进行预条件，本案例只讨论油藏部分线性代数系统的求解。
        </p>
        <h4>模型的快速求解算法</h4>
        <p>根据雅克比系统(1.4)，我们可以得到对应油藏变量的子系统</p>
        <div className="equation-container">
          <img src={formula8} alt="公式8 - 油藏变量子系统"></img>
          <span className="formula-number">(1.5)</span>
        </div>
        <p>
          其中
          <img src={variable1} alt="J_RR" className="inline-math" />
          可展开成如下形式
        </p>
        <div className="equation-container">
          <img src={formula9} alt="公式9 - J_RR展开形式"></img>
        </div>
        <p>
          这里
          <img src={variable5} alt="J_PP" className="inline-math" />
          对应压力块，
          <img src={variable6} alt="J_S_aS_a" className="inline-math" />
          对应饱和度块，
          <img src={variable7} alt="J_P_aS_a" className="inline-math" />和
          <img src={variable8} alt="J_S_aP_a" className="inline-math" />
          对应着压力变量和饱和度变量间的耦合，
          <img src={formula10} alt="alpha=o,w" className="inline-math" />
          ，为了讨论的方便，我们将油藏子系统(1.5)简记为
        </p>
        <div className="equation-container">
          <img src={formula11} alt="公式11 - 简化记法"></img>
          <span className="formula-number">(1.6)</span>
        </div>
        <p>
          经全隐式离散得到的子系统的系数矩阵通常规模大、非对称性强、条件数坏。Krylov子空间方法(KSM)对这类问题一般收敛很慢，因此通常会先对线性代数系统做预条件处理，转而求解一个较容易求解的等价代数系统，理想的预条件方法能使预处理后的矩阵条件数远小于原矩阵的条件数或者使预处理后矩阵的特征值分布变集中，同时具备较低的算子复杂度及内存复杂度，我们将针对线性代数系统设计一种分裂型预条件子，即形为
        </p>
        <div className="equation-container">
          <img src={formula12} alt="公式12 - 预条件代数系统"></img>
          <span className="formula-number">(1.7)</span>
        </div>
        <p>的预条件代数系统。</p>
        <h5>
          左预条件子
          <img src={variable9} alt="P_L^{-1}" className="inline-math" />
          的构造
        </h5>
        <p>
          在全隐式模拟中，
          <img src={variable10} alt="P_L^{-1}" className="inline-math" />
          通常可以弱化不同物理量之间的耦合关系，因此称之为解耦预条件子，块交错分解(ABF)方法最早由Bank等在1989年提出，用来削弱半导体模型中的漂移-扩散方程的物理变量间的耦合关系，1997年，Klie
          将这种方法应用到油藏数值模拟中，方程(2.45)经ABF解耦预条件作用后，即
        </p>
        <div className="equation-container">
          <img src={formula13} alt="公式13 - ABF解耦后"></img>
          <p>或</p>
          <img src={formula14} alt="公式14 - ABF解耦后"></img>
        </div>
        <p>其中</p>
        <div className="equation-container">
          <img src={formula15} alt="公式15 - ABF解耦后"></img>
        </div>
        <p>
          可以验证，
          <img src={variable11} alt="J_RR" className="inline-math" />
          中非对角块阵的对角元都为0，实际上也就是说，ABF方法削弱了压力和饱和度变量间的耦合关系。而且，数值实验发现ABF解耦对雅克比矩阵的特征值起到了很好的聚集作用——绝大多数特征值分布在1.0附近，这大大改善了KSM方法的收敛性。注意，上述形式的
          <img src={variable12} alt="P_L^{-1}" className="inline-math" />
          仅为了描述的方便，在代码实现过程中，自由度一般按照网格单元序来排列，经全隐式离散得到的雅克比矩阵
          <img src={variable13} alt="J_RR" className="inline-math" />
          的元素均是
          <img src={variable14} alt="J_RR" className="inline-math" />
          的子块，这时
          <img src={variable15} alt="J_RR" className="inline-math" />
          其中
          <img src={variable16} alt="J_RR" className="inline-math" />，
          <img src={variable17} alt="J_RR" className="inline-math" />
          为网格单元数。计算
          <img src={variable18} alt="J_RR" className="inline-math" />
          只需将每个
          <img src={variable19} alt="J_RR" className="inline-math" />
          子块单独求逆即可。
        </p>
        <h5>
          右预条件子
          <img src={variable20} alt="P_R^{-1}" className="inline-math" />
          的构造
        </h5>
        <p>
          模型方程(1.1)-(1.3)的不同物理变量具有不同的解析特性：压力方程表现出椭圆性，饱和度方程主要表现出双曲性。椭圆型方程通常体现的是一种全局性，而双曲型方程一般具有局部性，这使得雅克比矩阵的不同子块也具有不同的代数性质。因此，我们针对不同性质的方程分别采用对应的解法是一种比较合理的思路。
        </p>
        <p>
          基于上述认识及子空间校正的思想，根据ABF预条件后得到的代数系统的特性(压力和饱和度变量局部解耦、饱和度变量之间也局部解耦)，我们首先在饱和度子空间用块高斯赛德尔(BGS)方法对饱和度方程进行一次近似求解，消除饱和度部分的高频误差部分。由于渗透率的强间断性导致压力方程是带强间断系数的椭圆方程，针对带间断系数的二阶椭圆型问题，Xu和Zhu从理论上证明了多层网格(MG)预条件的共轴梯度法的一致收敛性，即收敛速度与网格尺寸及系数跳跃的大小都无关，而直接应用MG作为迭代法却没有一致收敛性。受此启发，我们采用代数多层网格(AMG)预条件GMRES方法来近似求解上述压力方程代数系统。最后，我们在全空间再进行一次全局BGS求解。上述三阶段子空间校正方法的算法如下：
        </p>
        <ol className="algorithm-steps">
          <li>对饱和度方程进行一次(块)高斯磨光;</li>
          <li>利用 AMG 预条件 GMRES 方法对压力方程进行求解至一个固定精度;</li>
          <li>对雅可比方程进行一次整体块高斯磨光.</li>
        </ol>
        <p>
          在Step1和Step3中，我们采用顺风排序来提高BGS的稳定性。由于油藏中的流体是从压力高的网格单元流向压力低的单元，我们按照前一时间层计算出来的压力值大小，对磨光进行排序。在该序下，饱和度矩阵接近下三角阵，BGS可变得更加高效。在Step2中，为了减少内存使用量并降低算法的计算复杂度，将GMRES最大迭代次数设为一个较小的值，在案例的所有数值实验中我们将其设为15，且将压力方程的相对残量范数降到0.1时即停止。由于Step2中使用的AMG预条件GMRES方法是一个迭代法，所以多阶段预条件方法(算法1)是非线性的，因此外层迭代使用Flexible
          GMRES方法。针对目前油藏数值模拟主要在PC机或台式工作站环境上完成的现状，由于GMRES类方法的内存消耗量基本由重启回头数(restart
          number)决定，所以采用动态重启技术减少内存使用量。
        </p>
        <h5>2.2.3.2 压裂液滤失系数模型</h5>
        <p>
          水力压裂（Hydraulic
          fracturing）是人们利用地面高压泵组，以超过地层吸收能力的排量将高粘压裂液泵入井内而在井内憋起高压，当该压力克服井壁附近地应力并达到岩石抗张强度，就在地层产生裂缝。继续注入带有支撑剂的混砂液，使裂缝继续延伸并在其中充填支撑剂。停泵后，由于支撑剂对裂缝的支撑作用，在地层中形成足够长的、有一定导流能力的填砂裂缝，从而实现油气井增产和注水井增注。
        </p>
        <p>
          在压裂中，压裂液沿裂缝向地层滤失。一般认为，这种滤失受三种机理的控制即滤液粘度、地层流体的压缩性和压裂液的造壁性。压裂液滤失量的多少常以滤失系数的大小来表示。在计算受地层流体压缩性控制的滤失系数时，可导出下面的方程：
        </p>
        <div className="equation-container">
          <img src={formula16} alt="公式16 - 压裂液滤失系数模型"></img>
          <span className="formula-number">(2.1)</span>
        </div>
        <p>
          <img src={variable21} alt="p(x,t)" className="inline-math" />
          为点x在t时刻的压力，
          <img src={variable22} alt="p_i" className="inline-math" />
          为原始地层压力，
          <img src={variable23} alt="η" className="inline-math" />
          为地层扩散系数。
        </p>
        <p>利用拉普拉斯变换可以求得该问题的精确解是：</p>
        <div className="equation-container">
          <img src={formula17} alt="公式17 - 拉普拉斯变换解"></img>
          <img src={formula18} alt="公式18 - 拉普拉斯变换解"></img>
          <span className="formula-number">(2.2)</span>
        </div>
        <p>
          其中
          <img src={variable24} alt="erfc(x)" className="inline-math" />
          为余误差函数，
          <img src={variable25} alt="erf(x)" className="inline-math" />
          为误差函数：
        </p>
        <div className="equation-container">
          <img src={formula19} alt="公式19 - 误差函数定义"></img>
          <span className="formula-number">(2.3)</span>
        </div>
        <h5>2.2.3.3 单相渗流的连续性方程</h5>
        <p>
          油气渗流必须遵循质量守恒定律（又称连续性原理）。该原理可表述为：对于地层中无源无汇的微小单元体，在其封闭表面内流体质量的变化量等于给定时间间隔内流入与流出该封闭表面的流体质量之差。根据这一原理建立的方程称为质量守恒方程或连续性方程。
        </p>
        {/* <p>连续性方程表达了运动要素（速度、密度、饱和度、浓度等）与时间和坐标变化的关系。</p> */}
        {/* <p>采用微分单元分析法建立质量守恒方程。在地层中取一微小六面体单元，设单元体内<img src={variable23} alt="M(x,y,z)" className="inline-math" />点处沿各坐标轴的质量速度分量分别为<img src={variable24} alt="ρv_x" className="inline-math" />、<img src={variable25} alt="ρv_y" className="inline-math" />、<img src={variable21} alt="ρv_z" className="inline-math" />。</p> */}
        <p>
          连续性方程的表现形式是给出运动要素（速度、密度、饱和度、浓度）随时间和坐标变化关系.
        </p>
        <div className="equation-container">
          <img src={formula20} alt="公式20 - 连续性方程"></img>
          {/* <span className="formula-number">(2.4)</span> */}
        </div>
        <p>
          下面利用微元分析法来建立质量守恒方程.在地层中取微小六面体单元，单元体中
          <img src={variable26} alt="M(x,y,z)" className="inline-math" />
          <img src={variable27} alt="M(x,y,z)" className="inline-math" />
          点质量速度在各坐标轴上分量为
          <img src={variable28} alt="ρv_x" className="inline-math" />、
          <img src={variable29} alt="ρv_y" className="inline-math" />、
          <img src={variable30} alt="ρv_z" className="inline-math" />.
        </p>
        <p>
          注意到点
          <img src={variable31} alt="M'" className="inline-math" />{" "}
          <img
            src={variable32}
            alt="(x - dx/2, y, z)"
            className="inline-math"
          />
          ，点
          <img src={variable33} alt="M''" className="inline-math" />{" "}
          <img
            src={variable34}
            alt="(x + dx/2, y, z)"
            className="inline-math"
          />
          ，
        </p>
        <p>
          故点
          <img src={variable31} alt="M'" className="inline-math" />
          的质量速度为
        </p>
        <div className="equation-container">
          <img src={formula21} alt="公式21 - M'点质量速度"></img>
        </div>
        <p>
          点<img src={variable33} alt="M''" className="inline-math" />
          的质量速度为
        </p>
        <div className="equation-container">
          <img src={formula22} alt="公式22 - M''点质量速度"></img>
        </div>
        <p>
          从而在
          <img src={variable35} alt="dt" className="inline-math" />
          时间内，沿
          <img src={variable36} alt="x" className="inline-math" />
          方向流入和流出单元体内的流体质量分别为
        </p>
        <div className="equation-container">
          <img src={formula23} alt="公式23 - x方向流入质量"></img>
        </div>
        <p>和</p>
        <div className="equation-container">
          <img src={formula24} alt="公式24 - x方向流出质量"></img>
        </div>
        <p>
          从而在
          <img src={variable35} alt="dt" className="inline-math" />
          时间内，沿
          <img src={variable36} alt="x" className="inline-math" />
          方向流入和流出的流体质量差为
        </p>
        <div className="equation-container">
          <img src={formula25} alt="公式25 - x方向质量差"></img>
        </div>
        <p>
          同理在
          <img src={variable35} alt="dt" className="inline-math" />
          时间内，沿
          <img src={variable37} alt="y" className="inline-math" />、
          <img src={variable38} alt="z" className="inline-math" />
          方向流入和流出的流体质量差为
        </p>
        <div className="equation-container">
          <img src={formula26} alt="公式26 - y方向质量差"></img>
        </div>
        <p>和</p>
        <div className="equation-container">
          <img src={formula27} alt="公式27 - z方向质量差"></img>
        </div>
        <p>
          在<img src={variable35} alt="dt" className="inline-math" />
          时间内，六面体内流入和流出的总的流体质量差为
        </p>
        <div className="equation-container">
          <img src={formula28} alt="公式28 - 总质量差"></img>
          <img src={formula29} alt="公式29 - 孔隙体积"></img>
          <img src={formula30} alt="公式30 - 流体质量"></img>
        </div>
        <p>
          经过六面体流入和流出的质量之所以会不一样，是因为在六面体内岩石和液体弹性能量的作用下，释放或储存一部分质量的结果（岩石的弹性表现为孔隙度的变化，液体弹性表现为液体密度的变化）。六面体内的质量变化应为：
        </p>
        <p>
          六面体内的孔隙体积：
          <img src={variable38} alt="φdxdydz" className="inline-math" />
        </p>

        <p>
          六面体内的流体质量：
          <img src={p1} alt="ρφdxdydz" className="inline-math" />
        </p>
        <p>
          单位时间内流体质量变化率：
          <img src={p2} alt="ρφdxdydz" className="inline-math" />
        </p>
        <p>
          <img src={variable35} alt="dt" className="inline-math" />
          时间内流体质量总的变化为：
          <img src={p3} alt="ρφdxdydz" className="inline-math" />
        </p>
        <p>
          显然，
          <img src={variable35} alt="dt" className="inline-math" />
          时间内六面体质量总的变化应等于六面体在
          <img src={variable35} alt="dt" className="inline-math" />
          时间内流入和流出的质量差，即：
        </p>

        <div className="equation-container">
          <img src={x1} alt="公式31 - 质量守恒方程"></img>
        </div>

        <p>
          消去
          <img src={p4} alt="φdxdydz" className="inline-math" />
          得到连续性方程：
        </p>
        <div className="equation-container">
          <img src={x2} alt="公式31 - 质量守恒方程"></img>
        </div>
        <p>上式还可以写成：</p>
        <div className="equation-container">
          <img src={x3} alt="公式32 - 连续性方程"></img>
        </div>

        <p>上式就是单相均质可压缩流体在弹性孔隙介质中的质量守恒方程.</p>

        <p>
          如果再利用流体的运动方程以及岩石和流体的状态方程可以演算得到如下线性三维抛物型方程
        </p>

        <div className="equation-container">
          <img src={x4} alt="公式33 - 单相渗流连续性方程"></img>
        </div>

        <p>
          上式就是弹性孔隙介质单相可压缩液体的渗流数学模型，其中表示导压系数.
        </p>
        <p>
          除了单相渗流之外，还可以考虑油水两相渗流和油气两相渗流问题，在不考虑毛管力的情况下，和上面类似的方法可以导出两相渗流的质量守恒方程
        </p>
        <div className="equation-container">
          <img src={x5} alt="公式34 - 线性抛物型方程"></img>
          <img src={x6} alt="η = k/(φμc_t)" className="inline-math" />
        </div>
        <p>如果再利用两相的运动方程</p>

        <div className="equation-container">
          <img src={x7} alt="x7"></img>
          <img src={x8} alt="x8" className="inline-math" />
        </div>

        <p>可以得到</p>

        <div className="equation-container">
          <img src={x9} alt="油相质量守恒方程"></img>
        </div>

        <div className="equation-container">
          <img src={x10} alt="水相质量守恒方程"></img>
        </div>

        <p>
          其中
          <img src={p5} alt="K_o(S)" className="inline-math" />和
          <img src={p6} alt="K_w(S)" className="inline-math" />
          分别表示油和水的相渗透率，
          <img src={p7} alt="S" className="inline-math" />
          为饱和度。
        </p>

        <p>
          如果考虑毛管力，将会得到一个复杂的二阶非线性偏微分方程，这种方程只在某些简单情况下才有精确解。
        </p>

        <h5>2.2.3.4 钻具故障概率分析</h5>

        <p>
          钻具是钻井作业中不可缺少的工具，复杂的地质条件、恶劣的井下环境、复合应力以及现场使用等因素都可能导致钻具失效。钻具失效模式主要有表面损伤、过度变形、钻具泄漏和断裂等。
        </p>

        <p>
          深地川科1井使用新型钻具，专家分析给出以下概率：钻具疲劳工作的概率为0.03，在疲劳工作条件下发生疲劳断裂的概率为0.9；钻具过载工作的概率为0.04，在过载工作条件下发生疲劳断裂的概率为0.85；井下为硫化氢超标环境的概率为0.05，在硫化氢超标环境下发生氢脆断裂的概率为0.8。试分析：
        </p>

        <p>(1) 该新型钻具在使用过程中发生失效的概率是多少？</p>

        <p>(2) 如果已经发生失效，最可能的原因是什么？</p>

        <h5>解</h5>

        <p>
          设A表示钻具失效，
          <img src={p13} alt="B_i (i=1,2,3)" className="inline-math" />
          分别表示钻具疲劳工作、过载工作和井下为硫化氢超标环境，由题意可得：
        </p>

        <div className="equation-container">
          <img src={p10} alt="概率条件1"></img>
        </div>

        <div className="equation-container">
          <img src={p11} alt="概率条件2"></img>
        </div>

        <p>(1) 由全概率公式可得，</p>

        <div className="equation-container">
          <img src={p12} alt="全概率公式计算"></img>
        </div>

        <p>(2) 由贝叶斯公式可得，</p>

        <div className="equation-container">
          <img src={x11} alt="贝叶斯公式计算1"></img>
        </div>

        <div className="equation-container">
          <img src={x12} alt="贝叶斯公式计算2"></img>
        </div>

        <div className="equation-container">
          <img src={x13} alt="贝叶斯公式计算3"></img>
        </div>

        <p>
          故在本例中该新型钻具使用过程中引发失效故障的概率是0.101，且如果已经引发了失效故障，最有可能是井下环境硫化氢超标引起的。
        </p>

        <h5>2.2.3.5 勘探甜点区分析的概率问题</h5>

        <p>
          在油气勘探中，识别"甜点"区是十分重要的。"甜点"区是指储层分布有利、含油较丰富、物性较好、易于改造的有利储层分布区。假设某区块面积为40km×40km，20km×20km"甜点"区位于中心位置，问如果随意在该区域布置10口测试井，恰有8口井打在"甜点"区的概率是多少？
        </p>

        <h5>解</h5>

        <p>
          设A表示一口井可打到"甜点"区，则
          <img
            src={p14}
            alt="P(A) = 20×20 / 40×40 = 1/4"
            className="inline-math"
          />
          。10口井中任意一口井能打在"甜点"区的概率都是1/4，未打在"甜点"区的概率是3/4，根据独立性，这是一个10重的伯努利试验，从而B="至少有一口没有打在"甜点"区"的概率为
        </p>

        <div className="equation-container">
          <img src={x13} alt="伯努利试验概率计算"></img>
        </div>

        <h5>2.2.3.6 钻头选择方法</h5>

        <p>
          在钻井行业中，钻头选择的研究和实践由来已久。不同的地质层位需要不同的钻头。钻头选择主要有两种思路：一是根据岩石的力学性质选择与之匹配的钻头；二是根据历史钻井数据，评价钻头在特定区域和层位的使用效果，找出适合的钻头。这种双思路的方法已被钻井界广泛接受。
        </p>

        {/* 。。。。。。。。55页开始。。。。。。。。 */}
        <h3>钻头选型方法</h3>
        <p>
          近年来，国内外许多学者以利用测井资料计算岩石力学参数这一思想为基础，提出了许多新的方法来求取岩石的可钻性和其它的力学参数.其过程如图4-2所示.
        </p>
        <div className="image-container">
          <img src={z1}></img>
          <p>图4-2 声波时差法</p>
          <img src={z2}></img>
          <p>图4-3 钻头选型指标体系</p>
        </div>
        <p>
          根据调研的情况，结合锦58区具体的井史数据、录井数据、测井数据，并利用相关系数分析法、灰色关联度分析法建立的指标体系如下图4-3.
        </p>
        <h3>实例应用</h3>
        <p>
          本研究以某一段井深为例做钻头选型分析。首先根据地质信息表中的岩性描述，我们选取浅棕灰色细砂岩、棕红色泥岩、棕褐色泥岩三个关键词对数据进行筛选，筛选的结果如图4-4所示，其表示共有299个层位含有这些关键词，然后我们统计了各个层位中含有关键词的数量，柱状图如下所示，可以看出这些层位集中在2800-3200米.由于是在一个地层中对钻头进行优选，因此可以不考虑地层因素.
        </p>
        <div className="image-container">
          <img src={z3}></img>
          <p>图4-4 筛选结果</p>
          <p>表4-2 钻头分类</p>
          {/* 到底怎么做表格啊，新开了一个表格js 还是不行 */}
          <biaoge1 />
          <img src={bg1}></img>
        </div>
        <p>
          根据井史中的钻头数据可知，在2800-3200米的地层中，钻头直径有152、152.4、215、215.9、222、222.2、222.22、222.25、222.3、223.3共10种，如下表所示，我们按钻头直径的规格将钻头分为3类进行钻头优选.
        </p>
        <p>
          在其它钻进条件保持不变的情况下，钻压与钻速的典型关系曲线如图4-5所示.在钻压和其它钻井参数保持不变的条件下，转速与钻速的关系曲线如图4-6所示，同时钻速随着排量和立管压力的增大也增大.因此，我们将钻压、转速、排量这些变量取倒数后带入模型.
        </p>
        <div className="image-container">
          <img src={z4}></img>
          <p>图4-5 钻压与钻速的关系曲线 </p>
          <img src={z5}></img>
          <p>图4-6 转速与钻速的关系曲线</p>
        </div>
        <p>
          本研究选取了有关的多个指标，包括：井深、钻压、转速、排量、进尺、钻速几个指标来计算.原始数据见表4-3.
        </p>
        <div className="image-container">
          <p>表4-3 主因子分析原始数据表</p>
          <img src={bg2}></img>
        </div>
        <p>通过主因子分析可以得到下面的相关矩阵:</p>
        <div className="image-container">
          <p>表4-4 相关性矩阵</p>
          <img src={bg3}></img>
        </div>
        <p>
          表4-4为6个原始变量之间的相关系数矩阵，可见许多变量之间直接的相关性比较强，的确存在信息上的重复.
        </p>
        <div className="image-container">
          <p>表4-5 总方差解释</p>
          <img src={bg4}></img>
        </div>
        <p>
          表4-5给出的是各成分的方差贡献率和累计贡献率，由表4-4可知，只有第一个特征根大于1，因此只提取了一个主成分，这个主成分的方差所占所有主成分方差的72.246%，足够描述钻头的选取.
        </p>
        <div className="image-container">
          <p>表4-6 成分矩阵</p>
          <img src={bg5}></img>
        </div>
        <p>
          表4-6中的输出为主成分系数矩阵，可以说明各主成分在各变量上的载荷，从而得出主成分的表达式，注意在表达式中各变量已经不是原始变量，而是标准化变量.
        </p>
        <div className="equation-container">
          <img src={f1}></img>
        </div>
        <div className="image-container">
          <p>表4-7 主因子计算结果</p>
          <img src={bg6}></img>
        </div>
        <p>由表4-7可知，钻头的使用效果依次由高到低.</p>
        <h5>2.2.3.7 储层参数确定建模</h5>
        <p>
          储层的孔隙度、含水饱和度等参数是用于对储层的油气存储能力和油气储量进行评价的重要参数，因而储层参数的定量预测是一个迫切需要解决的问题.由于现场所采集的数据中蕴藏着丰富的地质信息，所以研究人员通常会利用所采集的数据对这些储层参数进行预测.
        </p>
        <h3>问题的提出与分析</h3>
        <p>
          在实际工程问题中，往往需要根据一定的采样数据去拟合真实的自然变化规律，如根据井分层点拟合构造层面的空间形态.已知通过钻井获知的8个井点位置构造深度、孔隙度值等，试应用一种插值方法建立储层参数确定模型，通过井点值预测构造层面其他位置的高程.
        </p>
        <p>
          解决这一类问题就是要对离散的数据建立一个连续的数学模型，通过函数逼近的方式，构建一个插值函数去近似代替一个复杂的或未知解析表达式的函数.构建插值函数的一般方法是在某个函数空间
          <img src={v1} className="inline-math"></img>中，选取若干个函数
          <img src={v2} className="inline-math"></img>，用线性组合
          <img src={v3} className="inline-math"></img>
          作为插值函数.其中，<img src={v4} className="inline-math"></img>
          称为基函数.若用基函数
          <img src={v5} className="inline-math"></img>
          的线性组合，可构建插值函数：
        </p>
        <div className="equation-container">
          <img src={f2}></img>
        </div>
        <p>插值函数为代数多项式，称为代数插值.</p>
        <p>
          常规数理统计方法很多，如三角网插值法、距离反比加权法、径向基函数插值法、多重网格逼近法、离散光滑插值法、样条插值法、最近邻点法、移动最小二乘法等.在储层建模中，应用该类方法的前提是地质参数在井间具有数理统计关系(即某种数学函数关系).如三角网方法的前提是井间参数值是井孔参数与井间距离的线性函数，应用这一函数关系，即可对多井井间(二维剖面、二维平面及三维空间)进行储层参数插值，并建立储层地质模型.
        </p>
        <p>
          径向基函数插值即是通过以空间距离为基本变量的基函数构建插值函数进行插值.径向基函数插值法原理简单，采用不同性质的径向基函数可构建出不同特性的径向基插值函数；同时，径向基函数插值方法对已知点的分布要求较高，一般要求已知数据点分布均匀且稀疏程度适中.
        </p>
        <h3>模型的建立与求解</h3>
        <p>
          如图5-4所示，图中存在8个已知点，令插值基函数为，
          <img src={v11} className="inline-math"></img>,插值函数形如：
        </p>
        <div className="equation-container">
          <img src={f3}></img>
        </div>
        <p>
          式中<img src={v6} className="inline-math"></img>
          ——插值点到8个已知点的径向距离；{" "}
        </p>
        <p>
          <img src={v7} className="inline-math"></img>
          为插值基函数，——径向基函数；
        </p>
        <p>
          <img src={v8} className="inline-math"></img>——各基函数系数；
        </p>
        <p>
          <img src={v9} className="inline-math"></img>
          ——已知点值，如井点处构造深度、孔隙度值等；
        </p>
        <p>
          <img src={v10} className="inline-math"></img>——任一点的插值结果.
        </p>
        <div className="image-container">
          <img src={tu1}></img>
          <p>图 5-4 插值点到已知点的径向距离</p>
        </div>

        <p>
          因此，径向基函数可以看作中心位于特定点（各个插值点）并以空间距离r为基本变量的各向同性的函数。下面为常用的全域径向基函数：
        </p>

        <p>
          <strong>线性函数：</strong>
          <img src={x15} alt="φ(r) = r" className="inline-math" />
        </p>

        <p>
          <strong>三次方函数：</strong>
          <img src={x16} alt="φ(r) = r³" className="inline-math" />
        </p>

        <p>
          <strong>Kriging 方法的 Gauss 分布函数：</strong>
          <img src={x17} alt="φ(r) = e^(-r²/δ²)" className="inline-math" />
        </p>

        <p>
          <strong>Hady 的多重二次径向基函数：</strong>
          <img src={x18} alt="φ(r) = √(c² + r²)" className="inline-math" />（
          <img src={p17} alt="c² = 0.815π/4η" className="inline-math" />）
        </p>

        <p>
          <strong>Duchon 的薄板样条函数：</strong>
          <img src={x19} alt="φ(r) = r² lnr" className="inline-math" />
        </p>

        <p>径向基函数插值函数可表示为</p>

        <div className="equation-container">
          <img src={x20} alt="径向基函数插值函数"></img>
        </div>

        <p>
          式中
          <img src={p17} alt="n" className="inline-math" />
          ——已知点个数；
        </p>

        <p>
          <img src={p18} alt="x_i" className="inline-math" />
          ——各已知点坐标；
        </p>

        <p>
          <img src={p19} alt="||x - x_i||" className="inline-math" />
          ——径向基函数；
        </p>

        <p>
          <img src={p20} alt="c_i" className="inline-math" />
          ——基函数的权重；
        </p>

        <p>
          <img src={p21} alt="y_i" className="inline-math" />
          ——已知点值。
        </p>

        <p>
          插值函数中各已知点径向基函数的权重
          <img src={p20} alt="c_i" className="inline-math" />
          可通过已知点建立的线性方程组求解：
        </p>

        <div className="equation-container">
          <img src={x21} alt="线性方程组矩阵形式"></img>
        </div>

        <p>
          求解此方程组即可得到
          <img src={p22} alt="c_i" className="inline-math" />
          ，从而得到
          <img src={p23} alt="f(x)" className="inline-math" />
          的表达式，最终逐次将各未知点代入
          <img src={p23} alt="f(x)" className="inline-math" />
          ，即可求取各未知点处的估计值。
        </p>

        <h5>2.2.3.8 多层叠置煤层压裂裂缝纵向扩展模型与数值模拟</h5>

        <p>
          水力压裂技术是高效开发多层叠置煤层的一种方式.在多层叠置煤层中，各层地应力、岩石力学性质等都存在差异，而这些差异会对水力裂缝纵向扩展产生较大影响.因此本小结案例针对多层叠置煤层中水力裂缝纵向延伸问题，基于孔弹性理论和损伤力学建立了多层叠置煤层压裂裂缝纵向扩展模型.物理实验表明，水力裂缝纵向扩展受层间应力差、弹性模量、界面强度、压裂液黏度等因素的影响，其中层间应力差为主要影响因素.
        </p>
        <p>
          目前常用的裂缝纵向扩展数值模拟方法有边界元法、有限差分法、位移不连续法、有限元法和扩展有限元法.这些方法在模拟裂缝延伸时需要预设裂缝扩展步长，且需要建立相交准则来判断裂缝扩展至界面后的延伸方向.而基于损伤力学建立的裂缝延伸模型则不需要预先设定裂缝延伸方向和相交准则，在处理裂缝延伸问题时不需要额外的规则来描述裂缝界面，裂缝延伸后不需要重新剖分网格.该案例基于损伤力学建立了水力压裂裂缝纵向扩展流固耦合计算模型，基于该模型模拟多层叠置煤层中水力裂缝纵向延伸规律，分析多层叠置煤层压裂缝高的影响因素.
        </p>

        <h5>模型的建立</h5>

        <h5>(1)损伤演化模型</h5>

        <p>当材料受到单轴拉伸时可以将其损伤演化法则表示为：</p>

        <div className="equation-container">
          <img src={x22} alt="损伤演化模型公式"></img>
          (8.39)
        </div>

        <p>
          其中，
          <img src={p24} alt="D" className="inline-math" />
          为损伤变量；
          <img src={p25} alt="ε_c" className="inline-math" />
          为临界应变（材料开始破坏时的应变）；
          <img src={p26} alt="A_r" className="inline-math" />
          为材料拉伸系数；
          <img src={p27} alt="B_r" className="inline-math" />
          为材料拉伸系数。
        </p>

        <h5>(2)控制方程</h5>

        <p>
          若忽略惯性力和体积力的影响，将饱和流体的多孔介质视为线弹性材料，则多孔弹性岩石的控制方程为：
        </p>

        <h5>1) 应力平衡方程：</h5>

        <div className="equation-container">
          <img src={x23} alt="应力平衡方程"></img>
          (8.40)
        </div>

        <p>
          其中，
          <img src={p28} alt="σ" className="inline-math" />
          是总应力张量，
          <img src={p29} alt="Pa" className="inline-math" />。
        </p>

        <p>
          对于完全饱和的多孔介质，根据孔弹性力学理论，总应力
          <img src={p30} alt="σ" className="inline-math" />
          和有效应力
          <img src={p29} alt="σ_eff" className="inline-math" />
          以及孔隙流体压力
          <img src={p31} alt="P" className="inline-math" />
          之间的关系可以表示为：
        </p>

        <div className="equation-container">
          <img src={x24} alt="应力关系方程"></img>
          (8.41)
        </div>

        <p>
          其中，
          <img src={p32} alt="I" className="inline-math" />
          为单位张量，二维情况下为
          <img src={p33} alt="[1 1 0]^T" className="inline-math" />；
          <img src={p34} alt="α(D)" className="inline-math" />
          为Biot孔弹性系数，其随岩石损伤演化而变化，如式(8.42)所示。
        </p>

        <div className="equation-container">
          <img src={x25} alt="Biot孔弹性系数"></img>
          (8.42)
        </div>

        <p>
          其中，
          <img src={p35} alt="K_D" className="inline-math" />
          为多孔介质受损后的体积模量，MPa；
          <img src={p37} alt="K_s" className="inline-math" />
          为骨架颗粒的体积模量，MPa。
        </p>

        <p>将式(8.41)代入式(8.40)可得应力平衡方程：</p>

        <div className="equation-container">
          <img src={x26} alt="修正应力平衡方程"></img>
          (8.43)
        </div>

        <p>式(8.43)对应的边界条件如下：</p>

        <div className="equation-container">
          <img src={x27} alt="边界条件"></img>
          (8.44)
        </div>

        <p>
          其中，
          <img src={p38} alt="∂Ω^u" className="inline-math" />
          为位移场Dirichlet边界，
          <img src={p39} alt="∂Ω^t" className="inline-math" />
          为位移场Neumann边界。求解域的各边界满足如下关系：
        </p>

        <div className="equation-container">
          <img src={x28} alt="边界关系"></img>
          (8.45)
        </div>

        <h5>2) 流体连续性方程</h5>

        <div className="equation-container">
          <img src={x29} alt="流体连续性方程"></img>
          (8.46)
        </div>

        <p>
          其中，
          <img src={p40} alt="ζ" className="inline-math" />
          为流体体积增量，m³；
          <img src={p411} alt="v" className="inline-math" />
          <img src={p412} alt="i" className="inline-math" />
          为流体流速，
          <img src={p42} alt="m³/s" className="inline-math" />。
        </p>

        <p>假设流体流动符合Darcy定律，则流体体积增量和流速可表示为：</p>

        <div className="equation-container">
          <img src={x30} alt="Darcy定律流体体积增量"></img>
          (8.47)
        </div>
        <div className="equation-container">
          <img src={x31} alt="Darcy定律流体体积增量"></img>
          (8.48)
        </div>

        <p>
          其中，
          <img src={p43} alt="M(D)" className="inline-math" />
          为Biot模量，
          <img src={p44} alt="Pa" className="inline-math" />
          ，如式(11)所示；
          <img src={p45} alt="ε_ii" className="inline-math" />
          为体积应变；
          <img src={p46} alt="k" className="inline-math" />
          为各向异性渗透率张量，
          <img src={p47} alt="m²" className="inline-math" />；
          <img src={p48} alt="μ" className="inline-math" />
          为流体粘度，
          <img src={p49} alt="Pa·s" className="inline-math" />。
        </p>

        <div className="equation-container">
          <img src={x32} alt="Biot模量"></img>
          (8.49)
        </div>

        <p>
          将式(8.47)和式(8.48)代入式(8.46)可得多孔弹性介质的流体连续性方程：
        </p>

        <div className="equation-container">
          <img src={x33} alt="多孔弹性介质流体连续性方程"></img>
          (8.50)
        </div>

        <p>式(8.50)对应的边界条件如下：</p>

        <div className="equation-container">
          <img src={x34} alt="压力边界条件"></img>
          (8.51)
        </div>

        <p>
          其中，
          <img src={p50} alt="∂Ω^P" className="inline-math" />
          为压力场Dirichlet边界，
          <img src={p51} alt="∂Ω^q" className="inline-math" />
          为压力场Neumann边界。求解域的各边界满足如下关系：
        </p>

        <div className="equation-container">
          <img src={x35} alt="压力边界关系"></img>
          (8.52)
        </div>

        <p>
          式(8.50)和式(8.51)中的
          <img src={p46} alt="k" className="inline-math" />
          为渗透率张量。在压裂过程中，岩石破裂导致流体沿裂缝面切向的流动能力大于法向流动能力，表明地层岩石具有各向异性渗透率。因此，对于二维情况，各向异性渗透率张量可写为：
        </p>

        <div className="equation-container">
          <img src={x36} alt="各向异性渗透率张量"></img>
          (8.53)
        </div>

        <p>
          其中，
          <img src={p52} alt="k_x" className="inline-math" />
          为x方向渗透率，m²；
          <img src={p53} alt="k_y" className="inline-math" />
          为y方向渗透率，m²。
          <img src={p52} alt="k_x" className="inline-math" />和
          <img src={p53} alt="k_y" className="inline-math" />
          由岩石初始渗透率和裂缝渗透率加权组成：
        </p>

        <div className="equation-container">
          <img src={x37} alt="渗透率加权组成"></img>
          (8.54)
        </div>

        <p>
          其中，
          <img src={p54} alt="k_{x0}" className="inline-math" />
          ：岩石基质x方向初始渗透率，m²；
          <img src={p55} alt="k_{y0}" className="inline-math" />
          ：岩石基质y方向初始渗透率，m²；
          <img src={p56} alt="k_{fx}" className="inline-math" />
          ：x方向裂缝渗透率，m²；
          <img src={p57} alt="k_{fy}" className="inline-math" />
          ：y方向裂缝渗透率，m²；
          <img src={p58} alt="W_x" className="inline-math" />
          ：x方向渗透率加权系数；
          <img src={p59} alt="W_y" className="inline-math" />
          ：y方向渗透率加权系数。
        </p>

        <p>裂缝渗透率的计算模型如下：</p>

        <div className="equation-container">
          <img src={x38} alt="裂缝渗透率计算模型"></img>
          (8.55)
        </div>

        <p>
          其中，
          <img src={p60} alt="η" className="inline-math" />
          为裂缝面形状因子，本文取1；
          <img src={p61} alt="w" className="inline-math" />
          为裂缝宽度，这里假设仅当高斯结点处的应变超过临界应变时岩石才会破裂产生裂缝。因此，可以将裂缝宽度的计算公式表示为：
        </p>

        <div className="equation-container">
          <img src={x39} alt="x方向裂缝宽度"></img>
          (8.56)
        </div>

        <div className="equation-container">
          <img src={x40} alt="y方向裂缝宽度"></img>
          (8.57)
        </div>

        <div className="equation-container">
          <img src={x41} alt="总裂缝宽度"></img>
          (8.58)
        </div>

        <p>
          其中，
          <img src={p62} alt="ε_x" className="inline-math" />
          为高斯结点x处方向的应变；
          <img src={p63} alt="ε_y" className="inline-math" />
          为高斯结点处y方向的应变；
          <img src={p64} alt="ε_c" className="inline-math" />
          为临界应变；
          <img src={p65} alt="l_x" className="inline-math" />
          为x方向的单元长度，m；
          <img src={p66} alt="l_y" className="inline-math" />
          为y方向的单元长度，m。
        </p>

        <p>
          渗透率加权系数代表水力裂缝对计算单元渗透率的贡献，等于裂缝宽度与单元长度的比值，即：
        </p>

        <div className="equation-container">
          <img src={x42} alt="渗透率加权系数"></img>
          (8.59)
        </div>

        <p>临界应变与临界拉应力之间关系可表示为：</p>

        <div className="equation-container">
          <img src={x43} alt="临界应变与临界拉应力关系"></img>
          (8.60)
        </div>

        <h5>数值求解</h5>

        <p>
          式(8.43)应力平衡方程与式(8.50)流体连续性方程相互耦合，构成了渗流-应力耦合非线性方程组。式(8.43)和式(8.50)分别与权函数Wu和Wp相乘，并在计算域上积分，利用散度定理并结合边界条件可得应力平衡方程和流体连续性方程等效积分"弱"形式：
        </p>

        <div className="equation-container">
          <img src={x44} alt="弱形式积分方程"></img>
          (8.61)
          <img src={x45} alt="弱形式积分方程"></img>
        </div>

        {/* 2.2.5---开始 */}
        <div className="wendang">
          {" "}
          <h3>2.2.5 部分教学教改研究项目结题报告6项</h3>
          <h1>课程研究报告 1：《模糊数学》改革建设报告（2020）</h1>
          <h2>1 项目概况</h2>
          <h4>1.1 经费来源</h4>
          <p>本项目经费源自学校的四川省“双一流”建设经费。</p>
          <h4>1.2 立项背景</h4>
          <p>
            《模糊数学》是应用数学、油气、工程管理、不确定分析与决策等领域的一门应用性极强的公共课程，其对培养硕士、博士研究生的创新能力有着重要的理论价值与实践意义。该课程的教学质量将直接影响我校一流创新型人才培养的质量。《模糊数学》课程是推动我校理、工及管理学科发展的重要保证，近年来油气工程的重大突破，如重复压裂选井选层、油气井的石油开采与预测都离不开模糊数学的推动。供应链管理及优化决策领域的重大发展迫切需要模糊数学方法给予必要的理论支撑。随着数据规模的不断扩大，共享范围越来越广，数据形式多样化，大量的不确定数据随之产生，普遍存在于油气开发、经济、物流、金融、电信和科学计算等领域，并且扮演着关键角色。当前数据特点的新变化，使得不确定数据管理成了国内外研究的热点。目前仍面临着不确定性建模、管理和优化等方面的挑战。我校是首批国家世界一流学科建设高校，每年有数百名研究生选修《模糊数学》课程，课程教学面临着生源复杂、学科基础知识和能力差异大的问题，研究《模糊数学》课程深化教学改革方案，对实现我校培养一流创新型人才的办学目标和数学内涵发展的目标尤为重要。
          </p>
          <h4>1.3 指导思想</h4>
          <p>
            以《西南石油大学研究生教育教学改革与研究项目实施办法》为指导思想，结合我校研究生教育教学工作的实际，开展本项目研究，持续推动研究生教育内涵发展，提高研究生培养质量。
          </p>
          <h4>1.4 基本思路</h4>
          <p>
            立足于课程选修对象来源于我校不同学科专业的博士、硕士研究生，研究与培养我国社会经济发展需要的“一流创新型人才”相适应的《模糊数学》课程教学大纲，形成适应工程应用与大数据时代的《模糊数学》课程的教学模式、教学内容和课程考核的改革的切实可行的科学方案，全面提高《模糊数学》课程的教学质量。开展本项目研究的基本思路具体如下：
          </p>
          <p>
            第一步，进一步调研国内外关于培养一流创新人才所要求具备的模糊数学知识、综合能力和素养；分析我校各专业创新人才培养模式，通过走访、调研各专业的老师和学生对模糊数学知识、综合能力和素养的需求，进行详细的需求分析；综合确定出我校各专业一流创新型人才培养所需要的模糊数学知识、综合能力和素养，以此为依据构建适应一流创新人才培养目标的《模糊数学》课程教学内容、教学大纲和教学计划体系。
          </p>
          <p>
            第二步，研究我校现行教学模式存在的问题，因材施教，结合现代化教育技术，转换教学模式为双语教学。
          </p>
          <p>
            第三步，通过观看和分析国内外数学教学水平高超的专家学者的授课，并征求他们对教学能力、教学水平提升等问题的看法，反复实践、反复批评与自我批评，研究一般工科院校培养学校一流学科建设需要的创新人才所需数学教师教学能力的发展趋势：现代教育观念、健康的心理素质、务实的创新精神、科学的职业规划等，获得有效提升高校课题组教师教学能力的措施和途径。
          </p>
          <p>
            第四步，以工程应用为教学背景，开展数据驱动方法为教学引入环节，抽象出模糊数学相关理论知识，详细介绍其内涵和外延。课堂讨论有时从实际应用问题产生，有时从推广应用范畴而拓广理论，开展理论创新意识训练及思维创新活动。对于一些难懂的知识点，在课堂上讲授适量例题，讨论及总结知识点如何应用于解决实际问题，同时适当布置不同应用背景的习题，要求同学们及时完成作业，掌握及巩固相关知识点的应用。通过讨论与实践，使学生能够较好的结合自己的理解阐述观点，拓展思路，开阔眼界，掌握模糊数学的研究方法和对象。
          </p>
          <p>
            第五步，以研究生为教学主体，开展讨论课实践教学环节。针对不同学科专业的研究生授课对象，在接近课程核心教学内容结束时，布置大作业，要求专业相近的研究生自主形成小团队，选择与专业相关程度高的模糊数学理论及其应用成果作为报告课题，以
            PPT形式在课堂上汇报交流。这样既锻炼学生查阅文献的能力，又了解模糊数学在相关领域的前沿应用，加深学生对课程核心内容的掌
            握，强化知识理解及其在工程背景下的应用能力，利于学生科研创新能力的提升。
          </p>
          <p>
            第六步，制定与培养一流创新人才能力相适应的《模糊数学》课程考核模式，尤其是重学习过程和能力的科学、公正的成绩评定方式和方法，激发学生学习的自主性，以提高育人质量。
          </p>
          <h2>2 项目研究与改革实践</h2>
          <p>
            本项目以培养一流创新型人才为目标，从教学模式、教学内容及课程考核三个方面对《模糊数学》课程深化教学改革，
            结合现代化信息技术与多媒体教学工具，开展双语教学模式，确立以工程应用及数据驱动为背景的教学体系，辅以分组讨论课加深研究生对课程核心内容的掌握，促进我校不同专业的研究生增强学习主观能动性、提升与专业前沿问题的有机结合创新能力，发展模糊数学的理论与应用领域创新。
          </p>
          <h4>2.1 项目研究内容</h4>
          <p>本项目的研究内容体现在如下几个方面：</p>
          <p>
            （1）适应一流创新型人才培养的《模糊数学》课程教学模式改革研究针对我校现行模糊数学课程教学模式不能适应一流创新型人才培养的要求，本项目开展双语教学模式，达到研究生与国际接轨的教学目的。《模糊数学》是一门理论性与应用性强的研究生公共课程，研究生来自于我校石油工程、机电、地科、数学及工程管理等不同学科专业，课程教学采用启发式讲授、讲练结合、讨论等方式进行。课堂教学之外，
            采用分组讨论等方法促进学生自主学习。课堂教学采用黑板板书和 PPT
            结合，通过双语教学方式，有效提高学习效果。
          </p>
          <p>
            （2）以培养一流创新型人才为导向的《模糊数学》课程教学内容、教学大纲和教材研究结合学校实际，从理论探讨、实践应用、开发研究及成果推广等多角度开展课堂教学内容设计，制定出适应一流创新型人才培养的教学大纲和教学计划，选用配套的教材和教辅材料。探索以工程应用为教学背景，开展数据驱动方法为教学引入环节，介绍《模糊数学》课程的内涵和外延。不仅注重知识应用背景，还注重理论知识与最新的理论知识的衔接教学，从而拓宽学生的知识视野，提高学生的学习兴趣及创新意识。以研究生为教学主体，开展讨论课实践教学环节改革。在接近课程核心教学内容结束时，
            布置大作业，要求专业相近的研究生自主形成小团队，选择与专业相关程度高的模糊数学理论及其应用成果作为报告课题，以
            PPT
            形式在课堂上汇报交流。探索提高学生查阅文献的能力、强化知识理解及在工程背景下的应用创新能力的教学方法。
          </p>
          <p>
            （3）适应提升一流创新型人才能力的《模糊数学》课程考核方式改革研究课程学习综合考核采用平时成绩、讨论报告大作业和期末闭卷考试相结合的方式进行。平时成绩由平时作业、课堂考勤、参与课堂练习及讨论组成，其中平时作业通过
            QQ
            班级群及网络平台发布作业，要求学生限时完成后由教师批阅；讨论报告则由研究生自行分组，选择与专业相关程度高的课题项目或学生自拟，由教师认可后撰写报告统一进行答辩。考试成绩在期末考试完成后由教师阅卷后给出。通过这些考核方式，探索重学习过程和能力的科学、公正的成绩评定方法，激发学生学习的自主性，以提高育人质量。
          </p>
          <h4>2.2 项目改革实践</h4>
          <p>本项目的改革实践工作体现在如下几个方面：</p>
          <p>(1)结合现代化教育技术，转换教学模式为双语教学。</p>
          <p>
            针对目前《模糊数学》课程的信息化、国际化程度不够，
            大力加强《模糊数学》理论基础与不同专业背景需要、前沿信息检索方面的联系。结合现代化教育技术，将多媒体与黑板板书有机结合，课堂上开展中英双语教学模式，继续实施启发式教学理念，提高师生的国际化交流水平。
          </p>
          <p>（2）开展教学内容改革与实践，提供师生讨论课交流平台。</p>
          <p>
            其一，以工程应用为教学背景，开展数据驱动方法为教学引入环节，介绍《模糊数学》课程的基本思想、方法与理论知识。本课题不仅注重知识应用背景，还注重理论知识与最新的理论知识的衔接教学，让研究生了解模糊数学理论前沿及发展现状，从而拓宽学生的知识视野，提高学生的学习兴趣及创新意识。
          </p>
          <p>
            其二，以研究生为教学主体，开展讨论课实践教学环节。针对不同学科专业的研究生授课对象，在接近课程核心教学内容结束时，布置大作业，要求专业相近的研究生自主形成小团队，选择与专业相关程度高的模糊数学理论及其应用成果作为报告课题，以
            PPT形式在课堂上汇报交流。
          </p>
          <p>（3）进一步细化课程考核机制。</p>
          <p>
            原有课程教学大纲设置总成绩考核标准设置为闭卷考试、平时成绩和大作业三部分组成。本课题对于大作业的完成要求具体展开设置。讨论报告大作业由研究生自行分组，选择与专业相关程度高的课题项目或学生自拟课题，由教师认可后撰写报告统一进行答辩。讨论报告大作业占
            20%。平时成绩由平时作业、课堂考勤、参与课堂练习及讨论组成， 占比
            30%。其中， 平时作业通过 QQ
            班级群及网络平台发布作业，要求学生限时完成后由教师批阅。期末闭卷笔试成绩在期末考试完成后由教师阅卷后给出，占比
            50%。
          </p>
          <h2>3 项目主要成果及推广应用情况</h2>
          <p>
            目前，项目组已发表 SCI 期刊论文 4 篇和EI 会议收录论文 1 篇。培养的研
            究生叶明飞于 2019 年通过“申请考核制”被陕西师范大学数学与信息科学学院
            录取，攻读理学博士学位，其研究方向为模糊控制及计算智能。论文成果具体如下：
          </p>
          <p>
            [1] 李春泉 . A fuzzy multi-objective linear programming with
            interval-typed triangular fuzzy numbers. Open Mathematics, 2019
            (17): 607-626. (SCI)
          </p>
          <p>
            [2] 李春泉*, Dongxue Li, 金检华. Generalized Hesitant Fuzzy Soft
            Sets and Its Application to Decision Making. International Journal
            of Pattern Recognition and Artificial Intelligence, 33（12） (2019)
            1950019 (30 pages) (SCI)
          </p>
          <p>
            [3] 金检华 *，李春泉.Quantum Reversible Fuzzy Grammars. NCTCS 2019,
            CCIS 1069, pp. 150 -167, 2019. (EI 会议）
          </p>
          <p>
            [4] 叶明飞, 金检华 *, 冯晔. Negations and aggregation operators
            based on a new hesitant fuzzy partial ordering. Iranian Journal of
            Fuzzy systems, Vol. 17, No. 1 (2020):1-12 (SCI)
          </p>
          <p>
            [5] 金检华 *，叶明飞，Witold Pedrycz. Quintuple Implication
            Principle on interval-valued intuitionistic fuzzy sets. Soft
            Computing, (2020) 24:12091 -12109 (SCI)
          </p>
          <h2>4 项目自我评价</h2>
          <h4>4.1 项目完成情况</h4>
          <p>
            本项目已经基本完成项目的研究内容，达到项目的结题要求。2、项目研究与改革实践创新
          </p>
          <p>项目研究与改革实践创新主要体现在如下四个方面：</p>
          <p>
            （1）结合现代化教育技术，将多媒体与黑板板书有机结合，课堂上开展中英双语教学模式，继续实施启发式教学理念，提高师生的国际化交流水平。
          </p>
          <p>
            （2）以工程应用及数据驱动方法为背景，开展《模糊数学》课程的理论教学，课堂教学不仅注重核心理论知识，还阐述当前相关的最新的常用的模糊数学方法，让研究生了解模糊数学理论前沿及发展现状。
          </p>
          <p>
            （3）开展实践及应用平台，辅以讨论课形式展开教学，进一步细化课程考核机制。以相近专业的研究生自主形成小团队，自选模糊数学与专业相关紧密的课题或文献，展开讨论研究，分工合作，制作成
            PPT在课堂上讨论交流。通过小组讨论课的教学活动开展，加深研究生对课程核心内容的掌握，提高学生的自主学习兴趣，激发学生的创新意识，提升研究生应用模糊数学知识解决专业领域前沿问题的创新能力。
          </p>
          <h4>4.2 推广应用价值</h4>
          <p>
            《模糊数学》课程深化教学改革研究具有重要的实践意义和应用价值。其一，本课题以改革促发展。在现实世界的复杂系统中，
            诸多数据存在粗糙不确定性和模糊不确定性，尤其是日益庞大的不确定数据资源广泛存在。以“数据驱动方法”的应用背景教学改革方式可以极大拓宽模糊数学的理论应用发展空间，不断开拓研究生的视野，促进模糊数学思想方法在工程应用背景下前沿问题中的发展应用。其二，本课题以改革促创新。在当今的大数学时代，
            对理工科研究生的培养质量有了高新的追求。以培养一流创新型人才为目标的教学改革实践不仅可以极大地调动学生的自主学习积极性，而且提高硕、博士研究生的创新能力，
            利于模糊数学思想的理论创新及应用领域创新。其三，本课题以改革促提升。采用双语教学的课堂教学模式改革可以有效提升师生的国际化交流水平，引入形式多样化的讨论课教学改革利于加深研究生对模糊数学核心内容的掌握，加强其与自身专业的有机结合，提高其解决专业研究项目与热点问题的实践能力，从而促进我校一流创新型人才能力的培养。
          </p>
          <h2>5 项目进一步研究与实践的思路</h2>
          <p>1）构建“课程思政”融入《模糊数学》课程教学。</p>
          <p>
            将课程思政有效融入《模糊数学》课程教学环节，
            形成适应全员全程全方位“三全育人”培养格局的优质教育环境。
          </p>
          <p>2）顺应时代，构建“互联网+教育”教学方式。</p>
          <p>
            在新时期的网络背景下，实现教学资源共享。充分利用互联网的“网络三课”-慕课、微课、翻转课堂，
            实现课堂、课程、课本“网络变身”，同时利用超星、
            雨课堂等平台，激发学生高度参与，持续提升教学效果。
          </p>
          <p>3）注重过程，构建多元化考核形式。</p>
          <p>
            持续重视过程考核，根据学生课堂回答问题+课堂主题活动参与情况+小组
            综合报告考核+学生网络教学平台使用情况+报告大作业等形式评定课程成绩。
          </p>
          {/* 第二个文档 */}
          <div className="wendang">
            <h1>课程研究报告2：《数值分析》优质课程建设报告（2020）</h1>
            <h2>1 课程内容优化情况</h2>
            <p>
              1.合理制定课程教学大纲。结合我校石油背景的实际情况，制定了适合不同层次发展的三类教学大纲（应用型、复合型、创新型），在大纲中着重体现了“重概念，重应用，轻理论推导”。
            </p>
            <p>
              2.优化教学内容。在注意课程基本知识、基本理论、基本方法的同时，
              强调通过课程学习培养学生分析问题和解决问题的能力。比如：在学习插值与逼近时，主要是讲清楚这部分内容的本质,就是要构造简单函数作为一般复杂函数的近似，在一些离散点上考虑问题得到的是函数逼近方法,在整体上，即在某个有限的闭区间或无穷区间上考虑问题得到的将是函数逼近方法；结合高速公路设计，将插值方法和曲线拟合应用于设计中。授课过程中要求学生结合所学专业既要注意细节的分析，又能整体上把握该课程。
            </p>
            <p>
              3.强调和重视实践。该课程是一门实践性和应用性较强的课程，如果授课教师只讲一些算法，不要求学生运用算法解决实际问题，学生的实践能力就得不到提高。因为课时较少，
              教学基本内容较多，在授课时强调课后实践，本课程布置了一些课外作业，要求学生根据学习内容自己课外上机，在应用相关软件（比如MATLAB）或程序中理解或体现算法的基本思想，用以激发学生的创造性。
            </p>
            <h2>2 教学方法与教学模式创新情况</h2>
            <p>开展研讨式教学、实践教学及案例教学等情况</p>
            <p>
              传统教学方法的基本形式:(纯理论讲解,全程均为教师完成)算法介绍——算法证明——算法的敛散性——算法的速度——算法的误差。
            </p>
            <p>
              改进的教学方法的基本形式:(简约理论,融入部分应用及数值实验)算法背景——算法原理——算法的敛散性——算法的误差——算法的应用。
            </p>
            <p>
              进一步改进的教学方法的基本形式:(教师和学生共同完成)算法背景——算法的解读——最新算法介绍——算法的敛散性——算法的实现——算法在本专业的应用报告(小论文)。
            </p>
            <p>
              教学采取多媒体与课后数学实验相结合的教学手段,丰富教学信息,努力提高
              数值分析教学可视化水平,加大利用计算机技术实现算法的内容,培养研究生用数
              学直观解释问题的能力和数值计算能力。
            </p>
            <h2>3 课程考核方法教学效果情况</h2>
            <p>
              课程考核方面，在研究生知识结构优化、创新思维培养、素质能力提升等
              方面的成效：
            </p>
            <p>
              考核采用期末考试与平时考核相结合的方法，期末考试采用闭卷考核方式，满分
              100 分，考试时间 100
              分钟。考核方式：闭卷笔试（70%）+平时出勤、作业、参与课堂练习和讨论（20%）+研讨报告、调研报告、网络自主学习及作业完成和问题讨论（10%）。以
              2019 级 3 班为例，考试成绩正常，平均成 绩分 80.06，优秀率为
              2.5%，良好为 55%，中等为 35.8%，及格为 6.7%。
            </p>
            <h2>4 基于课程建设取得的成果情况</h2>
            <p>严格按照数值分析优质课程申报书要求，圆满完成了任务。</p>
            <p>（1）完善了课程内容框架体系，制定了分类培养教学大纲；</p>
            <p>（2）制作了完善的多媒体教学课件；</p>
            <p>
              （3）完成了课程全部教学视频（原申请为“完成总时长不少于课程教学学时1/2
              的教学视频”），完成了结合实例引出与深度解剖高难度知识点的微视频；
            </p>
            <p>（4）第二至第八主要章节均建设了至少一个应用案例；</p>
            <p>（5）建设和维护涵盖上述 4 部分建设内容的课程网站；</p>
            <p>（6）撰写了 2019 级学生使用的分析报告。</p>
            <p>
              建立了数值分析课程门户网站，网站门户主页含有课程介绍、教师团队、教学大纲、教学日历、教学效果、参考教材、课程评价、教学资源和课程章节等几个主要模块。
            </p>
            <p>
              课程网站含有活动（包含签到、投票、选人、抢答、主题讨论、随堂练习、
              问卷、评分、分组任务和活动库）、统计（包含班级统计、资源统计和课程报告）、资料（包含课程资料、题库、作业库和试卷库）
              、通知、作业、考试、讨论和管 理等工具模块。
            </p>
            <p>
              建设了课程资源含八个章节的课程教学讲义，多媒体教学 PPT
              课件和教学视频；建设了练习题库和作业题库。
            </p>
            <h4>5 存在的问题和今后改进的措施</h4>
            <p>
              （1）课程网站对于数学公式的输入存在很多不足，如上下角标位置偏移，求和及积分符号大小不合理等，显示效果不佳。
            </p>
            <p>（2）已和超星服务平台沟通，正在积极整改。</p>
            <p>
              教学内容的改革和课程网站建设不是一蹴而就，要有一个长效机制，项目结束后应成立课程门户维护小组，针对后续使用发现问题应及时整改。
            </p>
          </div>
          {/* 第二个文档结束 */}
        </div>
        {/* 2.26---开始 */}
        <h3>2.2.6 课程资源</h3>
        <div>
          <p>
            <b>1.课程线上网站</b>
          </p>
          <div className="image-container">
            <p>（1）数值分析建设网站</p>
            <p>学堂在线网站：</p>
            <img src={y1}></img>
            <img src={y2}></img>
            <img src={y3}></img>
            <img src={y4}></img>
            <p>
              超星学习通建设网站 http://mooc1.chaoxing.com/course/202964499.html
            </p>
            <img src={y5}></img>
            <img src={y6}></img>
            <p>（2）最优化建设网站</p>
            <p>
              超星学习通建设网站 http://mooc1.chaoxing.com/course/204774968.html
            </p>
            <img src={y7}></img>
            <p>单平台资源浏览量近300万</p>
            <img src={y8}></img>
            <img src={y9}></img>
            <p>（3）应用统计建设网站</p>
            <p>
              超星学习通建设网站 http://mooc1.chaoxing.com/course/205487817.html
            </p>
            <img src={y10}></img>
          </div>
          <p>
            <b>2. 西小理答疑智能体</b>
          </p>
          <div className="image-container">
            <img src={y11}></img>
            <img src={y12}></img>
          </div>
          <h3>2.2.7 学生科研能力提升</h3>
          <p>
            我校研究生在全国石油工程设计大赛(即石油行业的“奥林匹克”竞赛)、全国研究生数学建模竞赛和“泰迪杯”数据挖据挑战赛中的获奖励情况：
          </p>
          <div className="image-container">
            <img src={y13}></img>
          </div>
          <p>2016年-2025年我校研究生发表论文情况：</p>
          <div className="image-container">
            <img src={y14}></img>
            <img src={y15}></img>
          </div>

          <h3>2.2.8 多维质量评价与跟踪反馈体系</h3>
          <p>
            构建由学校、学生、企业共同参与的多维质量评价体系。学校层面，依据教学质量标准，组织专业教师、教学管理人员对教学过程和教学效果进行全面评价；学生作为教学的主体，通过问卷调查、座谈会等形式，对教师的教学态度、教学方法、教学内容等进行满意度评价；企业作为人才
            市场的需求方和使用方，根据毕业生在工作能力、职业素养、发展潜力等方面的表现，反馈人才培养的质量状况。基于以评促建、以评促改、以评促教的教学理念，建立动态跟踪反馈机制。深耕行业，持续优化与革新，为新工科人才培养质量的提升提供有力支撑。
          </p>
          <div className="image-container">
            <img src={y16}></img>
          </div>
          {/* 2.3 辐射推广效果 */}
          <div className="content-section">
            <h2>
              <b>2.3 辐射推广效果</b>
            </h2>
            <h3>2.3.1教学成果及应用证明材料</h3>
            <div className="image-container">
              <p>1.中国石油大学</p>
              <img src={cg1}></img>
            </div>
            <div className="image-container">
              <p>2.西安石油大学</p>
              <img src={cg2}></img>
            </div>
            <div className="image-container">
              <p>3.西华大学</p>
              <img src={cg3}></img>
            </div>
            <div className="image-container">
              <p>4.轻化工大学</p>
              <img src={cg4}></img>
            </div>
            <div className="image-container">
              <p>5.重庆工商大学</p>
              <img src={cg5}></img>
            </div>
            <h3>2.3.2 国际合作与跨领域交流</h3>
            <div className="image-container">
              <p>
                1."一带一路"引领学术盛宴：斯洛文尼亚专家来华共话动力系统学术前沿
              </p>
              <img src={cg6}></img>
              <img src={cg7}></img>
              <img src={cg8}></img>
              <img src={cg9}></img>
              <p>2.理学院成功举办"动力系统与生物数学"专题学术报告会</p>
              <img src={cg10}></img>
              <p>3.我院成功获批2025年度国际杰出青年科学家计划</p>
              <img src={cg11}></img>
              <p>4.拓展数学教育合作新路径：波兰专家讲授短期优化课程</p>
              <img src={cg12}></img>
              <p>5. 跨学科科研交流，跨学科团队能力提升</p>
              <img src={cg13}></img>
              <img src={cg14}></img>
              <img src={cg15}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
