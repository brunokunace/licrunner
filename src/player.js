import { BaseTexture, Texture } from '@pixi/core'
import { Rectangle } from '@pixi/math';
import { AnimatedSprite } from 'pixi.js';
const playerSheet = []
let player = {}

const playerLoader = (loader) => {
  loader.add('playerRight', 'player/fat1.png')
  loader.add('playerLeft', 'player/fat2.png')
}

const createPlayerSheet = (loader) => {
  let rightSheet = new BaseTexture.from(loader.resources['playerRight'].url)
  let leftSheet = new BaseTexture.from(loader.resources['playerLeft'].url)
  const w = 118
  const h = 128
  playerSheet['walkright'] = [
    new Texture(rightSheet, new Rectangle(0 * w, 0, w, h)),
    new Texture(rightSheet, new Rectangle(1 * w, 0, w, h)),
    new Texture(rightSheet, new Rectangle(2 * w, 0, w, h)),
    new Texture(rightSheet, new Rectangle(3 * w, 0, w, h))
  ]
  playerSheet['walkleft'] = [
    new Texture(leftSheet, new Rectangle(0 * w, 0, w, h)),
    new Texture(leftSheet, new Rectangle(1 * w, 0, w, h)),
    new Texture(leftSheet, new Rectangle(2 * w, 0, w, h)),
    new Texture(leftSheet, new Rectangle(3 * w, 0, w, h))
  ]
}

const createPlayer = (app) => {
  createPlayerSheet(app.loader)
  player = new AnimatedSprite(playerSheet.walkright)
  player.anchor.set(0.5)
  player.animationSpeed = 0.1
  player.loop = false 
  player.x = 100
  player.y = app.view.height - 100

  app.stage.addChild(player)
}

export {
  playerLoader,
  createPlayer,
  playerSheet,
  player
}