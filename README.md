# 用webapck打包wangEditor2的示例

下载使用wangEditor编辑器：http://wangeditor.github.io/

----

## 下载代码并运行

```
$ git clone https://github.com/wangfupeng1988/wangEditor2-width-webpack.git
$ cd wangEditor2-width-webpack
$ npm install
$ npm run start
$ open http://localhost:8080/
```

----

## 注意事项

由于wangEditor使用了css字体文件，因此需要在webpack打包时候用`url-loader`来处理，安装（`npm install url-loader --save-dev`）后，在`webpack.config.js`的配置如下：

```
    module: {
        loaders: [
            { 
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    }
```