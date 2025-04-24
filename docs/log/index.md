# 漆黑烈焰使的记事本

## 将vite-press文档部署到Github Pages
具体操作步骤如下可以参考[vite-press部署到Github Pages](https://vitepress.dev/zh/guide/deploy#github-pages)
没有成功的话，可以尝试以下方法：
1. 在github创建一个仓库，创建时如果设置子路径那么vite-press文档的base需要设置为`/子路径/`。请参考[详情](https://vitepress.dev/zh/guide/deploy#setting-a-public-base-path)
2. 本地拉取项目
3. 在根目录下创建一个名为docs的文件夹，并将vite-press打包生成的dist目录中的所有文件复制到该文件夹中。
4. 推送到github
5. 开启github仓库的Github Pages功能
这样以后每次推送就会自动部署了。

## 向Github推送项目一直403错误
因为Github是国外的服务器，国内使用比较慢，所以需要设置代理。没有科学上网经验的小伙伴可以试试[ovo机场](https://008.ovofast.com)。实惠好用。使用ovo机场的代理工具可以设置代理端口，我们可以将这个端口设置到Git的代理配置中，以此来提升Git与Github的访问速度。
```bash
git config --global https.proxy http://127.0.0.1:your_proxy_port
```