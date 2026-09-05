/* ============================================================
   REGENYX AEROSPACE
   MAIN JAVASCRIPT
============================================================ */


/* ============================================================
   LANGUAGE DATA
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
   GLOBAL STATE
============================================================ */

let currentLanguage = "en";

let currentSimulationState = "NORMAL";

let previousSimulationState = "NORMAL";

let animationFrame = null;


/* ============================================================
   DOM READY
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        try {
            initializeLanguage();
        } catch (error) {
            console.error(
                "Language initialization error:",
                error
            );
        }


        try {
            initializeHeader();
        } catch (error) {
            console.error(
                "Header initialization error:",
                error
            );
        }


        try {
            initializeNavigation();
        } catch (error) {
            console.error(
                "Navigation initialization error:",
                error
            );
        }


        try {
            initializeRevealAnimations();
        } catch (error) {
            console.error(
                "Reveal animation error:",
                error
            );
        }


        try {
            initializeVideo();
        } catch (error) {
            console.error(
                "Video initialization error:",
                error
            );
        }


        try {
            initializeSimulation();
        } catch (error) {
            console.error(
                "Simulation initialization error:",
                error
            );
        }


        initializeFooter();

    }
);


/* ============================================================
   LANGUAGE
============================================================ */

function detectLanguage() {

    const saved =
        localStorage.getItem(
            "regenyx-language"
        );


    if (
        saved === "fr" ||
        saved === "en"
    ) {

        return saved;

    }


    const browserLanguage =
        navigator.language ||
        navigator.userLanguage ||
        "en";


    if (
        browserLanguage
            .toLowerCase()
            .startsWith("fr")
    ) {

        return "fr";

    }


    return "en";

}


/* ============================================================
   INITIALIZE LANGUAGE
============================================================ */

function initializeLanguage() {

    currentLanguage =
        detectLanguage();


    applyLanguage(
        currentLanguage
    );


    const languageButton =
        document.getElementById(
            "languageButton"
        );

    const languageMenu =
        document.getElementById(
            "languageMenu"
        );


    if (
        !languageButton ||
        !languageMenu
    ) {

        return;

    }


    languageButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const isOpen =
                languageMenu.classList.contains(
                    "open"
                );

            languageMenu.classList.toggle(
                "open",
                !isOpen
            );

            languageButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        }
    );


    languageMenu
        .querySelectorAll(
            "[data-language]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.language;

                    changeLanguage(
                        language
                    );

                    languageMenu.classList.remove(
                        "open"
                    );

                    languageButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });


    document.addEventListener(
        "click",
        () => {

            languageMenu.classList.remove(
                "open"
            );

            languageButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

}


/* ============================================================
   CHANGE LANGUAGE
============================================================ */

function changeLanguage(
    language
) {

    if (
        !translations[language]
    ) {

        return;

    }


    currentLanguage =
        language;


    localStorage.setItem(
        "regenyx-language",
        language
    );


    applyLanguage(
        language
    );

}


/* ============================================================
   APPLY LANGUAGE
============================================================ */

function applyLanguage(
    language
) {

    const dictionary =
        translations[language];


    if (!dictionary) {

        return;

    }


    document.documentElement.lang =
        language;


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                dictionary[key] !== undefined
            ) {

                element.textContent =
                    dictionary[key];

            }

        });


    document
        .querySelectorAll(
            "[data-i18n-svg]"
        )
        .forEach(element => {

            const key =
                element.dataset.i18nSvg;


            if (
                dictionary[key] !== undefined
            ) {

                element.textContent =
                    dictionary[key];

            }

        });


    const languageIndicator =
        document.getElementById(
            "currentLanguage"
        );


    if (languageIndicator) {

        languageIndicator.textContent =
            language.toUpperCase();

    }


    document.title =
        language === "fr"
            ? "Regenyx Aerospace — Structures Intelligentes"
            : "Regenyx Aerospace — Intelligent Structures";

}


/* ============================================================
   HEADER
============================================================ */

