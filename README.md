这个项目是用Create React App引导的。

public/index.html 是页面模板;
src/index.js 是JavaScript的入口点。
您可以删除或重命名其他文件。

你可以在里面创建子目录src。为了更快的重建，只有内部src的文件被Webpack处理。
你需要放入任何JS和CSS文件src，否则Webpack将不会看到它们。

只有里面的文件public可以使用public/index.html。
阅读以下使用JavaScript和HTML资源的说明。

npm start
在开发模式下运行应用程序。
打开http：// localhost：3000在浏览器中查看它。

npm run build
构建生产应用程序到build文件夹。
它在生产模式下正确捆绑React，并优化构建以获得最佳性能。
