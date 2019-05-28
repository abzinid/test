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
else if (location.href.includes('?')) { 
    history.pushState({}, null, location.href.split('?')[0]); 
}

