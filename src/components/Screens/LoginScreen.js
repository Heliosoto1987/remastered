import React from 'react'
import '../../styles/loginscreen.css'
import Particles from "react-tsparticles";

export const LoginScreen = ({ history }) => {

  const handLeClick = () => {
    history.push("/home");

  }
  return (
    <div className="loginscreen">
      <Particles
        id="loginscreen__tsparticles"
        options={{
          "background": {
            "color": {
              "value": "#ffffff"
            },
            "image": "url('https://cdn.matteobruni.it/images/particles/background3.jpg')",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover",
            "opacity": 1
          },
          "backgroundMask": {
            "composite": "destination-out",
            "cover": {
              "color": {
                "value": {
                  "r": 255,
                  "g": 255,
                  "b": 255
                }
              },
              "opacity": 1
            },
            "enable": true
          },
          "backgroundMode": {
            "enable": true,
            "zIndex": 1
          },
          "detectRetina": true,
          "fpsLimit": 30,
          "infection": {
            "cure": false,
            "delay": 0,
            "enable": false,
            "infections": 0,
            "stages": []
          },
          "interactivity": {
            "detectsOn": "canvas",
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onDiv": {
                "selectors": [],
                "enable": false,
                "mode": [],
                "type": "circle"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": false,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "attract": {
                "distance": 200,
                "duration": 0.4,
                "speed": 1
              },
              "bounce": {
                "distance": 200
              },
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 1,
                "size": 100
              },
              "connect": {
                "distance": 80,
                "links": {
                  "opacity": 0.5
                },
                "radius": 60
              },
              "grab": {
                "distance": 400,
                "links": {
                  "blink": false,
                  "consent": false,
                  "opacity": 1
                }
              },
              "light": {
                "area": {
                  "gradient": {
                    "start": {
                      "value": "#ffffff"
                    },
                    "stop": {
                      "value": "#000000"
                    }
                  },
                  "radius": 1000
                },
                "shadow": {
                  "color": {
                    "value": "#000000"
                  },
                  "length": 2000
                }
              },
              "push": {
                "quantity": 4
              },
              "remove": {
                "quantity": 2
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4,
                "speed": 1
              },
              "slow": {
                "factor": 3,
                "radius": 200
              },
              "trail": {
                "delay": 1,
                "quantity": 1
              }
            }
          },
          "manualParticles": [],
          "motion": {
            "disable": false,
            "reduce": {
              "factor": 4,
              "value": false
            }
          },
          "particles": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1
                },
                "value": 1
              }
            },
            "collisions": {
              "bounce": {
                "horizontal": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                },
                "vertical": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1
                  },
                  "value": 1
                }
              },
              "enable": false,
              "mode": "bounce"
            },
            "color": {
              "value": "#ffffff",
              "animation": {
                "enable": false,
                "speed": 1,
                "sync": true
              }
            },
            "life": {
              "count": 0,
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0
                },
                "value": 0,
                "sync": false
              },
              "duration": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.0001
                },
                "value": 0,
                "sync": false
              }
            },
            "links": {
              "blink": false,
              "color": {
                "value": "#ffffff"
              },
              "consent": false,
              "distance": 150,
              "enable": true,
              "frequency": 1,
              "opacity": 1,
              "shadow": {
                "blur": 5,
                "color": {
                  "value": "#00ff00"
                },
                "enable": false
              },
              "triangles": {
                "enable": false,
                "frequency": 1
              },
              "width": 1,
              "warp": false
            },
            "move": {
              "angle": {
                "offset": 45,
                "value": 90
              },
              "attract": {
                "enable": false,
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "direction": "none",
              "distance": 0,
              "enable": true,
              "gravity": {
                "acceleration": 9.81,
                "enable": false,
                "maxSpeed": 50
              },
              "noise": {
                "delay": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0
                  },
                  "value": 0
                },
                "enable": false
              },
              "outModes": {
                "default": "out",
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              },
              "random": false,
              "size": false,
              "speed": 2,
              "straight": false,
              "trail": {
                "enable": false,
                "length": 10,
                "fillColor": {
                  "value": "#000000"
                }
              },
              "vibrate": false,
              "warp": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800,
                "factor": 1000
              },
              "limit": 0,
              "value": 80
            },
            "opacity": {
              "random": {
                "enable": false,
                "minimumValue": 0.1
              },
              "value": 1,
              "animation": {
                "destroy": "none",
                "enable": false,
                "minimumValue": 0.1,
                "speed": 1,
                "startValue": "random",
                "sync": false
              }
            },
            "reduceDuplicates": false,
            "rotate": {
              "random": {
                "enable": false,
                "minimumValue": 0
              },
              "value": 0,
              "animation": {
                "enable": false,
                "speed": 0,
                "sync": false
              },
              "direction": "clockwise",
              "path": false
            },
            "shadow": {
              "blur": 0,
              "color": {
                "value": "#000000"
              },
              "enable": false,
              "offset": {
                "x": 0,
                "y": 0
              }
            },
            "shape": {
              "options": {
                "polygon": {
                  "nb_sides": 5
                },
                "star": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                  "width": 100,
                  "height": 100
                },
                "images": {
                  "src": "https://cdn.matteobruni.it/images/particles/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "type": "circle"
            },
            "size": {
              "random": {
                "enable": true,
                "minimumValue": 1
              },
              "value": 30,
              "animation": {
                "destroy": "none",
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "startValue": "random",
                "sync": false
              }
            },
            "stroke": {
              "width": 0,
              "color": {
                "value": "#000000",
                "animation": {
                  "enable": false,
                  "speed": 1,
                  "sync": true
                }
              }
            },
            "twinkle": {
              "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              },
              "particles": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1
              }
            }
          },
          "pauseOnBlur": true,
          "pauseOnOutsideViewport": false,
          "themes": []
        }}
      />
      <div className="loginscreen__main">
        <h2 className="loginscreen__main__firstTitle">Portafolio de Helio Soto</h2>
        <div className="loginscreen__main--box">
          <div className="loginscreen__main--title">Bienvenido</div>
          <div className="loginscreen__main--title2">Descubre mis habilidades</div>
        </div>
        <button
          className="login__screen--buttom"
          onClick={handLeClick}
        >
          Entrar
          </button>

      </div>

    </div>

  );

}
