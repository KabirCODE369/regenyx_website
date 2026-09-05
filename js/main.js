/* ============================================================
   REGENYX AEROSPACE — COMPLETE MAIN.JS
   ============================================================ */

const translations = {

    en: {

        navTechnology: "Technology",
        navEngineering: "Engineering",
        navApplications: "Applications",
        navRoadmap: "Roadmap",
        navCollaborate: "Collaborate",

        heroEyebrow: "DEEP-TECH AEROSPACE",

        heroTitle1: "Engineering",
        heroTitle2: "Intelligent Structures",
        heroTitle3: "for the Future of Flight Missions.",

        heroDescription:
            "Adaptive aerospace structures engineered to autonomously reroute mechanical loads, redistribute stresses and enhance structural survivability.",

        heroButton1: "Explore Technology",
        heroButton2: "Engineering Approach",

        heroStatus:
            "ADAPTIVE STRUCTURAL INTELLIGENCE",

        scroll:
            "SCROLL TO EXPLORE",

        thesisLabel:
            "STRUCTURAL THESIS",

        thesisTitle1:
            "What if a structure could",

        thesisTitle2:
            "respond to its own loading?",

        thesisParagraph1:
            "Conventional aerospace structures are designed around predefined load paths. When those paths become overloaded, the structure depends primarily on passive margins and failure containment.",

        thesisParagraph2:
            "Regenyx Aerospace explores a different paradigm: structures whose architecture can respond to changing mechanical states by activating alternative load paths and redistributing mechanical demand.",

        camlrFull:
            "Constraint-Activated Metastable Load Routing Mechanism",

        pttlrFull:
            "Phase-Transition-Triggered Load Redistribution",

        technologyLabel:
            "CORE TECHNOLOGY",

        technologyTitle1:
            "Mechanical intelligence",

        technologyTitle2:
            "embedded in architecture.",

        technologyIntro:
            "Hierarchical structural architectures combined with state-dependent load-routing mechanisms.",

        camlrSubtitle:
            "Constraint-Activated Metastable Load Routing Mechanism",

        camlrDescription:
            "A structural mechanism in which a critical constraint state activates an alternate mechanical load path.",

        pttlrSubtitle:
            "Phase-Transition-Triggered Load Redistribution",

        pttlrDescription:
            "A structural state transition that redistributes mechanical demand across the hierarchy.",

        loadRouting:
            "LOAD ROUTING",

        loadRedistribution:
            "LOAD REDISTRIBUTION",

        mechanismLabel:
            "MECHANISM",

        mechanismTitle1:
            "From applied load",

        mechanismTitle2:
            "to adaptive response.",

        mechanism1Title:
            "LOAD",

        mechanism1Text:
            "External mechanical loading enters the structural hierarchy.",

        mechanism2Title:
            "CRITICAL STATE",

        mechanism2Text:
            "A structural constraint approaches its critical mechanical condition.",

        mechanism3Title:
            "TRANSITION",

        mechanism3Text:
            "The architecture changes its active mechanical state.",

        mechanism4Title:
            "REDISTRIBUTION",

        mechanism4Text:
            "Mechanical demand is redistributed through alternative structural pathways.",

        simulationLabel:
            "LIVE CONCEPTUAL MODEL",

        simulationTitle:
            "Mechanical Intelligence",

        simulationDescription:
            "Explore a simplified representation of adaptive mechanical load routing.",

        simulationWarning:
            "CONCEPTUAL MODEL · NOT A VALIDATED SOLVER",

        visualizationTitle:
            "STRUCTURAL LOAD PATH",

        constraint:
            "CONSTRAINT",

        primaryPathLabel:
            "PRIMARY PATH",

        camlrPathLabel:
            "CAMLR PATH",

        pttlrPathLabel:
            "PTTLR STATE",

        legendPrimary:
            "Primary",

        legendCamlr:
            "CAMLR",

        legendPttlr:
            "PTTLR",

        controlsTitle:
            "SIMULATION CONTROLS",

        appliedLoad:
            "APPLIED LOAD",

        camlrThreshold:
            "CAMLR THRESHOLD",

        pttlrSwitch:
            "PTTLR",

        pttlrSwitchDescription:
            "Enable phase-transition redistribution",

        reset:
            "RESET SIMULATION",

        liveReadout:
            "LIVE READOUT",

        state:
            "STATE",

        primaryPath:
            "PRIMARY PATH",

        camlrPath:
            "CAMLR PATH",

        pttlrRedistribution:
            "PTTLR REDISTRIBUTION",

        eventLog:
            "EVENT LOG",

        systemInitialized:
            "SYSTEM INITIALIZED",

        engineeringLabel:
            "COMPUTATIONAL ENGINEERING",

        engineeringTitle1:
            "Designed through",

        engineeringTitle2:
            "physics, computation and simulation.",

        engineering1Title:
            "MULTIPHYSICS",

        engineering1Text:
            "Coupled mechanical, thermal and material-state behaviour.",

        engineering2Title:
            "FINITE ELEMENT ANALYSIS",

        engineering2Text:
            "Structural response, stress concentration, nonlinear behaviour and damage evolution.",

        engineering3Title:
            "TOPOLOGY OPTIMIZATION",

        engineering3Text:
            "Computational generation of hierarchical architectures and adaptive load paths.",

        engineering4Title:
            "MATERIAL INTELLIGENCE",

        engineering4Text:
            "Advanced material systems designed to interact with structural architecture.",

        applicationsLabel:
            "APPLICATIONS",

        applicationsTitle1:
            "Built for demanding",

        applicationsTitle2:
            "flight environments.",

        application1Title:
            "LAUNCH VEHICLES",

        application1Text:
            "Adaptive structural architectures for extreme launch loading environments.",

        application2Title:
            "SPACECRAFT",

        application2Text:
            "Lightweight structures capable of managing changing mission load cases.",

        application3Title:
            "AEROSPACE SYSTEMS",

        application3Text:
            "Hierarchical structures designed for improved damage tolerance and survivability.",

        roadmapLabel:
            "TECHNOLOGY MATURATION",

        roadmapTitle1:
            "From fundamental concept",

        roadmapTitle2:
            "to flight-relevant technology.",

        roadmap1Title:
            "FUNDAMENTAL PRINCIPLE",

        roadmap1Text:
            "Establish the physical basis of adaptive load routing.",

        roadmap2Title:
            "COMPUTATIONAL VALIDATION",

        roadmap2Text:
            "Numerical modelling and structural simulation.",

        roadmap3Title:
            "EXPERIMENTAL DEMONSTRATION",

        roadmap3Text:
            "Physical demonstrators and laboratory validation.",

        contactLabel:
            "COLLABORATION",

        contactTitle1:
            "Let's engineer the",

        contactTitle2:
            "next structural paradigm.",

        contactText:
            "Regenyx Aerospace is developing partnerships across aerospace engineering, advanced materials, computational mechanics and space systems.",

        contactButton:
            "Start a Conversation",

        footerText:
            "Engineering Intelligent Structures for the Future of Flight Missions."

    },


    fr: {

        navTechnology: "Technologie",
        navEngineering: "Ingénierie",
        navApplications: "Applications",
        navRoadmap: "Feuille de route",
        navCollaborate: "Collaborer",

        heroEyebrow:
            "AÉROSPATIAL DEEP-TECH",

        heroTitle1:
            "Concevoir",

        heroTitle2:
            "des Structures Intelligentes",

        heroTitle3:
            "pour les futures missions aéronautiques et spatiales.",

        heroDescription:
            "Des structures aérospatiales adaptatives conçues pour réorienter automatiquement les charges mécaniques, redistribuer les contraintes et améliorer la survivabilité structurale.",

        heroButton1:
            "Découvrir la technologie",

        heroButton2:
            "Approche d'ingénierie",

        heroStatus:
            "INTELLIGENCE STRUCTURALE ADAPTATIVE",

        scroll:
            "FAIRE DÉFILER",

        thesisLabel:
            "THÈSE STRUCTURALE",

        thesisTitle1:
            "Et si une structure pouvait",

        thesisTitle2:
            "répondre à son propre chargement ?",

        thesisParagraph1:
            "Les structures aérospatiales conventionnelles sont conçues autour de chemins de charge prédéfinis. Lorsque ces chemins sont surchargés, la structure dépend principalement de marges passives et de mécanismes de confinement de la rupture.",

        thesisParagraph2:
            "Regenyx Aerospace explore un paradigme différent : des structures dont l'architecture peut répondre à l'évolution de l'état mécanique en activant des chemins de charge alternatifs et en redistribuant les sollicitations mécaniques.",

        camlrFull:
            "Mécanisme de routage métastable des charges activé par contrainte",

        pttlrFull:
            "Redistribution des charges déclenchée par transition de phase",

        technologyLabel:
            "TECHNOLOGIE CENTRALE",

        technologyTitle1:
            "L'intelligence mécanique",

        technologyTitle2:
            "intégrée à l'architecture.",

        technologyIntro:
            "Des architectures structurales hiérarchiques combinées à des mécanismes de transfert de charge dépendants de l'état mécanique.",

        camlrSubtitle:
            "Mécanisme de routage métastable des charges activé par contrainte",

        camlrDescription:
            "Un mécanisme structural dans lequel un état critique de contrainte active un chemin mécanique de charge alternatif.",

        pttlrSubtitle:
            "Redistribution des charges déclenchée par transition de phase",

        pttlrDescription:
            "Une transition d'état structural qui redistribue les sollicitations mécaniques à travers la hiérarchie.",

        loadRouting:
            "ROUTAGE DES CHARGES",

        loadRedistribution:
            "REDISTRIBUTION DES CHARGES",

        mechanismLabel:
            "MÉCANISME",

        mechanismTitle1:
            "De la charge appliquée",

        mechanismTitle2:
            "à la réponse adaptative.",

        mechanism1Title:
            "CHARGE",

        mechanism1Text:
            "Le chargement mécanique externe entre dans la hiérarchie structurale.",

        mechanism2Title:
            "ÉTAT CRITIQUE",

        mechanism2Text:
            "Une contrainte structurale approche de sa condition mécanique critique.",

        mechanism3Title:
            "TRANSITION",

        mechanism3Text:
            "L'architecture change son état mécanique actif.",

        mechanism4Title:
            "REDISTRIBUTION",

        mechanism4Text:
            "La sollicitation mécanique est redistribuée à travers des chemins structuraux alternatifs.",

        simulationLabel:
            "MODÈLE CONCEPTUEL INTERACTIF",

        simulationTitle:
            "Intelligence Mécanique",

        simulationDescription:
            "Explorez une représentation simplifiée du routage adaptatif des charges mécaniques.",

        simulationWarning:
            "MODÈLE CONCEPTUEL · PAS UN SOLVEUR VALIDÉ",

        visualizationTitle:
            "CHEMIN DE CHARGE STRUCTURAL",

        constraint:
            "CONTRAINTE",

        primaryPathLabel:
            "CHEMIN PRINCIPAL",

        camlrPathLabel:
            "CHEMIN CAMLR",

        pttlrPathLabel:
            "ÉTAT PTTLR",

        legendPrimary:
            "Principal",

        legendCamlr:
            "CAMLR",

        legendPttlr:
            "PTTLR",

        controlsTitle:
            "COMMANDES DE SIMULATION",

        appliedLoad:
            "CHARGE APPLIQUÉE",

        camlrThreshold:
            "SEUIL CAMLR",

        pttlrSwitch:
            "PTTLR",

        pttlrSwitchDescription:
            "Activer la redistribution par transition de phase",

        reset:
            "RÉINITIALISER",

        liveReadout:
            "LECTURE EN DIRECT",

        state:
            "ÉTAT",

        primaryPath:
            "CHEMIN PRINCIPAL",

        camlrPath:
            "CHEMIN CAMLR",

        pttlrRedistribution:
            "REDISTRIBUTION PTTLR",

        eventLog:
            "JOURNAL DES ÉVÉNEMENTS",

        systemInitialized:
            "SYSTÈME INITIALISÉ",

        engineeringLabel:
            "INGÉNIERIE COMPUTATIONNELLE",

        engineeringTitle1:
            "Conçu à travers",

        engineeringTitle2:
            "la physique, le calcul et la simulation.",

        engineering1Title:
            "MULTIPHYSIQUE",

        engineering1Text:
            "Couplage des comportements mécaniques, thermiques et liés à l'état des matériaux.",

        engineering2Title:
            "ANALYSE PAR ÉLÉMENTS FINIS",

        engineering2Text:
            "Réponse structurale, concentrations de contraintes, comportement non linéaire et évolution des dommages.",

        engineering3Title:
            "OPTIMISATION TOPOLOGIQUE",

        engineering3Text:
            "Génération computationnelle d'architectures hiérarchiques et de chemins de charge adaptatifs.",

        engineering4Title:
            "INTELLIGENCE MATÉRIAU",

        engineering4Text:
            "Systèmes de matériaux avancés conçus pour interagir avec l'architecture structurale.",

        applicationsLabel:
            "APPLICATIONS",

        applicationsTitle1:
            "Conçu pour les environnements",

        applicationsTitle2:
            "de vol les plus exigeants.",

        application1Title:
            "LANCEURS",

        application1Text:
            "Architectures structurales adaptatives pour les environnements de chargement extrêmes du lancement.",

        application2Title:
            "ENGINS SPATIAUX",

        application2Text:
            "Structures légères capables de gérer l'évolution des cas de charge pendant la mission.",

        application3Title:
            "SYSTÈMES AÉROSPATIAUX",

        application3Text:
            "Structures hiérarchiques conçues pour améliorer la tolérance aux dommages et la survivabilité.",

        roadmapLabel:
            "MATURATION TECHNOLOGIQUE",

        roadmapTitle1:
            "Du concept fondamental",

        roadmapTitle2:
            "à une technologie pertinente pour le vol.",

        roadmap1Title:
            "PRINCIPE FONDAMENTAL",

        roadmap1Text:
            "Établir les fondements physiques du routage adaptatif des charges.",

        roadmap2Title:
            "VALIDATION COMPUTATIONNELLE",

        roadmap2Text:
            "Modélisation numérique et simulation structurale.",

        roadmap3Title:
            "DÉMONSTRATION EXPÉRIMENTALE",

        roadmap3Text:
            "Démonstrateurs physiques et validation en laboratoire.",

        contactLabel:
            "COLLABORATION",

        contactTitle1:
            "Construisons ensemble",

        contactTitle2:
            "le prochain paradigme structural.",

        contactText:
            "Regenyx Aerospace développe des partenariats dans l'ingénierie aérospatiale, les matériaux avancés, la mécanique computationnelle et les systèmes spatiaux.",

        contactButton:
            "Démarrer une conversation",

        footerText:
            "Concevoir des structures intelligentes pour les futures missions aéronautiques et spatiales."

    }

};


