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

//////////////////////////////////////////////////////////////////////
// Globals
//////////////////////////////////////////////////////////////////////

var SCREEN_WIDTHS = {
    XSMALL: 0,    
    MOBILE: 1,
    MOBILE_LANDSCAPE: 2,
    TABLET_PORTRAIT: 3,
    TABLET_LANDSCAPE: 4,
    DESKTOP_LG: 5,
    DESKTOP_WIDE: 6
};

////////////////////////////////////////////////////////////////////////
// namespace function
////////////////////////////////////////////////////////////////////////

function namespace(namespaceString) {
    var parts = namespaceString.split('.'),
        parent = window,
        currentPart = '';

    for (var i = 0, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }

    return parent;
}

///////////////////////////////////////////////////////////////////////
// Utilities
//////////////////////////////////////////////////////////////////////

function hashTag(id) {
    return '#' + id
};

Array.prototype.last = function() {
    return this[this.length - 1];
}

//////////////////////////////////////////////////////////////////////
// DOM related utils
//////////////////////////////////////////////////////////////////////

$.fn.isOnScreen = function() {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

function query_screenwidth(tag) {
    var size = parseInt($(tag).css('font-size'), 10);
    var screenwidth;

    switch(size) {
     case 1:
        screenwidth = SCREEN_WIDTHS.XSMALL;
        break;
     case 2:
        screenwidth = SCREEN_WIDTHS.MOBILE;
        break;
     case 3:
        screenwidth = SCREEN_WIDTHS.MOBILE_LANDSCAPE;
        break;
     case 4:
        screenwidth = SCREEN_WIDTHS.TABLET_PORTRAIT;
        break;
     case 5:
        screenwidth = SCREEN_WIDTHS.TABLET_LANDSCAPE;
        break;
     case 6:
        screenwidth = SCREEN_WIDTHS.DESKTOP_LG;
        break;
     case 7:
        screenwidth = SCREEN_WIDTHS.DESKTOP_WIDE;    
        break;
    } 

    return screenwidth;
}


function add_interaction(selectors, classname) {
    $(selectors).hover(
        function() {
            $(this).addClass(classname)
        },
        function() {
            $(this).removeClass(classname);
        }
    );
    $(selectors).focusin(function() {$(this).addClass(classname)});
    $(selectors).focusout(function() {$(this).removeClass(classname)});
}







