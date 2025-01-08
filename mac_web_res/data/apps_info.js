// 
// Apps information & Html generation.
//

// Configs. 
var gMaxSlideshowAppsCount = 5;                  // Max app count for slideshow(top area) section, it shoulde be great than 1 and less than apps count.
var gMaxAvailableAppsCountForAppShowcase = 9999; // Max app count for show case section. Set to a big number(e.g: 9999) to show all of the apps.

//
// Exported functions
//
/*
 * getMaxSlideshowAppsCount()
 * Return a max slideshow apps count on the top area.
 */
/* exported getMaxSlideshowAppsCount */

/*
 * getAllAppsInfoArray()
 * Return an array that contains all the apps (instances of AppItemInfo)
 */
/* exported getAllAppsInfoArray */

/*
 * getPrivacyPolicyServicesNamesString()
 * Return a string that contains all of the team names.
 */
/* exported getPrivacyPolicyServicesNamesString */

/* 
 * generateAllAppsHtmlForProducts()
 * Generate html code for all products
 */
/* exported generateAllAppsHtmlForProducts */


/*
 * generateAllAppsHtmlForAppShowcase()
 * Generate html code for app showcase section.
 */
/* exported generateAllAppsHtmlForAppShowcase */

/* 
 * generateAppHtmlForSlideshowWithIndex(indexNumber, bgCssColor)
 * Use this method to get the specified index number for your slide show htmlCode. 
 * @para indexNumber: zero-based index.
 * @para bgCssColor: Slideshow bg color, such as "#f0f0f0"
 * @return 1. The html code fothe app at index with bgColor.
 *         2. Or an empty string ""
 */
/* exported generateAppHtmlForSlideshowWithIndex */
//
//  End-of-exported-functions
//

// **** Warning: Dont touch the following variables ****
// NOTE: PlEASE DONT use the following varibale,
// Use the function way instead.
var gCachedAllAppsArray = [];

// Define class AppItemInfo
function AppItemInfo()
{
    "use strict";
    
    // Properties
    this.appName      = "";     // App Name
    this.appTeamName  = "";     // App Team Name (defaults to "<App Name> Team")
    this.iconBaseName = "";     // The app icon base name, e.g. set to "abc", you must provide a "abc.png" file.
    this.masUrl       = "";     // Mac App Store URL
    this.intro        = "";     // A very short line words that descript this app 
    this.desc         = "";     // App Description
    this.slideBgColor = "";     // A color(CSS Color) used when this app is displayed on the top slideshow section. 
    this.srcUrl       = "";     // Source code URL

    // Instance Methods
    this.getAppName = function() {
        return this.appName;
    };

    this.getAppTeamName = function() {
        if (this.appTeamName) {
            return this.appTeamName;
        }

        return this.appName + " Team";
    };

    this.getDownloadOnMASUrl = function() 
    {
        var returnUrl = this.masUrl;    // For windows, Only need to return the mas URL.
        
        /*
        // set variables
        var short_link_app_name = "";
        
        // 1. first we need to get the "short link name"
        var tmpMASUrl = this.masUrl;
        var urlString = tmpMASUrl.toLowerCase();
        
        var startStr = "/app/";
        var endStr = "/id";
        var startIndex = urlString.indexOf(startStr);
        if (startIndex >= 0)
        {
            var fromIndex = startIndex + startStr.length;
            var endIndex = urlString.indexOf(endStr, fromIndex);
            if (endIndex > fromIndex)
            {
                short_link_app_name = urlString.substring(fromIndex, endIndex);
            }
        }
        
        // 2. generate the download shoart link
        if (short_link_app_name.length > 0)
        {
            var reg = /-/gi;    // gi: global and ignore options.
            var stripped_app_name = short_link_app_name.replace(reg, '');
            var company_name      = "hongchen";
            
            returnUrl = "http://appstore.com/mac/" + company_name + "/" + stripped_app_name;
        }
        */

        return returnUrl;
    };
    
    this.getMoreInfoUrl = function() {
        // Note: The first argument has no quotation marks (' or "").
        // var str = this.masUrl.replace(/ls=1&/gi, '');
        var str = this.masUrl;
        return str;
    };
    
    this.getIntro = function() {
        return this.intro;
    };
    
    this.getDescription = function() {
        return this.desc;
    };
        
    this.getDetails = function() {
        var details = "app name is:" + this.appName + ", masUrl is:(" + this.masUrl + ")";
        return details;
    };

    this.getBigAppIconName = function() {
        return this.iconBaseName + ".png";
    };
    
    this.getSmallAppIconName = function() {
        return this.iconBaseName + ".png";
    };
    
    this.getSlideBgColor = function() {
        return this.slideBgColor;
    };

    this.getSrcUrl = function() {
        return this.srcUrl;
    };
}