/* ============================================================
   REGENYX AEROSPACE — COMPLETE MAIN.JS
   CAML / PTTLR LIVE CONCEPTUAL MODEL
   ============================================================ */

/* Keep the existing language dictionary, but add the simulation
   interface labels used by the revised simulation controls. */
Object.assign(translations.en, {
    appliedForce: "APPLIED LOAD",
    routingDecision: "LOAD ROUTING DECISION",
    constraintUtilization: "CONSTRAINT UTILIZATION",
    activeMechanism: "ACTIVE MECHANISM",
    legendPrimary: "Primary load path",
    legendCaml: "CAML rerouting",
    legendPttlr: "PTTLR redistribution",
    modelNote: "The model progressively changes load routing as constraint utilization reaches the CAML transition threshold.",
    runCycle: "RUN LOAD RAMP",
    engineeringReadout: "ENGINEERING READOUT",
    currentLoadLabel: "APPLIED LOAD",
    utilizationLabel: "CONSTRAINT UTILIZATION",
    marginLabel: "REMAINING MARGIN",
    mechanismLabel: "ACTIVE MECHANISM",
    loadDistribution: "LOAD DISTRIBUTION",
    controlsTitle: "SIMULATION CONTROLS",
    appliedLoad: "APPLIED LOAD",
    camlrThreshold: "CAML THRESHOLD",
    pttlrSwitch: "PTTLR",
    pttlrSwitchDescription: "Enable phase-transition redistribution",
    reset: "RESET SIMULATION",
    liveReadout: "LIVE READOUT",
    state: "STATE",
    primaryPath: "PRIMARY PATH",
    camlrPath: "CAML PATH",
    pttlrRedistribution: "PTTLR REDISTRIBUTION",
    eventLog: "EVENT LOG"
});

