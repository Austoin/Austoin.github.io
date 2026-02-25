var posts=["2026/01/21/2-免费域名注册与Cloudflare绑定教程/","2025/06/08/1-hexo-blog-guide/","2025/11/04/3-vpn-record/","2026/01/15/4-vue-deployment-guide/","2026/02/24/5-leetcode-2026-2-24/","2026/02/25/6-leetcode-2026-2-25/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };