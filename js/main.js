/* ============================================================
   REGENYX AEROSPACE
   MAIN.JS
   ============================================================

   CAML / PTTLR LIVE CONCEPTUAL ENGINEERING MODEL

   IMPORTANT:
   This is an interactive conceptual engineering visualization.
   It is NOT a validated FEA solver and the displayed percentages
   are visual load-routing proxies, not measured structural data.

   MODEL SEQUENCE

   APPLIED LOAD
        ↓
   COMMON STRUCTURAL PATH
        ↓
   CONSTRAINT UTILIZATION
        ↓
   CAML THRESHOLD
        ↓
   CAML LOAD ROUTING
        ↓
   PTTLR TRANSITION / REDISTRIBUTION

============================================================ */


/* ============================================================
   GLOBAL HELPERS
============================================================ */

const $ = (id) => document.getElementById(id);

const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
};

const smoothStep = (value) => {
    const x = clamp(value, 0, 1);
    return x * x * (3 - 2 * x);
};

const prefersReducedMotion = () => {
    return window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};


/* ============================================================
   GLOBAL STATE
============================================================ */

let currentLanguage =
    localStorage.getItem("regenyx-language") || "en";

let simulationAnimationFrame = null;


/* ============================================================
   LANGUAGE
============================================================ */

function setGoogleLanguage(language) {

    const lang = String(language || "en").toLowerCase();

    currentLanguage = lang;

    localStorage.setItem(
        "regenyx-language",
        lang
    );

    if (lang === "en") {

        document.cookie =
            "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";

        document.cookie =
            "googtrans=;path=/;domain=" +
            location.hostname +
            ";expires=Thu, 01 Jan 1970 00:00:00 GMT";

    } else {

        document.cookie =
            `googtrans=/en/${lang};path=/`;

    }

    location.reload();
}


function initializeLanguage() {

    const button = $("languageButton");
    const menu = $("languageMenu");
    const indicator = $("currentLanguage");

    if (!button || !menu) {
        return;
    }

    if (indicator) {
        indicator.textContent =
            currentLanguage.toUpperCase();
    }

    if (button.dataset.ready === "true") {
        return;
    }

    button.dataset.ready = "true";

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const open =
            !menu.classList.contains("open");

        menu.classList.toggle(
            "open",
            open
        );

        button.setAttribute(
            "aria-expanded",
            String(open)
        );
    });


    menu.querySelectorAll(
        "[data-language]"
    ).forEach((item) => {

        item.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const language =
                    item.dataset.language || "en";

                if (indicator) {

                    indicator.textContent =
                        language.toUpperCase();

                }

                menu.classList.remove(
                    "open"
                );

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

                setGoogleLanguage(
                    language
                );
            }
        );
    });


    document.addEventListener(
        "click",
        (event) => {

            if (
                !menu.contains(event.target) &&
                event.target !== button
            ) {

                menu.classList.remove(
                    "open"
                );

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }
    );
}


/* ============================================================
   HEADER
============================================================ */

function initializeHeader() {

    const header = $("siteHeader");

    if (!header) {
        return;
    }

    const updateHeader = () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );
    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );
}


/* ============================================================
   MOBILE NAVIGATION
============================================================ */

function closeMobileMenu() {

    const menu = $("mobileMenu");
    const button = $("mobileMenuButton");

    if (menu) {
        menu.classList.remove("open");
    }

    if (button) {

        button.classList.remove("open");

        button.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}


function initializeNavigation() {

    /*
       Smooth scrolling for internal navigation
    */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const id =
                    link.getAttribute("href");

                if (!id || id === "#") {
                    return;
                }

                const target =
                    document.querySelector(id);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior:
                        prefersReducedMotion()
                            ? "auto"
                            : "smooth",
                    block: "start"
                });

                closeMobileMenu();
            }
        );
    });


    /*
       Mobile menu
    */

    const button =
        $("mobileMenuButton");

    const menu =
        $("mobileMenu");

    if (
        !button ||
        !menu ||
        button.dataset.ready === "true"
    ) {
        return;
    }

    button.dataset.ready = "true";


    button.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const open =
                !menu.classList.contains("open");

            menu.classList.toggle(
                "open",
                open
            );

            button.classList.toggle(
                "open",
                open
            );

            button.setAttribute(
                "aria-expanded",
                String(open)
            );
        }
    );


    menu.querySelectorAll(
        "a"
    ).forEach((link) => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );
    });


    document.addEventListener(
        "click",
        (event) => {

            if (
                !menu.contains(event.target) &&
                event.target !== button
            ) {

                closeMobileMenu();
            }
        }
    );


    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 768) {

                closeMobileMenu();
            }
        },
        { passive: true }
    );
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


    if (
        prefersReducedMotion() ||
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );
            }
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }
                    }
                );

            },
            {
                threshold: 0.1,
                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    elements.forEach(
        (element) => {

            observer.observe(
                element
            );
        }
    );
}