Object.assign(translations.fr, {
    appliedForce: "CHARGE APPLIQUÉE",
    routingDecision: "DÉCISION DE ROUTAGE",
    constraintUtilization: "UTILISATION DE LA CONTRAINTE",
    activeMechanism: "MÉCANISME ACTIF",
    legendPrimary: "Chemin de charge principal",
    legendCaml: "Routage CAML",
    legendPttlr: "Redistribution PTTLR",
    modelNote: "Le modèle modifie progressivement le routage de charge lorsque l'utilisation de la contrainte atteint le seuil de transition CAML.",
    runCycle: "LANCER LA RAMPE DE CHARGE",
    engineeringReadout: "LECTURE TECHNIQUE",
    currentLoadLabel: "CHARGE APPLIQUÉE",
    utilizationLabel: "UTILISATION DE LA CONTRAINTE",
    marginLabel: "MARGE RESTANTE",
    mechanismLabel: "MÉCANISME ACTIF",
    loadDistribution: "RÉPARTITION DE LA CHARGE",
    controlsTitle: "COMMANDES DE SIMULATION",
    appliedLoad: "CHARGE APPLIQUÉE",
    camlrThreshold: "SEUIL CAML",
    pttlrSwitch: "PTTLR",
    pttlrSwitchDescription: "Activer la redistribution par transition de phase",
    reset: "RÉINITIALISER LA SIMULATION",
    liveReadout: "LECTURE EN DIRECT",
    state: "ÉTAT",
    primaryPath: "CHEMIN PRINCIPAL",
    camlrPath: "CHEMIN CAML",
    pttlrRedistribution: "REDISTRIBUTION PTTLR",
    eventLog: "JOURNAL DES ÉVÉNEMENTS"
});


