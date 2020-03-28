# git

- error

$ git rm README_run.md
fatal: Unable to create 'C:/Users/Administrator/Desktop/weui/.git/index.lock': File exists.

Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue.

这个存储库中似乎正在运行另一个git进程，例如
由“ git commit”打开的编辑器。 请确保所有过程
终止，然后重试。 如果仍然失败，则执行git进程
可能早些时候在此存储库中崩溃了：
手动删除文件以继续。

~~~
执行以下代码清除当前进程
rm -f ./.git/index.lock
~~~

# logs

~~~
企业icon color：#4161ac；
~~~

~~~
企业微信其他Appicon color: #4161ac;
~~~