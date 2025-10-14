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
          油藏数值模拟起源于20世纪50年代,它是定量描述非均质储油地层中多相流体流动规律的工具，在油藏管理、动态预测、二次开采、井位部署、方案调整等方面起着非常重要的作用. 随着油藏描述技术的不断进步，大量的地震、地质、测井、动态油藏数据可供油藏工程师用来建立越来越精细的数值模型. 目前，大型油田的油藏数值模拟釆用的水平方向网格尺寸多为100m量级，而高分辨率的油藏数值模拟的网格尺寸需要25m甚至更小，这就需要模拟计算千万以上量级网格单元的模型，对现有模拟器是一个巨大的挑战. 油藏数值模拟过程中通常需要求解大规模的线性代数方程组. 在全隐式离散方法中线性方程组的求解时间通常占到模拟时间的80%以上. 由于离散方程的条件数与网格尺寸有关，网格尺寸越小矩阵条件数越坏，线性方程组的求解难度也越大. 模拟千万量级模型对线性求解算法及其软件模块的性能提出了较高的要求.
        </p>
      </div>
      <div>
        <h5>2.2.3.2 黑油模型及其离散</h5>
        <p>
          黑油模型的偏微分方程组具有高度非线性和强耦合性，常釆用全隐式方法进行求解，其中需要求解大规模、非对称、强耦合的雅可比方程组.  Krylov子空间方法,如广义最小残量法(GMRES)、双共轭梯度法(BiCGstab)等，是求解这类方程组的常用方法. 但直接应用这些方法一般收敛较慢，必须使用合适的预条件子来进行加速. 研究人员针对黑油模型的求解进行了大量尝试，并提出了很多求解算法:一类是基于矩阵分解的整体型预条件子,如ILU、嵌套分解等；另一类是多阶段预条件算法,如组合型预条件子、约束残量预条件子(CPR)等. 老一代油藏数值模拟器中常用矩阵分解型预条件子,但这类方法在求解大规模问题时速度较慢。本案例介绍了一种适用于超大规模精细油藏全隐式模拟的稳健、高效的雅可比方程求解算法。研究人员提出了一种分裂型预条件子，其中的左预条件子釆用工程界常用的ABF解耦方法，ABF方法能有效地减弱不同物理量之间的耦合关系，极大地改善雅可比矩阵的特征值分布。然后，根据 ABF 解耦后雅可比矩阵的特点,有针对性地设计了一种多阶段子空间校正右预条件子. 为了测试该分裂型预条件子的高效性和稳健性，研究人员在台式机上进行了数十万至千万网格节点算例的模拟计算，并通过一个实际油田模型验证了精细模拟的重大实际价值.
        </p>
        <p>油藏多孔介质中的多相渗流一般包含油、气、水三相三组分流体的流动，在流动过程中会发生油气两相之间的质量交换.黑油模型给出了水、油、气三种组分的质量守恒方程:</p>

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

        <p>油藏数值模拟中边界条件分为外边界条件和内边界条件两大类，其中外边界条件指油藏流体在外边界所处的状态，内边界条件是指生产井或注入井所处的状态。外边界条件主要有给定油藏边界区域压力或者给定油藏区域边界流量两种，内边界条件则分为给定井产量(产油量或产液量)或者给定井筒底部压力。在实际问题中，内边界条件一般比较复杂并常随时间发生变化，在这里不加详述。</p>

        <p>该案例只考虑采用全隐式方法对黑油模型方程(1.1)-(1.3)进行离散(Newton 线性化，时间上采用一阶向后欧拉格式，空间上采用网格块中心有限体积格式)，离散过程中将<img src={variable0} alt="J_RW" className="inline-math" />作为主变量。全隐式离散后所得到的雅克比线性代数系统如下：</p>

        <div className="equation-container">
          <img src={formula7} alt="公式7 - 雅可比线性系统"></img>
          <span className="formula-number">(1.4)</span>
        </div>

        <p>其中<img src={variable1} alt="J_RR" className="inline-math" />为模型方程对油藏变量的导数的系数，<img src={variable2} alt="J_RW" className="inline-math" />为油藏方程对井变量的导数，<img src={variable3} alt="J_WR" className="inline-math" />为井方程对油藏变量的导数的系数，<img src={variable4} alt="J_WW" className="inline-math" />为井方程对井变量的导数的系数。</p>

        <p>一般来说，井方程和油藏方程的特点截然不同，将它们耦合在一起求解可能会破坏雅克比矩阵的一些性质，可以将(1.4)中井方程和油藏方程分开单独进行预条件，本案例只讨论油藏部分线性代数系统的求解。</p>

        <h4>模型的快速求解算法</h4>

        <p>根据雅克比系统(1.4)，我们可以得到对应油藏变量的子系统</p>

        <div className="equation-container">
          <img src={formula8} alt="公式8 - 油藏变量子系统"></img>
          <span className="formula-number">(1.5)</span>
        </div>

        <p>其中<img src={variable1} alt="J_RR" className="inline-math" />可展开成如下形式</p>

        <div className="equation-container">
          <img src={formula9} alt="公式9 - J_RR展开形式"></img>
        </div>

        <p>这里<img src={variable5} alt="J_PP" className="inline-math" />对应压力块，<img src={variable6} alt="J_S_aS_a" className="inline-math" />对应饱和度块，<img src={variable7} alt="J_P_aS_a" className="inline-math" />和<img src={variable8} alt="J_S_aP_a" className="inline-math" />对应着压力变量和饱和度变量间的耦合，<img src={formula10} alt="alpha=o,w" className="inline-math" />，为了讨论的方便，我们将油藏子系统(1.5)简记为</p>

        <div className="equation-container">
          <img src={formula11} alt="公式11 - 简化记法"></img>
          <span className="formula-number">(1.6)</span>
        </div>

        <p>经全隐式离散得到的子系统的系数矩阵通常规模大、非对称性强、条件数坏。Krylov子空间方法(KSM)对这类问题一般收敛很慢，因此通常会先对线性代数系统做预条件处理，转而求解一个较容易求解的等价代数系统，理想的预条件方法能使预处理后的矩阵条件数远小于原矩阵的条件数或者使预处理后矩阵的特征值分布变集中，同时具备较低的算子复杂度及内存复杂度，我们将针对线性代数系统设计一种分裂型预条件子，即形为</p>

        <div className="equation-container">
          <img src={formula12} alt="公式12 - 预条件代数系统"></img>
          <span className="formula-number">(1.7)</span>
        </div>

        <p>的预条件代数系统。</p>

        <h5>左预条件子<img src={variable9} alt="P_L^{-1}" className="inline-math" />的构造</h5>

        <p>在全隐式模拟中，<img src={variable10} alt="P_L^{-1}" className="inline-math" />通常可以弱化不同物理量之间的耦合关系，因此称之为解耦预条件子，块交错分解(ABF)方法最早由Bank等在1989年提出，用来削弱半导体模型中的漂移-扩散方程的物理变量间的耦合关系，1997年，Klie 将这种方法应用到油藏数值模拟中，方程(2.45)经ABF解耦预条件作用后，即</p>

        <div className="equation-container">
          <img src={formula13} alt="公式13 - ABF解耦后"></img>
          <p>或</p>
          <img src={formula14} alt="公式14 - ABF解耦后"></img>
        </div>

        <p>其中</p>
        <div className="equation-container">
          <img src={formula15} alt="公式15 - ABF解耦后"></img>
        </div>

        <p>可以验证，<img src={variable11} alt="J_RR" className="inline-math" />中非对角块阵的对角元都为0，实际上也就是说，ABF方法削弱了压力和饱和度变量间的耦合关系。而且，数值实验发现ABF解耦对雅克比矩阵的特征值起到了很好的聚集作用——绝大多数特征值分布在1.0附近，这大大改善了KSM方法的收敛性。注意，上述形式的<img src={variable12} alt="P_L^{-1}" className="inline-math" />仅为了描述的方便，在代码实现过程中，自由度一般按照网格单元序来排列，经全隐式离散得到的雅克比矩阵<img src={variable13} alt="J_RR" className="inline-math" />的元素均是<img src={variable14} alt="J_RR" className="inline-math" />的子块，这时<img src={variable15} alt="J_RR" className="inline-math" />其中<img src={variable16} alt="J_RR" className="inline-math" />，<img src={variable17} alt="J_RR" className="inline-math" />为网格单元数。计算<img src={variable18} alt="J_RR" className="inline-math" />只需将每个<img src={variable19} alt="J_RR" className="inline-math" />子块单独求逆即可。</p>

        <h5>右预条件子<img src={variable20} alt="P_R^{-1}" className="inline-math" />的构造</h5>

        <p>模型方程(1.1)-(1.3)的不同物理变量具有不同的解析特性：压力方程表现出椭圆性，饱和度方程主要表现出双曲性。椭圆型方程通常体现的是一种全局性，而双曲型方程一般具有局部性，这使得雅克比矩阵的不同子块也具有不同的代数性质。因此，我们针对不同性质的方程分别采用对应的解法是一种比较合理的思路。</p>

        <p>基于上述认识及子空间校正的思想，根据ABF预条件后得到的代数系统的特性(压力和饱和度变量局部解耦、饱和度变量之间也局部解耦)，我们首先在饱和度子空间用块高斯赛德尔(BGS)方法对饱和度方程进行一次近似求解，消除饱和度部分的高频误差部分。由于渗透率的强间断性导致压力方程是带强间断系数的椭圆方程，针对带间断系数的二阶椭圆型问题，Xu和Zhu从理论上证明了多层网格(MG)预条件的共轴梯度法的一致收敛性，即收敛速度与网格尺寸及系数跳跃的大小都无关，而直接应用MG作为迭代法却没有一致收敛性。受此启发，我们采用代数多层网格(AMG)预条件GMRES方法来近似求解上述压力方程代数系统。最后，我们在全空间再进行一次全局BGS求解。上述三阶段子空间校正方法的算法如下：</p>

        <ol className="algorithm-steps">
          <li>对饱和度方程进行一次(块)高斯磨光;</li>
          <li>利用 AMG 预条件 GMRES 方法对压力方程进行求解至一个固定精度;</li>
          <li>对雅可比方程进行一次整体块高斯磨光.</li>
        </ol>

        <p>在Step1和Step3中，我们采用顺风排序来提高BGS的稳定性。由于油藏中的流体是从压力高的网格单元流向压力低的单元，我们按照前一时间层计算出来的压力值大小，对磨光进行排序。在该序下，饱和度矩阵接近下三角阵，BGS可变得更加高效。在Step2中，为了减少内存使用量并降低算法的计算复杂度，将GMRES最大迭代次数设为一个较小的值，在案例的所有数值实验中我们将其设为15，且将压力方程的相对残量范数降到0.1时即停止。由于Step2中使用的AMG预条件GMRES方法是一个迭代法，所以多阶段预条件方法(算法1)是非线性的，因此外层迭代使用Flexible GMRES方法。针对目前油藏数值模拟主要在PC机或台式工作站环境上完成的现状，由于GMRES类方法的内存消耗量基本由重启回头数(restart number)决定，所以采用动态重启技术减少内存使用量。</p>

        <h5>2.2.3.2 压裂液滤失系数模型</h5>

        <p>水力压裂（Hydraulic fracturing）是人们利用地面高压泵组，以超过地层吸收能力的排量将高粘压裂液泵入井内而在井内憋起高压，当该压力克服井壁附近地应力并达到岩石抗张强度，就在地层产生裂缝。继续注入带有支撑剂的混砂液，使裂缝继续延伸并在其中充填支撑剂。停泵后，由于支撑剂对裂缝的支撑作用，在地层中形成足够长的、有一定导流能力的填砂裂缝，从而实现油气井增产和注水井增注。</p>

        <p>在压裂中，压裂液沿裂缝向地层滤失。一般认为，这种滤失受三种机理的控制即滤液粘度、地层流体的压缩性和压裂液的造壁性。压裂液滤失量的多少常以滤失系数的大小来表示。在计算受地层流体压缩性控制的滤失系数时，可导出下面的方程：</p>

        <div className="equation-container">
          <img src={formula16} alt="公式16 - 压裂液滤失系数模型"></img>
          <span className="formula-number">(2.1)</span>
        </div>

        <p><img src={variable21} alt="p(x,t)" className="inline-math" />为点x在t时刻的压力，<img src={variable22} alt="p_i" className="inline-math" />为原始地层压力，<img src={variable23} alt="η" className="inline-math" />为地层扩散系数。</p>

        <p>利用拉普拉斯变换可以求得该问题的精确解是：</p>

        <div className="equation-container">
          <img src={formula17} alt="公式17 - 拉普拉斯变换解"></img>
          <img src={formula18} alt="公式18 - 拉普拉斯变换解"></img>
          <span className="formula-number">(2.2)</span>
        </div>

        <p>其中<img src={variable24} alt="erfc(x)" className="inline-math" />为余误差函数，<img src={variable25} alt="erf(x)" className="inline-math" />为误差函数：</p>

        <div className="equation-container">
          <img src={formula19} alt="公式19 - 误差函数定义"></img>
          <span className="formula-number">(2.3)</span>
        </div>

        <h5>2.2.3.3 单相渗流的连续性方程</h5>

        <p>油气渗流必须遵循质量守恒定律（又称连续性原理）。该原理可表述为：对于地层中无源无汇的微小单元体，在其封闭表面内流体质量的变化量等于给定时间间隔内流入与流出该封闭表面的流体质量之差。根据这一原理建立的方程称为质量守恒方程或连续性方程。</p>

        {/* <p>连续性方程表达了运动要素（速度、密度、饱和度、浓度等）与时间和坐标变化的关系。</p> */}

        {/* <p>采用微分单元分析法建立质量守恒方程。在地层中取一微小六面体单元，设单元体内<img src={variable23} alt="M(x,y,z)" className="inline-math" />点处沿各坐标轴的质量速度分量分别为<img src={variable24} alt="ρv_x" className="inline-math" />、<img src={variable25} alt="ρv_y" className="inline-math" />、<img src={variable21} alt="ρv_z" className="inline-math" />。</p> */}
        <p>
          连续性方程的表现形式是给出运动要素（速度、密度、饱和度、浓度）随时间和坐标变化关系.
        </p>

        <div className="equation-container">
          <img src={formula20} alt="公式20 - 连续性方程"></img>
          {/* <span className="formula-number">(2.4)</span> */}
        </div>
        <p>下面利用微元分析法来建立质量守恒方程.在地层中取微小六面体单元，单元体中<img src={variable26} alt="M(x,y,z)" className="inline-math" /><img src={variable27} alt="M(x,y,z)" className="inline-math" />点质量速度在各坐标轴上分量为<img src={variable28} alt="ρv_x" className="inline-math" />、<img src={variable29} alt="ρv_y" className="inline-math" />、<img src={variable30} alt="ρv_z" className="inline-math" />.</p>

        <p>注意到点<img src={variable31} alt="M'" className="inline-math" /> <img src={variable32} alt="(x - dx/2, y, z)" className="inline-math" />，点<img src={variable33} alt="M''" className="inline-math" /> <img src={variable34} alt="(x + dx/2, y, z)" className="inline-math" />，</p>

        <p>故点<img src={variable31} alt="M'" className="inline-math" />的质量速度为</p>

        <div className="equation-container">
          <img src={formula21} alt="公式21 - M'点质量速度"></img>
        </div>

        <p>点<img src={variable33} alt="M''" className="inline-math" />的质量速度为</p>

        <div className="equation-container">
          <img src={formula22} alt="公式22 - M''点质量速度"></img>
        </div>

        <p>从而在<img src={variable35} alt="dt" className="inline-math" />时间内，沿<img src={variable36} alt="x" className="inline-math" />方向流入和流出单元体内的流体质量分别为</p>

        <div className="equation-container">
          <img src={formula23} alt="公式23 - x方向流入质量"></img>
        </div>

        <p>和</p>

        <div className="equation-container">
          <img src={formula24} alt="公式24 - x方向流出质量"></img>
        </div>

        <p>从而在<img src={variable35} alt="dt" className="inline-math" />时间内，沿<img src={variable36} alt="x" className="inline-math" />方向流入和流出的流体质量差为</p>

        <div className="equation-container">
          <img src={formula25} alt="公式25 - x方向质量差"></img>
        </div>

        <p>同理在<img src={variable35} alt="dt" className="inline-math" />时间内，沿<img src={variable37} alt="y" className="inline-math" />、<img src={variable38} alt="z" className="inline-math" />方向流入和流出的流体质量差为</p>

        <div className="equation-container">
          <img src={formula26} alt="公式26 - y方向质量差"></img>
        </div>

        <p>和</p>

        <div className="equation-container">
          <img src={formula27} alt="公式27 - z方向质量差"></img>
        </div>

        <p>在<img src={variable35} alt="dt" className="inline-math" />时间内，六面体内流入和流出的总的流体质量差为</p>

        <div className="equation-container">
          <img src={formula28} alt="公式28 - 总质量差"></img><img src={formula29} alt="公式29 - 孔隙体积"></img><img src={formula30} alt="公式30 - 流体质量"></img>
        </div>

        <p>经过六面体流入和流出的质量之所以会不一样，是因为在六面体内岩石和液体弹性能量的作用下，释放或储存一部分质量的结果（岩石的弹性表现为孔隙度的变化，液体弹性表现为液体密度的变化）。六面体内的质量变化应为：</p>

        <p>六面体内的孔隙体积：<img src={variable38} alt="φdxdydz" className="inline-math" /></p>

        {/* <div className="equation-container">
          <img src={formula30} alt="公式30 - 流体质量"></img>
        </div> */}


      </div>
    </div>
  );
};

export default Application;
