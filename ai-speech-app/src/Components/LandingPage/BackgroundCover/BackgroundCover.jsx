import "./BackgroundCover.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import ExampleDoc from "../../Dotnet_CV.pdf";

export default function BackgroundCover() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div id="particles-js">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#000"
            },
            links: {
              color: "#000",
              distance: 150,
              enable: true,
              opacity: 0.7,
              width: 0.6
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 0.3,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 20
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 3 }
            }
          },
          detectRetina: true
        }}
      />

    </div>
  );
}