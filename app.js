const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");
const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");
const languageCurrent = document.querySelector(".language-current");
const languageOptions = document.querySelectorAll(".language-option");
const contactForm = document.getElementById("contact-form");
const formStatus = document.querySelector(".form-status");

const EMAILJS_PUBLIC_KEY = "OhpTAw-xLohHvoM0C";
const EMAILJS_SERVICE_ID = "service_l4z4xkj";
const EMAILJS_TEMPLATE_ID = "template_rg5uzft";
const FORM_FROM_EMAIL = "ashped@ashped.com";
const FORM_TO_EMAIL = "ashped@ashped.com";

const translations = {
  sq: {
    title: "A SHPED | Shpedicion Profesional",
    description:
      "A SHPED ofron shpedicion profesional, dokumentacion doganor dhe koordinim operacional për lëvizje të sigurta dhe efikase të mallrave.",
    nav: ["Shërbimet", "Procesi", "Rreth Nesh", "Kontakt", "Bashkëpunim"],
    eyebrow: "Doganë. Dokumentacion. Koordinim pa vonesa.",
    heroTitle: "Lëvize mallin me një partner që e mban procesin nën kontroll.",
    heroText:
      "A SHPED mbulon deklaratat transitore, dokumentacionin import-eksport dhe koordinimin operacional për kompani që kërkojnë saktësi, ritëm dhe komunikim profesional.",
    heroButtons: ["Kërkesë për Bashkëpunim", "Shiko Shërbimet"],
    stats: [
      ["24/7", "Komunikim i shpejtë për procese kritike"],
      ["T1 / IM / EX", "Dokumente të përgatitura me fokus të plotë"],
      ["Prishtinë", "Partner lokal me qasje rajonale dhe evropiane"],
    ],
    workflowKicker: "A SHPED Workflow",
    workflowSteps: ["Kërkesa", "Dokumente", "Doganë", "Përfundim"],
    workflowTitle: "Shpedicion i strukturuar për biznes serioz.",
    workflowText:
      "Nga dokumenti i parë deri te përfundimi i procedurës, ne e organizojmë procesin që ju të keni qartësi dhe siguri operative.",
    workflowList: [
      "Deklarata T1 dhe procedura transiti",
      "Dokumentacion importi dhe eksporti",
      "Koordinim aktiv dhe mbështetje doganore",
    ],
    trust:
      "A SHPED punon me kompani tregtare, transportues dhe operatorë që kanë nevojë për procedura të qarta dhe ekzekutim profesional.",
    servicesEyebrow: "Shërbimet Kryesore",
    servicesTitle: "Gjithçka që i duhet shpedicionit në një partner të vetëm.",
    servicesText:
      "Shërbimet tona janë ndërtuar për kompani që duan më pak pasiguri, më pak vonesa dhe më shumë kontroll në dokumentacion dhe kalim doganor.",
    serviceCards: [
      [
        "Deklarata T1",
        "Përgatitje e saktë e dokumenteve të transitit për lëvizje ndërkombëtare me fokus në afat, saktësi dhe pajtueshmëri.",
      ],
      [
        "Import & Export",
        "IM4, IM5, IM7, IM9 dhe EX1-EX3 të organizuara profesionalisht për të shmangur pengesa operative dhe vonesa të panevojshme.",
      ],
      [
        "Transit & Doganë",
        "Mbështetje me procedurat doganore, CMR dhe dokumentet shoqëruese për një kalim më të qetë në pikat kufitare.",
      ],
      [
        "Koordinim Operativ",
        "Komunikim i drejtpërdrejtë me klientin dhe ndjekje e procesit nga nisja deri në përfundim të procedurës.",
      ],
    ],
    processEyebrow: "Si Punojmë",
    processTitle: "Proces i thjeshtë, i qartë dhe i kontrolluar në çdo hap.",
    timeline: [
      ["Pranimi i kërkesës", "Na dërgoni itinerarin, mallin dhe afatin e transportit."],
      ["Verifikimi i të dhënave", "Kontrollojmë dokumentet dhe përcaktojmë procedurën e duhur."],
      ["Përgatitja operative", "Përgatisim deklaratat dhe koordinojmë procesin me palët përkatëse."],
      ["Ndjekja e procedurës", "Qëndrojmë në kontakt aktiv deri në përfundim të kalimit dhe dosjes."],
    ],
    aboutEyebrow: "Rreth A SHPED",
    aboutTitle: "Prezencë serioze për kompani që lëvizin mallra pa kompromis.",
    aboutText:
      "Me bazë në Prishtinë, A SHPED fokusohet në procedurat e shpedicionit, dokumentacionin doganor dhe koordinimin e proceseve që kërkojnë saktësi dhe ritëm pune.",
    instagramTitle: "Postimet tona të fundit nga A SHPED.",
    instagramCta: "Shiko në Instagram",
    contactEyebrow: "Kontakt",
    contactTitle: "Dërgoni kërkesë për bashkëpunim dhe ju kontaktojmë sa më shpejt.",
    contactText:
      "Na dërgoni të dhënat e kompanisë suaj dhe interesimin për bashkëpunim në shërbime të shpedicionit, dhe ne ju kontaktojmë me qasje profesionale.",
    contactMeta: ["Email:", "Phone:", "Location:", "Working hours:"],
    location: "Prishtinë, Kosovë",
    hours: "E hënë - E shtunë, 08:00 - 18:00",
    placeholders: ["Emri i kompanisë", "Email", "Industria", "Numri i telefonit", "Detajet shtesë"],
    submit: "Dërgo Kërkesë për Bashkëpunim",
    copyright: "A SHPED. Të gjitha të drejtat e rezervuara.",
  },
  en: {
    title: "A SHPED | Professional Customs Brokerage",
    description:
      "A SHPED provides professional customs brokerage, customs documentation and operational coordination for secure and efficient cargo movement.",
    nav: ["Services", "Process", "About", "Contact", "Partnership"],
    eyebrow: "Customs. Documentation. Coordination without delays.",
    heroTitle: "Move your cargo with a partner that keeps the process under control.",
    heroText:
      "A SHPED handles transit declarations, import-export documentation and operational coordination for companies that need accuracy, pace and professional communication.",
    heroButtons: ["Partnership Request", "View Services"],
    stats: [
      ["24/7", "Fast communication for critical processes"],
      ["T1 / IM / EX", "Documents prepared with full focus"],
      ["Prishtina", "Local partner with regional and European reach"],
    ],
    workflowKicker: "A SHPED Workflow",
    workflowSteps: ["Request", "Documents", "Customs", "Completion"],
    workflowTitle: "Structured brokerage for serious business.",
    workflowText:
      "From the first document to the final procedure, we organize the process so you have clarity and operational security.",
    workflowList: [
      "T1 declarations and transit procedures",
      "Import and export documentation",
      "Active coordination and customs support",
    ],
    trust:
      "A SHPED works with trading companies, carriers and operators that need clear procedures and professional execution.",
    servicesEyebrow: "Core Services",
    servicesTitle: "Everything customs brokerage needs in one trusted partner.",
    servicesText:
      "Our services are built for companies that want less uncertainty, fewer delays and more control over documentation and customs clearance.",
    serviceCards: [
      [
        "T1 Declarations",
        "Accurate preparation of transit documents for international movements with a focus on deadlines, precision and compliance.",
      ],
      [
        "Import & Export",
        "IM4, IM5, IM7, IM9 and EX1-EX3 prepared professionally to avoid operational issues and unnecessary delays.",
      ],
      [
        "Transit & Customs",
        "Support with customs procedures, CMR and supporting documents for smoother border clearance.",
      ],
      [
        "Operational Coordination",
        "Direct client communication and process follow-up from start to completion.",
      ],
    ],
    processEyebrow: "How We Work",
    processTitle: "A simple, clear and controlled process at every step.",
    timeline: [
      ["Request Intake", "Send us the route, cargo and transport deadline."],
      ["Data Verification", "We review the documents and define the right procedure."],
      ["Operational Preparation", "We prepare the declarations and coordinate the process with the relevant parties."],
      ["Procedure Follow-up", "We stay in active contact until the process and file are completed."],
    ],
    aboutEyebrow: "About A SHPED",
    aboutTitle: "A serious presence for companies moving goods without compromise.",
    aboutText:
      "Based in Prishtina, A SHPED focuses on customs brokerage procedures, customs documentation and process coordination that require precision and work rhythm.",
    instagramTitle: "Our latest Instagram posts.",
    instagramCta: "View on Instagram",
    contactEyebrow: "Contact",
    contactTitle: "Send a partnership request and we will contact you promptly.",
    contactText:
      "Send us your company details and interest in customs brokerage cooperation, and we will contact you with a professional approach.",
    contactMeta: ["Email:", "Phone:", "Location:", "Working hours:"],
    location: "Prishtina, Kosovo",
    hours: "Monday - Saturday, 08:00 - 18:00",
    placeholders: ["Company name", "Email", "Industry", "Phone number", "Additional details"],
    submit: "Send Partnership Request",
    copyright: "A SHPED. All rights reserved.",
  },
  de: {
    title: "A SHPED | Professionelle Zollabfertigung",
    description:
      "A SHPED bietet professionelle Zollabfertigung, Zolldokumentation und operative Koordination für sichere und effiziente Warenbewegungen.",
    nav: ["Leistungen", "Prozess", "Über uns", "Kontakt", "Partnerschaft"],
    eyebrow: "Zoll. Dokumentation. Koordination ohne Verzögerungen.",
    heroTitle: "Bewegen Sie Ihre Waren mit einem Partner, der den Prozess unter Kontrolle hält.",
    heroText:
      "A SHPED übernimmt Transitdeklarationen, Import-Export-Dokumentation und operative Koordination für Unternehmen, die Präzision, Tempo und professionelle Kommunikation brauchen.",
    heroButtons: ["Partnerschaftsanfrage", "Leistungen ansehen"],
    stats: [
      ["24/7", "Schnelle Kommunikation für kritische Prozesse"],
      ["T1 / IM / EX", "Dokumente mit voller Sorgfalt vorbereitet"],
      ["Pristina", "Lokaler Partner mit regionaler und europäischer Reichweite"],
    ],
    workflowKicker: "A SHPED Ablauf",
    workflowSteps: ["Anfrage", "Dokumente", "Zoll", "Abschluss"],
    workflowTitle: "Strukturierte Abfertigung für seriöse Unternehmen.",
    workflowText:
      "Vom ersten Dokument bis zum Abschluss organisieren wir den Prozess so, dass Sie Klarheit und operative Sicherheit haben.",
    workflowList: [
      "T1-Deklarationen und Transitverfahren",
      "Import- und Exportdokumentation",
      "Aktive Koordination und Zollunterstützung",
    ],
    trust:
      "A SHPED arbeitet mit Handelsunternehmen, Frachtführern und Betreibern, die klare Verfahren und professionelle Ausführung benötigen.",
    servicesEyebrow: "Kernleistungen",
    servicesTitle: "Alles, was Zollabfertigung braucht, in einem starken Partner.",
    servicesText:
      "Unsere Leistungen sind für Unternehmen aufgebaut, die weniger Unsicherheit, weniger Verzögerungen und mehr Kontrolle über Dokumentation und Zollabfertigung wollen.",
    serviceCards: [
      [
        "T1-Deklarationen",
        "Präzise Vorbereitung von Transitdokumenten für internationale Bewegungen mit Fokus auf Fristen, Genauigkeit und Konformität.",
      ],
      [
        "Import & Export",
        "IM4, IM5, IM7, IM9 und EX1-EX3 professionell vorbereitet, um operative Hindernisse und unnötige Verzögerungen zu vermeiden.",
      ],
      [
        "Transit & Zoll",
        "Unterstützung bei Zollverfahren, CMR und Begleitdokumenten für einen reibungsloseren Grenzübertritt.",
      ],
      [
        "Operative Koordination",
        "Direkte Kommunikation mit dem Kunden und Begleitung des Prozesses vom Start bis zum Abschluss.",
      ],
    ],
    processEyebrow: "So arbeiten wir",
    processTitle: "Ein einfacher, klarer und kontrollierter Prozess in jedem Schritt.",
    timeline: [
      ["Anfrageeingang", "Senden Sie uns Route, Ware und Transportfrist."],
      ["Datenprüfung", "Wir prüfen die Dokumente und bestimmen das richtige Verfahren."],
      ["Operative Vorbereitung", "Wir erstellen die Deklarationen und koordinieren den Prozess mit den relevanten Parteien."],
      ["Verfahrensbegleitung", "Wir bleiben im aktiven Kontakt bis zum Abschluss des Vorgangs und der Akte."],
    ],
    aboutEyebrow: "Über A SHPED",
    aboutTitle: "Eine seriöse Präsenz für Unternehmen, die Waren kompromisslos bewegen.",
    aboutText:
      "Mit Sitz in Prishtina konzentriert sich A SHPED auf Zollabfertigungsprozesse, Zolldokumentation und Prozesskoordination, die Präzision und Arbeitsrhythmus erfordern.",
    instagramTitle: "Unsere neuesten Instagram-Beiträge.",
    instagramCta: "Auf Instagram ansehen",
    contactEyebrow: "Kontakt",
    contactTitle: "Senden Sie eine Partnerschaftsanfrage und wir melden uns schnell bei Ihnen.",
    contactText:
      "Senden Sie uns Ihre Unternehmensdaten und Ihr Interesse an einer Zusammenarbeit im Bereich Zollabfertigung, und wir kontaktieren Sie professionell.",
    contactMeta: ["E-Mail:", "Telefon:", "Standort:", "Öffnungszeiten:"],
    location: "Pristina, Kosovo",
    hours: "Montag - Samstag, 08:00 - 18:00",
    placeholders: ["Firmenname", "E-Mail", "Branche", "Telefonnummer", "Zusätzliche Details"],
    submit: "Partnerschaftsanfrage senden",
    copyright: "A SHPED. Alle Rechte vorbehalten.",
  },
  fr: {
    title: "A SHPED | Courtage en douane professionnelle",
    description:
      "A SHPED propose des services professionnels de courtage en douane, de documentation douanière et de coordination opérationnelle pour des mouvements de marchandises sûrs et efficaces.",
    nav: ["Services", "Processus", "À propos", "Contact", "Partenariat"],
    eyebrow: "Douane. Documentation. Coordination sans retard.",
    heroTitle: "Déplacez vos marchandises avec un partenaire qui maîtrise chaque étape du processus.",
    heroText:
      "A SHPED gère les déclarations de transit, la documentation import-export et la coordination opérationnelle pour les entreprises qui recherchent précision, rythme et communication professionnelle.",
    heroButtons: ["Demande de partenariat", "Voir les services"],
    stats: [
      ["24/7", "Communication rapide pour les processus critiques"],
      ["T1 / IM / EX", "Documents préparés avec une attention totale"],
      ["Pristina", "Partenaire local avec portée régionale et européenne"],
    ],
    workflowKicker: "Flux A SHPED",
    workflowSteps: ["Demande", "Documents", "Douane", "Finalisation"],
    workflowTitle: "Un courtage structuré pour les entreprises sérieuses.",
    workflowText:
      "Du premier document à la finalisation de la procédure, nous organisons le processus afin de vous offrir clarté et sécurité opérationnelle.",
    workflowList: [
      "Déclarations T1 et procédures de transit",
      "Documentation d'importation et d'exportation",
      "Coordination active et assistance douanière",
    ],
    trust:
      "A SHPED travaille avec des entreprises commerciales, des transporteurs et des opérateurs qui ont besoin de procédures claires et d'une exécution professionnelle.",
    servicesEyebrow: "Services principaux",
    servicesTitle: "Tout ce dont le courtage en douane a besoin avec un seul partenaire fiable.",
    servicesText:
      "Nos services sont conçus pour les entreprises qui veulent moins d'incertitude, moins de retards et plus de contrôle sur la documentation et le passage en douane.",
    serviceCards: [
      [
        "Déclarations T1",
        "Préparation précise des documents de transit pour les mouvements internationaux, avec un accent sur les délais, la précision et la conformité.",
      ],
      [
        "Import & Export",
        "IM4, IM5, IM7, IM9 et EX1-EX3 préparés de manière professionnelle pour éviter les obstacles opérationnels et les retards inutiles.",
      ],
      [
        "Transit & Douane",
        "Assistance pour les procédures douanières, le CMR et les documents d'accompagnement afin d'assurer un passage plus fluide aux frontières.",
      ],
      [
        "Coordination opérationnelle",
        "Communication directe avec le client et suivi du processus du début à la fin.",
      ],
    ],
    processEyebrow: "Notre méthode",
    processTitle: "Un processus simple, clair et maîtrisé à chaque étape.",
    timeline: [
      ["Réception de la demande", "Envoyez-nous l'itinéraire, la marchandise et le délai de transport."],
      ["Vérification des données", "Nous examinons les documents et définissons la bonne procédure."],
      ["Préparation opérationnelle", "Nous préparons les déclarations et coordonnons le processus avec les parties concernées."],
      ["Suivi de la procédure", "Nous restons en contact actif jusqu'à la finalisation du dossier et du passage."],
    ],
    aboutEyebrow: "À propos d'A SHPED",
    aboutTitle: "Une présence sérieuse pour les entreprises qui déplacent leurs marchandises sans compromis.",
    aboutText:
      "Basée à Pristina, A SHPED se concentre sur les procédures de courtage en douane, la documentation douanière et la coordination de processus qui exigent précision et rigueur.",
    instagramTitle: "Nos dernières publications Instagram.",
    instagramCta: "@ashped_logistics",
    contactEyebrow: "Contact",
    contactTitle: "Envoyez une demande de partenariat et nous vous contacterons rapidement.",
    contactText:
      "Envoyez-nous les informations de votre entreprise et votre intérêt pour une collaboration dans les services de courtage en douane, et nous vous répondrons avec une approche professionnelle.",
    contactMeta: ["Email:", "Téléphone:", "Localisation:", "Horaires:"],
    location: "Pristina, Kosovo",
    hours: "Lundi - Samedi, 08:00 - 18:00",
    placeholders: ["Nom de l'entreprise", "Email", "Secteur", "Numéro de téléphone", "Détails supplémentaires"],
    submit: "Envoyer la demande de partenariat",
    copyright: "A SHPED. Tous droits réservés.",
  },
  it: {
    title: "A SHPED | Broker doganale professionale",
    description:
      "A SHPED offre servizi professionali di brokeraggio doganale, documentazione doganale e coordinamento operativo per movimenti merci sicuri ed efficienti.",
    nav: ["Servizi", "Processo", "Chi siamo", "Contatto", "Partnership"],
    eyebrow: "Dogana. Documentazione. Coordinamento senza ritardi.",
    heroTitle: "Muovi le tue merci con un partner che mantiene il processo sotto controllo.",
    heroText:
      "A SHPED gestisce dichiarazioni di transito, documentazione import-export e coordinamento operativo per aziende che richiedono precisione, ritmo e comunicazione professionale.",
    heroButtons: ["Richiesta di partnership", "Vedi i servizi"],
    stats: [
      ["24/7", "Comunicazione rapida per processi critici"],
      ["T1 / IM / EX", "Documenti preparati con massima attenzione"],
      ["Pristina", "Partner locale con portata regionale ed europea"],
    ],
    workflowKicker: "Workflow A SHPED",
    workflowSteps: ["Richiesta", "Documenti", "Dogana", "Completamento"],
    workflowTitle: "Brokeraggio strutturato per aziende serie.",
    workflowText:
      "Dal primo documento al completamento della procedura, organizziamo il processo affinché tu abbia chiarezza e sicurezza operativa.",
    workflowList: [
      "Dichiarazioni T1 e procedure di transito",
      "Documentazione di importazione ed esportazione",
      "Coordinamento attivo e supporto doganale",
    ],
    trust:
      "A SHPED lavora con aziende commerciali, trasportatori e operatori che necessitano di procedure chiare ed esecuzione professionale.",
    servicesEyebrow: "Servizi principali",
    servicesTitle: "Tutto ciò che serve al brokeraggio doganale in un unico partner affidabile.",
    servicesText:
      "I nostri servizi sono pensati per aziende che vogliono meno incertezza, meno ritardi e più controllo su documentazione e sdoganamento.",
    serviceCards: [
      [
        "Dichiarazioni T1",
        "Preparazione accurata dei documenti di transito per movimenti internazionali con attenzione a scadenze, precisione e conformità.",
      ],
      [
        "Import & Export",
        "IM4, IM5, IM7, IM9 ed EX1-EX3 preparati professionalmente per evitare ostacoli operativi e ritardi inutili.",
      ],
      [
        "Transito & Dogana",
        "Supporto nelle procedure doganali, CMR e documenti accompagnatori per un passaggio di frontiera più fluido.",
      ],
      [
        "Coordinamento operativo",
        "Comunicazione diretta con il cliente e monitoraggio del processo dall'inizio alla fine.",
      ],
    ],
    processEyebrow: "Come lavoriamo",
    processTitle: "Un processo semplice, chiaro e controllato in ogni fase.",
    timeline: [
      ["Ricezione della richiesta", "Inviaci itinerario, merce e scadenza del trasporto."],
      ["Verifica dei dati", "Controlliamo i documenti e definiamo la procedura corretta."],
      ["Preparazione operativa", "Prepariamo le dichiarazioni e coordiniamo il processo con le parti coinvolte."],
      ["Monitoraggio della procedura", "Restiamo in contatto attivo fino al completamento della pratica e del passaggio."],
    ],
    aboutEyebrow: "Chi è A SHPED",
    aboutTitle: "Una presenza seria per aziende che muovono merci senza compromessi.",
    aboutText:
      "Con sede a Pristina, A SHPED si concentra sulle procedure di brokeraggio doganale, sulla documentazione doganale e sul coordinamento dei processi che richiedono precisione e ritmo di lavoro.",
    instagramTitle: "I nostri ultimi post su Instagram.",
    instagramCta: "@ashped_logistics",
    contactEyebrow: "Contatto",
    contactTitle: "Invia una richiesta di partnership e ti contatteremo rapidamente.",
    contactText:
      "Inviaci i dati della tua azienda e il tuo interesse per una collaborazione nei servizi di brokeraggio doganale, e ti contatteremo con un approccio professionale.",
    contactMeta: ["Email:", "Telefono:", "Località:", "Orari:"],
    location: "Pristina, Kosovo",
    hours: "Lunedì - Sabato, 08:00 - 18:00",
    placeholders: ["Nome dell'azienda", "Email", "Settore", "Numero di telefono", "Dettagli aggiuntivi"],
    submit: "Invia richiesta di partnership",
    copyright: "A SHPED. Tutti i diritti riservati.",
  },
};

