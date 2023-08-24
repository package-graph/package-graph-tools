---
title: 指南 # 配置页面标题,同时生成 <title> 标签
description: 描述 # 配置页面简介，同时用于生成 <meta> 标签
keywords: [关键词] # 配置页面关键词，同时用于生成 <meta> 标签
---
## 使用说明

安装依赖
```bash
npm install
```
查看版本
```bash
ts-node --esm bin/index.ts -v
```
运行
```bash
ts-node --esm bin/index.ts analyze --depth 2 --path ./ --dev true
```
## 参数说明
| 参数        | 说明          | 默认值   |
|-----------|-------------|-------|
| --depth   | 递归深度        | 2     |
| --path    | 项目路径        | ./    |
| --dev     | 是否开发版本      | false |
| --version | 查看版本        | 无     |
| --help    | 查看帮助        | 无     |
| --json    | 结果存储到JSON文件 | 无     |