/*
    Return an array that contains all the apps (instances of AppItemInfo)

    *** Note ***:
    1. masURL property is made from apple's link maker:
        * [Deprecated] Link maker: `https://linkmaker.itunes.apple.com/en-us`
        * App Store Marketing Tools: `https://tools.applemediaservices.com/app-store`

    2. download url is composed from here:
    https://developer.apple.com/library/content/qa/qa1633/_index.html
    
    Template:
    ```
        var  = new AppItemInfo();
        .slideBgColor = "#000000";
        .appName      = "App Name";
        .iconBaseName = "app_icon";
        .masUrl       = "https://apple.co/XXXXXXX";
        .intro        = "short intro";
        .desc         = "long description";
        .srcUrl       = "";

        // allAppsArray.push();
    
    ```
*/
function getAllAppsInfoArray()
{
    "use strict";
    
    if (gCachedAllAppsArray && gCachedAllAppsArray.length > 0)
    {
        // This array is already created before. do nothing.
        // do nothing
    }
    else
    {
        // initialize all the app data.
        var allAppsArray = [];

        // Init apps data array.
        // 1. Docx Editor app
        var solewriter = new AppItemInfo();
        solewriter.slideBgColor = "#9DCFFF";
        solewriter.appName      = "Docx Editor";
        solewriter.iconBaseName = "sole_writer_icon";
        solewriter.masUrl       = "https://apple.co/46zdRCT";
        solewriter.intro        = "Full-featured word processor for Mac";
        solewriter.desc         = "Docx Editor is a word processor for Mac that is based on OpenOffice and LibreOffice. Docx Editor is a cute, quick, fully functional and easy-to-use Word Processor.";
        solewriter.srcUrl       = "https://soleoffice.com/opensource/zips/DocxEditor.zip";

        // Add app to array
        allAppsArray.push(solewriter);        // solewriter

        // 2. XLSX Editor app
        var xlsxeditor = new AppItemInfo();
        xlsxeditor.slideBgColor = "#1F7347";
        xlsxeditor.appName      = "XLSX Editor";
        xlsxeditor.iconBaseName = "xlsx_editor_icon";
        xlsxeditor.masUrl       = "https://apple.co/3B5X942";
        xlsxeditor.intro        = "Fully functional, easy-to-use spreadsheet editor for Mac";
        xlsxeditor.desc         = "XLSX Editor is a spreadsheet editor for Mac that is based on OpenOffice and LibreOffice. XLSX Editor is a powerful, quick, fully functional, easy-to-use spreadsheet editor.";
        xlsxeditor.srcUrl       = "https://soleoffice.com/opensource/zips/XLSXEditor.zip";

        allAppsArray.push(xlsxeditor);
    
        // 3. Full Video Player app
        var video_player = new AppItemInfo();
        video_player.slideBgColor = "#303030";
        video_player.appName      = "Full Video Player";
        video_player.iconBaseName = "video_player_icon";
        video_player.masUrl       = "https://apple.co/42ii6Ck";
        video_player.intro        = "Feature-rich media player designed for Mac";
        video_player.desc         = "Full Video Player is a feature-rich media player for Mac that is based on iina. The ultimate media player that can handle almost any file type, including 4K/1080P/720P HD videos and normal/lossless audio.";
        video_player.srcUrl       = "https://soleoffice.com/opensource/zips/FullVideoPlayer.zip";

        // Add to array
        allAppsArray.push(video_player);

        // After add all the apps data we need to save to the cache.
        // Save to the cache
        gCachedAllAppsArray = allAppsArray;
    }

    // here the cache should not be empty
    // return this array
    return gCachedAllAppsArray;
}

