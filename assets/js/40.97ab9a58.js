(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{729:function(s,t,a){s.exports=a.p+"assets/img/postgresql.18df7fea.png"},730:function(s,t,a){s.exports=a.p+"assets/img/postgis.5da29f09.png"},905:function(s,t,a){"use strict";a.r(t);var e=a(29),p=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"postgis-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgis-安装"}},[s._v("#")]),s._v(" PostGIS 安装")]),s._v(" "),e("h3",{attrs:{id:"软件下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件下载"}},[s._v("#")]),s._v(" 软件下载")]),s._v(" "),e("p",[s._v("postgresql")]),s._v(" "),e("p",[s._v("https://www.postgresql.org/download/windows/")]),s._v(" "),e("p",[e("img",{attrs:{src:a(729),alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("选择 9.6.19 的版本；因为 postgis 只支持 9.6.12 的版本；")]),s._v(" "),e("p",[s._v("postgis-bundle-pg12-3.0.2x64.zip")]),s._v(" "),e("p",[s._v("http://download.osgeo.org/postgis/windows/pg12/")]),s._v(" "),e("h3",{attrs:{id:"将-postgresql-zip-解压"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-postgresql-zip-解压"}},[s._v("#")]),s._v(" 将 postgresql.zip 解压")]),s._v(" "),e("p",[s._v("不要放在含有中文名的文件夹中，直接右击解压到当前文件夹即可，例如我解压到了 D:\\pgsql 文件夹中；")]),s._v(" "),e("h3",{attrs:{id:"创建数据存放目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据存放目录"}},[s._v("#")]),s._v(" 创建数据存放目录")]),s._v(" "),e("p",[s._v("在解压后的文件夹中新建 data 文件夹；（D:\\pgsql\\data）")]),s._v(" "),e("h3",{attrs:{id:"初始化数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化数据库"}},[s._v("#")]),s._v(" 初始化数据库")]),s._v(" "),e("p",[s._v("使用管理员身份打开 cmd，运行命令： D:\\pgsql\\bin\\initdb.exe -D D:\\pgsql\\data -E UTF8 --locale=Chinese")]),s._v(" "),e("h3",{attrs:{id:"启动数据库-有两种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动数据库-有两种方式"}},[s._v("#")]),s._v(" 启动数据库，有两种方式")]),s._v(" "),e("h4",{attrs:{id:"以注册服务方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以注册服务方式"}},[s._v("#")]),s._v(" 以注册服务方式")]),s._v(" "),e("ol",[e("li",[s._v("注册服务")])]),s._v(" "),e("p",[s._v("D:\\pgsql\\bin\\pg_ctl.exe register -D D:\\pgsql\\data -Npgsql")]),s._v(" "),e("p",[s._v("-N 表示 windows 服务名称为 pgsql；")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("启动服务")])]),s._v(" "),e("p",[s._v("net start pgsql")]),s._v(" "),e("p",[s._v("如果你的安装没有错误，现在就应该可以起来了。")]),s._v(" "),e("p",[s._v("下面是一些服务的其他操作：")]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("关闭服务")])]),s._v(" "),e("p",[s._v("net stop pgsql")]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[s._v("卸载服务")])]),s._v(" "),e("p",[s._v("D:\\pgsql\\bin\\pg_ctl.exe unregister -D D:\\pgsql\\data -Npgsql")]),s._v(" "),e("h4",{attrs:{id:"直接启动方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接启动方式"}},[s._v("#")]),s._v(" 直接启动方式")]),s._v(" "),e("ol",[e("li",[s._v("启动")])]),s._v(" "),e("p",[s._v("D:\\pgsql\\bin\\pg_ctl.exe start -w -D D:\\pgsql\\data")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("关闭")])]),s._v(" "),e("p",[s._v("D:\\pgsql\\bin\\pg_ctl.exe stop -W -D D:\\pgsql\\data")]),s._v(" "),e("h3",{attrs:{id:"创建数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),e("p",[s._v("D:\\pgsql\\bin\\createdb.exe -E UTF8 geodb")]),s._v(" "),e("p",[s._v("D:\\pgsql\\bin\\dropdb.exe geodb")]),s._v(" "),e("h3",{attrs:{id:"创建用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 ")]),s._v("\ncreateuser "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("用户名"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如下")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会有是否创建 superuser 的选项，创建一个名为 postgres 的超级用户；")]),s._v("\nD:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("pgsql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("createuser.exe -s -r postgres\n")])])]),e("p",[s._v("选项:\n-c, --connection-limit=N 角色的连接限制(缺省: 没有限制)")]),s._v(" "),e("p",[s._v("-d, --createdb 此角色可以创建新数据库")]),s._v(" "),e("p",[s._v("-D, --no-createdb 此角色不可以创建新数据库")]),s._v(" "),e("p",[s._v("-e, --echo 显示发送到服务端的命令")]),s._v(" "),e("p",[s._v("-E, --encrypted 口令加密存储")]),s._v(" "),e("p",[s._v("-i, --inherit 角色能够继承它所属角色的权限")]),s._v(" "),e("p",[s._v("（这是缺省情况)")]),s._v(" "),e("p",[s._v("-I, --no-inherit 角色不继承权限")]),s._v(" "),e("p",[s._v("-l, --login 角色能够登录(这是缺省情况)")]),s._v(" "),e("p",[s._v("-L, --no-login 角色不能登录")]),s._v(" "),e("p",[s._v("-N, --unencrypted 口令不加密存储")]),s._v(" "),e("p",[s._v("-P, --pwprompt 给新角色指定口令")]),s._v(" "),e("p",[s._v("-r, --createrole 这个角色可以创建新的角色")]),s._v(" "),e("p",[s._v("-R, --no-createrole 这个角色没有创建其它角色的权限")]),s._v(" "),e("p",[s._v("-s, --superuser 角色将是超级用户")]),s._v(" "),e("p",[s._v("-S, --no-superuser 角色不能是超级用户")]),s._v(" "),e("p",[s._v("--help 显示此帮助信息, 然后退出")]),s._v(" "),e("p",[s._v("--version 输出版本信息, 然后退出")]),s._v(" "),e("p",[s._v("联接选项:")]),s._v(" "),e("p",[s._v("-h, --host=HOSTNAM 数据库服务器所在机器的主机名或套接字目录")]),s._v(" "),e("p",[s._v("-p, --port=PORT 数据库服务器端口号")]),s._v(" "),e("p",[s._v("-U, --username=USERNAME 联接用户 (不是要创建的用户名)")]),s._v(" "),e("p",[s._v("-w, -no-password 永远不提示输入口令")]),s._v(" "),e("p",[s._v("-W, --password 强制提示输入口令")]),s._v(" "),e("p",[s._v("查看系统中的所用用户：select * from pg_user\n删除一个用户：drop user dan;其中 dan 为用户名\n或者：D:\\pgsql\\bin\\dropuser.exe dan")]),s._v(" "),e("h3",{attrs:{id:"postgis-安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgis-安装-2"}},[s._v("#")]),s._v(" postgis 安装")]),s._v(" "),e("p",[s._v("解压 postgis-bundle-pg12-3.0.2x64.zip 到没有中文或者空格的目录。")]),s._v(" "),e("p",[s._v("然后修改 makepostgisdb_using_extensions.bat 文件，配置数据库以及 pg 数据库：")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PGPORT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PGHOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PGUSER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("postgres\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PGPASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gis\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("THEDB")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("geodb\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PGINSTALL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("D:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("pgsql\n")])])]),e("p",[s._v("然后双击执行这个 makepostgisdb_using_extensions.bat 文件即可；")]),s._v(" "),e("h3",{attrs:{id:"将空间数据导入-postgis-中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将空间数据导入-postgis-中"}},[s._v("#")]),s._v(" 将空间数据导入 PostGIS 中")]),s._v(" "),e("p",[s._v("上一步操作执行完之后，会在 pg 安装目录中 bin 文件夹中多出一个 postgisgui 的文件夹，找到 shp2pgsql-gui.exe 执行；")]),s._v(" "),e("p",[s._v("然后配置数据库连接，之后选择文件导入即可：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(730),alt:"在这里插入图片描述"}})]),s._v(" "),e("Valine")],1)}),[],!1,null,null,null);t.default=p.exports}}]);