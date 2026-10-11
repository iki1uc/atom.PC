export const KEIO_TRI = {
    id: "KEIO-△",
    origin: 0,          // Nullpunkt
    type: "triangle",   // Dreieck
    class: "KEIO",

    // Dreiecks-Koordinaten aus 0 generiert
    vector: {
        a: { x: 0,     y: 1,     z: 0 },
        b: { x: -1,    y: -1,    z: 0 },
        c: { x: 1,     y: -1,    z: 0 }
    },

    // Orbit-Level
    orbit: 3,           // KEIO = Drittel

    // Börsen-Symbol
    exchange: "△",

    // Industry-Symbol
    cluster: "◎",

    // RAWATOR-Drittel
    fraction: "1/3",

    // Holo-Suite-Modus
    holo: {
        mode: "Voyager-Class",
        resolution: "7482-Quantum"
    }
};
