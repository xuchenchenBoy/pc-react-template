var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c1d3ccc369de4f9bf9e88f7e8ab6f36c";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
// piwik统计
var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
// _paq.push(['setUserId', window.__INITIAL_STATE__.user.openId]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="//piwik.mdscj.com/piwik/";
_paq.push(['setTrackerUrl', u+'piwik.php']);
_paq.push(['setSiteId', '5']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();


!function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");
  gio('init','aeed6dd844bbc244', {});

//custom page code begin here

//custom page code end here

if(~location.href.indexOf('test')) {
  gio('config',{"dataCollect":"false"});
}
gio('send');