/*
 * getPrivacyPolicyServicesNamesString()
 * Return a string that contains all the team names.
 */
function getPrivacyPolicyServicesNamesString()
{
    "use strict";

    // return value
    var teamNamesString = '"SoleOffice", "SoleOffice Team", "SoleWriter", "SoleWriter Team",';

    // generate html codes for all the products
    var allAppsArray = getAllAppsInfoArray();
    for (var idx = 0; idx < allAppsArray.length; idx++)
    {
        var appItemInfo       = allAppsArray[idx];
        var appName           = appItemInfo.getAppName();
        var appTeamName       = appItemInfo.getAppTeamName();

        // Compose team names to a string
        teamNamesString += ' "' + appName + '",';
        teamNamesString += ' "' + appTeamName + '",';
    }

    // Append we us and our
    teamNamesString += ' "we", "us" or "our"';

    // Returns the value
    return teamNamesString;
}

/*
 * slideshow section
 */
function generateAppHtmlForSlideshowWithAppItemInfo(appItemInfo, bgCssColor)
{
    "use strict";
    
    // return value
    var htmlString = "";
    
    // get each item
    var appName           = appItemInfo.getAppName();
    var appDescription    = appItemInfo.getDescription();
    var appIntro          = appItemInfo.getIntro();
    var appIconName       = appItemInfo.getBigAppIconName();
    var appDownUrl        = appItemInfo.getDownloadOnMASUrl();
    var appMoreInfoUrl    = appItemInfo.getMoreInfoUrl();
    var bgColorAttr       = "background-color:" + bgCssColor + ";";
    
    // set
    var appIconAddress    = 'mac_web_res/data/' + appIconName;
    var downloadImgHtml   = '<img src="mac_web_res/img/download_on_the_mas.png" alt="Download on the Mac App Store.">';
    var readmoreImgHtml   = '<img src="mac_web_res/img/btn_readmore.png" alt="Read more.">';
    
    // generate html code
    htmlString += '<div class="slideshow_item_container" style="' + bgColorAttr + '">';
    htmlString += '  <table class="slideshow_item_table" border="0" cellspacing="0">';
    htmlString += '    <tr>';
    htmlString += '      <td class="slideshow_item_icon_td">';
    htmlString += '        <div class="slideshow_item_icon_box">';
    htmlString += '          <a target="_blank" href="' + appMoreInfoUrl + '"><img src="' + appIconAddress + '" alt="' + appName + '"></a>';
    htmlString += '        </div>';
    htmlString += '      </td>';
    htmlString += '      <td class="slideshow_item_texts_td">';
    htmlString += '        <div class="slideshow_item_texts_box">';
    htmlString += '          <a target="_blank" href="' + appMoreInfoUrl + '"><h1>' + appName + '</h1></a>';
    htmlString += '          <h2>' + appIntro + '</h2>';
    htmlString += '          <p>' + appDescription + '</p>';
    htmlString += '          <a class="slideshow_item_download" target="_blank" href="' + appDownUrl + '">' + downloadImgHtml + '</a>';
    htmlString += '          <a class="slideshow_item_readmore" target="_blank" href="' + appMoreInfoUrl + '">' + readmoreImgHtml + '</a>';
    htmlString += '        </div>';
    htmlString += '      </td>';
    htmlString += '    </tr>';
    htmlString += '  </table>';
    htmlString += '</div>';
    
    return htmlString;
}

/* 
 * Return a max slideshow apps count on the top area.
 */
