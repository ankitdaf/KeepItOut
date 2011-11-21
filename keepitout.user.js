

// ==UserScript==
// @name           Kio
// @namespace      http://www.ankitdaf.com/projects/KeepItOut/
// @include        http://*.facebook.com/*
// ==/UserScript==

var foo = document.getElementsByClassName('uiStreamStory');
i=0;
while (i<foo.length)
{
j = foo[i].innerHTML.toLowerCase();
if (j.search('repost') != -1  || j.search('apps.facebook.com') != -1 )
{
foo[i].parentNode.removeChild(foo[i]);
}
else if (j.search('post this') != -1  && j.search('status') != -1 )
{
foo[i].parentNode.removeChild(foo[i]);
}
else 
{
i++;
}
}