function initializeHeader() {

    const header =
        document.getElementById(
            "siteHeader"
        );


    if (!header) {

        return;

    }


    function updateHeader() {

        if (
            window.scrollY > 30
        ) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

}


/* ============================================================
   NAVIGATION
============================================================ */

function initializeNavigation() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

}


/* ============================================================
   REVEAL ANIMATIONS
============================================================ */

function initializeRevealAnimations() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) {

        return;

    }


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        entry.target.classList.add(
                            "visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.10
            }
        );


    elements.forEach(
        element =>
            observer.observe(element)
    );

}


/* ============================================================
   VIDEO
============================================================ */

function initializeVideo() {

    const video =
        document.getElementById(
            "heroVideo"
        );


    if (!video) {

        return;

    }


    video.muted = true;

    video.autoplay = true;

    video.loop = true;

    video.playsInline = true;


    const attemptPlay =
        () => {

            const playPromise =
                video.play();


            if (
                playPromise &&
                typeof playPromise.catch ===
                "function"
            ) {

                playPromise.catch(
                    error => {

                        console.warn(
                            "Autoplay was blocked:",
                            error
                        );

                    }
                );

            }

        };


    if (
        video.readyState >= 2
    ) {

        attemptPlay();

    }


    video.addEventListener(
        "loadeddata",
        attemptPlay,
        {
            once: true
        }
    );


    video.addEventListener(
        "canplay",
        attemptPlay,
        {
            once: true
        }
    );

}


/* ============================================================
   SIMULATION
============================================================ */

