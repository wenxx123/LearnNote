"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5707],{3671:(e,n)=>{n.A=(e,n)=>{const t=e.__vccOpts||e;for(const[e,a]of n)t[e]=a;return t}},2482:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>m,data:()=>k});var a=t(7847);const s={href:"https://github.com/whyour/qinglong",target:"_blank",rel:"noopener noreferrer"},o={href:"https://blog.csdn.net/u011027547/article/details/130703685",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Fv)('<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># https://github.com/whyour/qinglong/blob/develop/docker/docker-compose.yml</span>\n<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">web</span><span class="token punctuation">:</span>\n    <span class="token comment"># alpine 基础镜像版本</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> whyour/qinglong<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> qinglong\n    <span class="token comment"># debian-slim 基础镜像版本</span>\n    <span class="token comment"># image: whyour/qinglong:debian</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/qinglong/data<span class="token punctuation">:</span>/ql/data\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;5700:5700&quot;</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token comment"># 部署路径非必须，以斜杠开头和结尾，比如 /test/</span>\n      <span class="token key atrule">QlBaseUrl</span><span class="token punctuation">:</span> <span class="token string">&quot;/&quot;</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置注意：</p><ul><li>在运行脚本之前，请确保已安装所有必要的依赖。</li><li>定期运行：<code>0 0 7 * * ?</code> 表示每天 7 点触发。其中第一个数字代表秒，第二个数字代表分钟，第三个数字代表小时，第四个数字代表每月的日期，第五个数字代表月份，第六个数字代表每周的星期几。这些数字之间使用空格分隔。要表示不限制的时间段，可以使用 <code>*</code> 号，要表示定期运行的时间段，可以使用 <code>?</code> 替代，要表示间隔运行的时间段，可以使用 <code>*/数字</code> 替代。如果需要在同一个时间位上设置多个选项，可以使用逗号 <code>,</code> 连接，如果需要设置一个时间段，可以使用短划线 <code>-</code> 连接。对于每天的运行，可以在日期位或星期位使用 <code>?</code>。</li></ul><h2 id="京东-cookies" tabindex="-1"><a class="header-anchor" href="#京东-cookies"><span>京东 COOKIES</span></a></h2>',4),i={href:"https://m.jd.com/",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Lk)("li",null,'使用浏览器的开发者工具（F12）进入调试模式，选择 "network"（网络）。',-1),c=(0,a.Lk)("li",null,"点击页面右上方的「直接访问」，开发者工具中出现 log.gif 开头的记录。点击它，选择「Headers」>「Request headers」，复制出其中的 Cookie 内容。",-1),p=(0,a.Lk)("li",null,[(0,a.eW)("在复制出的 Cookies 中查找 "),(0,a.Lk)("code",null,"pt_key=XXX;pt_pin=xxx;"),(0,a.eW)(" 字段，并将其保存为变量 "),(0,a.Lk)("code",null,"JD_COOKIE"),(0,a.eW)("。如果找不到 log.gif 或 getinfo 的记录，则可尝试随意添加一个商品到购物车。")],-1),u=(0,a.Lk)("figure",null,[(0,a.Lk)("img",{src:"https://img.newzone.top/2023-11-26-06-31-20.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),(0,a.Lk)("figcaption")],-1),d={},m=(0,t(3671).A)(d,[["render",function(e,n){const t=(0,a.g2)("ExternalLinkIcon");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("p",null,[(0,a.Lk)("a",s,[(0,a.eW)("青龙面板"),(0,a.bF)(t)]),(0,a.eW)(" 是支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，但现在多被用于京东薅羊毛，比如领京东、价保。安装好 Docker 后的配置流程参考 "),(0,a.Lk)("a",o,[(0,a.eW)("青龙面板应用——安装依赖拉取仓库运行京东脚本（保姆级图文）"),(0,a.bF)(t)]),(0,a.eW)("。")]),l,(0,a.Lk)("ol",null,[(0,a.Lk)("li",null,[(0,a.eW)("在无痕模式下打开 "),(0,a.Lk)("a",i,[(0,a.eW)("https://m.jd.com/"),(0,a.bF)(t)]),(0,a.eW)(" 网站，并登录账户。")]),r,c,p]),u])}]]),k=JSON.parse('{"path":"/services/dockers-on-nas/qinglong.html","title":"青龙面板：定时任务管理","lang":"zh-CN","frontmatter":{"article":false,"title":"青龙面板：定时任务管理","order":84,"description":"青龙面板 是支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，但现在多被用于京东薅羊毛，比如领京东、价保。安装好 Docker 后的配置流程参考 青龙面板应用——安装依赖拉取仓库运行京东脚本（保姆级图文）。 配置注意： 在运行脚本之前，请确保已安装所有必要的依赖。 定期运行：0 0 7 * * ? 表示每...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/qinglong.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"青龙面板：定时任务管理"}],["meta",{"property":"og:description","content":"青龙面板 是支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，但现在多被用于京东薅羊毛，比如领京东、价保。安装好 Docker 后的配置流程参考 青龙面板应用——安装依赖拉取仓库运行京东脚本（保姆级图文）。 配置注意： 在运行脚本之前，请确保已安装所有必要的依赖。 定期运行：0 0 7 * * ? 表示每..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2023-11-26-06-31-20.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-27T06:39:06.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"青龙面板：定时任务管理"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-27T06:39:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"青龙面板：定时任务管理\\",\\"description\\":\\"青龙面板 是支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，但现在多被用于京东薅羊毛，比如领京东、价保。安装好 Docker 后的配置流程参考 青龙面板应用——安装依赖拉取仓库运行京东脚本（保姆级图文）。 配置注意： 在运行脚本之前，请确保已安装所有必要的依赖。 定期运行：0 0 7 * * ? 表示每...\\"}"]]},"headers":[{"level":2,"title":"京东 COOKIES","slug":"京东-cookies","link":"#京东-cookies","children":[]}],"git":{"createdTime":1709015946000,"updatedTime":1709015946000,"contributors":[{"name":"wenxx123","email":"58379432+wenxx123@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.79,"words":537},"filePathRelative":"services/dockers-on-nas/qinglong.md","localizedDate":"2024年2月27日","excerpt":"<p><a href=\\"https://github.com/whyour/qinglong\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">青龙面板</a> 是支持 Python3、JavaScript、Shell、Typescript 的定时任务管理平台，但现在多被用于京东薅羊毛，比如领京东、价保。安装好 Docker 后的配置流程参考 <a href=\\"https://blog.csdn.net/u011027547/article/details/130703685\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">青龙面板应用——安装依赖拉取仓库运行京东脚本（保姆级图文）</a>。</p>","autoDesc":true}')}}]);