function getMaxSlideshowAppsCount()
{
    "use strict";

    /* We need do a check */
    var tmpAllAppsArray = getAllAppsInfoArray();
    var tmpAllAppsCount = tmpAllAppsArray.length;

    /* I just some apps info from allAppsInfoArray. */
    var neededCount = Math.min(gMaxSlideshowAppsCount, tmpAllAppsCount);

    return neededCount;
}

/* 
 * Use this method to get the specified index number for your slide show htmlCode. 
 * @para indexNumber: zero-based index.
 * @para bgCssColor: Slideshow bg color, such as "#f0f0f0"
 * @return 1. The html code fothe app at index with bgColor.
 *         2. Or an empty string ""
 */
function generateAppHtmlForSlideshowWithIndex(indexNumber, bgCssColor)
{
    "use strict";
    
    // return value
    var htmlString = "";
    
    // set variables
    var allAppsArray = getAllAppsInfoArray();
    var allAppsCount = allAppsArray.length;
    
    if (indexNumber >= 0 && indexNumber < allAppsCount)
    {
        var appItemInfo = allAppsArray[indexNumber];
        htmlString = generateAppHtmlForSlideshowWithAppItemInfo(appItemInfo, bgCssColor);
    }
    
    return htmlString;
}


/* 
 *
 *  All products section 
 */
/* Generate html code for all products */
function generateAllAppsHtmlForProducts()
{
    "use strict";
    
    // return value
    var htmlCode = "";
    
    // generate html codes for all the products
    var allAppsArray = getAllAppsInfoArray();
    for (var idx = 0; idx < allAppsArray.length; idx++)
    {
        var appItemInfo       = allAppsArray[idx];
        var appName           = appItemInfo.getAppName();
        var appDescription    = appItemInfo.getDescription();
        var appIconName       = appItemInfo.getSmallAppIconName();
        var appDownUrl        = appItemInfo.getDownloadOnMASUrl();
        var appMoreInfoUrl    = appItemInfo.getMoreInfoUrl();

        // Generate the src link if needed
        var appSrcUrl         = appItemInfo.getSrcUrl();
        var srcElementHtmlStr = appSrcUrl === '' ? '' : '<a id="product_source_code_button" href="' + appSrcUrl + '" target="_blank">Source code</a>';

        // Genereate the html code here.
        var appIconStyle    = 'background-size:128px 128px; background-repeat:no-repeat; background-position: center; background-image:url(mac_web_res/data/' + appIconName + ');';
        
        htmlCode += '<div class="product_tile">';
        htmlCode += '    <table class="product_info_table" border="0">';
        htmlCode += '      <tr>';
        htmlCode += '        <td>';
        htmlCode += '          <a href="' + appMoreInfoUrl + '" class="product_icon" target="_blank" style="' + appIconStyle + '"></a>';
        htmlCode += '        </td>';
        htmlCode += '        <td>';
        htmlCode += '          <a href="' + appMoreInfoUrl + '" class="product_title" target="_blank">' + appName + '</a>';
        htmlCode += '          <p>' + appDescription + '</p>';
        htmlCode += '        </td>';
        htmlCode += '        <td>';
        htmlCode += '            <a href="' + appDownUrl + '" class="product_download_appstore" target="_blank"></a>';
        htmlCode += '            <a href="' + appMoreInfoUrl + '" class="product_more_info_button" target="_blank"></a>';
        htmlCode +=              srcElementHtmlStr;
        htmlCode += '        </td>';
        htmlCode += '      </tr>';
        htmlCode += '    </table>';
        htmlCode += '</div>';
    }
    
    return htmlCode;
}


/* get the number of apps with count. */
function getAppsInfoArrayWithCount(count)
{
    "use strict";
    
    // return value
    var retArray = [];
    
    // find the specified apps count
    var allAppsArray = getAllAppsInfoArray();
    var allAppsCount = allAppsArray.length;
    var neededCount = Math.min(count, allAppsCount);

    for (var idx = 0; idx < neededCount; idx++)
    {
        var appItemInfo = allAppsArray[idx];
        retArray.push(appItemInfo);
    }
    
    // return
    return retArray;
}

