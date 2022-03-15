import Particles from 'react-tsparticles'
import Mugatu from '../png/Mugatu.png'
import Karl from '../png/karl_lagerfeld.png'
import Cristalglass from '../png/pngfind.com-champagne-glass-png-30808.png'
import FrFashion from '../png/pngfind.com-fashion-png-324784.png'
import Hooker from '../png/pngfind.com-hooker-png-5361315.png'
import Vip2 from '../png/pngfind.com-vip-png-352034.png'
import Zoolander from '../png/zoolander_transparent.png'
import Meetlint from '../png/Measure-Centimeter-Tape-Transparent-PNG.png'
import Naaimachine from '../png/sewing-machine-gabecd56f9_640.png'
import Gangsterhat from '../png/gangster-hat-png-1-Transparent-Images.png'
import Policeman from '../png/policeman_PNG89076.png'
import Crystal from '../png/louis-roederer-champagne-cristal-brut-bottle-alcohol-beverage-drink-transparent-png-119561.png'
import LadyG from '../png/lady_gaga.png'
import LadyGyellow from '../png/Lady-Gaga-Free-Download-PNG.png'
const ParticlesBackground = () => {
  return (
    <div className='App'>
      <Particles
        options={{
          background: {
            color: {
              value: '#000000',
            },
            opacity: 0.01,
          },
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          interactivity: {
            detectsOn: 'window',
          },
          emitters: {
            position: {
              x: 50,
              y: 60,
            },
            rate: {
              quantity: 0.02,
              delay: 0.6,
            },
          },
          particles: {
            color: {
              value: ['random'],
            },
            move: {
              decay: 0.01,
              direction: 'top',
              enable: true,
              gravity: {
                enable: false,
              },
              outModes: {
                top: 'none',
                default: 'destroy',
              },
              speed: { min: 4, max: 18 },
            },
            number: {
              value: 10,
            },
            opacity: {
              value: 0.9,
            },
            rotate: {
              value: {
                min: 5,
                max: 20,
              },
              direction: 'right',
              animation: {
                enable: true,
                speed: 0.4,
              },
            },
            tilt: {
              direction: 'right',
              enable: true,
              value: {
                min: 0,
                max: 0,
              },
              animation: {
                enable: true,
                speed: 0.1,
              },
            },
            size: {
              value: 8,
            },
            roll: {
              darken: {
                enable: false,
                value: 5,
              },
              enable: false,
              speed: {
                min: 1,
                max: 3,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              speed: {
                min: -1,
                max: 1,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
            },
            shape: {
              type: ['circle', 'image', 'character'],
              options: {
                image: [
                  {
                    src: `${Mugatu}`,
                    width: 142,
                    height: 62,
                    particles: {
                      size: {
                        value: 72,
                      },
                    },
                  },
                  {
                    src: `${Karl}`,
                    width: 72,
                    height: 62,
                    particles: {
                      size: {
                        value: 72,
                      },
                    },
                  },
                  {
                    src: `${Zoolander}`,
                    width: 52,
                    height: 52,
                    particles: {
                      size: {
                        value: 78,
                      },
                    },
                  },
                  {
                    src: `${LadyGyellow}`,
                    width: 52,
                    height: 52,
                    particles: {
                      size: {
                        value: 78,
                      },
                    },
                  },
                  {
                    src: `${LadyG}`,
                    width: 52,
                    height: 52,
                    particles: {
                      size: {
                        value: 78,
                      },
                    },
                  },
                  {
                    src: 'https://particles.js.org/images/fruits/lemon.png',
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 26,
                      },
                    },
                  },
                  {
                    src: `${Cristalglass}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 61,
                      },
                    },
                  },
                  {
                    src: `${FrFashion}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 61,
                      },
                    },
                  },
                  {
                    src: `${Hooker}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 33,
                      },
                    },
                  },
                  {
                    src: `${Meetlint}`,
                    width: 182,
                    height: 182,
                    particles: {
                      size: {
                        value: 77,
                      },
                    },
                  },
                  {
                    src: `${Naaimachine}`,
                    width: 182,
                    height: 182,
                    particles: {
                      size: {
                        value: 66,
                      },
                    },
                  },
                  {
                    src: `${Gangsterhat}`,
                    width: 182,
                    height: 182,
                    particles: {
                      size: {
                        value: 67,
                      },
                    },
                  },
                  {
                    src: `${Policeman}`,
                    width: 182,
                    height: 182,
                    particles: {
                      size: {
                        value: 77,
                      },
                    },
                  },
                  {
                    src: `${Crystal}`,
                    width: 182,
                    height: 182,
                    particles: {
                      size: {
                        value: 77,
                      },
                    },
                  },
                  {
                    src: `${LadyG}`,
                    width: 182,
                    height: 182,
                    particles: {
                      size: {
                        value: 77,
                      },
                    },
                  },
                  {
                    src: 'https://particles.js.org/images/fruits/star.png',
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 1,
                      },
                    },
                  },
                  {
                    src: 'https://particles.js.org/images/fruits/strawberry.png',
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 1,
                      },
                    },
                  },
                  {
                    src: 'https://particles.js.org/images/fruits/watermelon.png',
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 1,
                      },
                    },
                  },
                ],
                polygon: [
                  {
                    sides: 5,
                  },
                  {
                    sides: 6,
                  },
                ],
                character: [
                  {
                    fill: true,
                    font: 'Verdana',
                    width: 162,
                    height: 162,
                    value: ['🤡', '🦄', '⭐️'],
                    style: '',
                    weight: 400,
                    size: {
                      value: 4,
                    },
                  },
                ],
              },
            },
          },
        }}
      />
    </div>
  )
}
export default ParticlesBackground
