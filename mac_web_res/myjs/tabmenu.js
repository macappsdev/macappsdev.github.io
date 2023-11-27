//
// tab menu supports
//
//
// Exported functions
//
/* exported changeTab */

// Configs
var gTabCount                  = 4;                 // How many tabs you have
var gTabContentUlBaseId        = "nav_c";           // The tab <ul> element's base id.
var gTabALinkBaseId            = "nav_a";           // The tab <a> element's base id.
var gTabALinkActiveClassName   = "nav_a_active";    // The tab <a> element's active state(selected state)'s css-class-name.

// change to a specified tab by number. tabNumber is 1-based 
// for example: 
// tabNumber = 1: means select the first li under ul element
function changeTab(tabNumber)
{
    "use strict";
    
    // 1. changing the header tab control (<a> element)
    for (var idx=1; idx <= gTabCount; idx++)
    {
        var aLinkElementId = gTabALinkBaseId + "_" + idx.toString();
        var aLinkElement = document.getElementById(aLinkElementId);
        if (aLinkElement)
        {
            if (idx === tabNumber)
            {
                // this a link (<a>) should be selected.
                aLinkElement.className = gTabALinkActiveClassName;
            }
            else
            {
                // this a linek (<a>) should be a normal state.
                aLinkElement.className = "";
            }
        }
    }
    
    // 2. Changing the content.
    for (var i=1; i <= gTabCount; i++)
    {
        // Each element
        var contentElementId = gTabContentUlBaseId + "_" + i.toString();
        var contentElement = document.getElementById(contentElementId);
        if (contentElement)
        {
            var liElement = contentElement.parentNode;

            if (i === tabNumber)
            {
                // this tab will be selected.
                liElement.style.display = "block";
            }
            else
            {
                // other tab will be hide.
                liElement.style.display = "none";    
            }
        }
    }
}

