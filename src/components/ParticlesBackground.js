import Particles from 'react-tsparticles'
import Mugatu from '../png/Mugatu.png'
import Karl from '../png/karl_lagerfeld.png'
import Cristalglass from '../png/pngfind.com-champagne-glass-png-30808.png'
import Champagneglass from '../png/pngfind.com-champagne-glass-png-31800.png'
import FrFashion from '../png/pngfind.com-fashion-png-324784.png'
import Hooker from '../png/pngfind.com-hooker-png-5361315.png'
import Vip from '../png/pngfind.com-vip-png-1138.png'
import Vip2 from '../png/pngfind.com-vip-png-352034.png'
import Zoolander from '../png/zoolander_transparent.png'

const ParticlesBackground = () => {
  return (
    <div className='App'>
      <Particles
        options={{
          background: {
            color: {
              value: '#000000',
            },
            opacity: 0.4,
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
              y: 100,
            },
            rate: {
              quantity: 5,
              delay: 0.25,
            },
          },
          particles: {
            color: {
              value: ['random'],
            },
            move: {
              decay: 0.05,
              direction: 'top',
              enable: true,
              gravity: {
                enable: false,
              },
              outModes: {
                top: 'none',
                default: 'destroy',
              },
              speed: { min: 5, max: 45 },
            },
            number: {
              value: 0,
            },
            opacity: {
              value: 0.5,
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: 'random',
              animation: {
                enable: true,
                speed: 1,
              },
            },
            tilt: {
              direction: 'random',
              enable: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 1,
              },
            },
            size: {
              value: 8,
            },
            roll: {
              darken: {
                enable: true,
                value: 5,
              },
              enable: true,
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
              type: ['circle', 'image', 'square', 'polygon', 'character'],
              options: {
                image: [
                  {
                    src: `${Mugatu}`,
                    width: 82,
                    height: 32,
                    particles: {
                      size: {
                        value: 161,
                      },
                    },
                  },
                  {
                    src: `${Karl}`,
                    width: 72,
                    height: 62,
                    particles: {
                      size: {
                        value: 161,
                      },
                    },
                  },
                  {
                    src: `${Zoolander}`,
                    width: 92,
                    height: 92,
                    particles: {
                      size: {
                        value: 161,
                      },
                    },
                  },
                  {
                    src: 'https://particles.js.org/images/fruits/lemon.png',
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 46,
                      },
                    },
                  },
                  {
                    src: `${Champagneglass}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 76,
                      },
                    },
                  },
                  {
                    src: `${Vip}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 76,
                      },
                    },
                  },
                  {
                    src: `${Vip2}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 76,
                      },
                    },
                  },
                  {
                    src: `${Cristalglass}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 146,
                      },
                    },
                  },
                  {
                    src: `${FrFashion}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 126,
                      },
                    },
                  },
                  {
                    src: `${Hooker}`,
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 106,
                      },
                    },
                  },
                  {
                    src: 'https://particles.js.org/images/fruits/star.png',
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 16,
                      },
                    },
                  },
                  {
                    src: 'https://particles.js.org/images/fruits/strawberry.png',
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 16,
                      },
                    },
                  },
                  {
                    src: 'https://particles.js.org/images/fruits/watermelon.png',
                    width: 32,
                    height: 32,
                    particles: {
                      size: {
                        value: 16,
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
                    value: [ '🤡', '🍀', '🍙', '🦄', '⭐️',],
                    style: '',
                    weight: 400,
                    size: {
                      value: 162,
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
