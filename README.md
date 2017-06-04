# Git 入门与实践
- 有图形化(Source Tree, 小乌龟 )，有命令行（git bash）

# 版本管理工具(每一次备份，就相当于一个版本)
- 自己电脑备份
- 公用电脑备份

## 配置git (一个电脑只要配置一次)
配置用户名和邮箱:
输入命令: 
配置用户名: `git config --global user.name "自己的名字"`
配置邮箱: `git config --global user.email "自己的邮箱"`
>补充，其实是保存了用户名和邮箱到 C:\Users\[用户名]\.gitconfig文件中

### 基础操作

> 既然只是一个工具，学习它无外乎就是记住它的使用方式，而记住使用方式最简单的办法就是：**多用、多尝试**

## 先是在自己电脑上备份
- 工作目录
  把写代码的项目文件夹，称之为工作目录


- 暂存区
  临时存储要放的代码

- 仓储
  备份代码的文件夹，称之为仓库(仓储)
  + 每个项目都有一个专门备份的文件夹
  + `git init` 来创建这个文件夹(在项目根目录)

> 暂存区和仓库都在.git文件夹中

## 步骤
- 0.写代码
- 1.先放到暂存区： `git add 文件`
- 2.放到仓库:  `git commit -m "注释"` // 是把暂存区的代码，放到仓库
- 0.写代码
- 1.先放到暂存区： `git add 文件`
- 2.放到仓库:  `git commit -m "注释"` // 是把暂存区的代码，放到仓库

## 补充命令:
- `git add -A`, 把所有上一次git commit 之后，修改过的文件全部添加到暂存区
- `git status` // 查看有哪些修改后的文件在暂存区，哪些不在



## 总结
vi 编辑器
配置用户信息:
git config --global user.name ""
git config --global user.email ""


git init(一个项目执行一次)
git add 文件名 / git add -A   // 大写的A
git commit -m "要写注释"

git status
git log

## git
文件有4个状态，三个区
工作区, (暂存区, 仓库).git

### 4种状态
- Untracked （未跟踪）
> 文件没有被添加到暂存区，也没有被提交过! 

- Unmodify (未修改)
> 自从上次提交后没有改过代码(提交之后，没有修改过代码，那么这个代码就是Unmodify状态)

- Modified (已修改)
>  自从上一次提交后，修改了文件的内容,那么文件的状态就会变为Modified

- Staged （暂存状态）
> 一旦，我把文件添加到暂区，那么这个文件的状态就变为了Staged


### 时光倒流
// 默认 head指向 master,就会把master中的提交的代码拿到工作区
- `git reset --hard  提交的id`
- `git reset --hard 53bd6a3cd5b9ff5782af4837985c1e3023412d23`

*注意，如果是回退到最近的一次提交的状态，不需要添加 commit_id*
*git reset --hard head*

<!--110-->
<!--10*10*10-->

*补充*
git log 只能看到 head指向之前的提交记录
git reflog 查看所有的操作记录


## 练习
- index.html
- 改三次