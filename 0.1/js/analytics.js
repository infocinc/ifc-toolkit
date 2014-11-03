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
///////////////////////////////////////////////////////////////////////////
// Google Analytics & FB SDK
///////////////////////////////////////////////////////////////////////////

var ganal = namespace('ifc.analytics');

ganal.create_event = function(label, value, url) {
    e = {
        'hitType': 'event',
        'eventCategory': 'button',
        'eventAction': 'click',
        'eventLabel': label,
        'eventValue': value,
        'page': url,
        'nonInteraction': false
    }
    return e;
}


/*ganal.track = function(sel,event) {
    var path = document.location.pathname;
    $(sel).on(event, function() {
        eo = ganal.create_event('nav-button', 1, path);
        ga('send', eo);
    });
    $('#navbar-collapse a').on('click', function(e) {
        var navitem = $(e.target).text().toLowerCase() + '-menuitem';
        eo = ganal.create_event(navitem, 1, path);
        ga('send', eo);
    });
}
*/