/* ============================================================
   HERO VIDEO
============================================================ */

function initializeVideo() {

    const video =
        $("heroVideo") ||
        document.querySelector(
            "video"
        );

    if (!video) {
        return;
    }


    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;


    [
        "muted",
        "autoplay",
        "loop",
        "playsinline"
    ].forEach(
        (attribute) => {

            video.setAttribute(
                attribute,
                ""
            );
        }
    );


    const playVideo = () => {

        const promise =
            video.play();

        if (
            promise &&
            typeof promise.catch === "function"
        ) {

            promise.catch(
                () => {}
            );
        }
    };


    playVideo();


    video.addEventListener(
        "loadeddata",
        playVideo,
        { once: true }
    );


    video.addEventListener(
        "canplay",
        playVideo,
        { once: true }
    );


    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                !document.hidden &&
                video.paused
            ) {

                playVideo();
            }
        }
    );
}


/* ============================================================
   SIMULATION
============================================================ */

function initializeSimulation() {

    /*
       Required controls
    */

    const loadSlider =
        $("loadSlider");

    const thresholdSlider =
        $("thresholdSlider");

    const pttlrToggle =
        $("pttlrToggle");


    /*
       If the simulation controls aren't
       present, safely exit.
    */

    if (
        !loadSlider ||
        !thresholdSlider ||
        !pttlrToggle
    ) {

        console.warn(
            "Regenyx simulation controls not found."
        );

        return;
    }


    /* ========================================================
       DOM REFERENCES
    ======================================================== */

    const elements = {

        loadDisplay:
            $("loadDisplay"),

        thresholdDisplay:
            $("thresholdDisplay"),

        simulationState:
            $("simulationState"),

        stateReadout:
            $("stateReadout"),

        currentLoad:
            $("currentLoad"),

        constraintUtilization:
            $("constraintUtilization"),

        reserveMargin:
            $("reserveMargin"),

        mechanismReadout:
            $("mechanismReadout"),

        primaryReadout:
            $("primaryReadout"),

        camlReadout:
            $("camlrReadout"),

        pttlrReadout:
            $("pttlrReadout"),

        primaryBar:
            $("primaryBar"),

        camlBar:
            $("camlBar"),

        pttlrBar:
            $("pttlrBar"),

        svgLoadValue:
            $("svgLoadValue"),

        svgUtilization:
            $("svgUtilization"),

        svgMechanism:
            $("svgMechanism"),

        inboundPath:
            $("inboundPath"),

        decisionPath:
            $("decisionPath"),

        primaryPath:
            $("primaryPath"),

        camlPath:
            $("camlrPath"),

        pttlrPath:
            $("pttlrPath"),

        criticalNode:
            $("criticalNode"),

        particles:
            $("particles"),

        eventLog:
            $("eventLog"),

        visualization:
            $("loadVisualization")
    };


    /*
       Verify required SVG paths
    */

    if (
        !elements.inboundPath ||
        !elements.decisionPath ||
        !elements.primaryPath ||
        !elements.camlPath ||
        !elements.pttlrPath ||
        !elements.particles
    ) {

        console.warn(
            "Regenyx simulation SVG paths not found."
        );

        return;
    }


    /* ========================================================
       ENGINEERING MODEL PARAMETERS
    ======================================================== */

    const MODEL = {

        /*
           Distance from CAML threshold at which
           the constraint begins visibly approaching
           its transition condition.
        */

        warningBand: 15,


        /*
           Maximum conceptual CAML routing share.
        */

        maximumCAML: 40,


        /*
           Maximum conceptual PTTLR redistribution.
        */

        maximumPTTLR: 35,


        /*
           Particle count.
        */

        particleCount: 36,


        /*
           Particle movement speed.
        */

        particleSpeed: 0.00018
    };


    /* ========================================================
       SIMULATION STATE
    ======================================================== */

    const state = {

        appliedLoad:
            Number(loadSlider.value) || 40,

        camlThreshold:
            Number(thresholdSlider.value) || 65,

        pttlrEnabled:
            Boolean(pttlrToggle.checked),

        stateName:
            "NORMAL",

        mechanism:
            "PRIMARY LOAD PATH",

        primaryShare:
            100,

        camlShare:
            0,

        pttlrShare:
            0,

        utilization:
            0,

        margin:
            0,

        activation:
            0
    };


    /* ========================================================
       EVENT LOG STATE
    ======================================================== */

    let lastEventSignature = "";


    /* ========================================================
       LOAD RAMP STATE
    ======================================================== */

    let loadRampRunning = false;
    let loadRampFrame = null;


    /* ========================================================
       RUNTIME SIMULATION STYLES
    ======================================================== */

    function injectSimulationStyles() {

        if (
            $("regenyxSimulationRuntimeStyles")
        ) {

            return;
        }


        const style =
            document.createElement(
                "style"
            );

        style.id =
            "regenyxSimulationRuntimeStyles";


        style.textContent = `

            #loadVisualization .path {

                transition:
                    opacity .25s ease,
                    stroke-width .25s ease,
                    filter .25s ease;
            }


            #loadVisualization
            .path:not(.active) {

                opacity: .12;
            }


            #loadVisualization
            .path.active {

                opacity: .95;
            }


            #loadVisualization
            .path.approach-active {

                opacity: .78;

                filter:
                    url(#pathGlow);
            }


            #loadVisualization
            .path.caml-active {

                filter:
                    url(#pathGlow);
            }


            #loadVisualization
            .path.pttlr-active {

                filter:
                    url(#pathGlow);
            }


            #loadVisualization
            .load-particle {

                fill: #b8ff2c;

                filter:
                    url(#particleGlow);
            }


            #loadVisualization
            .load-particle.caml-particle {

                fill: #dfff80;
            }


            #loadVisualization
            .load-particle.pttlr-particle {

                fill: #ffffff;
            }


            #loadVisualization
            .critical-node {

                transition:
                    opacity .3s ease,
                    transform .3s ease;
            }


            #loadVisualization[data-state="normal"]
            .critical-node {

                opacity: .25;
            }


            #loadVisualization[data-state="constraint-approach"]
            .critical-node {

                opacity: .9;
            }


            #loadVisualization[data-state="caml-active"]
            .critical-node {

                opacity: 1;
            }


            #loadVisualization[data-state="pttlr-active"]
            .critical-node {

                opacity: 1;
            }


            .simulation-run.running {

                box-shadow:
                    0 0 18px
                    rgba(184,255,44,.28);
            }

        `;


        document.head.appendChild(
            style
        );
    }


    /* ========================================================
       CALCULATE ENGINEERING STATE
    ======================================================== */

    function calculateEngineeringState() {

        /*
           Read controls
        */

        state.appliedLoad =
            clamp(
                Number(loadSlider.value) || 0,
                0,
                100
            );


        state.camlThreshold =
            clamp(
                Number(thresholdSlider.value) || 65,
                20,
                95
            );


        state.pttlrEnabled =
            Boolean(
                pttlrToggle.checked
            );


        /*
           Constraint utilization.

           Example:

           Load = 40
           Threshold = 65

           Utilization =
           40 / 65 × 100
           ≈ 61.5%
        */

        state.utilization =
            (
                state.appliedLoad /
                state.camlThreshold
            ) * 100;


        /*
           Remaining margin to CAML threshold.
        */

        state.margin =
            state.camlThreshold -
            state.appliedLoad;


        /*
           Warning region.

           Example:

           Threshold = 65

           Warning starts at:

           65 - 15 = 50
        */

        const warningStart =
            Math.max(
                0,
                state.camlThreshold -
                MODEL.warningBand
            );


        /*
           Overload ratio.

           0 =
           exactly at threshold

           1 =
           maximum applied load
        */

        const overloadRatio =
            clamp(
                (
                    state.appliedLoad -
                    state.camlThreshold
                ) /
                Math.max(
                    100 -
                    state.camlThreshold,
                    1
                ),
                0,
                1
            );


        /*
           Smooth transition variable.
        */

        const transition =
            smoothStep(
                overloadRatio
            );


        /*
           ----------------------------------------------------
           STATE 1 — NORMAL
           ----------------------------------------------------
        */

        if (
            state.appliedLoad <
            warningStart
        ) {

            state.stateName =
                "NORMAL";

            state.mechanism =
                "PRIMARY LOAD PATH";

            state.primaryShare =
                100;

            state.camlShare =
                0;

            state.pttlrShare =
                0;

            state.activation =
                0;

            return;
        }


        /*
           ----------------------------------------------------
           STATE 2 — CONSTRAINT APPROACH
           ----------------------------------------------------
        */

        if (
            state.appliedLoad <
            state.camlThreshold
        ) {

            state.stateName =
                "CONSTRAINT APPROACH";

            state.mechanism =
                "PRIMARY · CONSTRAINT LOADING";

            state.primaryShare =
                100;

            state.camlShare =
                0;

            state.pttlrShare =
                0;

            /*
               Visual activation of constraint.
            */

            state.activation =
                clamp(
                    (
                        state.appliedLoad -
                        warningStart
                    ) /
                    MODEL.warningBand,
                    0,
                    1
                );

            return;
        }


        /*
           ----------------------------------------------------
           STATE 3 / 4 — THRESHOLD REACHED
           ----------------------------------------------------

           CAML activates.

           We deliberately make the transition
           progressive rather than an instantaneous
           switch from 100% primary to another path.
        */

        state.activation =
            transition;


        /*
           CAML share

           At threshold:
               approximately 15%

           At maximum load:
               40%
        */

        state.camlShare =
            Math.round(
                15 +
                (
                    MODEL.maximumCAML -
                    15
                ) *
                transition
            );


        /*
           ----------------------------------------------------
           PTTLR OFF
           ----------------------------------------------------
        */

        if (
            !state.pttlrEnabled
        ) {

            state.stateName =
                "CAML ACTIVE";

            state.mechanism =
                "CAML · ADAPTIVE LOAD ROUTING";

            state.pttlrShare =
                0;

            state.primaryShare =
                100 -
                state.camlShare;

            return;
        }


        /*
           ----------------------------------------------------
           PTTLR ON
           ----------------------------------------------------

           PTTLR progressively introduces an additional
           redistribution route.

           At CAML threshold:

               PRIMARY ≈ 75%
               CAML    ≈ 15%
               PTTLR   ≈ 10%

           At maximum load:

               PRIMARY = 25%
               CAML    = 40%
               PTTLR   = 35%
        */

        state.pttlrShare =
            Math.round(
                10 +
                (
                    MODEL.maximumPTTLR -
                    10
                ) *
                transition
            );


        state.primaryShare =
            100 -
            state.camlShare -
            state.pttlrShare;


        state.stateName =
            "PTTLR ACTIVE";


        state.mechanism =
            "CAML + PTTLR · LOAD REDISTRIBUTION";
    }


    /* ========================================================
       UPDATE TEXT READOUTS
    ======================================================== */

    function updateReadouts() {

        const load =
            Math.round(
                state.appliedLoad
            );

        const threshold =
            Math.round(
                state.camlThreshold
            );

        const utilization =
            Math.round(
                state.utilization
            );

        const margin =
            Math.round(
                state.margin
            );


        const setText =
            (element, value) => {

                if (element) {

                    element.textContent =
                        String(value);
                }
            };


        /*
           Main control values
        */

        setText(
            elements.loadDisplay,
            load
        );


        setText(
            elements.thresholdDisplay,
            threshold
        );


        /*
           Main state
        */

        setText(
            elements.simulationState,
            state.stateName
        );


        setText(
            elements.stateReadout,
            state.stateName
        );


        /*
           Engineering metrics
        */

        setText(
            elements.currentLoad,
            `${load}%`
        );


        setText(
            elements.constraintUtilization,
            `${utilization}%`
        );


        setText(
            elements.reserveMargin,
            margin >= 0
                ? `${margin}%`
                : `-${Math.abs(margin)}%`
        );


        setText(
            elements.mechanismReadout,
            state.mechanism
        );


        /*
           Load distribution
        */

        setText(
            elements.primaryReadout,
            `${Math.round(
                state.primaryShare
            )}%`
        );


        setText(
            elements.camlReadout,
            `${Math.round(
                state.camlShare
            )}%`
        );


        setText(
            elements.pttlrReadout,
            `${Math.round(
                state.pttlrShare
            )}%`
        );


        /*
           SVG readouts
        */

        setText(
            elements.svgLoadValue,
            `${load}%`
        );


        setText(
            elements.svgUtilization,
            `${utilization}%`
        );


        setText(
            elements.svgMechanism,
            state.mechanism
        );


        /*
           Distribution bars
        */

        if (
            elements.primaryBar
        ) {

            elements.primaryBar.style.width =
                `${state.primaryShare}%`;
        }


        if (
            elements.camlBar
        ) {

            elements.camlBar.style.width =
                `${state.camlShare}%`;
        }


        if (
            elements.pttlrBar
        ) {

            elements.pttlrBar.style.width =
                `${state.pttlrShare}%`;
        }


        /*
           State data attribute.

           Used by CSS for visual transitions.
        */

        const stateKey =
            state.stateName
                .toLowerCase()
                .replace(
                    /[^a-z0-9]+/g,
                    "-"
                );


        if (
            elements.simulationState
        ) {

            elements.simulationState.dataset.state =
                stateKey;
        }


        if (
            elements.visualization
        ) {

            elements.visualization.dataset.state =
                stateKey;


            elements.visualization.style
                .setProperty(
                    "--load-intensity",
                    state.appliedLoad / 100
                );
        }
    }


    /* ========================================================
       UPDATE STRUCTURAL PATHS
    ======================================================== */

    function updateStructuralPaths() {

        const paths = [

            elements.inboundPath,

            elements.decisionPath,

            elements.primaryPath,

            elements.camlPath,

            elements.pttlrPath
        ];


        paths.forEach(
            (path) => {

                if (!path) {
                    return;
                }

                path.classList.remove(
                    "active",
                    "approach-active",
                    "caml-active",
                    "pttlr-active"
                );
            }
        );


        /*
           Incoming load path is always active.
        */

        elements.inboundPath.classList.add(
            "active"
        );


        /*
           Routing decision node is always
           structurally present.
        */

        elements.decisionPath.classList.add(
            "active"
        );


        /*
           Determine whether we are approaching
           the CAML transition.
        */

        const approaching =
            state.appliedLoad >=
            (
                state.camlThreshold -
                MODEL.warningBand
            );


        /*
           CAML becomes active once threshold
           is reached.
        */

        const camlActive =
            state.appliedLoad >=
            state.camlThreshold;


        /*
           Primary path
        */

        if (
            state.primaryShare > 0
        ) {

            elements.primaryPath.classList.add(
                "active"
            );
        }


        /*
           Constraint approach visual.
        */

        if (
            approaching &&
            !camlActive
        ) {

            elements.primaryPath.classList.add(
                "approach-active"
            );
        }


        /*
           CAML path
        */

        if (
            camlActive &&
            state.camlShare > 0
        ) {

            elements.camlPath.classList.add(
                "active",
                "caml-active"
            );
        }


        /*
           PTTLR path
        */

        if (
            state.pttlrEnabled &&
            state.pttlrShare > 0
        ) {

            elements.pttlrPath.classList.add(
                "active",
                "pttlr-active"
            );
        }


        /*
           Path thickness is proportional
           to relative load share.

           This is a visual proxy.
        */

        elements.primaryPath.style.strokeWidth =
            Math.max(
                3,
                3 +
                state.primaryShare * 0.075
            );


        elements.camlPath.style.strokeWidth =
            Math.max(
                3,
                3 +
                state.camlShare * 0.10
            );


        elements.pttlrPath.style.strokeWidth =
            Math.max(
                3,
                3 +
                state.pttlrShare * 0.11
            );


        /*
           Constraint node response
        */

        if (
            elements.criticalNode
        ) {

            elements.criticalNode.classList.toggle(
                "active",
                approaching
            );


            elements.criticalNode.classList.toggle(
                "transition",
                camlActive
            );


            /*
               SVG transform.
            */

            const scale =
                1 +
                state.activation *
                0.18;


            elements.criticalNode.style.transformOrigin =
                "500px 270px";


            elements.criticalNode.style.transform =
                `scale(${scale})`;
        }
    }


    /* ========================================================
       EVENT LOG
    ======================================================== */

    function updateEventLog() {

        if (
            !elements.eventLog
        ) {

            return;
        }


        const signature =
            [
                state.stateName,
                Math.round(
                    state.primaryShare
                ),
                Math.round(
                    state.camlShare
                ),
                Math.round(
                    state.pttlrShare
                )
            ].join("|");


        if (
            signature ===
            lastEventSignature
        ) {

            return;
        }


        lastEventSignature =
            signature;


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


        /*
           English / French event text.
        */

        const french =
            currentLanguage.startsWith(
                "fr"
            );


        const englishMessages = {

            "NORMAL":
                "PRIMARY LOAD PATH",

            "CONSTRAINT APPROACH":
                "CONSTRAINT APPROACHING TRANSITION",

            "CAML ACTIVE":
                "CAML ACTIVE · ADAPTIVE LOAD ROUTING",

            "PTTLR ACTIVE":
                "PTTLR ACTIVE · LOAD REDISTRIBUTION"
        };


        const frenchMessages = {

            "NORMAL":
                "CHEMIN PRINCIPAL",

            "CONSTRAINT APPROACH":
                "CONTRAINTE PROCHE DU SEUIL",

            "CAML ACTIVE":
                "CAML ACTIF · ROUTAGE ADAPTATIF",

            "PTTLR ACTIVE":
                "PTTLR ACTIF · REDISTRIBUTION"
        };


        text.textContent =
            french
                ? (
                    frenchMessages[
                        state.stateName
                    ] ||
                    state.stateName
                )
                : (
                    englishMessages[
                        state.stateName
                    ] ||
                    state.stateName
                );


        event.appendChild(
            dot
        );


        event.appendChild(
            text
        );


        elements.eventLog.prepend(
            event
        );


        /*
           Keep the event log compact.
        */

        while (
            elements.eventLog.children.length >
            6
        ) {

            elements.eventLog.lastElementChild.remove();
        }
    }


    /* ========================================================
       PARTICLE SYSTEM
    ======================================================== */

    const particles = [];


    function createParticles() {

        elements.particles.innerHTML =
            "";


        particles.length =
            0;


        for (
            let i = 0;
            i < MODEL.particleCount;
            i++
        ) {

            const particle =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "circle"
                );


            particle.setAttribute(
                "r",
                i % 5 === 0
                    ? "4"
                    : "2.7"
            );


            particle.classList.add(
                "load-particle"
            );


            elements.particles.appendChild(
                particle
            );


            particles.push({

                node:
                    particle,

                offset:
                    i /
                    MODEL.particleCount,

                speed:
                    MODEL.particleSpeed *
                    (
                        0.85 +
                        Math.random() *
                        0.30
                    )
            });
        }
    }


    /* ========================================================
       DETERMINE PARTICLE ROUTE
    ======================================================== */

    function getParticleRoute(
        particleIndex
    ) {

        const ratio =
            particleIndex /
            Math.max(
                MODEL.particleCount - 1,
                1
            );


        const primary =
            state.primaryShare /
            100;


        const caml =
            state.camlShare /
            100;


        /*
           Primary share first.
        */

        if (
            ratio <
            primary
        ) {

            return {

                path:
                    elements.primaryPath,

                type:
                    "primary"
            };
        }


        /*
           CAML share second.
        */

        if (
            ratio <
            primary +
            caml
        ) {

            return {

                path:
                    elements.camlPath,

                type:
                    "caml"
            };
        }


        /*
           PTTLR share last.
        */

        if (
            state.pttlrShare > 0
        ) {

            return {

                path:
                    elements.pttlrPath,

                type:
                    "pttlr"
            };
        }


        /*
           Safety fallback.
        */

        return {

            path:
                elements.primaryPath,

            type:
                "primary"
        };
    }


    /* ========================================================
       PARTICLE ANIMATION
    ======================================================== */

    function animateParticles(
        timestamp
    ) {

        if (
            !elements.inboundPath ||
            !elements.decisionPath
        ) {

            return;
        }


        const inboundLength =
            elements.inboundPath
                .getTotalLength();


        const decisionLength =
            elements.decisionPath
                .getTotalLength();


        const primaryLength =
            elements.primaryPath
                .getTotalLength();


        const camlLength =
            elements.camlPath
                .getTotalLength();


        const pttlrLength =
            elements.pttlrPath
                .getTotalLength();


        particles.forEach(
            (particle, index) => {

                /*
                   Continuous particle cycle.
                */

                const cycle =
                    (
                        timestamp *
                        particle.speed +
                        particle.offset
                    ) % 1;


                const route =
                    getParticleRoute(
                        index
                    );


                let point;


                /*
                   PHASE 1

                   Incoming load.
                */

                if (
                    cycle <
                    0.30
                ) {

                    const progress =
                        cycle /
                        0.30;


                    point =
                        elements.inboundPath
                            .getPointAtLength(
                                progress *
                                inboundLength
                            );
                }


                /*
                   PHASE 2

                   Constraint / routing node.
                */

                else if (
                    cycle <
                    0.46
                ) {

                    const progress =
                        (
                            cycle -
                            0.30
                        ) /
                        0.16;


                    point =
                        elements.decisionPath
                            .getPointAtLength(
                                progress *
                                decisionLength
                            );
                }


                /*
                   PHASE 3

                   Selected load path.
                */

                else {

                    const progress =
                        (
                            cycle -
                            0.46
                        ) /
                        0.54;


                    let pathLength;


                    if (
                        route.type ===
                        "primary"
                    ) {

                        pathLength =
                            primaryLength;

                    } else if (
                        route.type ===
                        "caml"
                    ) {

                        pathLength =
                            camlLength;

                    } else {

                        pathLength =
                            pttlrLength;
                    }


                    point =
                        route.path
                            .getPointAtLength(
                                clamp(
                                    progress,
                                    0,
                                    1
                                ) *
                                pathLength
                            );
                }


                /*
                   Apply SVG position.
                */

                particle.node.setAttribute(
                    "cx",
                    point.x
                );


                particle.node.setAttribute(
                    "cy",
                    point.y
                );


                /*
                   Particle visibility grows
                   slightly with applied load.
                */

                particle.node.style.opacity =
                    0.45 +
                    state.appliedLoad *
                    0.0055;


                /*
                   Route-specific particle appearance.
                */

                particle.node.classList.toggle(
                    "caml-particle",
                    route.type === "caml"
                );


                particle.node.classList.toggle(
                    "pttlr-particle",
                    route.type === "pttlr"
                );
            }
        );


        if (
            !prefersReducedMotion()
        ) {

            simulationAnimationFrame =
                requestAnimationFrame(
                    animateParticles
                );
        }
    }


    /* ========================================================
       UPDATE SIMULATION
    ======================================================== */

    function updateSimulation() {

        calculateEngineeringState();

        updateReadouts();

        updateStructuralPaths();

        updateEventLog();
    }


    /* ========================================================
       RESET
    ======================================================== */

    function resetSimulation() {

        stopLoadRamp();


        loadSlider.value =
            "40";


        thresholdSlider.value =
            "65";


        pttlrToggle.checked =
            false;


        lastEventSignature =
            "";


        if (
            elements.eventLog
        ) {

            elements.eventLog.innerHTML =
                "";
        }


        updateSimulation();
    }


    /* ========================================================
       LOAD RAMP
    ========================================================

       The ramp intentionally passes through:

       NORMAL
          ↓
       CONSTRAINT APPROACH
          ↓
       CAML ACTIVE
          ↓
       PTTLR ACTIVE if enabled
          ↓
       recovery
    */

    function stopLoadRamp() {

        loadRampRunning =
            false;


        if (
            loadRampFrame
        ) {

            cancelAnimationFrame(
                loadRampFrame
            );

            loadRampFrame =
                null;
        }


        const button =
            $("runCycleButton");


        if (button) {

            button.classList.remove(
                "running"
            );


            button.textContent =
                currentLanguage.startsWith(
                    "fr"
                )
                    ? "LANCER LA RAMPE DE CHARGE"
                    : "RUN LOAD RAMP";
        }
    }


    function runLoadRamp() {

        /*
           If already running,
           stop it.
        */

        if (
            loadRampRunning
        ) {

            stopLoadRamp();

            return;
        }


        loadRampRunning =
            true;


        const button =
            $("runCycleButton");


        if (button) {

            button.classList.add(
                "running"
            );


            button.textContent =
                currentLanguage.startsWith(
                    "fr"
                )
                    ? "ARRÊTER LA RAMPE"
                    : "STOP LOAD RAMP";
        }


        /*
           12 second complete cycle.
        */

        const duration =
            12000;


        const startTime =
            performance.now();


        const animateRamp =
            (currentTime) => {

                if (
                    !loadRampRunning
                ) {

                    return;
                }


                const elapsed =
                    currentTime -
                    startTime;


                const progress =
                    clamp(
                        elapsed /
                        duration,
                        0,
                        1
                    );


                /*
                   0 → 55%

                   Load increases
                   0 → 100
                */

                let load;


                if (
                    progress <
                    0.55
                ) {

                    const rise =
                        progress /
                        0.55;


                    load =
                        rise *
                        100;

                }


                /*
                   55 → 100%

                   Load decreases
                   100 → 0
                */

                else {

                    const fall =
                        (
                            progress -
                            0.55
                        ) /
                        0.45;


                    load =
                        (
                            1 -
                            fall
                        ) *
                        100;
                }


                loadSlider.value =
                    String(
                        Math.round(load)
                    );


                updateSimulation();


                if (
                    progress <
                    1
                ) {

                    loadRampFrame =
                        requestAnimationFrame(
                            animateRamp
                        );

                } else {

                    stopLoadRamp();
                }
            };


        loadRampFrame =
            requestAnimationFrame(
                animateRamp
            );
    }


    /* ========================================================
       INITIALIZATION
    ======================================================== */

    injectSimulationStyles();

    createParticles();

    updateSimulation();


    /* ========================================================
       CONTROL LISTENERS
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


    const resetButton =
        $("resetButton");


    if (
        resetButton
    ) {

        resetButton.addEventListener(
            "click",
            resetSimulation
        );
    }


    const runCycleButton =
        $("runCycleButton");


    if (
        runCycleButton
    ) {

        runCycleButton.addEventListener(
            "click",
            runLoadRamp
        );
    }


    /* ========================================================
       START PARTICLE ANIMATION
    ======================================================== */

    if (
        prefersReducedMotion()
    ) {

        animateParticles(
            0
        );

    } else {

        simulationAnimationFrame =
            requestAnimationFrame(
                animateParticles
            );
    }


    /* ========================================================
       RESIZE
    ======================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    updateSimulation,
                    120
                );
        },
        { passive: true }
    );


    /* ========================================================
       PUBLIC DEBUG API

       Open browser console and use:

       RegenyxSimulation.getState()

       RegenyxSimulation.reset()

       RegenyxSimulation.runLoadRamp()
    ======================================================== */

    window.RegenyxSimulation = {

        reset:
            resetSimulation,

        runLoadRamp:
            runLoadRamp,

        getState:
            () => ({
                appliedLoad:
                    state.appliedLoad,

                camlThreshold:
                    state.camlThreshold,

                pttlrEnabled:
                    state.pttlrEnabled,

                state:
                    state.stateName,

                mechanism:
                    state.mechanism,

                utilization:
                    state.utilization,

                margin:
                    state.margin,

                primary:
                    state.primaryShare,

                caml:
                    state.camlShare,

                pttlr:
                    state.pttlrShare
            })
    };
}


