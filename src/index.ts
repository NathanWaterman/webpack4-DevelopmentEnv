"use strict";


import './style.scss';

//import font awesome icons
//https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack
//https://fontawesome.com/icons?d=gallery
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


if (process.env.NODE_ENV !== 'production') {
    console.log('development mode!');
}

if (process.env.NODE_ENV == 'production') {
    console.log('production mode!');
}


//PWA - Working
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//         console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//         console.log('SW registration failed: ', registrationError);
//         });
//     });
// }