function initializeSimulation() {

    const loadSlider =
        document.getElementById(
            "loadSlider"
        );

    const thresholdSlider =
        document.getElementById(
            "thresholdSlider"
        );

    const pttlrToggle =
        document.getElementById(
            "pttlrToggle"
        );

    const resetButton =
        document.getElementById(
            "resetButton"
        );


    if (
        !loadSlider ||
        !thresholdSlider ||
        !pttlrToggle
    ) {

        console.warn(
            "Simulation controls not found."
        );

        return;

    }


    const elements = {

        loadDisplay:
            document.getElementById(
                "loadDisplay"
            ),

        thresholdDisplay:
            document.getElementById(
                "thresholdDisplay"
            ),

        state:
            document.getElementById(
                "simulationState"
            ),

        stateReadout:
            document.getElementById(
                "stateReadout"
            ),

        primary:
            document.getElementById(
                "primaryReadout"
            ),

        camlr:
            document.getElementById(
                "camlrReadout"
            ),

        pttlr:
            document.getElementById(
                "pttlrReadout"
            ),

        primaryPath:
            document.getElementById(
                "primaryPath"
            ),

        camlrPath:
            document.getElementById(
                "camlrPath"
            ),

        pttlrPath:
            document.getElementById(
                "pttlrPath"
            ),

        criticalNode:
            document.getElementById(
                "criticalNode"
            ),

        particles:
            document.getElementById(
                "particles"
            ),

        eventLog:
            document.getElementById(
                "eventLog"
            )

    };


    if (
        !elements.primaryPath ||
        !elements.camlrPath ||
        !elements.pttlrPath ||
        !elements.criticalNode ||
        !elements.particles
    ) {

        console.warn(
            "Simulation SVG elements are incomplete."
        );

        return;

    }


    /* ========================================================
       MODEL
    ======================================================== */

    function getModel() {

        const load =
            Number(
                loadSlider.value
            );

        const threshold =
            Number(
                thresholdSlider.value
            );

        const pttlr =
            pttlrToggle.checked;


        const criticalLimit =
            threshold * 0.85;


        if (
            load >= threshold &&
            pttlr
        ) {

            return {

                state:
                    "PTTLR REDISTRIBUTION",

                primary: 25,

                camlr: 40,

                pttlr: 35

            };

        }


        if (
            load >= threshold
        ) {

            return {

                state:
                    "CAMLR ROUTING",

                primary: 35,

                camlr: 65,

                pttlr: 0

            };

        }


        if (
            load >= criticalLimit
        ) {

            return {

                state:
                    "CRITICAL",

                primary: 100,

                camlr: 0,

                pttlr: 0

            };

        }


        return {

            state:
                "NORMAL",

            primary: 100,

            camlr: 0,

            pttlr: 0

        };

    }


    /* ========================================================
       EVENT LOG
    ======================================================== */

    function addEvent(
        message
    ) {

        if (!elements.eventLog) {

            return;

        }


        const event =
            document.createElement(
                "div"
            );

        event.className =
            "event active";


        const dot =
            document.createElement(
                "i"
            );


        const text =
            document.createElement(
                "span"
            );


        text.textContent =
            message;


        event.appendChild(dot);

        event.appendChild(text);


        elements.eventLog.prepend(
            event
        );


        const allEvents =
            elements.eventLog.querySelectorAll(
                ".event"
            );


        if (
            allEvents.length > 5
        ) {

            allEvents[
                allEvents.length - 1
            ].remove();

        }

    }


    function getEventText(
        state
    ) {

        if (
            currentLanguage === "fr"
        ) {

            switch (state) {

                case "NORMAL":
                    return "CHEMIN DE CHARGE NORMAL";

                case "CRITICAL":
                    return "ÉTAT CRITIQUE DÉTECTÉ";

                case "CAMLR ROUTING":
                    return "CHEMIN ALTERNATIF CAMLR ACTIVÉ";

                case "PTTLR REDISTRIBUTION":
                    return "REDISTRIBUTION PTTLR ACTIVÉE";

            }

        }


        switch (state) {

            case "NORMAL":
                return "NORMAL LOAD PATH";

            case "CRITICAL":
                return "CRITICAL STATE DETECTED";

            case "CAMLR ROUTING":
                return "CAMLR ALTERNATE PATH ACTIVATED";

            case "PTTLR REDISTRIBUTION":
                return "PTTLR LOAD REDISTRIBUTION ACTIVATED";

            default:
                return state;

        }

    }


    /* ========================================================
       UPDATE
    ======================================================== */

    function updateSimulation() {

        const model =
            getModel();


        currentSimulationState =
            model.state;


        if (
            elements.loadDisplay
        ) {

            elements.loadDisplay.textContent =
                loadSlider.value;

        }


        if (
            elements.thresholdDisplay
        ) {

            elements.thresholdDisplay.textContent =
                thresholdSlider.value;

        }


        if (
            elements.state
        ) {

            elements.state.textContent =
                model.state;

        }


        if (
            elements.stateReadout
        ) {

            elements.stateReadout.textContent =
                model.state;

        }


        if (
            elements.primary
        ) {

            elements.primary.textContent =
                model.primary;

        }


        if (
            elements.camlr
        ) {

            elements.camlr.textContent =
                model.camlr;

        }


        if (
            elements.pttlr
        ) {

            elements.pttlr.textContent =
                model.pttlr;

        }


        /* Remove all active states */

        elements.primaryPath
            .classList
            .remove(
                "active"
            );

        elements.camlrPath
            .classList
            .remove(
                "active"
            );

        elements.pttlrPath
            .classList
            .remove(
                "active"
            );

        elements.criticalNode
            .classList
            .remove(
                "active"
            );


        /* NORMAL */

        if (
            model.state ===
            "NORMAL"
        ) {

            elements.primaryPath
                .classList
                .add(
                    "active"
                );

        }


        /* CRITICAL */

        if (
            model.state ===
            "CRITICAL"
        ) {

            elements.primaryPath
                .classList
                .add(
                    "active"
                );

            elements.criticalNode
                .classList
                .add(
                    "active"
                );

        }


        /* CAMLR */

        if (
            model.state ===
            "CAMLR ROUTING"
        ) {

            elements.primaryPath
                .classList
                .add(
                    "active"
                );

            elements.camlrPath
                .classList
                .add(
                    "active"
                );

            elements.criticalNode
                .classList
                .add(
                    "active"
                );

        }


        /* PTTLR */

        if (
            model.state ===
            "PTTLR REDISTRIBUTION"
        ) {

            elements.primaryPath
                .classList
                .add(
                    "active"
                );

            elements.camlrPath
                .classList
                .add(
                    "active"
                );

            elements.pttlrPath
                .classList
                .add(
                    "active"
                );

            elements.criticalNode
                .classList
                .add(
                    "active"
                );

        }


        /* EVENT */

        if (
            currentSimulationState !==
            previousSimulationState
        ) {

            addEvent(
                getEventText(
                    currentSimulationState
                )
            );

            previousSimulationState =
                currentSimulationState;

        }

    }


    /* ========================================================
       PARTICLES
    ======================================================== */

    const particleCount = 18;

    const particleData = [];


    function createParticles() {

        elements.particles.innerHTML =
            "";

        particleData.length = 0;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const circle =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle"
                );


            circle.setAttribute(
                "r",
                i % 3 === 0
                    ? "5"
                    : "3.5"
            );


            circle.classList.add(
                "load-particle"
            );


            elements.particles.appendChild(
                circle
            );


            particleData.push({

                element:
                    circle,

                offset:
                    i / particleCount,

                speed:
                    0.00022 +
                    Math.random() * 0.00012

            });

        }

    }


    /* ========================================================
       PARTICLE ANIMATION
    ======================================================== */

    function animate(
        time
    ) {

        const model =
            getModel();


        const primary =
            elements.primaryPath;

        const camlr =
            elements.camlrPath;

        const pttlr =
            elements.pttlrPath;


        const primaryLength =
            primary.getTotalLength();

        const camlrLength =
            camlr.getTotalLength();

        const pttlrLength =
            pttlr.getTotalLength();


        particleData.forEach(
            (particle, index) => {

                const cycle =
                    (
                        time *
                        particle.speed +
                        particle.offset
                    ) % 1;


                let path;

                let progress;


                /* =========================================
                   NORMAL / CRITICAL
                ========================================== */

                if (
                    model.state ===
                    "NORMAL" ||
                    model.state ===
                    "CRITICAL"
                ) {

                    path =
                        primary;

                    progress =
                        cycle;

                    particle.element
                        .classList
                        .remove(
                            "pttlr-particle"
                        );

                }


                /* =========================================
                   CAMLR
                ========================================== */

                else if (
                    model.state ===
                    "CAMLR ROUTING"
                ) {

                    /*
                       First section:
                       load travels to constraint.

                       Second section:
                       load follows CAMLR path.
                    */

                    if (
                        cycle < 0.43
                    ) {

                        path =
                            primary;

                        progress =
                            cycle / 0.43;

                    } else {

                        path =
                            camlr;

                        progress =
                            (
                                cycle - 0.43
                            ) / 0.57;

                    }


                    particle.element
                        .classList
                        .remove(
                            "pttlr-particle"
                        );

                }


                /* =========================================
                   PTTLR
                ========================================== */

                else {

                    /*
                       All particles first reach
                       the constraint.

                       Then particles are divided:

                       1/3 → PTTLR
                       2/3 → CAMLR
                    */

                    if (
                        cycle < 0.40
                    ) {

                        path =
                            primary;

                        progress =
                            cycle / 0.40;

                        particle.element
                            .classList
                            .remove(
                                "pttlr-particle"
                            );

                    } else {

                        if (
                            index % 3 === 0
                        ) {

                            path =
                                pttlr;

                            progress =
                                (
                                    cycle - 0.40
                                ) / 0.60;

                            particle.element
                                .classList
                                .add(
                                    "pttlr-particle"
                                );

                        } else {

                            path =
                                camlr;

                            progress =
                                (
                                    cycle - 0.40
                                ) / 0.60;

                            particle.element
                                .classList
                                .remove(
                                    "pttlr-particle"
                                );

                        }

                    }

                }


                let length;


                if (
                    path === primary
                ) {

                    length =
                        primaryLength;

                } else if (
                    path === camlr
                ) {

                    length =
                        camlrLength;

                } else {

                    length =
                        pttlrLength;

                }


                const point =
                    path.getPointAtLength(
                        Math.max(
                            0,
                            Math.min(
                                1,
                                progress
                            )
                        ) *
                        length
                    );


                particle.element.setAttribute(
                    "cx",
                    point.x
                );


                particle.element.setAttribute(
                    "cy",
                    point.y
                );

            }
        );


        animationFrame =
            requestAnimationFrame(
                animate
            );

    }


    /* ========================================================
       EVENTS
    ======================================================== */

    loadSlider.addEventListener(
        "input",
        updateSimulation
    );


    thresholdSlider.addEventListener(
        "input",
        updateSimulation
    );


    pttlrToggle.addEventListener(
        "change",
        updateSimulation
    );


    if (resetButton) {

        resetButton.addEventListener(
            "click",
            () => {

                loadSlider.value =
                    "40";

                thresholdSlider.value =
                    "65";

                pttlrToggle.checked =
                    false;


                currentSimulationState =
                    "NORMAL";

                previousSimulationState =
                    "NORMAL";


                if (
                    elements.eventLog
                ) {

                    elements.eventLog.innerHTML =
                        "";

                }


                addEvent(
                    currentLanguage === "fr"
                        ? "SYSTÈME RÉINITIALISÉ"
                        : "SYSTEM RESET"
                );


                updateSimulation();

            }
        );

    }


    /* ========================================================
       START
    ======================================================== */

    createParticles();

    updateSimulation();


    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (!reducedMotion) {

        animationFrame =
            requestAnimationFrame(
                animate
            );

    }

}


