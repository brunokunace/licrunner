import app from './app'
import { createBg, updateBG } from './background'
import { createPlayer, playerSheet, player } from './player'
let bgs = []
var bgSpeed = 0

const gameLoop = (delta) => {
  updateBG(bgs, bgSpeed)
}

const init = () => {
  for (let i = 11; i >= 1; i--) {
    const current = `bg${i}`
    bgs.push(createBg(app.loader.resources[current].texture))
  }
  createPlayer(app)
  document.addEventListener('keydown', keyboard)
  app.ticker.add(gameLoop)
}

const keyboard = (e) => {
  const handler = {
    get(target, property) {
    if (property in target) {
        return target[property];
      }
    return () => {};
    }
  };
  const keys = {
    37: () => {
      bgSpeed += 0.1
      if (!player.playing) {
        player.textures = playerSheet.walkleft
        // player.loop = true
        player.play()
      }
    },
    38: () => {
      bgSpeed = 0
      player.stop()
    },
    39: () => {
      bgSpeed -= 0.1
      if (!player.playing) {
        player.textures = playerSheet.walkright
        // player.loop = true
        player.play()
      }
    }
  }

  const proxyKeys = new Proxy(keys, handler)

  proxyKeys[e.keyCode]()
}

export {
  init
}