/* ============================================================
   GLOBAL STATE
   ============================================================ */

let currentLanguage = "en";
let simulationInitialized = false;
let simulationAnimationFrame = null;


/* ============================================================
   HELPERS
   ============================================================ */

function prefersReducedMotion() {
    return window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function safeNumber(value, fallback) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
}


/* ============================================================
   LANGUAGE
   ============================================================ */

function detectLanguage() {
    const saved = localStorage.getItem("regenyx-language");

    if (saved === "fr" || saved === "en") {
        return saved;
    }

    const browserLanguage =
        navigator.language || navigator.userLanguage || "en";

    return browserLanguage.toLowerCase().startsWith("fr")
        ? "fr"
        : "en";
}

function applyLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (dictionary[key] !== undefined) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll("[data-i18n-svg]").forEach(element => {
        const key = element.dataset.i18nSvg;
        if (dictionary[key] !== undefined) {
            element.textContent = dictionary[key];
        }
    });

    const indicator = document.getElementById("currentLanguage");
    if (indicator) indicator.textContent = language.toUpperCase();

    document.title = language === "fr"
        ? "Regenyx Aerospace — Structures Intelligentes"
        : "Regenyx Aerospace — Intelligent Structures";
}

function setGoogleLanguage(language) {
    const target = String(language || "en").toLowerCase();

    localStorage.setItem("regenyx-language", target);

    if (target === "en") {
        document.cookie = "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "googtrans=;path=/;domain=" +
            window.location.hostname +
            ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
    } else {
        document.cookie = "googtrans=/en/" + target + ";path=/";
    }

    window.location.reload();
}

function changeLanguage(language) {
    const nativeLanguages = ["en", "fr"];

    if (nativeLanguages.includes(language)) {
        localStorage.setItem("regenyx-language", language);
        applyLanguage(language);
        return;
    }

    setGoogleLanguage(language);
}

