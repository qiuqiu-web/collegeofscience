import React from "react";

// 创建一个组件，名为 DrilTable
function DrilTable() {
  // 定义表格数据
  const data = [
    { type: 1, diameter: 152 },
    { type: 1, diameter: 152.3 },
    { type: 2, diameter: 215 },
    { type: 2, diameter: 215.9 },
    { type: 2, diameter: 222 },
    { type: 3, diameter: 222.2 },
    { type: 3, diameter: 222.22 },
    { type: 3, diameter: 222.25 },
    { type: 3, diameter: 222.3 },
    { type: 3, diameter: 223.3 },
  ];

  return (
    // 使用table标签创建表格
    <table border="1">
      <thead>
        <tr>
          <th>类型</th>
          <th>钻头直径</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.type}</td>
            <td>{row.diameter}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DrilTable;