// the count of hwo many apps can be shown on home page's slide show.
// function getAppsInfoArrayForSlideshow()
// {
//    // "use strict";
//    // return getAppsInfoArrayWithCount(gMaxAvailableAppsCountForSlideshow);
// }

function getAppsInfoArrayForAppShowcase()
{
    "use strict";
    
    return getAppsInfoArrayWithCount(gMaxAvailableAppsCountForAppShowcase);
}






/*
 * App showcase section 
 *
 */
function generateOneAppHtmlForAppShowcaseWithAppItemInfo(appItemInfo)
{
    "use strict";
    
    // get each item
    var appName           = appItemInfo.getAppName();
    // var appDescription    = appItemInfo.getDescription();
    var appIntro          = appItemInfo.getIntro();
    var appIconName       = appItemInfo.getSmallAppIconName();
    // var appDownUrl        = appItemInfo.getDownloadOnMASUrl();
    var appMoreInfoUrl    = appItemInfo.getMoreInfoUrl();
        
    // Genereate the html code here.
    var appIconAddress    = 'mac_web_res/data/' + appIconName;
        
    // Generate the src link if needed
    var appSrcUrl         = appItemInfo.getSrcUrl();
    var srcElementHtmlStr = appSrcUrl === '' ? '' : '<a class="source_code_button" href="' + appSrcUrl + '" target="_blank">Source code</a>';

    // return value;
    var htmlString = "";
    htmlString    += '<table class="app_showcase_item_table" border="0" cellspacing="0">';
    htmlString    += '<tr>';
    htmlString    += '  <td class="app_showcase_item_table_icon_td">';
    htmlString    += '    <div class="app_showcase_item_icon">';
    htmlString    += '      <a target="_blank" href="' + appMoreInfoUrl + '"><img class="common_img_trans" width="128" height="128" src="' + appIconAddress + '" alt="' + appName + '"></a>';
    htmlString    += '    </div>';
    htmlString    += '  </td>';
    htmlString    += '  <td>';
    htmlString    += '    <div class="app_showcase_item_texts">';
    htmlString    += '      <a target="_blank" href="' + appMoreInfoUrl + '"><h1>' + appName + '</h1></a>';
    htmlString    += '      <p>' + appIntro + '</p>';
    htmlString    +=        srcElementHtmlStr;
    htmlString    += '    </div>';
    htmlString    += '  </td>';
    htmlString    += '</tr>';
    htmlString    += '</table>';   
    
    // return the html code
    return htmlString;
}

/* Generate html code for app showcase section */
function  generateAllAppsHtmlForAppShowcase()
{
    "use strict";
    
    // return value
    var htmlString = "";
    
    // setup variables
    // generate html codes for app showcase.
    var allAppsArray = getAppsInfoArrayForAppShowcase();
    var appsCount = allAppsArray.length;
    
    // add the table.
    htmlString += '<table class="app_showcase_box_table" border="0" cellspacing="0">';
    
    // works for each app
    var idx = 0;
    while(idx < appsCount)
    {
        // add a begin row tag
        htmlString += '  <tr>';
        
        // add apps for each row.
        var firstIndex = idx;
        var lastIndex  = idx + 2;  // +2 means: Each row has 3 apps.

        for (var tmpi = firstIndex; tmpi <= lastIndex; tmpi++)
        {
            if (tmpi < appsCount)
            {
                var appItemInfo = allAppsArray[tmpi];
                var oneAppHtmlString = generateOneAppHtmlForAppShowcaseWithAppItemInfo(appItemInfo);
                
                htmlString += '<td class="app_showcase_box_table_td">';
                htmlString += '  ' + oneAppHtmlString + '  ';
                htmlString += '</td>';
            }
        }
        
        // add an end row tag
        htmlString += '  </tr>';
        
        // increase the index
        idx = lastIndex + 1;
    }
    
    // add the end table tag
    htmlString += '</table>';
    
    // At last return this html
    return htmlString;
}