function initializeLanguage() {
    applyLanguage(detectLanguage());

    const button = document.getElementById("languageButton");
    const menu = document.getElementById("languageMenu");

    if (!button || !menu) return;

    if (button.dataset.languageReady === "true") return;
    button.dataset.languageReady = "true";

    button.addEventListener("click", event => {
        event.stopPropagation();

        const open = !menu.classList.contains("open");
        menu.classList.toggle("open", open);
        button.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("[data-language]").forEach(item => {
        item.addEventListener("click", event => {
            event.stopPropagation();
            changeLanguage(item.dataset.language);
            menu.classList.remove("open");
            button.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", event => {
        if (!menu.contains(event.target) && event.target !== button) {
            menu.classList.remove("open");
            button.setAttribute("aria-expanded", "false");
        }
    });
}


/* ============================================================
   HEADER
   ============================================================ */

function initializeHeader() {
    const header = document.getElementById("siteHeader");
    if (!header) return;

    const update = () => {
        header.classList.toggle("scrolled", window.scrollY > 30);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
}


/* ============================================================
   NAVIGATION + MOBILE MENU
   ============================================================ */

function initializeNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({
                behavior: prefersReducedMotion() ? "auto" : "smooth",
                block: "start"
            });

            const mobileMenu = document.getElementById("mobileMenu");
            const mobileButton = document.getElementById("mobileMenuButton");

            if (mobileMenu) mobileMenu.classList.remove("open");
            if (mobileButton) {
                mobileButton.classList.remove("open");
                mobileButton.setAttribute("aria-expanded", "false");
            }
        });
    });

    const button = document.getElementById("mobileMenuButton");
    const menu = document.getElementById("mobileMenu");

    if (!button || !menu) return;
    if (button.dataset.mobileReady === "true") return;
    button.dataset.mobileReady = "true";

    const close = () => {
        menu.classList.remove("open");
        button.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
    };

    button.addEventListener("click", event => {
        event.stopPropagation();
        const open = !menu.classList.contains("open");
        menu.classList.toggle("open", open);
        button.classList.toggle("open", open);
        button.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", close);
    });

    document.addEventListener("click", event => {
        if (!menu.contains(event.target) && event.target !== button) {
            close();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) close();
    }, { passive: true });
}


/* ============================================================
   REVEAL ANIMATIONS
   ============================================================ */

function initializeRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.10,
        rootMargin: "0px 0px -40px 0px"
    });

    elements.forEach(element => observer.observe(element));
}


/* ============================================================
   VIDEO
   ============================================================ */

function initializeVideo() {
    const video = document.getElementById("heroVideo") || document.querySelector("video");
    if (!video) return;

    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");

    const attemptPlay = () => {
        const promise = video.play();
        if (promise && typeof promise.catch === "function") {
            promise.catch(() => {});
        }
    };

    attemptPlay();
    video.addEventListener("loadeddata", attemptPlay, { once: true });
    video.addEventListener("canplay", attemptPlay, { once: true });

    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && video.paused) attemptPlay();
    });
}


/* ============================================================
   CAML / PTTLR SIMULATION
   ============================================================

   Conceptual behavior:

   NORMAL
      Applied load is comfortably below the CAML threshold.
      100% of the conceptual load follows the primary path.

   CONSTRAINT APPROACH
      Load approaches the threshold.
      The primary path remains active, while the constraint node
      visually indicates that the architecture is approaching
      its transition condition.

   CAML ACTIVATION
      Applied load reaches/exceeds the threshold.
      CAML activates an alternate load path and transfers load
      away from the conventional primary path.

   PTTLR TRANSITION
      With PTTLR enabled, the transferred load is distributed
      hierarchically instead of simply switching from A to B.

   This is intentionally a conceptual visualization, not a
   finite-element solver or validated structural analysis.
   ============================================================ */

