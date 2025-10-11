# 教学成果奖专栏网站

基于React构建的教学成果奖专栏网站，展示职业院校"三维构建、三位共育"生命价值观教育模式的探索与实践成果。

## 项目特色

- 🎯 **现代化设计**: 采用响应式设计，支持各种设备访问
- 🚀 **React技术栈**: 使用React 18 + React Router构建
- 📱 **移动端优化**: 完美适配手机、平板等移动设备
- 🎨 **美观界面**: 渐变色彩搭配，现代化UI设计
- ⚡ **性能优化**: 组件懒加载，提升页面加载速度
- 🔍 **交互体验**: 视频播放、返回顶部等丰富的交互功能

## 技术栈

- **前端框架**: React 18.2.0
- **路由管理**: React Router DOM 6.8.1
- **构建工具**: Create React App
- **样式方案**: CSS3 + Flexbox/Grid布局
- **开发语言**: JavaScript (ES6+)

## 项目结构

```
src/
├── components/          # 公共组件
│   ├── Header.js       # 页面头部
│   ├── Navigation.js   # 导航菜单
│   ├── Footer.js       # 页面底部
│   ├── VideoSection.js # 视频展示
│   └── BackToTop.js    # 返回顶部
├── pages/              # 页面组件
│   ├── Home.js         # 首页
│   ├── Achievement.js  # 成果推荐书
│   ├── Summary.js      # 成果总结报告
│   └── ...             # 其他页面
├── hooks/              # 自定义Hooks
│   ├── useVideoPlayer.js
│   └── useScrollToTop.js
├── App.js              # 主应用组件
└── index.js            # 应用入口
```

## 功能特性

### 🏠 首页功能
- 视频展示区域（支持模态框播放）
- 成果简介（可展开/收起）
- 特色亮点展示
- 成果数据统计

### 🧭 导航功能
- 响应式导航菜单
- 下拉子菜单
- 移动端汉堡菜单
- 当前页面高亮

### 📱 响应式设计
- 桌面端：1200px+ 宽屏显示
- 平板端：768px-1199px 适配
- 手机端：<768px 移动优化

### 🎬 视频功能
- 视频缩略图展示
- 模态框全屏播放
- 键盘ESC关闭
- 点击背景关闭

## 安装和运行

### 环境要求
- Node.js 14.0+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式运行
```bash
npm start
```
项目将在 http://localhost:3000 启动

### 生产构建
```bash
npm run build
```

### 运行测试
```bash
npm test
```

## 部署说明

1. 运行 `npm run build` 构建生产版本
2. 将 `build` 文件夹内容部署到Web服务器
3. 确保服务器支持HTML5 History API（SPA路由）

## 浏览器支持

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 项目配置

### 环境变量
创建 `.env` 文件配置环境变量：
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_VERSION=1.0.0
```

### 自定义配置
- 修改 `public/index.html` 中的页面标题和描述
- 更新 `src/components/Header.js` 中的标题内容
- 替换 `public/images/` 中的图片资源

## 开发指南

### 添加新页面
1. 在 `src/pages/` 目录创建新组件
2. 在 `src/App.js` 中添加路由
3. 在 `src/components/Navigation.js` 中添加菜单项

### 样式规范
- 使用CSS Modules或styled-components
- 遵循BEM命名规范
- 优先使用Flexbox和Grid布局

### 组件开发
- 使用函数式组件和Hooks
- 遵循单一职责原则
- 添加PropTypes类型检查

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 项目维护者：沧州医学高等专科学校
- 邮箱：contact@example.com
- 项目地址：https://github.com/username/teaching-achievement-website

## 更新日志

### v1.0.0 (2024-01-01)
- 初始版本发布
- 完整的页面结构和功能
- 响应式设计实现
- 视频播放功能
- 导航和路由系统

---

**注意**: 这是一个展示教学成果的静态网站，如需添加后端功能或数据库支持，请联系开发团队。
