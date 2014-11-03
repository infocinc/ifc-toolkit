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
/////////////////////////////////////////////////////////////////////////
// Mobile Init
/////////////////////////////////////////////////////////////////////////
var mobile = namespace('ifc.mobile');


mobile.bind_clickhandlers = function() {
    $('#arrow-up-anchor').on('click', function(e) {
        e.preventDefault();
        var loc = window.location;
        window.location.href = '#';
        if (history.pushState) {
            history.pushState("", document.title, loc.pathname);
        }
    });
}


mobile.register_waypoints = function() {
/*    $('#apropos-banner').waypoint(function(direction) {
        if (direction === "down") {
            $('#fixed-icons').children().removeClass('invisible');
        } else {
            $('#fixed-icons').children().addClass('invisible');
        }
    });
*/};

mobile.navbarClickHandler = function() {
/*    $('#navbar-collapse').on('show.bs.collapse', function() {
        $('#fixed-bar').css('opacity', '1');
    });
    $('#navbar-collapse').on('hide.bs.collapse', function() {
        $('#fixed-bar').css('opacity', '');
    });
*/
}


mobile.init = function() {
    
    mobile.register_waypoints();
    mobile.bind_clickhandlers();
}
