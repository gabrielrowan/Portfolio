const options = {
    background: {
        color: "#001929"
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
            //speed: 0.01
        },
        number: {
            value: 130
        },
        shape: {
            type: "circle"
        },
        links: {
            enable: true,
            opacity: 0.3,
            color: "#6B8BF5"
        },
        opacity: {
            value: 0.2
        },
        size: {
            value: {
                min: 1,
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





