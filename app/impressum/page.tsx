"use client";

import Link from "next/link";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
        {/* Link zurück zur Homepage */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zur Homepage
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Impressum</h1>
        <div className="space-y-6 text-gray-700">
          
          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Angaben gemäß § 5 TMG</h2>
            <p>
              Thorsten Petersson<br />
              Stresemannstraße 92a<br />
              22769 Hamburg<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:tp@online.ms" className="text-blue-600 underline hover:text-blue-800">tp@online.ms</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Thorsten Petersson<br />
              Stresemannstraße 92a<br />
              22769 Hamburg<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>.
            </p>
            <p className="mt-2">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Haftung für Inhalte</h2>
            <p className="mb-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mb-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <p className="text-sm text-gray-600 italic">
              <strong>Wichtiger Hinweis:</strong> Diese Website dient ausschließlich privaten Informationszwecken. Die bereitgestellten Berechnungen und Informationen stellen keine Finanz-, Steuer- oder Rechtsberatung dar. Für die Richtigkeit, Vollständigkeit und Aktualität der Berechnungen kann keine Gewähr übernommen werden. Wir empfehlen dringend, vor jeder Investitionsentscheidung professionelle Beratung in Anspruch zu nehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Haftung für Links</h2>
            <p className="mb-3">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Urheberrecht</h2>
            <p className="mb-3">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Nutzung von Tracking- und Werbediensten</h2>
            
            <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Google Analytics</h3>
            <p className="mb-3">
              Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited ("Google"). Die Nutzung umfasst die Betriebsart "Universal Analytics". Hierdurch ist es möglich, Daten, Sitzungen und Interaktionen über mehrere Geräte hinweg einer pseudonymen User-ID zuzuordnen und so die Aktivitäten eines Nutzers geräteübergreifend zu analysieren.
            </p>
            <p className="mb-3">
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
            </p>
            <p className="mb-3">
              Die Nutzung von Google Analytics erfolgt nur mit Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung können Sie jederzeit über unsere <button onClick={() => { localStorage.removeItem('cookieConsent'); window.location.reload(); }} className="text-blue-600 underline hover:text-blue-800">Cookie-Einstellungen</button> widerrufen.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Google AdSense</h3>
            <p className="mb-3">
              Diese Website benutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited ("Google"). Google AdSense verwendet Cookies und Web Beacons, um Informationen über die Nutzung der Website zu sammeln und Ihnen interessenbezogene Werbung anzuzeigen.
            </p>
            <p className="mb-3">
              Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung dieser Website (einschließlich Ihrer IP-Adresse) und Auslieferung von Werbeformaten werden an einen Server von Google übertragen und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weitergegeben werden. Google wird Ihre IP-Adresse jedoch nicht mit anderen von Ihnen gespeicherten Daten zusammenführen.
            </p>
            <p className="mb-3">
              Die Nutzung von Google AdSense erfolgt nur mit Ihrer ausdrücklichen Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung können Sie jederzeit über unsere <button onClick={() => { localStorage.removeItem('cookieConsent'); window.location.reload(); }} className="text-blue-600 underline hover:text-blue-800">Cookie-Einstellungen</button> widerrufen.
            </p>
            <p>
              Weitere Informationen zu Google AdSense und zur Datenverarbeitung durch Google finden Sie in der Datenschutzerklärung von Google: 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1">
                https://policies.google.com/privacy
              </a>
            </p>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">Datenschutz</h2>
            <p>
              Ausführliche Informationen zum Datenschutz und zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-blue-600 underline hover:text-blue-800 font-semibold">
                Datenschutzerklärung
              </Link>.
            </p>
          </section>

          <section className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Quelle: Erstellt mit Unterstützung von eRecht24 und angepasst an die individuellen Bedürfnisse
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
