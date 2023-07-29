module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', // 新增功能
      'update', // 更新功能
      'ui', // 样式改动
      'fix', // 修复功能bug
      'merge', // 合并分支
      'refactor', // 重构功能
      'perf', // 性能优化
      'revert', // 回退提交
      'style', // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等)
      'build', // 修改项目构建工具(例如 glup，webpack，rollup 的配置等)的提交
      'docs', // 文档新增、改动
      'test', // 增加测试、修改测试
      'chore', // 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
    ]],
    'scope-empty': [0],
    // 'scope-empty': [2, 'never'], 作用域不为空
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0],
  },
}
