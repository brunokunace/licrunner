import app from './app'
import { createBg, updateBG } from './background'
let bgs = []
var bgSpeed = 0.2

const gameLoop = (delta) => {
  updateBG(bgs, bgSpeed)
}

const init = () => {
  for (let i = 11; i >= 1; i--) {
    const current = `bg${i}`
    bgs.push(createBg(app.loader.resources[current].texture))
  }
  document.addEventListener('keydown', keyboard)
  app.ticker.add(gameLoop)
}

const keyboard = (e) => {
  const handler = {
    get(target, property, receiver) {
    if (property in target) {
        return target[property];
      }
    return () => {};
    }
  };
  const keys = {
    37: () => {
      bgSpeed += 0.1
    },
    38: () => {
      bgSpeed = 0
    },
    39: () => {
      bgSpeed -= 0.1
    }
  }

  const proxyKeys = new Proxy(keys, handler)

  proxyKeys[e.keyCode]()
}

export {
  init
}