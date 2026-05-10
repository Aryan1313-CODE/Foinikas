// ParticleBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: "#0d47a1" }, // Optional: your background
        particles: {
          number: {
            value: 133,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#ffffff",
            },
            polygon: {
              sides: 12,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            animation: {
              enable: false,
              speed: 1.038961038961039,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: false,
              speed: 40,
              minimumValue: 0.1,
              sync: false,
            },
          },
          links: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 14.204657549380908,
            direction: "top",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
