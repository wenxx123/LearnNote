"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[2499],{3671:(n,e)=>{e.A=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},5167:(n,e,a)=>{a.r(e),a.d(e,{comp:()=>d,data:()=>v});var s=a(7847);const t=(0,s.Fv)('<p>Emby 为家庭提供了一个强大的媒体服务器，但在配置过程中，记得为你的媒体库目录授权“Everyone”，以确保 Emby 能够无障碍地访问它。为此，请打开共享文件夹的权限设置，选择对应的系统用户，并确保其具有读写权限。</p><p>使用 Emby 客户端播放视频需要 Emby Premiere。一次性购买终身会员的价格为 119 美元，但在黑五期间，通常可以以 99 美元的折扣价格获得。此外，Emby 对蓝光格式如 ISO 支持有限。</p><h2 id="使用-tips" tabindex="-1"><a class="header-anchor" href="#使用-tips"><span>使用 tips</span></a></h2><h3 id="添加媒体库" tabindex="-1"><a class="header-anchor" href="#添加媒体库"><span>添加媒体库</span></a></h3><p>设置媒体库时，中国按简称“PRC”排列，在字母 P 下寻找。</p><h3 id="刮取元数据" tabindex="-1"><a class="header-anchor" href="#刮取元数据"><span>刮取元数据</span></a></h3>',6),i={href:"https://xiaoyaliu.notion.site/dc28a32c807d418691b83519fa523306",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Lk)("h3",{id:"移除合集",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#移除合集"},[(0,s.Lk)("span",null,"移除合集")])],-1),p=(0,s.Lk)("p",null,"如果你为家人设置了独立账户并设定了不同的媒体库权限，你会发现「合集」会自动显示在所有账户上。",-1),o=(0,s.Lk)("p",null,"登录相应的用户，在 Emby 设置界面选择「主屏幕」>「合集」，取消勾选「在主屏幕显示」。这样当前的账户就不会再显示合集信息了。然后在其他账户中也进行同样的操作，这样其他账户也不会再显示合集信息。尽管页面上会保留合集的菜单，但如果不想让敏感内容显示在合集中，可以在各自的账户中设置媒体文件夹权限。",-1),c=(0,s.Lk)("h3",{id:"安全地从外部访问",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#安全地从外部访问"},[(0,s.Lk)("span",null,"安全地从外部访问")])],-1),r={href:"https://www.bilibili.com/read/cv14814465/",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Fv)('<ol><li>确保你的家庭网络已设置了 DDNS（通常通过路由器完成）。</li><li>下载与你的域名匹配的 Tomcat 证书版本。</li><li>解压后，你会看到一个 pfx 文件和一个包含密码的 txt 文件。</li><li>将它们都放置在 config 目录的特定路径中。</li><li>接下来，在 Emby 的 <code>服务器 &gt; 网络</code> 设置中，输入你的公共端口和 DDNS 域名。</li><li>建议开启安全连接模式，这样可以更好地保护你的数据安全。</li></ol><figure><img src="https://img.newzone.top/2023-09-15-05-32-43.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码"><span>部署代码</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># https://hub.docker.com/r/linuxserver/emby</span>\n<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">emby</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/emby<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> emby\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> PUID=1026\n      <span class="token punctuation">-</span> PGID=100\n      <span class="token punctuation">-</span> TZ=Asia/Shanghai\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/emby/config<span class="token punctuation">:</span>/config\n      <span class="token comment"># 媒体库映射</span>\n      <span class="token punctuation">-</span> /volume1/tvshows<span class="token punctuation">:</span>/data/tvshows\n      <span class="token punctuation">-</span> /volume4/movies<span class="token punctuation">:</span>/data/movies\n      <span class="token punctuation">-</span> /volume3/Anime<span class="token punctuation">:</span>/data/anime\n      <span class="token punctuation">-</span> /volume4/Documentary<span class="token punctuation">:</span>/data/documentary\n      <span class="token punctuation">-</span> /volume4/Music/MV<span class="token punctuation">:</span>/data/MV\n      <span class="token punctuation">-</span> /volume4/Music/Audio<span class="token punctuation">:</span>/data/Audio\n      <span class="token comment">#- /opt/vc/lib:/opt/vc/lib #optional</span>\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 8096<span class="token punctuation">:</span><span class="token number">8096</span>\n      <span class="token punctuation">-</span> 8920<span class="token punctuation">:</span><span class="token number">8920</span>\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4),m={},d=(0,a(3671).A)(m,[["render",function(n,e){const a=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[t,(0,s.Lk)("p",null,[(0,s.eW)("建议用 tinyMediaManager 刮取影视元数据，具体设置参考小雅的"),(0,s.Lk)("a",i,[(0,s.eW)("教程"),(0,s.bF)(a)]),(0,s.eW)("。统一刮取规则，便于将来更换管理器时无需重设。")]),l,p,o,c,(0,s.Lk)("p",null,[(0,s.eW)("如果你计划从外部访问 Emby，请务必启用 HTTPS。具体步骤可以参考"),(0,s.Lk)("a",r,[(0,s.eW)("这里"),(0,s.bF)(a)]),(0,s.eW)("。简单来说：")]),u])}]]),v=JSON.parse('{"path":"/services/dockers-on-nas/emby.html","title":"Emby：家庭媒体中心","lang":"zh-CN","frontmatter":{"article":false,"title":"Emby：家庭媒体中心","order":1,"description":"Emby 为家庭提供了一个强大的媒体服务器，但在配置过程中，记得为你的媒体库目录授权“Everyone”，以确保 Emby 能够无障碍地访问它。为此，请打开共享文件夹的权限设置，选择对应的系统用户，并确保其具有读写权限。 使用 Emby 客户端播放视频需要 Emby Premiere。一次性购买终身会员的价格为 119 美元，但在黑五期间，通常可以以 ...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/emby.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Emby：家庭媒体中心"}],["meta",{"property":"og:description","content":"Emby 为家庭提供了一个强大的媒体服务器，但在配置过程中，记得为你的媒体库目录授权“Everyone”，以确保 Emby 能够无障碍地访问它。为此，请打开共享文件夹的权限设置，选择对应的系统用户，并确保其具有读写权限。 使用 Emby 客户端播放视频需要 Emby Premiere。一次性购买终身会员的价格为 119 美元，但在黑五期间，通常可以以 ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2023-09-15-05-32-43.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-27T06:39:06.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Emby：家庭媒体中心"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-27T06:39:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Emby：家庭媒体中心\\",\\"description\\":\\"Emby 为家庭提供了一个强大的媒体服务器，但在配置过程中，记得为你的媒体库目录授权“Everyone”，以确保 Emby 能够无障碍地访问它。为此，请打开共享文件夹的权限设置，选择对应的系统用户，并确保其具有读写权限。 使用 Emby 客户端播放视频需要 Emby Premiere。一次性购买终身会员的价格为 119 美元，但在黑五期间，通常可以以 ...\\"}"]]},"headers":[{"level":2,"title":"使用 tips","slug":"使用-tips","link":"#使用-tips","children":[{"level":3,"title":"添加媒体库","slug":"添加媒体库","link":"#添加媒体库","children":[]},{"level":3,"title":"刮取元数据","slug":"刮取元数据","link":"#刮取元数据","children":[]},{"level":3,"title":"移除合集","slug":"移除合集","link":"#移除合集","children":[]},{"level":3,"title":"安全地从外部访问","slug":"安全地从外部访问","link":"#安全地从外部访问","children":[]}]},{"level":2,"title":"部署代码","slug":"部署代码","link":"#部署代码","children":[]}],"git":{"createdTime":1709015946000,"updatedTime":1709015946000,"contributors":[{"name":"wenxx123","email":"58379432+wenxx123@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.16,"words":648},"filePathRelative":"services/dockers-on-nas/emby.md","localizedDate":"2024年2月27日","excerpt":"<p>Emby 为家庭提供了一个强大的媒体服务器，但在配置过程中，记得为你的媒体库目录授权“Everyone”，以确保 Emby 能够无障碍地访问它。为此，请打开共享文件夹的权限设置，选择对应的系统用户，并确保其具有读写权限。</p>\\n<p>使用 Emby 客户端播放视频需要 Emby Premiere。一次性购买终身会员的价格为 119 美元，但在黑五期间，通常可以以 99 美元的折扣价格获得。此外，Emby 对蓝光格式如 ISO 支持有限。</p>\\n<h2>使用 tips</h2>\\n<h3>添加媒体库</h3>\\n<p>设置媒体库时，中国按简称“PRC”排列，在字母 P 下寻找。</p>\\n<h3>刮取元数据</h3>","autoDesc":true}')}}]);