/* ============================================================
   FOOTER
============================================================ */

function initializeFooter() {

    const footerYear =
        document.getElementById(
            "footerYear"
        );


    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }

}

/* ============================================================
   FINAL LANGUAGE + MOBILE NAVIGATION PATCH
   ============================================================ */

(function () {
    const nativeLanguages = new Set(["en", "fr"]);

    function setGoogleLanguage(language) {
        const target = String(language || "en").toLowerCase();

        if (target === "en") {
            document.cookie = "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie = "googtrans=;path=/;domain=" + window.location.hostname + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
            localStorage.setItem("regenyx-language", "en");
            window.location.reload();
            return;
        }

        document.cookie = "googtrans=/en/" + target + ";path=/";
        localStorage.setItem("regenyx-language", target);
        window.location.reload();
    }

    function setupMobileMenu() {
        const button = document.getElementById("mobileMenuButton");
        const menu = document.getElementById("mobileMenu");

        if (!button || !menu) return;

        const close = () => {
            menu.classList.remove("open");
            button.classList.remove("open");
            button.setAttribute("aria-expanded", "false");
        };

        button.addEventListener("click", function (event) {
            event.stopPropagation();
            const open = !menu.classList.contains("open");
            menu.classList.toggle("open", open);
            button.classList.toggle("open", open);
            button.setAttribute("aria-expanded", String(open));
        });

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", close);
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && event.target !== button) {
                close();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) close();
        });
    }

    function setupFinalLanguageMenu() {
        const button = document.getElementById("languageButton");
        const menu = document.getElementById("languageMenu");
        const indicator = document.getElementById("currentLanguage");

        if (!button || !menu) return;

        menu.querySelectorAll("[data-language]").forEach(item => {
            item.addEventListener("click", function () {
                const language = item.dataset.language;
                if (indicator) indicator.textContent = language.toUpperCase();

                menu.classList.remove("open");
                button.setAttribute("aria-expanded", "false");

                if (nativeLanguages.has(language)) {
                    currentLanguage = language;
                    localStorage.setItem("regenyx-language", language);
                    applyLanguage(language);
                    return;
                }

                setGoogleLanguage(language);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        setupMobileMenu();
        setupFinalLanguageMenu();

        const saved = localStorage.getItem("regenyx-language");
        if (saved && saved.length === 2) {
            const indicator = document.getElementById("currentLanguage");
            if (indicator) indicator.textContent = saved.toUpperCase();
        }
    });
})();
