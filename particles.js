const options = {
    background: {
        color: "#FFFFFF"
    },
    fullScreen: {
        enable: true, // Prevents particles from occupying the full screen
        zIndex: -10
    },
    particles: {
        color: {
            value: "#6B8BF5"
        },
        overlap: {
            enable: true
        },
        move: {
            enable: false,
        },
        number: {
            value: 50
        },
        shape: {
            type: "circle"
        },
        links: {
            enable: true,
            opacity: 0.4,
            color: "#6B8BF5"
        },
        opacity: {
            value: 0.3
        },
        size: {
            value: {
                min: 2,
                max: 3
            }
        }
    }
};

(async () =>
{
    await loadSlim(tsParticles);

    await tsParticles.load({
        id: "tsparticles",
        options: options
    });
})();





