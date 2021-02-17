require('./bootstrap');
// require('./directives');

import Vue from 'vue'
window.EventBus = new Vue;
import { App, plugin } from '@inertiajs/inertia-vue'
Vue.use(plugin);
import { InertiaForm } from './laravel-jetstream';
Vue.use(InertiaForm);
import EnlargeableImage from '@diracleo/vue-enlargeable-image';

Vue.component('EnlargeableImage', EnlargeableImage)

require('@fortawesome/fontawesome-free');
Vue.config.productionTip = false;

Vue.mixin({
    methods: {
        route: (name, params, absolute) => route(name, params, absolute, Ziggy),
    }
})



window.moment = require('moment');
moment.locale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
    weekdaysShort: 'Dom_Lun_Mar_Mie_Jue_Vie_Sab'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
});
moment.locale('es');
Vue.prototype.moment = moment;

import LayautFrontend from './Pages/Layaut/Frontend.vue';
Vue.component('LayautFrontend', LayautFrontend);
import LayautFrontendNav from './Pages/Layaut/FrontendNav.vue';
Vue.component('LayautFrontendNav', LayautFrontendNav)
Number.prototype.padLeft = function(n, str) {
        return Array(n - String(this).length + 1).join(str || '0') + this;
    }
    // import BootstrapVue from 'bootstrap-vue'
    // import 'bootstrap-vue/dist/bootstrap-vue.css'
    // Vue.use(BootstrapVue)

let app = document.getElementById('app')

new Vue({
    metaInfo: {
        titleTemplate: (title) => title ? `${title} - Sistema ERP` : 'Sistema ERP'
    },
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: (component) => {
                let parts = component.split('/')
                let type = parts[0]
                let subname = parts[1]
                let name = parts[2]
                return import (`@/Pages/${subname}/${name}`).then(module => module.default)
            }
        },
    }),
}).$mount(app)