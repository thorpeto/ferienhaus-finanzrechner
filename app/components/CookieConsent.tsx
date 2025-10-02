"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Cookie-Kategorien
  const [essential, setEssential] = useState(true); // Immer aktiviert
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  useEffect(() => {
    // Prüfe, ob bereits eine Einwilligung vorliegt
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      // Lade gespeicherte Einstellungen
      const settings = JSON.parse(consent);
      setAnalytics(settings.analytics || false);
      setAdvertising(settings.advertising || false);
      
      // Aktiviere entsprechende Skripte
      if (settings.analytics) {
        enableGoogleAnalytics();
      }
      if (settings.advertising) {
        enableGoogleAdSense();
      }
    }
  }, []);

  const saveConsent = (analyticsEnabled: boolean, advertisingEnabled: boolean) => {
    const consent = {
      essential: true,
      analytics: analyticsEnabled,
      advertising: advertisingEnabled,
      timestamp: new Date().toISOString(),
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    
    // Aktiviere entsprechende Skripte
    if (analyticsEnabled) {
      enableGoogleAnalytics();
    }
    if (advertisingEnabled) {
      enableGoogleAdSense();
    }
    
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    setAnalytics(true);
    setAdvertising(true);
    saveConsent(true, true);
  };

  const acceptEssential = () => {
    setAnalytics(false);
    setAdvertising(false);
    saveConsent(false, false);
  };

  const saveSettings = () => {
    saveConsent(analytics, advertising);
  };

  const enableGoogleAnalytics = () => {
    // Google Analytics aktivieren
    if (typeof window !== 'undefined') {
      // Füge Google Analytics Skript hinzu
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      };
    }
  };

  const enableGoogleAdSense = () => {
    // Google AdSense aktivieren
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-500 shadow-2xl z-50 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">🍪 Cookie-Einstellungen</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Wir verwenden Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten. Einige sind für den Betrieb der Website notwendig, andere helfen uns, die Website und Ihr Nutzererlebnis zu verbessern.
                </p>
                <p className="text-xs text-gray-500">
                  Weitere Informationen finden Sie in unserer{' '}
                  <a href="/datenschutz" className="text-blue-600 underline hover:text-blue-800">
                    Datenschutzerklärung
                  </a>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Einstellungen
                </button>
                <button
                  onClick={acceptEssential}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Einstellungs-Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookie-Einstellungen</h2>
              <p className="text-sm text-gray-600 mb-6">
                Wählen Sie aus, welche Cookies Sie zulassen möchten. Sie können Ihre Einstellungen jederzeit ändern.
              </p>

              {/* Notwendige Cookies */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Notwendige Cookies</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={essential}
                      disabled
                      className="w-5 h-5 accent-blue-600 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Analyse-Cookies (Google Analytics)</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Advertising Cookies */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">Werbe-Cookies (Google AdSense)</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen und die Effektivität unserer Werbekampagnen zu messen.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={advertising}
                      onChange={(e) => setAdvertising(e.target.checked)}
                      className="w-5 h-5 accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  onClick={saveSettings}
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Einstellungen speichern
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Weitere Informationen in unserer{' '}
                <a href="/datenschutz" className="text-blue-600 underline hover:text-blue-800">
                  Datenschutzerklärung
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
