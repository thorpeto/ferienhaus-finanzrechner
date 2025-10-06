"use client";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    // Google Tag Script einfügen
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-GCCKR3MDHZ";
    document.head.appendChild(script1);

    // Google Tag Initialisierung
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GCCKR3MDHZ');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
}