function initializeSimulation() {
    if (simulationInitialized) return;

    const loadSlider = document.getElementById("loadSlider");
    const thresholdSlider = document.getElementById("thresholdSlider");
    const pttlrToggle = document.getElementById("pttlrToggle");
    const resetButton = document.getElementById("resetButton");
    const runCycleButton = document.getElementById("runCycleButton");

    if (!loadSlider || !thresholdSlider || !pttlrToggle) {
        console.warn("Regenyx simulation: controls not found.");
        return;
    }

    const svgNS = "http://www.w3.org/2000/svg";
    const elements = {
        loadDisplay: document.getElementById("loadDisplay"),
        thresholdDisplay: document.getElementById("thresholdDisplay"),
        state: document.getElementById("simulationState"),
        stateReadout: document.getElementById("stateReadout"),
        primaryReadout: document.getElementById("primaryReadout"),
        camlrReadout: document.getElementById("camlrReadout"),
        pttlrReadout: document.getElementById("pttlrReadout"),
        currentLoad: document.getElementById("currentLoad"),
        utilization: document.getElementById("constraintUtilization"),
        reserveMargin: document.getElementById("reserveMargin"),
        mechanism: document.getElementById("mechanismReadout"),
        primaryBar: document.getElementById("primaryBar"),
        camlBar: document.getElementById("camlBar"),
        pttlrBar: document.getElementById("pttlrBar"),
        svgLoadValue: document.getElementById("svgLoadValue"),
        svgUtilization: document.getElementById("svgUtilization"),
        svgMechanism: document.getElementById("svgMechanism"),
        inboundPath: document.getElementById("inboundPath"),
        decisionPath: document.getElementById("decisionPath"),
        primaryPath: document.getElementById("primaryPath"),
        camlrPath: document.getElementById("camlrPath"),
        pttlrPath: document.getElementById("pttlrPath"),
        criticalNode: document.getElementById("criticalNode"),
        particles: document.getElementById("particles"),
        container: document.getElementById("loadVisualization"),
        eventLog: document.getElementById("eventLog")
    };

    if (!elements.inboundPath || !elements.decisionPath ||
        !elements.primaryPath || !elements.camlrPath ||
        !elements.pttlrPath || !elements.particles) {
        console.warn("Regenyx simulation: SVG elements are incomplete.");
        return;
    }

    simulationInitialized = true;

    const model = {
        defaultLoad: 40,
        defaultThreshold: 65,
        warningBand: 15,
        particles: 36,
        animationSpeed: 0.00024
    };

    const state = {
        load: clamp(safeNumber(loadSlider.value, model.defaultLoad), 0, 100),
        threshold: clamp(safeNumber(thresholdSlider.value, model.defaultThreshold), 20, 95),
        pttlr: Boolean(pttlrToggle.checked),
        name: "NORMAL",
        mechanism: "PRIMARY",
        primary: 100,
        caml: 0,
        pttlrPath: 0,
        utilization: 0,
        margin: 100,
        transitionProgress: 0,
        pathLengths: {
            inbound: 0,
            decision: 0,
            primary: 0,
            caml: 0,
            pttlr: 0
        },
        particles: []
    };

    let previousState = null;
    let cycleFrame = null;
    let cycleRunning = false;

    function measurePaths() {
        [
            ["inbound", elements.inboundPath],
            ["decision", elements.decisionPath],
            ["primary", elements.primaryPath],
            ["caml", elements.camlrPath],
            ["pttlr", elements.pttlrPath]
        ].forEach(([name, path]) => {
            try {
                state.pathLengths[name] = path.getTotalLength();
            } catch (error) {
                state.pathLengths[name] = 0;
            }
        });
    }

    function getModel() {
        const load = clamp(state.load, 0, 100);
        const threshold = clamp(state.threshold, 20, 95);
        const warningStart = Math.max(0, threshold - model.warningBand);

        state.utilization = threshold > 0
            ? (load / threshold) * 100
            : 100;
        state.margin = Math.max(0, 100 - state.utilization);

        if (load < warningStart) {
            state.name = "NORMAL";
            state.mechanism = "PRIMARY";
            state.primary = 100;
            state.caml = 0;
            state.pttlrPath = 0;
            state.transitionProgress = 0;
            return;
        }

        if (load < threshold) {
            state.name = "CONSTRAINT APPROACH";
            state.mechanism = "PRIMARY · APPROACHING THRESHOLD";
            state.primary = 100;
            state.caml = 0;
            state.pttlrPath = 0;
            state.transitionProgress = clamp(
                (load - warningStart) / Math.max(threshold - warningStart, 1),
                0,
                1
            );
            return;
        }

        /*
         * Once utilization reaches 100%, CAML begins routing load.
         * The transfer is continuous rather than an artificial on/off jump.
         */
        const transfer = clamp(
            (load - threshold) / Math.max(100 - threshold, 1),
            0,
            1
        );
        state.transitionProgress = transfer;

        if (!state.pttlr) {
            state.name = "CAML ACTIVE";
            state.mechanism = "CAML · LOAD REROUTING";
            state.caml = Math.round(15 + (50 * transfer));
            state.primary = 100 - state.caml;
            state.pttlrPath = 0;
            return;
        }

        /* PTTLR adds a third destination and progressively increases its share. */
        state.name = "PTTLR ACTIVE";
        state.mechanism = "CAML + PTTLR · REDISTRIBUTION";
        state.pttlrPath = Math.round(15 + (20 * transfer));
        state.caml = Math.round(25 + (15 * transfer));
        state.primary = 100 - state.caml - state.pttlrPath;
    }

    function setText(element, value) {
        if (element) element.textContent = String(value);
    }

    function updateReadout() {
        const load = Math.round(state.load);
        const threshold = Math.round(state.threshold);
        const utilization = Math.round(state.utilization);
        const margin = Math.round(state.margin);

        setText(elements.loadDisplay, load);
        setText(elements.thresholdDisplay, threshold);
        setText(elements.stateReadout, state.name);
        setText(elements.primaryReadout, `${Math.round(state.primary)}%`);
        setText(elements.camlrReadout, `${Math.round(state.caml)}%`);
        setText(elements.pttlrReadout, `${Math.round(state.pttlrPath)}%`);
        setText(elements.currentLoad, `${load}%`);
        setText(elements.utilization, `${utilization}%`);
        setText(elements.reserveMargin, `${margin}%`);
        setText(elements.mechanism, state.mechanism);
        setText(elements.svgLoadValue, `${load}%`);
        setText(elements.svgUtilization, `${utilization}%`);
        setText(elements.svgMechanism, state.mechanism);

        if (elements.state) {
            elements.state.textContent = state.name;
            elements.state.dataset.state = state.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        }

        if (elements.container) {
            elements.container.dataset.state = state.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            elements.container.style.setProperty("--load-intensity", String(state.load / 100));
        }

        if (elements.primaryBar) elements.primaryBar.style.width = `${state.primary}%`;
        if (elements.camlBar) elements.camlBar.style.width = `${state.caml}%`;
        if (elements.pttlrBar) elements.pttlrBar.style.width = `${state.pttlrPath}%`;
    }

    function setPathState(path, active, type) {
        if (!path) return;
        path.classList.remove("active", "caml-active", "pttlr-active", "approach-active");
        if (!active) return;
        path.classList.add("active");
        if (type === "caml") path.classList.add("caml-active");
        if (type === "pttlr") path.classList.add("pttlr-active");
        if (type === "approach") path.classList.add("approach-active");
    }

    function updateVisuals() {
        getModel();

        const utilization = state.utilization;
        const approaching = utilization >= 85 && utilization < 100;
        const camlActive = state.caml > 0;
        const pttlrActive = state.pttlrPath > 0;

        setPathState(elements.inboundPath, true, "primary");
        setPathState(elements.decisionPath, true, "primary");
        setPathState(elements.primaryPath, state.primary > 0, "primary");
        setPathState(elements.camlrPath, camlActive, "caml");
        setPathState(elements.pttlrPath, pttlrActive, "pttlr");

        /* Path thickness is a visual proxy for relative load share. */
        elements.primaryPath.style.strokeWidth = `${Math.max(3, 3 + (state.primary * 0.055))}`;
        elements.camlrPath.style.strokeWidth = camlActive
            ? `${Math.max(3, 3 + (state.caml * 0.065))}`
            : "3";
        elements.pttlrPath.style.strokeWidth = pttlrActive
            ? `${Math.max(3, 3 + (state.pttlrPath * 0.07))}`
            : "3";

        if (approaching) {
            elements.primaryPath.classList.add("approach-active");
            elements.decisionPath.classList.add("approach-active");
        }

        if (elements.criticalNode) {
            elements.criticalNode.classList.toggle("active", utilization >= 85);
            elements.criticalNode.classList.toggle("transition", camlActive);
        }

        updateReadout();
        updateParticleClasses();
        logEvent();
    }

    function logEvent(force = false) {
        if (!elements.eventLog) return;
        if (!force && previousState === state.name) return;

        previousState = state.name;
        const entry = document.createElement("div");
        entry.className = "simulation-event";

        const time = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        const timeSpan = document.createElement("span");
        timeSpan.className = "event-time";
        timeSpan.textContent = time;

        const stateSpan = document.createElement("span");
        stateSpan.className = "event-state";
        stateSpan.textContent = `${state.name} · P ${Math.round(state.primary)} / C ${Math.round(state.caml)} / T ${Math.round(state.pttlrPath)}`;

        entry.append(timeSpan, stateSpan);
        elements.eventLog.prepend(entry);

        Array.from(elements.eventLog.children)
            .slice(6)
            .forEach(child => child.remove());
    }

    function createParticles() {
        elements.particles.innerHTML = "";
        state.particles = [];

        for (let i = 0; i < model.particles; i++) {
            const particle = document.createElementNS(svgNS, "circle");
            particle.classList.add("load-particle");
            particle.setAttribute("r", i % 5 === 0 ? "3.4" : "2.5");
            particle.dataset.index = String(i);
            particle.dataset.seed = String(i / model.particles);
            elements.particles.appendChild(particle);
            state.particles.push(particle);
        }
    }

    function routeForParticle(index) {
        const ratio = index / Math.max(state.particles.length - 1, 1);
        const camlShare = state.caml / 100;
        const pttlrShare = state.pttlrPath / 100;
        const primaryShare = state.primary / 100;

        if (ratio < primaryShare) {
            return {
                name: "primary",
                segments: [elements.inboundPath, elements.primaryPath],
                speed: 1.0
            };
        }

        if (ratio < primaryShare + camlShare) {
            return {
                name: "caml",
                segments: [elements.inboundPath, elements.decisionPath, elements.camlrPath],
                speed: 1.05
            };
        }

        if (pttlrShare > 0) {
            return {
                name: "pttlr",
                segments: [elements.inboundPath, elements.decisionPath, elements.pttlrPath],
                speed: 1.1
            };
        }

        return {
            name: "primary",
            segments: [elements.inboundPath, elements.primaryPath],
            speed: 1.0
        };
    }

    function getSegmentLengths(segments) {
        return segments.map(path => {
            try {
                return path.getTotalLength();
            } catch (error) {
                return 0;
            }
        });
    }

    function pointAlongRoute(segments, lengths, progress) {
        const total = lengths.reduce((sum, value) => sum + value, 0);
        if (!total) return null;

        let distance = progress * total;

        for (let i = 0; i < segments.length; i++) {
            const length = lengths[i];
            if (distance <= length || i === segments.length - 1) {
                try {
                    return segments[i].getPointAtLength(clamp(distance, 0, length));
                } catch (error) {
                    return null;
                }
            }
            distance -= length;
        }

        return null;
    }

    function updateParticleClasses() {
        state.particles.forEach((particle, index) => {
            const route = routeForParticle(index);
            particle.classList.remove("caml-particle", "pttlr-particle");
            if (route.name === "caml") particle.classList.add("caml-particle");
            if (route.name === "pttlr") particle.classList.add("pttlr-particle");
            particle.setAttribute("visibility", "visible");
        });
    }

    function animate(timestamp) {
        const reduced = prefersReducedMotion();

        state.particles.forEach((particle, index) => {
            const route = routeForParticle(index);
            const lengths = getSegmentLengths(route.segments);
            const seed = safeNumber(particle.dataset.seed, index / model.particles);
            const phase = reduced
                ? ((seed * 0.82) + 0.08) % 1
                : ((timestamp * model.animationSpeed * route.speed) + seed) % 1;

            const point = pointAlongRoute(route.segments, lengths, phase);
            if (!point) {
                particle.setAttribute("visibility", "hidden");
                return;
            }

            particle.setAttribute("visibility", "visible");
            particle.setAttribute("cx", point.x);
            particle.setAttribute("cy", point.y);

            /* Particle intensity follows the applied load. */
            particle.style.opacity = String(0.35 + (0.65 * (state.load / 100)));
        });

        if (!reduced) {
            simulationAnimationFrame = requestAnimationFrame(animate);
        }
    }

    function stopCycle() {
        cycleRunning = false;
        if (cycleFrame) {
            cancelAnimationFrame(cycleFrame);
            cycleFrame = null;
        }
        if (runCycleButton) {
            runCycleButton.classList.remove("running");
            runCycleButton.textContent = currentLanguage === "fr"
                ? "LANCER LA RAMPE DE CHARGE"
                : "RUN LOAD RAMP";
        }
    }

    function runLoadCycle() {
        if (cycleRunning) {
            stopCycle();
            return;
        }

        cycleRunning = true;
        if (runCycleButton) {
            runCycleButton.classList.add("running");
            runCycleButton.textContent = currentLanguage === "fr" ? "ARRÊTER LA RAMPE" : "STOP LOAD RAMP";
        }

        const start = performance.now();
        const duration = 9000;
        const startLoad = 0;
        const endLoad = 100;

        function step(now) {
            if (!cycleRunning) return;

            const progress = clamp((now - start) / duration, 0, 1);
            /* Smooth ramp: 0 → 100 → 0, so the activation and recovery are both visible. */
            const cycleValue = progress < 0.65
                ? progress / 0.65
                : 1 - ((progress - 0.65) / 0.35);
            const nextLoad = startLoad + (endLoad - startLoad) * clamp(cycleValue, 0, 1);

            state.load = nextLoad;
            loadSlider.value = String(Math.round(nextLoad));
            updateVisuals();

            if (progress < 1) {
                cycleFrame = requestAnimationFrame(step);
            } else {
                stopCycle();
            }
        }

        cycleFrame = requestAnimationFrame(step);
    }

    function reset() {
        stopCycle();
        loadSlider.value = String(model.defaultLoad);
        thresholdSlider.value = String(model.defaultThreshold);
        pttlrToggle.checked = false;

        state.load = model.defaultLoad;
        state.threshold = model.defaultThreshold;
        state.pttlr = false;
        previousState = null;

        updateVisuals();
        logEvent(true);
    }

    function syncLoad() {
        state.load = clamp(safeNumber(loadSlider.value, model.defaultLoad), 0, 100);
        updateVisuals();
    }

    function syncThreshold() {
        state.threshold = clamp(safeNumber(thresholdSlider.value, model.defaultThreshold), 20, 95);
        /* A threshold above the current load remains valid; the model simply stays below transition. */
        updateVisuals();
    }

    loadSlider.addEventListener("input", syncLoad);
    thresholdSlider.addEventListener("input", syncThreshold);
    pttlrToggle.addEventListener("change", () => {
        state.pttlr = Boolean(pttlrToggle.checked);
        updateVisuals();
    });

    if (resetButton) resetButton.addEventListener("click", reset);
    if (runCycleButton) runCycleButton.addEventListener("click", runLoadCycle);

    createParticles();
    measurePaths();
    updateVisuals();

    if (prefersReducedMotion()) {
        animate(0);
    } else {
        simulationAnimationFrame = requestAnimationFrame(animate);
    }

    let resizeTimer = null;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            measurePaths();
            updateVisuals();
        }, 150);
    }, { passive: true });

    window.RegenyxSimulation = {
        reset,
        runLoadCycle,
        getState: () => ({
            load: Math.round(state.load),
            threshold: Math.round(state.threshold),
            pttlr: state.pttlr,
            state: state.name,
            mechanism: state.mechanism,
            primaryPath: Math.round(state.primary),
            camlPath: Math.round(state.caml),
            pttlrRedistribution: Math.round(state.pttlrPath),
            constraintUtilization: Math.round(state.utilization),
            remainingMargin: Math.round(state.margin)
        })
    };
}


