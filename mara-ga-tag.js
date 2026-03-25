// Must be set BEFORE GA loads (Cookiebot consent integration)
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }

gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
});

// Load Google Analytics (GA4 direct — no GTM)
var script = document.createElement('script');
script.async = true;
script.setAttribute('data-cookieconsent', 'ignore');
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZVDP0J1LXK';
document.head.appendChild(script);

gtag('js', new Date());
gtag('config', 'G-ZVDP0J1LXK');