const selectorMap = {
  navLinks: ".nav-links a",
  eyebrow: ".hero-copy .eyebrow",
  heroTitle: ".hero-copy h1",
  heroText: ".hero-copy .hero-text",
  heroButtons: ".hero-actions a",
  heroStatArticles: ".hero-stats article",
  workflowKicker: ".panel-kicker",
  workflowSteps: ".panel-route span",
  workflowTitle: ".panel-box h2",
  workflowText: ".panel-box p",
  workflowList: ".panel-list li",
  trust: ".trust-row p",
  servicesEyebrow: "#services .section-heading .eyebrow",
  servicesTitle: "#services .section-heading h2",
  servicesText: "#services .section-text",
  serviceCards: "#services .service-card",
  processEyebrow: "#process .section-heading .eyebrow",
  processTitle: "#process .section-heading h2",
  timelineCards: ".timeline .timeline-card",
  aboutEyebrow: "#about .about-intro .eyebrow",
  aboutTitle: "#about .about-intro h2",
  aboutText: "#about .about-copy p",
  instagramTitle: "#instagram .section-heading h2",
  instagramCards: ".instagram-card",
  contactEyebrow: "#contact .contact-copy .eyebrow",
  contactTitle: "#contact .contact-copy h2",
  contactText: "#contact .contact-copy p:not(.eyebrow)",
  contactMeta: ".contact-list li strong",
  contactLocation: ".contact-list li:nth-child(3)",
  contactHours: ".contact-list li:nth-child(4)",
  placeholders: ".contact-form input, .contact-form textarea",
  submit: ".contact-form .btn-primary",
  copyright: ".footer-bottom p",
};

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function applyLanguage(lang) {
  const base = translations[lang] || translations.en;
  initialLanguage = lang;
  document.documentElement.lang = lang === "sq" ? "sq" : "en";
  document.title = base.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", base.description);

  const nav = document.querySelectorAll(selectorMap.navLinks);
  base.nav.forEach((text, index) => {
    if (nav[index]) nav[index].textContent = text;
  });

  setText(selectorMap.eyebrow, base.eyebrow);
  setText(selectorMap.heroTitle, base.heroTitle);
  setText(selectorMap.heroText, base.heroText);

  const heroButtons = document.querySelectorAll(selectorMap.heroButtons);
  base.heroButtons.forEach((text, index) => {
    if (heroButtons[index]) heroButtons[index].textContent = text;
  });

  const stats = document.querySelectorAll(selectorMap.heroStatArticles);
  base.stats.forEach((item, index) => {
    if (stats[index]) {
      const strong = stats[index].querySelector("strong");
      const span = stats[index].querySelector("span");
      if (strong) strong.textContent = item[0];
      if (span) span.textContent = item[1];
    }
  });

  setText(selectorMap.workflowKicker, base.workflowKicker);
  const steps = document.querySelectorAll(selectorMap.workflowSteps);
  base.workflowSteps.forEach((text, index) => {
    if (steps[index]) steps[index].textContent = text;
  });
  setText(selectorMap.workflowTitle, base.workflowTitle);
  setText(selectorMap.workflowText, base.workflowText);

  const workflowList = document.querySelectorAll(selectorMap.workflowList);
  base.workflowList.forEach((text, index) => {
    if (workflowList[index]) workflowList[index].textContent = text;
  });

  setText(selectorMap.trust, base.trust);
  setText(selectorMap.servicesEyebrow, base.servicesEyebrow);
  setText(selectorMap.servicesTitle, base.servicesTitle);
  setText(selectorMap.servicesText, base.servicesText);

  const serviceCards = document.querySelectorAll(selectorMap.serviceCards);
  base.serviceCards.forEach((item, index) => {
    if (serviceCards[index]) {
      const title = serviceCards[index].querySelector("h3");
      const text = serviceCards[index].querySelector("p");
      if (title) title.textContent = item[0];
      if (text) text.textContent = item[1];
    }
  });

  setText(selectorMap.processEyebrow, base.processEyebrow);
  setText(selectorMap.processTitle, base.processTitle);

  const timelineCards = document.querySelectorAll(selectorMap.timelineCards);
  base.timeline.forEach((item, index) => {
    if (timelineCards[index]) {
      const title = timelineCards[index].querySelector("h3");
      const text = timelineCards[index].querySelector("p");
      if (title) title.textContent = item[0];
      if (text) text.textContent = item[1];
    }
  });

  setText(selectorMap.aboutEyebrow, base.aboutEyebrow);
  setText(selectorMap.aboutTitle, base.aboutTitle);
  const aboutText = document.querySelector(selectorMap.aboutText);
  if (aboutText) aboutText.textContent = base.aboutText;

  setText(selectorMap.instagramTitle, base.instagramTitle);
  const instagramCards = document.querySelectorAll(selectorMap.instagramCards);
  instagramCards.forEach((card) => {
    const bottomText = card.querySelector("span:last-child");
    if (bottomText) bottomText.textContent = base.instagramCta;
  });

  setText(selectorMap.contactEyebrow, base.contactEyebrow);
  setText(selectorMap.contactTitle, base.contactTitle);
  setText(selectorMap.contactText, base.contactText);

  const contactMeta = document.querySelectorAll(selectorMap.contactMeta);
  base.contactMeta.forEach((text, index) => {
    if (contactMeta[index]) contactMeta[index].textContent = text;
  });

  const location = document.querySelector(selectorMap.contactLocation);
  const hours = document.querySelector(selectorMap.contactHours);
  if (location) location.innerHTML = `<strong>${base.contactMeta[2]}</strong> ${base.location}`;
  if (hours) hours.innerHTML = `<strong>${base.contactMeta[3]}</strong> ${base.hours}`;

  const placeholders = document.querySelectorAll(selectorMap.placeholders);
  base.placeholders.forEach((text, index) => {
    if (placeholders[index]) placeholders[index].placeholder = text;
  });

  setText(selectorMap.submit, base.submit);
  const copyright = document.querySelector(selectorMap.copyright);
  if (copyright) {
    copyright.innerHTML = `&copy; <span id="year">${new Date().getFullYear()}</span> ${base.copyright}`;
  }

  if (languageCurrent) {
    const active = Array.from(languageOptions).find((option) => option.dataset.lang === lang);
    languageCurrent.textContent = active ? active.textContent : "English";
  }

  languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === lang);
  });

  try {
    localStorage.setItem("ashped-language", lang);
  } catch {}
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (languageToggle && languageMenu) {
  languageToggle.addEventListener("click", () => {
    const isOpen = languageToggle.getAttribute("aria-expanded") === "true";
    languageToggle.setAttribute("aria-expanded", String(!isOpen));
    languageMenu.hidden = isOpen;
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const selected = option.dataset.lang || "en";
      applyLanguage(translations[selected] ? selected : "en");
      languageToggle.setAttribute("aria-expanded", "false");
      languageMenu.hidden = true;
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageMenu.hidden && !event.target.closest(".footer-language")) {
      languageToggle.setAttribute("aria-expanded", "false");
      languageMenu.hidden = true;
    }
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

let initialLanguage = "sq";
try {
  initialLanguage = localStorage.getItem("ashped-language") || "sq";
} catch {}
applyLanguage(initialLanguage);

if (window.emailjs) {
  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

if (contactForm && window.emailjs) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton ? submitButton.textContent : "";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = initialLanguage === "sq"
        ? "Duke dërguar..."
        : initialLanguage === "de"
          ? "Wird gesendet..."
          : initialLanguage === "fr"
            ? "Envoi..."
            : initialLanguage === "it"
              ? "Invio..."
              : "Sending...";
    }

    if (formStatus) {
      formStatus.textContent = "";
      formStatus.classList.remove("is-success", "is-error");
    }

    try {
      const formData = new FormData(contactForm);
      const replyTo = String(formData.get("email") || "").trim();
      const templateParams = {
        company: String(formData.get("company") || "").trim(),
        email: replyTo,
        reply_to: replyTo,
        industry: String(formData.get("industry") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        details: String(formData.get("details") || "").trim(),
        from_email: FORM_FROM_EMAIL,
        to_email: FORM_TO_EMAIL,
      };

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (formStatus) {
        const successMessage = {
          sq: "Kërkesa u dërgua me sukses.",
          en: "Your request was sent successfully.",
          de: "Ihre Anfrage wurde erfolgreich gesendet.",
          fr: "Votre demande a été envoyée avec succès.",
          it: "La tua richiesta è stata inviata con successo.",
        };
        formStatus.textContent = successMessage[initialLanguage] || successMessage.en;
        formStatus.classList.add("is-success");
      }

      contactForm.reset();
    } catch (error) {
      if (formStatus) {
        const errorMessage = {
          sq: "Dërgimi dështoi. Ju lutem provoni përsëri.",
          en: "Sending failed. Please try again.",
          de: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
          fr: "Échec de l'envoi. Veuillez réessayer.",
          it: "Invio non riuscito. Riprova.",
        };
        formStatus.textContent = errorMessage[initialLanguage] || errorMessage.en;
        formStatus.classList.add("is-error");
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    }
  });
}
