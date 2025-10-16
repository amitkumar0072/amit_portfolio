import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    // this loads the slim version (basic shapes, no heavy plugins)
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "attract",
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#000000" },
          move: {
            enable: true,
            speed: 2,
            outModes: { default: "bounce" },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 50,
          },
          opacity: { value: 0.7 },
          shape: {
            type: ["circle", "polygon"],
            polygon: { nb_sides: 5 },
          },
          size: { value: { min: 5, max: 15 } },
        },
        detectRetina: true,
      }}
    />
  );
}
