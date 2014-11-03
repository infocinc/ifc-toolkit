/*! Copyright 2014 Infocinc (www.infocinc.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
*/

/////////////////////////////////////////////////////////////////////
//  Initialization
//////////////////////////////////////////////////////////////////////

var app_config = {
    'main-wrapper' : '#main',
    'screenwidth-tag' : '#media-state',
    'side-menu' :  true,
    'menu' : {
        'side' : 'right',
        'anchor': '.menu-link',
        'minisize' : '200px',
        'fullsize' : '250px'
    }
}


/*function adaptForMobile() {
    site_state = queryMediaState();

    if (site_state === 'MOBILE') {
        $('#fbook-anchor').attr('href', "https://m.facebook.com/pages/infocinc/896328063714402");
        $('#footer-fbook-anchor').attr('href', "https://m.facebook.com/pages/infocinc/896328063714402");
        var viewportHeight = $(window).height();
    }
}
*/
function register_scrolltos() {
}

function register_waypoints() {
/*    $('#apropos-banner').waypoint(navBarResizeHandler, {
        offset: '0%'
    });
*/};


function init_scrolldepth() {
    $.getScript('/js/vendor/jquery.scrolldepth.min.js')
    .done(function(script,status) {
        $.scrollDepth();
    });
}

///////////////////////////////
// detectIE
// no support below IE 9 as of 2014.09.02
///////////////////////////////

function init_sidemenu() {
  var screenwidth= query_screenwidth(app_config['screenwidth-tag']);
  var menu = app_config['menu'],
      link = $(menu['anchor']),
      side = menu['side'],
      size = (screenwidth < SCREEN_WIDTHS.TABLET_PORTRAIT) ? menu['minisize'] : menu['fullsize'];

  console.log('calling bigSlide script with width ' + size);
  link.off('click.bigSlide');
  $(document).off('click.bigSlide');
  link.bigSlide({
    'side': side,
    'menuWidth': size
  });
}

function twitter(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}

function common() {
    twitter(document, 'script', 'twitter-wjs');
    document.addEventListener("touchstart", function() {}, false); // allow css active to work in safari
    register_scrolltos();
    register_waypoints();

    if (app_config['side-menu']) {
        $.getScript('/js/vendor/bigSlide.js')
         .done(function(script, textStatus) {
            init_sidemenu();
         })
         .fail(function(jqxhr, settings, exception) {            
            console.log("ERROR: failed to load big slide.")
         });     
    }
}

function detect_ie() {
    'use strict';
    // Detecting IE
    var old_ie;
    if ($('html').is('.lt-ie9')) {
        old_ie = true;
    }
    if (old_ie) {
        $(app_config['main-wrapper']).css('display', 'none');
    }
    return old_ie;
}

function init() {
    var old_ie = detect_ie();
    if (old_ie) {
        return;
    }
    $.ajaxSetup({cache:true});

    var screenwidth = query_screenwidth(app_config['screen-tag']);
    common();
    switch(screenwidth) {
        case SCREEN_WIDTHS.XSMALL:
        case SCREEN_WIDTHS.MOBILE:
        case SCREEN_WIDTHS.MOBILE_LANDSCAPE:
            ifc.mobile.init();
            break;
        case SCREEN_WIDTHS.TABLET:
            ifc.tablet.init();
        default:
            ifc.tablet.init();
    }
    init_scrolldepth();
}

$(document).ready(function() {
    init();
});
