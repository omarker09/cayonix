const ParticlesConfig: any = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 200,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "none", // try "repulse" or "none"
      },
    },
    modes: {
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 200,
        duration: 4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 4,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 160, // Here where you can Increase the number of Particles.
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle", // You can Change shape to "circle" or "star" or "Edge" or "Polygon"
    },
    size: {
      value: { min: 1, max: 4 },
    },
  },
  detectRetina: true,
}

export default ParticlesConfig;