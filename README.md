# 开玄 · 玄路

个人网站静态发布版本，保留原始页面、六个主题和开门动画。

## GitHub Pages

目标仓库：`Casion151/kaixuan-xuanroad`

目标网址：https://casion151.github.io/kaixuan-xuanroad/

在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，分支为 `main`，目录为 `/ (root)`。

样式、字体、图标和 JavaScript 资源均使用可兼容仓库子路径的地址。Vite 动态模块预加载地址从当前脚本位置解析，确保在 `/kaixuan-xuanroad/` 下正常加载。

仓库根目录包含 `index.html`、`favicon.svg`、`assets/` 和 `.nojekyll`。请保留 `.nojekyll`，确保下划线开头的字体目录正常发布。

这是已导出的静态版本，无需 Node.js 构建或数据库。原始可编辑项目保存在用户持有的 `KaiXuan-XuanRoad-Export.zip` 的 `source-code/` 目录中。更新网站时，请将新的静态导出文件替换到本仓库，并保留 `.nojekyll`。

文章列表目前为原始原型的示例内容；文章按钮尚未链接正文页面。