/* ============================================================
   FOOTER
============================================================ */

function initializeFooter() {

    const year =
        new Date().getFullYear();


    const currentYear =
        $("currentYear");


    if (
        currentYear
    ) {

        currentYear.textContent =
            String(year);
    }


    const footerYear =
        $("footerYear");


    if (
        footerYear
    ) {

        footerYear.textContent =
            String(year);
    }


    document.querySelectorAll(
        "[data-current-year]"
    ).forEach(
        (element) => {

            element.textContent =
                String(year);
        }
    );
}


/* ============================================================
   SUCCESS POPUP
============================================================ */

function initializeSuccessPopup() {

    const parameters =
        new URLSearchParams(
            window.location.search
        );


    if (
        parameters.get(
            "success"
        ) !== "true"
    ) {

        return;
    }


    const popup =
        $("success-popup") ||
        $("successPopup");


    if (
        !popup
    ) {

        return;
    }


    popup.style.display =
        "flex";


    popup.classList.add(
        "visible"
    );


    setTimeout(
        () => {

            popup.classList.remove(
                "visible"
            );

        },
        7000
    );
}


/* ============================================================
   GOOGLE TRANSLATE
============================================================ */

window.googleTranslateElementInit =
    function () {

        if (
            !window.google ||
            !window.google.translate
        ) {

            return;
        }


        const container =
            $("google_translate_element");


        if (
            !container ||
            container.dataset.initialized ===
            "true"
        ) {

            return;
        }


        container.dataset.initialized =
            "true";


        new google.translate.TranslateElement(

            {

                pageLanguage:
                    "en",

                includedLanguages:
                    "en,fr,de,es,it,pt,nl,pl,cs,sk,sl,hu,ro,bg,hr,sr,bs,mk,el,da,sv,no,fi,et,lv,lt,is,ga,mt,cy,ca,eu,gl,sq,be,ru,uk,tr,ar,fa",

                autoDisplay:
                    false
            },

            "google_translate_element"
        );
    };


/* ============================================================
   START APPLICATION
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const initializers = [

            initializeLanguage,

            initializeHeader,

            initializeNavigation,

            initializeRevealAnimations,

            initializeVideo,

            initializeSimulation,

            initializeSuccessPopup,

            initializeFooter
        ];


        initializers.forEach(
            (initializer) => {

                try {

                    initializer();

                } catch (error) {

                    console.error(
                        "Regenyx initialization error:",
                        error
                    );
                }
            }
        );

    },
    {
        once: true
    }
);