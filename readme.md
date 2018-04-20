# omy note

## npm

> mock

- mock.js
- json-sever

> spider

- express
- request
- cheerio

## linux

> nginx

- brew search nginx
- brew install nginx
- brew info nginx
- nginx
- nginx -s reload
- nginx -s stop

> pm2
- npm install pm2
- pm2 start app.js
- pm2 list
- pm2 show app
- pm2 logs
- pm2 stop app
- pm2 delete app

## git

> git 命令

- 提交 :

```
$ git add 日记.txt                          -- 添加本地文件，全部：.

$ git commit -m "Test chanage message"      -- 提交更改,附加信息 

$ git push origin master                    -- 将更改推送到服务器的master分支

```



- 查看与对比状态 :

```
$ git status                                -- 查看版本库状态

$ git diff                                  -- 显示已写入缓存与已修改但尚未写入缓存的改动的区别

$ git diff -stat                            -- 显示diff摘要

$ git diff --cached                         -- 查看已缓存的改动

$ git diff HEAD                             -- 查看已缓存的与未缓存的所有改动

$ cp -R project project.2010-06-01.bak      -- 项目拷贝快照

```


- 分支与合并 :

```
$ git branch                                -- 列出本地分支

$ git branch (branchname)                   -- 创建新分支

$ git checkout (branchname)                 -- 切换到新分支

$ git checkout -b (branchname)              -- 创建并立即切换至新分支

$ git branch -d (branchname)                -- 删除分支

$ git merge (branchname)                    -- 合并分支到当前分支

$ git log                                   -- 显示一个分支中提交的更改记录

$ git log --oneline                         -- 显示一个分支中提交的更改记录简洁版本

$ git log --graph                           -- 显示分支合并的历史拓扑图

```

- 分享与更新 : 

```
$ git remote                                -- 列出远端别名

$ git push origin --delete (branchName)     -- 删除远端分支

```

- 其它 :

```
$ ls                                        -- 列出本地文件

$ echo 'test content' > test.txt            -- 添加 test.txt 并编辑了内容

$ cat test.txt                              -- 读取 test.txt

$ git rm -r --cached .                      -- .gitinore无效时先执行本条命令清除cache,清除追踪，之后add-commit-push

```

- 设置记住密码

```
// 默认15分钟
git config --global credential.helper cache
```

- 如果想自己设置时间

```
// 一个小时之后失效
git config credential.helper 'cache --timeout=3600'
```

- 长期存储密码

```
git config --global credential.helper store
```

