# 开玄 · 玄路

个人网站静态发布版本，保留原始页面、六个主题和开门动画。

## GitHub Pages

目标仓库：`Casion151/kaixuan-xuanroad`

目标网址：https://casion151.github.io/kaixuan-xuanroad/

在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，分支为 `main`，目录为 `/ (root)`。

样式、字体、图标和 JavaScript 资源均使用可兼容仓库子路径的地址。Vite 动态模块预加载地址从当前脚本位置解析，确保在 `/kaixuan-xuanroad/` 下正常加载。

仓库根目录包含 `index.html`、`favicon.svg`、`assets/` 和 `.nojekyll`。请保留 `.nojekyll`，确保下划线开头的字体目录正常发布。

这是已导出的静态版本，无需 Node.js 构建或数据库。原始可编辑项目保存在用户持有的 `KaiXuan-XuanRoad-Export.zip` 的 `source-code/` 目录中。更新网站时，请将新的静态导出文件替换到本仓库，并保留 `.nojekyll`。

## 计算神经科学教程

首页顶部的「教程」和「代码」栏目中的「计算神经科学入门：从资源到实践」均可进入教程。

- [逐步导读](tutorial.html)：中文入门单元与建模、神经数据分析、NeuroAI 阅读分支。
- [18 类资源地图](tutorial-map.html)：完整英文资源主稿及六步学习路线。
- [资源与文献索引](tutorial-resources.html)：课程、实践资源与 16 篇文献。

阅读页提供章节目录、本页搜索、阅读位置提示、打印样式、Markdown 与 BibTeX 下载。三份原稿的内容、引用和原有核查日期均予保留。教程的网页资源全部随站点托管。

教程来源为作者提供的 `tutorial_supplement_20260908.zip`。发布包含读者文稿和引用；制作脚本、抓取证据与缓存不作为阅读内容发布。其他文章条目仍为原始网站的示例内容。
