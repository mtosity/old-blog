'use strict';

require('./src/assets/scss/init.scss');
require('./static/css/prismjs/theme.min.css');

export function onServiceWorkerUpdateReady() {
    return window.location.reload();
}
