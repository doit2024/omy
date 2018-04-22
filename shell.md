# 变量

```
# 赋值
$ var=hello
$ var='gh woody'

# 输出
$ echo $var

# 传递
* 变量
$ var="hi, $var"

# 命令输出
$ var=`date`
$ var=`date +%Y%m%d`
```

# 环境变量

```
# 设置
$ PATH=$PATH:~/Desktop/sh

# 全局
$ env

# 局部
$ set

# 导出为全局（生存期：会话）
# 若要永久 见 生存期
$ export var
```

# 生存期
```
# bash初始化时调用
- /etc/profile
  - /etc/bash.bashrc
  - /etc/profile.d/*.sh
  
- $HOME/.bash_profile
- $HOME/.bash_login
- $HOME/.ptofile
  - $HOME/.bashrc
  
# 修改立即生效
$ source /etc/profile
```


# scripts

```
- 声明
#！/bin/bash

- 
```

# 别名
```
$ alias ll='ls -laF'
```
