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
function sidemenu() {
    var screenwidth = query_screenwidth(app_config['screenwidth-tag']);
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

function register(enquire) {
    enquire.register("screen and (min-width:768px)", {
        unmatch: function() {
            init_sidemenu();
        },

        match: function() {
            if (_switch) {
                init_sidemenu();
            }
        }
    });
}
