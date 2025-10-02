"use client";

import Link from "next/link";

export default function Datenschutz() {
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

        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Datenschutzerklärung</h1>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Allgemeine Hinweise</h3>
          <p className="mb-4 text-gray-700">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Datenerfassung auf dieser Website</h3>
          <p className="mb-2 text-gray-700">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
          </p>
          <p className="mb-4 text-gray-700">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>
          
          <p className="mb-2 text-gray-700">
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p className="mb-4 text-gray-700">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>
          
          <p className="mb-2 text-gray-700">
            <strong>Wofür nutzen wir Ihre Daten?</strong>
          </p>
          <p className="mb-4 text-gray-700">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden, sofern Sie hierzu Ihre Einwilligung erteilt haben.
          </p>
          
          <p className="mb-2 text-gray-700">
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          </p>
          <p className="mb-4 text-gray-700">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">2. Hosting</h2>
          <p className="mb-4 text-gray-700">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
          </p>
          <p className="mb-4 text-gray-700">
            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">3. Allgemeine Hinweise und Pflicht­informationen</h2>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Datenschutz</h3>
          <p className="mb-4 text-gray-700">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <p className="mb-4 text-gray-700">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Hinweis zur verantwortlichen Stelle</h3>
          <p className="mb-4 text-gray-700">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mb-4 text-gray-700">
            Thorsten Petersson<br />
            Stresemannstraße 92a<br />
            22769 Hamburg<br />
            Deutschland
          </p>
          <p className="mb-4 text-gray-700">
            E-Mail: tp@online.ms
          </p>
          <p className="mb-4 text-gray-700">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Speicherdauer</h3>
          <p className="mb-4 text-gray-700">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="mb-4 text-gray-700">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Auskunft, Löschung und Berichtigung</h3>
          <p className="mb-4 text-gray-700">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Cookies</h3>
          <p className="mb-4 text-gray-700">
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p className="mb-4 text-gray-700">
            Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p className="mb-4 text-gray-700">
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
          </p>
          <p className="mb-4 text-gray-700">
            Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4 text-gray-700">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="mb-4 text-gray-700">
            Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
          </p>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Einwilligung mit Borlabs Cookie (Cookie Consent Management)</h3>
          <p className="mb-4 text-gray-700">
            Unsere Website nutzt ein Cookie Consent Management System, um Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum Einsatz bestimmter Technologien einzuholen und diese datenschutzkonform zu dokumentieren. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO aus rechtlicher Verpflichtung gemäß § 25 Abs. 1 TDDDG.
          </p>
          <p className="mb-4 text-gray-700">
            Folgende Daten werden erfasst: Ihre Einwilligungseinstellungen (welche Cookies Sie erlauben/ablehnen), Zeitstempel Ihrer Einwilligung, technische Informationen über Ihren Browser und Ihr Gerät sowie eine anonymisierte IP-Adresse. Diese Daten werden für die Dauer von 12 Monaten gespeichert.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">5. Analyse-Tools und Werbung</h2>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Google Analytics</h3>
          <p className="mb-4 text-gray-700">
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited („Google"). Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
          <p className="mb-4 text-gray-700">
            Die Nutzung von Google Analytics erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4 text-gray-700">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: 
            <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1">
              https://privacy.google.com/businesses/controllerterms/mccs/
            </a>.
          </p>
          <p className="mb-4 text-gray-700">
            <strong>IP-Anonymisierung:</strong> Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Browser Plugin:</strong> Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: 
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              https://tools.google.com/dlpage/gaoptout
            </a>.
          </p>
          <p className="mb-4 text-gray-700">
            Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: 
            <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              https://support.google.com/analytics/answer/6004245
            </a>.
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Auftragsverarbeitung:</strong> Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Google AdSense</h3>
          <p className="mb-4 text-gray-700">
            Diese Website benutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited („Google"). Google AdSense verwendet Cookies und Web Beacons (unsichtbare Grafiken). Durch diese Web Beacons können Informationen wie der Besucherverkehr auf diesen Seiten ausgewertet werden.
          </p>
          <p className="mb-4 text-gray-700">
            Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung dieser Website (einschließlich Ihrer IP-Adresse) und Auslieferung von Werbeformaten werden an einen Server von Google übertragen und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weitergegeben werden. Google wird Ihre IP-Adresse jedoch nicht mit anderen von Ihnen gespeicherten Daten zusammenführen.
          </p>
          <p className="mb-4 text-gray-700">
            Die Speicherung von AdSense-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG; die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4 text-gray-700">
            Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: 
            <a href="https://privacy.google.com/businesses/controllerterms/mccs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 ml-1">
              https://privacy.google.com/businesses/controllerterms/mccs/
            </a>.
          </p>
          <p className="mb-4 text-gray-700">
            Weitere Informationen zu Google AdSense finden Sie hier: 
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              https://policies.google.com/technologies/ads
            </a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mt-6 mb-3 text-blue-700">6. Ihre Rechte</h2>
          <p className="mb-4 text-gray-700">
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in einer Weise verletzt worden sind, können Sie sich bei der zuständigen Aufsichtsbehörde beschweren. In Deutschland sind dies die Landesdatenschutzbeauftragten.
          </p>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Recht auf Einschränkung der Verarbeitung</h3>
          <p className="mb-4 text-gray-700">
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>
          
          <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-4">Widerspruch gegen Werbe-E-Mails</h3>
          <p className="mb-4 text-gray-700">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
          </p>
        </section>

        <section className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3 text-blue-700">7. Ihre Cookie-Einstellungen</h2>
          <p className="mb-4 text-gray-700">
            Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf den folgenden Button klicken:
          </p>
          <div className="text-center mb-4">
            <button
              onClick={() => {
                localStorage.removeItem('cookieConsent');
                window.location.reload();
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              Cookie-Einstellungen ändern
            </button>
          </div>
        </section>

        <section className="text-center pt-6 border-t border-gray-200">
          <div className="mb-4">
            <Link href="/impressum" className="text-blue-600 underline hover:text-blue-800 font-semibold">
              Zum Impressum
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Quelle: Erstellt mit Unterstützung von eRecht24 und angepasst an die individuellen Bedürfnisse<br />
            Stand: Oktober 2025
          </p>
        </section>
      </div>
    </div>
  );
}
