"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[6819],{3671:(n,e)=>{e.A=(n,e)=>{const t=n.__vccOpts||n;for(const[n,a]of e)t[n]=a;return t}},9999:(n,e,t)=>{t.r(e),t.d(e,{comp:()=>r,data:()=>l});var a=t(7847);const s={href:"https://github.com/Stirling-Tools/Stirling-PDF",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Fv)('<figure><img src="https://img.newzone.top/2024-01-16-02-15-55.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令"><span>部署命令</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.3&#39;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">stirling-pdf</span><span class="token punctuation">:</span>\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> frooodle/s<span class="token punctuation">-</span>pdf<span class="token punctuation">:</span>latest\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> <span class="token string">&#39;7581:8080&#39;</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token comment">#- /location/of/trainingData:/usr/share/tesseract-ocr/5/tessdata #Required for extra OCR languages</span>\n      <span class="token punctuation">-</span> /volume1/docker/s<span class="token punctuation">-</span>pdf/configs<span class="token punctuation">:</span>/configs\n      <span class="token comment">#- /location/of/customFiles:/customFiles/</span>\n      <span class="token comment">#- /location/of/logs:/logs/</span>\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> DOCKER_ENABLE_SECURITY=false\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),o={},r=(0,t(3671).A)(o,[["render",function(n,e){const t=(0,a.g2)("ExternalLinkIcon");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("p",null,[(0,a.Lk)("a",s,[(0,a.eW)("Stirling-PDF"),(0,a.bF)(t)]),(0,a.eW)(" 是开源的 PDF 文档工具箱，允许你对 PDF 文件执行各种操作，如拆分合并、转换、重新组织、添加图像、旋转、压缩等数十种功能，足够日常使用。")]),i])}]]),l=JSON.parse('{"path":"/services/dockers-on-nas/stirling-pdf.html","title":"Stirling-PDF：开源 PDF 处理工具","lang":"zh-CN","frontmatter":{"article":false,"title":"Stirling-PDF：开源 PDF 处理工具","order":31,"description":"Stirling-PDF 是开源的 PDF 文档工具箱，允许你对 PDF 文件执行各种操作，如拆分合并、转换、重新组织、添加图像、旋转、压缩等数十种功能，足够日常使用。 部署命令 ","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/stirling-pdf.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Stirling-PDF：开源 PDF 处理工具"}],["meta",{"property":"og:description","content":"Stirling-PDF 是开源的 PDF 文档工具箱，允许你对 PDF 文件执行各种操作，如拆分合并、转换、重新组织、添加图像、旋转、压缩等数十种功能，足够日常使用。 部署命令 "}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2024-01-16-02-15-55.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-27T06:39:06.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Stirling-PDF：开源 PDF 处理工具"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-27T06:39:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Stirling-PDF：开源 PDF 处理工具\\",\\"description\\":\\"Stirling-PDF 是开源的 PDF 文档工具箱，允许你对 PDF 文件执行各种操作，如拆分合并、转换、重新组织、添加图像、旋转、压缩等数十种功能，足够日常使用。 部署命令 \\"}"]]},"headers":[{"level":2,"title":"部署命令","slug":"部署命令","link":"#部署命令","children":[]}],"git":{"createdTime":1709015946000,"updatedTime":1709015946000,"contributors":[{"name":"wenxx123","email":"58379432+wenxx123@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.39,"words":118},"filePathRelative":"services/dockers-on-nas/stirling-pdf.md","localizedDate":"2024年2月27日","excerpt":"<p><a href=\\"https://github.com/Stirling-Tools/Stirling-PDF\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Stirling-PDF</a> 是开源的 PDF 文档工具箱，允许你对 PDF 文件执行各种操作，如拆分合并、转换、重新组织、添加图像、旋转、压缩等数十种功能，足够日常使用。</p>\\n<figure><img src=\\"https://img.newzone.top/2024-01-16-02-15-55.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}')}}]);