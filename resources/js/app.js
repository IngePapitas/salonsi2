import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { definePreset } from '@primevue/themes';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Aura from '@primeuix/themes/aura';


import 'primeicons/primeicons.css'
import { provide } from 'vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const MyCustomAura = definePreset(Aura, {
    semantic: {
      primary: {
        50: '#f9fafb',
        100: '#e7e7ec',
        200: '#cfcfd6',
        300: '#a7a7b3',
        400: '#6f6f7e',
        500: '#383840',
        600: '#2e2e34',
        700: '#24242a',
        800: '#1b1b1f',
        900: '#111114',
        950: '#0a0a0c'
      },
      surface: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b', 
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
        950: '#020617'
      }
    }
  });

const fontAwesomeIcons = {
    home: "fa-solid fa-home",
    user: "fa-solid fa-user",
    users: "fa-solid fa-users",
    cog: "fa-solid fa-cog",
    wrench: "fa-solid fa-wrench",
    edit: "fa-solid fa-edit",
    trash: "fa-solid fa-trash",
    plus: "fa-solid fa-plus",
    minus: "fa-solid fa-minus",
    check: "fa-solid fa-check",
    times: "fa-solid fa-times",
    save: "fa-solid fa-save",
    download: "fa-solid fa-download",
    upload: "fa-solid fa-upload",
    search: "fa-solid fa-search",
    bell: "fa-solid fa-bell",
    envelope: "fa-solid fa-envelope",
    calendar: "fa-solid fa-calendar",
    clock: "fa-solid fa-clock",
    chartBar: "fa-solid fa-chart-bar",
    chartLine: "fa-solid fa-chart-line",
    chartPie: "fa-solid fa-chart-pie",
    file: "fa-solid fa-file",
    fileAlt: "fa-solid fa-file-alt",
    folder: "fa-solid fa-folder",
    folderOpen: "fa-solid fa-folder-open",
    camera: "fa-solid fa-camera",
    image: "fa-solid fa-image",
    video: "fa-solid fa-video",
    play: "fa-solid fa-play",
    pause: "fa-solid fa-pause",
    stop: "fa-solid fa-stop",
    eye: "fa-solid fa-eye",
    eyeSlash: "fa-solid fa-eye-slash",
    lock: "fa-solid fa-lock",
    unlock: "fa-solid fa-unlock",
    key: "fa-solid fa-key",
    signInAlt: "fa-solid fa-sign-in-alt",
    signOutAlt: "fa-solid fa-sign-out-alt",
    arrowUp: "fa-solid fa-arrow-up",
    arrowDown: "fa-solid fa-arrow-down",
    arrowLeft: "fa-solid fa-arrow-left",
    arrowRight: "fa-solid fa-arrow-right",
    angleUp: "fa-solid fa-angle-up",
    angleDown: "fa-solid fa-angle-down",
    angleLeft: "fa-solid fa-angle-left",
    angleRight: "fa-solid fa-angle-right",
    chevronUp: "fa-solid fa-chevron-up",
    chevronDown: "fa-solid fa-chevron-down",
    chevronLeft: "fa-solid fa-chevron-left",
    chevronRight: "fa-solid fa-chevron-right",
    bars: "fa-solid fa-bars",
    th: "fa-solid fa-th",
    thList: "fa-solid fa-th-list",
    table: "fa-solid fa-table",
    list: "fa-solid fa-list",
    listAlt: "fa-solid fa-list-alt",
    clipboard: "fa-solid fa-clipboard",
    comment: "fa-solid fa-comment",
    comments: "fa-solid fa-comments",
    infoCircle: "fa-solid fa-info-circle",
    questionCircle: "fa-solid fa-question-circle",
    exclamationCircle: "fa-solid fa-exclamation-circle",
    exclamationTriangle: "fa-solid fa-exclamation-triangle",
    bolt: "fa-solid fa-bolt",
    star: "fa-solid fa-star",
    heart: "fa-solid fa-heart",
    thumbsUp: "fa-solid fa-thumbs-up",
    thumbsDown: "fa-solid fa-thumbs-down",
    share: "fa-solid fa-share",
    shareAlt: "fa-solid fa-share-alt",
    externalLinkAlt: "fa-solid fa-external-link-alt",
    phone: "fa-solid fa-phone",
    phoneAlt: "fa-solid fa-phone-alt",
    map: "fa-solid fa-map",
    mapMarkerAlt: "fa-solid fa-map-marker-alt",
    locationArrow: "fa-solid fa-location-arrow",
    globe: "fa-solid fa-globe",
    wifi: "fa-solid fa-wifi",
    batteryFull: "fa-solid fa-battery-full",
    batteryHalf: "fa-solid fa-battery-half",
    batteryEmpty: "fa-solid fa-battery-empty",
    signal: "fa-solid fa-signal",
    microphone: "fa-solid fa-microphone",
    volumeUp: "fa-solid fa-volume-up",
    volumeDown: "fa-solid fa-volume-down",
    volumeMute: "fa-solid fa-volume-mute",
    shoppingCart: "fa-solid fa-shopping-cart",
    creditCard: "fa-solid fa-credit-card",
    dollarSign: "fa-solid fa-dollar-sign",
    tags: "fa-solid fa-tags",
    tag: "fa-solid fa-tag",
    gift: "fa-solid fa-gift",
    book: "fa-solid fa-book",
    bookmark: "fa-solid fa-bookmark",
    graduationCap: "fa-solid fa-graduation-cap",
    briefcase: "fa-solid fa-briefcase",
    building: "fa-solid fa-building",
    industry: "fa-solid fa-industry",
    tools: "fa-solid fa-tools",
    truck: "fa-solid fa-truck",
    box: "fa-solid fa-box",
    cube: "fa-solid fa-cube"
  };

  provide('icons', fontAwesomeIcons);
  

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: MyCustomAura,
                    options: {
                        darkModeSelector: 'none',
                    }
                }
            })
            .use(ToastService)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});