/* ============================================================
   FOOTER
   ============================================================ */

function initializeFooter() {
    const year = new Date().getFullYear();

    document.querySelectorAll("[data-current-year]").forEach(element => {
        element.textContent = year;
    });

    const currentYear = document.getElementById("currentYear");
    if (currentYear) currentYear.textContent = year;
}


/* ============================================================
   SUCCESS POPUP
   ============================================================ */

function initializeSuccessPopup() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") !== "true") return;

    const popup =
        document.getElementById("success-popup") ||
        document.getElementById("successPopup");

    if (!popup) return;

    popup.style.display = "flex";
    popup.classList.add("visible");

    setTimeout(() => {
        popup.classList.remove("visible");
    }, 7000);
}


/* ============================================================
   GOOGLE TRANSLATE CALLBACK
   ============================================================ */

window.googleTranslateElementInit = function () {
    if (!window.google || !google.translate) return;

    const element = document.getElementById("google_translate_element");
    if (!element || element.dataset.initialized === "true") return;

    element.dataset.initialized = "true";

    new google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages:
            "en,fr,de,es,it,pt,nl,pl,cs,sk,sl,hu,ro,bg,hr,sr,bs,mk,el,da,sv,no,fi,et,lv,lt,is,ga,mt,cy,ca,eu,gl,sq,be,ru,uk,tr,ar,fa",
        autoDisplay: false
    }, "google_translate_element");
};


/* ============================================================
   DOM READY
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    const initializers = [
        ["language", initializeLanguage],
        ["header", initializeHeader],
        ["navigation", initializeNavigation],
        ["reveal", initializeRevealAnimations],
        ["video", initializeVideo],
        ["simulation", initializeSimulation],
        ["success popup", initializeSuccessPopup],
        ["footer", initializeFooter]
    ];

    initializers.forEach(([name, initializer]) => {
        try {
            initializer();
        } catch (error) {
            console.error(`Regenyx ${name} initialization error:`, error);
        }
    });
}, { once: true });
