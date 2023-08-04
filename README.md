# package-graph-tools
概述

# 开发版本
## V1.0.0
### 使用说明

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
ts-node --esm bin/index.ts --depth 2 --path ./ --dev true
```
### 参数说明
| 参数        | 说明          | 默认值   |
|-----------|-------------|-------|
| --depth   | 递归深度        | 2     |
| --path    | 项目路径        | ./    |
| --dev     | 是否开发版本      | false |
| --version | 查看版本        | 无     |
| --help    | 查看帮助        | 无     |
| --json    | 结果存储到JSON文件 | 无     |


# 提交规范：
> 例：feat: 增加了一个新功能
冒号后面需要添加空格




## 发包规则
先行版本
当即将发布大版本改动前，但是又不能保证这个版本的功能 100% 正常，这个时候可以发布先行版本：
alpha: 内部版本
beta: 公测版本
rc: 候选版本(Release candiate)

比如：1.0.0-alpha.0、1.0.0-alpha.1、1.0.0-rc.0、1.0.0-rc.1等。

⚠️注意： 执行`release`命令会自动提交一次代码

