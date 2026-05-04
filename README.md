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

## 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入仓库
3. Vercel 自动检测 `vercel.json`，一键部署
4. 后续 `git push` 自动更新

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
