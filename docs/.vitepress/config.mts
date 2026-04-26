import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "《程序员修炼之道》中文翻译",
  description: "The Pragmatic Programmer 中文翻译",
  lang: 'zh-CN',
  base: '/pragmatic-programmer-zh/',

  srcDir: '..',
  srcExclude: ['docs/**', 'node_modules/**', 'book/**', 'dist/**', 'README.md', 'SUMMARY.md'],

  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '第一章', link: '/Chapter1/务实主义哲学' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          {
            text: '第一章 务实主义哲学',
            link: '/Chapter1/务实主义哲学',
            items: [
              { text: '话题 1 这是你的人生', link: '/Chapter1/这是你的人生' },
              { text: '话题 2 猫吃了我的源代码', link: '/Chapter1/猫吃了我的源代码' },
              { text: '话题 3 软件熵', link: '/Chapter1/软件熵' },
              { text: '话题 4 石汤和煮青蛙', link: '/Chapter1/石汤和煮青蛙' },
              { text: '话题 5 足够好的软件', link: '/Chapter1/足够好的软件' },
              { text: '话题 6 你的知识组合', link: '/Chapter1/你的知识组合' },
              { text: '话题 7 沟通', link: '/Chapter1/沟通' },
            ]
          },
          {
            text: '第二章 务实的方法',
            link: '/Chapter2/务实的方法',
            items: [
              { text: '话题 8 好设计的本质', link: '/Chapter2/好设计的本质' },
              { text: '话题 9 重复的恶魔', link: '/Chapter2/重复的恶魔' },
              { text: '话题 10 正交性', link: '/Chapter2/正交性' },
              { text: '话题 11 可逆性', link: '/Chapter2/可逆性' },
              { text: '话题 12 示踪子弹', link: '/Chapter2/示踪子弹' },
              { text: '话题 13 原型和便签', link: '/Chapter2/原型和便签' },
              { text: '话题 14 域语言', link: '/Chapter2/域语言' },
              { text: '话题 15 评估', link: '/Chapter2/评估' },
            ]
          },
          {
            text: '第三章 基本工具',
            link: '/Chapter3/基本工具',
            items: [
              { text: '话题 16 纯文本的力量', link: '/Chapter3/纯文本的力量' },
              { text: '话题 17 shell 游戏', link: '/Chapter3/shell' },
              { text: '话题 18 强大的编辑', link: '/Chapter3/强大的编辑' },
              { text: '话题 19 版本控制', link: '/Chapter3/版本控制' },
              { text: '话题 20 调试', link: '/Chapter3/调试' },
              { text: '话题 21 文本处理', link: '/Chapter3/文本处理' },
              { text: '话题 22 工程日记', link: '/Chapter3/工程日记' },
            ]
          },
          {
            text: '第四章 程序性妄想症',
            link: '/Chapter4/程序性妄想症',
            items: [
              { text: '话题 23 契约设计', link: '/Chapter4/契约设计' },
              { text: '话题 24 死程序不说谎', link: '/Chapter4/死程序不说谎' },
              { text: '话题 25 断言式编程', link: '/Chapter4/断言式编程' },
              { text: '话题 26 如何平衡资源', link: '/Chapter4/如何平衡资源' },
              { text: '话题 27 别开过头了', link: '/Chapter4/别开过头了' },
            ]
          },
          {
            text: '第五章 弯曲或折断',
            link: '/Chapter5/弯曲或折断',
            items: [
              { text: '话题 28 解耦', link: '/Chapter5/解耦' },
              { text: '话题 29 杂耍现实世界', link: '/Chapter5/杂耍现实世界' },
              { text: '话题 30 转换编程', link: '/Chapter5/转换编程' },
              { text: '话题 31 继承税', link: '/Chapter5/继承税' },
              { text: '话题 32 配置', link: '/Chapter5/配置' },
            ]
          },
          {
            text: '第六章 并发',
            link: '/Chapter6/并发',
            items: [
              { text: '话题 33 断开时间耦合', link: '/Chapter6/断开时间耦合' },
              { text: '话题 34 共享状态不正确', link: '/Chapter6/共享状态不正确' },
              { text: '话题 35 Actors 和进程', link: '/Chapter6/actors和进程' },
              { text: '话题 36 黑板', link: '/Chapter6/黑板' },
            ]
          },
          {
            text: '第七章 当你编程时',
            link: '/Chapter7/当你编程时',
            items: [
              { text: '话题 37 聆听你的蜥蜴脑', link: '/Chapter7/聆听你的蜥蜴脑' },
              { text: '话题 38 巧合编程', link: '/Chapter7/巧合编程' },
              { text: '话题 39 算法速度', link: '/Chapter7/算法速度' },
              { text: '话题 40 重构', link: '/Chapter7/重构' },
              { text: '话题 41 代码测试', link: '/Chapter7/代码测试' },
              { text: '话题 42 基于属性的测试', link: '/Chapter7/基于属性的测试' },
              { text: '话题 43 在某处保持安全', link: '/Chapter7/在某处保持安全' },
              { text: '话题 44 命名', link: '/Chapter7/命名' },
            ]
          },
          {
            text: '第八章 项目之前',
            link: '/Chapter8/项目之前',
            items: [
              { text: '话题 45 需求坑', link: '/Chapter8/需求坑' },
              { text: '话题 46 解决不可能的难题', link: '/Chapter8/解决不可能的难题' },
              { text: '话题 47 敏捷的本质', link: '/Chapter8/敏捷的本质' },
            ]
          },
          {
            text: '第九章 务实的项目',
            link: '/Chapter9/务实的项目',
            items: [
              { text: '话题 48 务实的团队', link: '/Chapter9/务实的团队' },
              { text: '话题 49 椰子不要切碎', link: '/Chapter9/椰子不要切碎' },
              { text: '话题 50 实用入门套件', link: '/Chapter9/实用入门套件' },
              { text: '话题 51 让用户满意', link: '/Chapter9/让用户满意' },
              { text: '话题 52 傲慢与偏见', link: '/Chapter9/傲慢与偏见' },
            ]
          },
          {
            text: '第十章 刊后语',
            link: '/Chapter10/刊后语',
          },
        ]
      }
    ],

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dr-birdkiwi/pragmatic-programmer-zh' }
    ],

    editLink: {
      pattern: 'https://github.com/dr-birdkiwi/pragmatic-programmer-zh/edit/master/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新'
    },

    outline: {
      label: '本页目录'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
