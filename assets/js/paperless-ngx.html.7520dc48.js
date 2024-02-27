"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[349],{3671:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},8746:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>c});var e=a(7847);const p={href:"https://docs.paperless-ngx.com/",target:"_blank",rel:"noopener noreferrer"},t=(0,e.Fv)('<p>Paperless-ngx 对文档执行 OCR，添加可搜索和可选择的文本，甚至可以对仅使用图像扫描的文档进行添加。支持 PDF、图片、纯文本文件、Office 文档（Word、Excel、Powerpoint 和 LibreOffice 等效项）等。</p><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令"><span>部署命令</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># https://github.com/paperless-ngx/paperless-ngx/blob/main/docker/compose/docker-compose.portainer.yml</span>\n<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.4&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">paperlessbroker</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/library/redis<span class="token punctuation">:</span><span class="token number">7</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> paperlessbroker\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/redisdata<span class="token punctuation">:</span>/data\n\n  <span class="token key atrule">paperlessdb</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/library/postgres<span class="token punctuation">:</span><span class="token number">15</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> paperlessdb\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/pgdata<span class="token punctuation">:</span>/var/lib/postgresql/data\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">POSTGRES_DB</span><span class="token punctuation">:</span> paperless\n      <span class="token key atrule">POSTGRES_USER</span><span class="token punctuation">:</span> paperless\n      <span class="token key atrule">POSTGRES_PASSWORD</span><span class="token punctuation">:</span> paperless\n\n  <span class="token key atrule">paperlesswebserver</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/paperless<span class="token punctuation">-</span>ngx/paperless<span class="token punctuation">-</span>ngx<span class="token punctuation">:</span>latest\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> paperlesswebserver\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> paperlessdb\n      <span class="token punctuation">-</span> paperlessbroker\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&quot;9035:8000&quot;</span>\n    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>\n      <span class="token key atrule">test</span><span class="token punctuation">:</span>\n        <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-fs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-S&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--max-time&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:8000&quot;</span><span class="token punctuation">]</span>\n      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 30s\n      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s\n      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/data<span class="token punctuation">:</span>/usr/src/paperless/data\n      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/media<span class="token punctuation">:</span>/usr/src/paperless/media\n      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/export<span class="token punctuation">:</span>/usr/src/paperless/export\n      <span class="token punctuation">-</span> /volume1/docker/paperless<span class="token punctuation">-</span>ngx/consume<span class="token punctuation">:</span>/usr/src/paperless/consume\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">PAPERLESS_REDIS</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>//paperlessbroker<span class="token punctuation">:</span><span class="token number">6379</span>\n      <span class="token key atrule">PAPERLESS_DBHOST</span><span class="token punctuation">:</span> paperlessdb\n      <span class="token key atrule">USERMAP_UID</span><span class="token punctuation">:</span> <span class="token number">1026</span>\n      <span class="token key atrule">USERMAP_GID</span><span class="token punctuation">:</span> <span class="token number">100</span>\n      <span class="token comment"># paperless 支持的语言（已内置英语、德语、意大利语、法语）</span>\n      <span class="token comment"># See https://packages.debian.org/search?keywords=tesseract-ocr-&amp;searchon=names&amp;suite=buster</span>\n      <span class="token comment"># for available languages.</span>\n      <span class="token key atrule">PAPERLESS_OCR_LANGUAGES</span><span class="token punctuation">:</span> chi<span class="token punctuation">-</span>sim chi<span class="token punctuation">-</span>tra\n      <span class="token comment"># OCR 语言</span>\n      <span class="token key atrule">PAPERLESS_OCR_LANGUAGE</span><span class="token punctuation">:</span> eng+chi_sim\n      <span class="token key atrule">PAPERLESS_SECRET_KEY</span><span class="token punctuation">:</span> change<span class="token punctuation">-</span>me\n      <span class="token key atrule">PAPERLESS_TIME_ZONE</span><span class="token punctuation">:</span> Asia/Shanghai\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署完成后，需用 ssh 终端执行命令。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> paperlesswebserver <span class="token function">bash</span>\npython3 manage.py createsuperuser\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>依次输入 username、email、password。如果出现提示密码较弱，输入 y 继续。之后这些都可以在后台再修改。</p>',6),o={},l=(0,a(3671).A)(o,[["render",function(n,s){const a=(0,e.g2)("ExternalLinkIcon");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("p",null,[(0,e.Lk)("a",p,[(0,e.eW)("Paperless-ngx"),(0,e.bF)(a)]),(0,e.eW)(" 是一个开源文档管理系统，可将您的物理文档转换为可搜索的在线档案。")]),t])}]]),c=JSON.parse('{"path":"/services/dockers-on-nas/paperless-ngx.html","title":"Paperless-ngx：全文管理文档","lang":"zh-CN","frontmatter":{"article":false,"title":"Paperless-ngx：全文管理文档","order":32,"description":"Paperless-ngx 是一个开源文档管理系统，可将您的物理文档转换为可搜索的在线档案。 Paperless-ngx 对文档执行 OCR，添加可搜索和可选择的文本，甚至可以对仅使用图像扫描的文档进行添加。支持 PDF、图片、纯文本文件、Office 文档（Word、Excel、Powerpoint 和 LibreOffice 等效项）等。 部署命令...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/paperless-ngx.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Paperless-ngx：全文管理文档"}],["meta",{"property":"og:description","content":"Paperless-ngx 是一个开源文档管理系统，可将您的物理文档转换为可搜索的在线档案。 Paperless-ngx 对文档执行 OCR，添加可搜索和可选择的文本，甚至可以对仅使用图像扫描的文档进行添加。支持 PDF、图片、纯文本文件、Office 文档（Word、Excel、Powerpoint 和 LibreOffice 等效项）等。 部署命令..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-27T06:39:06.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-27T06:39:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Paperless-ngx：全文管理文档\\",\\"description\\":\\"Paperless-ngx 是一个开源文档管理系统，可将您的物理文档转换为可搜索的在线档案。 Paperless-ngx 对文档执行 OCR，添加可搜索和可选择的文本，甚至可以对仅使用图像扫描的文档进行添加。支持 PDF、图片、纯文本文件、Office 文档（Word、Excel、Powerpoint 和 LibreOffice 等效项）等。 部署命令...\\"}"]]},"headers":[{"level":2,"title":"部署命令","slug":"部署命令","link":"#部署命令","children":[]}],"git":{"createdTime":1709015946000,"updatedTime":1709015946000,"contributors":[{"name":"wenxx123","email":"58379432+wenxx123@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.07,"words":321},"filePathRelative":"services/dockers-on-nas/paperless-ngx.md","localizedDate":"2024年2月27日","excerpt":"<p><a href=\\"https://docs.paperless-ngx.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Paperless-ngx</a> 是一个开源文档管理系统，可将您的物理文档转换为可搜索的在线档案。</p>\\n<p>Paperless-ngx 对文档执行 OCR，添加可搜索和可选择的文本，甚至可以对仅使用图像扫描的文档进行添加。支持 PDF、图片、纯文本文件、Office 文档（Word、Excel、Powerpoint 和 LibreOffice 等效项）等。</p>\\n<h2>部署命令</h2>\\n<div class=\\"language-yaml\\" data-ext=\\"yml\\" data-title=\\"yml\\"><pre class=\\"language-yaml\\"><code><span class=\\"token comment\\"># https://github.com/paperless-ngx/paperless-ngx/blob/main/docker/compose/docker-compose.portainer.yml</span>\\n<span class=\\"token key atrule\\">version</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"3.4\\"</span>\\n<span class=\\"token key atrule\\">services</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token key atrule\\">paperlessbroker</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> docker.io/library/redis<span class=\\"token punctuation\\">:</span><span class=\\"token number\\">7</span>\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> paperlessbroker\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> unless<span class=\\"token punctuation\\">-</span>stopped\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /volume1/docker/paperless<span class=\\"token punctuation\\">-</span>ngx/redisdata<span class=\\"token punctuation\\">:</span>/data\\n\\n  <span class=\\"token key atrule\\">paperlessdb</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> docker.io/library/postgres<span class=\\"token punctuation\\">:</span><span class=\\"token number\\">15</span>\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> paperlessdb\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> unless<span class=\\"token punctuation\\">-</span>stopped\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /volume1/docker/paperless<span class=\\"token punctuation\\">-</span>ngx/pgdata<span class=\\"token punctuation\\">:</span>/var/lib/postgresql/data\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">POSTGRES_DB</span><span class=\\"token punctuation\\">:</span> paperless\\n      <span class=\\"token key atrule\\">POSTGRES_USER</span><span class=\\"token punctuation\\">:</span> paperless\\n      <span class=\\"token key atrule\\">POSTGRES_PASSWORD</span><span class=\\"token punctuation\\">:</span> paperless\\n\\n  <span class=\\"token key atrule\\">paperlesswebserver</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token key atrule\\">image</span><span class=\\"token punctuation\\">:</span> ghcr.io/paperless<span class=\\"token punctuation\\">-</span>ngx/paperless<span class=\\"token punctuation\\">-</span>ngx<span class=\\"token punctuation\\">:</span>latest\\n    <span class=\\"token key atrule\\">container_name</span><span class=\\"token punctuation\\">:</span> paperlesswebserver\\n    <span class=\\"token key atrule\\">restart</span><span class=\\"token punctuation\\">:</span> unless<span class=\\"token punctuation\\">-</span>stopped\\n    <span class=\\"token key atrule\\">depends_on</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> paperlessdb\\n      <span class=\\"token punctuation\\">-</span> paperlessbroker\\n    <span class=\\"token key atrule\\">ports</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> <span class=\\"token string\\">\\"9035:8000\\"</span>\\n    <span class=\\"token key atrule\\">healthcheck</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">test</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"CMD\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"curl\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"-fs\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"-S\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"--max-time\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"2\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"http://localhost:8000\\"</span><span class=\\"token punctuation\\">]</span>\\n      <span class=\\"token key atrule\\">interval</span><span class=\\"token punctuation\\">:</span> 30s\\n      <span class=\\"token key atrule\\">timeout</span><span class=\\"token punctuation\\">:</span> 10s\\n      <span class=\\"token key atrule\\">retries</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">5</span>\\n    <span class=\\"token key atrule\\">volumes</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token punctuation\\">-</span> /volume1/docker/paperless<span class=\\"token punctuation\\">-</span>ngx/data<span class=\\"token punctuation\\">:</span>/usr/src/paperless/data\\n      <span class=\\"token punctuation\\">-</span> /volume1/docker/paperless<span class=\\"token punctuation\\">-</span>ngx/media<span class=\\"token punctuation\\">:</span>/usr/src/paperless/media\\n      <span class=\\"token punctuation\\">-</span> /volume1/docker/paperless<span class=\\"token punctuation\\">-</span>ngx/export<span class=\\"token punctuation\\">:</span>/usr/src/paperless/export\\n      <span class=\\"token punctuation\\">-</span> /volume1/docker/paperless<span class=\\"token punctuation\\">-</span>ngx/consume<span class=\\"token punctuation\\">:</span>/usr/src/paperless/consume\\n    <span class=\\"token key atrule\\">environment</span><span class=\\"token punctuation\\">:</span>\\n      <span class=\\"token key atrule\\">PAPERLESS_REDIS</span><span class=\\"token punctuation\\">:</span> redis<span class=\\"token punctuation\\">:</span>//paperlessbroker<span class=\\"token punctuation\\">:</span><span class=\\"token number\\">6379</span>\\n      <span class=\\"token key atrule\\">PAPERLESS_DBHOST</span><span class=\\"token punctuation\\">:</span> paperlessdb\\n      <span class=\\"token key atrule\\">USERMAP_UID</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1026</span>\\n      <span class=\\"token key atrule\\">USERMAP_GID</span><span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">100</span>\\n      <span class=\\"token comment\\"># paperless 支持的语言（已内置英语、德语、意大利语、法语）</span>\\n      <span class=\\"token comment\\"># See https://packages.debian.org/search?keywords=tesseract-ocr-&amp;searchon=names&amp;suite=buster</span>\\n      <span class=\\"token comment\\"># for available languages.</span>\\n      <span class=\\"token key atrule\\">PAPERLESS_OCR_LANGUAGES</span><span class=\\"token punctuation\\">:</span> chi<span class=\\"token punctuation\\">-</span>sim chi<span class=\\"token punctuation\\">-</span>tra\\n      <span class=\\"token comment\\"># OCR 语言</span>\\n      <span class=\\"token key atrule\\">PAPERLESS_OCR_LANGUAGE</span><span class=\\"token punctuation\\">:</span> eng+chi_sim\\n      <span class=\\"token key atrule\\">PAPERLESS_SECRET_KEY</span><span class=\\"token punctuation\\">:</span> change<span class=\\"token punctuation\\">-</span>me\\n      <span class=\\"token key atrule\\">PAPERLESS_TIME_ZONE</span><span class=\\"token punctuation\\">:</span> Asia/Shanghai\\n</code></pre></div>","autoDesc":true}')}}]);