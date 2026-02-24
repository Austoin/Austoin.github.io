var posts=["2025/06/08/hexo-blog-guide/","2025/11/04/vpn-record/","2026/01/21/免费域名注册与Cloudflare绑定教程/","2026/01/15/vue-deployment-guide/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };