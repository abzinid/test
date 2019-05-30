if(window.location.search == "?go=bing&m=1")
{
window.location.assign("https://www.bing.com");
}
if(window.location.search == "?go=bing")
{
window.location.assign("https://www.bing.com");
}
if(window.location.search == "?go=dropbox&m=1")
{
window.location.assign("dropbox.com");
}
if(window.location.search == "?go=dropbox")
{
window.location.assign("https://www.dropbox.com");
}

if(window.location.search == "/2019/05/test.html?go=dropbox&m=1")
{
window.location.assign("dropbox.com");
}
if(window.location.search == "/2019/05/test.html?go=dropbox")
{
window.location.assign("https://www.dropbox.com");
}
  /*else  if (value === 8) {
       clearInterval(intervalId); */     
    }
else if (location.href.includes('?')) { 
    history.pushState({}, null, location.href.split('?')[0]); 
    location.reload(true);
    clearTimeout(timer);
    
/* else if (location.href.includes('?')) { 
    history.pushState({}, null, location.href.split('?')[0]); */
   
    /*location.reload(true);*/
    /*function hideme(){  
        var span = document.getElementsById("timer");
        span.parentNode.removeChild(span);*/
}

