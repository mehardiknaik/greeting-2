"use client";
import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { particles } from "../util/particles";

const Particle = ({ emoji }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
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
                value: emoji?.split(","),
                style: "",
                weight: 400,
              },
            ],
          },
          opacity: {
            value: { min: 0.3, max: 1 },
          },
          size: {
            value: { min: 1, max: 15 },
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
      }}
    />
  );
};

export default Particle;
