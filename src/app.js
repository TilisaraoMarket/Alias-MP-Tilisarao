const openMercadoPagoApp = () => {
      const mpSchemes = {
          android: {
              app: 'mercadopago://home',
              intent: 'intent://home#Intent;package=com.mercadopago.wallet;scheme=mercadopago;end',
              playStore: 'market://details?id=com.mercadopago.wallet',
          },
          ios: {
              app: 'mercadopago://',
              appStore: 'https://apps.apple.com/ar/app/mercado-pago/id925436649',
          },
          web: 'https://www.mercadopago.com.ar'
      };

      const ua = navigator.userAgent.toLowerCase();
      const isAndroid = ua.indexOf("android") > -1;
      const isIOS = /iphone|ipad|ipod/.test(ua);

      const handleFallback = (fallbackUrl) => {
          setTimeout(() => {
              if (!document.hidden) {
                  window.location.href = fallbackUrl;
              }
          }, 3000); // Increased timeout to 3 seconds
      };

      if (isAndroid) {
          window.location.href = mpSchemes.android.intent;
          handleFallback(mpSchemes.android.playStore);
      } else if (isIOS) {
          window.location.href = mpSchemes.ios.app;
          handleFallback(mpSchemes.ios.appStore);
      } else {
          window.location.href = mpSchemes.web;
      }
  };