import React from "react";
import "./PageTemplate.css";
import "./Application.css";

// 2.1.2的图片
import w1 from "../images/优秀科技论文一等奖.png";
import w2 from "../images/合作创新成果奖.png";
import w3 from "../images/科学技术进步二等奖.png";
import w4 from "../images/石化协会进步二等奖.png";
import w5 from "../images/石化自然一等奖.png";
import w6 from "../images/发明协会成果奖二等奖.png";
import w7 from "../images/统计入库证书.png";
const Section212 = () => {
  return (
    <div>
      <div>
        <h4>"数学+"教学科研类获奖7项</h4>
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
  );
};
export default Section212;