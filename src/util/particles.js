export const particles = {
  fpsLimit: 30,
  particles: {
    color: {
      value: ["#f00"],
    },
    number: {
      value: 30,
    },
    shape: {
      type: "char",
      character: [
        {
          fill: true,
          font: "Verdana",
          value: ["❤"],
          style: "",
          weight: 400,
        },
      ],
    },
    opacity: {
      value: { min: 0.3, max: 1 },
    },
    size: {
      value: { min: 1, max: 20 },
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10,
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: "out",
      speed: 2,
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      outModes: {
        default: "destroy",
      },
      speed: 20,
      value: {
        min: 0,
        max: 360,
      },
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      outModes: {
        default: "destroy",
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 20,
      },
    },
    zIndex: {
      value: { min: 0, max: 100 },
    },
  },
};
