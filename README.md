# Paper Insight

AI & CS 论文分析平台 — 汇集 ACL、ICML、EMNLP、NeurIPS 等顶会论文，提供浏览、搜索、词云分析、统计图表等功能。

## 快速开始

```bash
# 安装依赖
npm run install:all

# 启动服务
npm start
# 浏览器访问 http://localhost:8000

# 开发模式（前端热更新）
cd client && npm run dev
```

## 功能说明

### 首页

- 顶部显示论文总数、主会论文数、Findings 数量、细分方向数等统计卡片
- 快速导航入口：论文浏览、词云分析、统计图表
- 下方展示各细分研究方向的论文分布，点击可直接跳转到对应筛选结果

### 会议切换

- 页面顶部的会议栏支持切换不同会议和年份
- 内置 ACL 2025 数据，ICML / EMNLP / NeurIPS 支持按需加载
- 点击年份下拉框可选择不同年份，首次加载需等待数据获取

### 论文浏览

- 支持按一级方向、细分方向、会议类别筛选
- 支持标题和摘要关键词搜索
- 支持按会议类别、论文序号、标题字母排序
- 点击论文卡片查看详情页，包含中英文摘要、引用格式、相关论文推荐
- 每篇论文提供 Google Scholar 链接，方便查找原文

### 词云分析

- 基于名词性关键词提取，支持中英文切换
- 全局词云展示整体研究热点
- 按细分方向筛选，查看各领域的高频关键词
- 点击词云中的关键词，查看包含该词的相关论文
- 附带高频关键词 Top 30 柱状图和各方向关键词数量统计

### 统计图表

- 细分方向分布柱状图 (Top 20)
- 会议类别分布饼图
- 主会论文占比对比图
- 细分方向 × 会议类别热力图
- 热门细分方向排行榜，点击可查看对应论文

### 个人功能

- **收藏**: 在论文详情页收藏感兴趣的论文
- **历史**: 自动记录浏览过的论文
- **用户中心**: 查看使用统计、管理数据

### 主题切换

- 左侧边栏底部支持深色/浅色主题切换

## 本地开发

```bash
# 启动后端 API（端口 8000）
npm start

# 另开终端，启动前端开发服务器（端口 5173，自动代理 API）
cd client && npm run dev

# 构建生产版本
npm run build

# 导出静态数据（用于部署）
node scripts/export-data.js
```

## 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入仓库
3. Vercel 自动检测 `vercel.json`，一键部署
4. 后续 `git push` 自动更新

```bash
git add -A
git commit -m "更新说明"
git push
# Vercel 自动构建部署，约 1-2 分钟生效
```

## 技术栈

- **前端**: Vue 3 + TypeScript + Vite + Pinia + ECharts
- **后端**: Node.js + Express
- **部署**: Vercel (Serverless Functions + Static)

## 项目结构

```
├── client/               # Vue 3 SPA
│   ├── src/
│   │   ├── views/        # 页面组件
│   │   ├── components/   # 通用组件
│   │   ├── stores/       # Pinia 状态管理
│   │   └── composables/  # 组合式函数
│   └── public/data/      # 构建时生成的静态数据
├── server/               # Express 后端
│   ├── index.js          # 入口
│   ├── parser.js         # Markdown 解析
│   ├── keywords.js       # 关键词提取
│   └── classify.js       # 分类规则
├── api/                  # Vercel Serverless Functions
│   ├── external.js       # 外部会议论文代理
│   └── keywords.js       # 关键词查询
├── reports/              # 论文分类报告 (Markdown)
├── scripts/              # 数据管线脚本
└── vercel.json           # Vercel 部署配置
```

## 数据来源

- **ACL 2025**: ACL Anthology (4500+ 篇)
- **ICML / NeurIPS**: OpenReview API (按需获取)
- **EMNLP**: ACL Anthology (按需获取)
