import app from './app'
import { TilingSprite } from '@pixi/sprite-tiling'
let bgX = 0
const backgroundLoader = (loader) => {
  loader
    .add('bg1', 'backgrounds/trees1.png')
    .add('bg2', 'backgrounds/trees2.png')
    .add('bg3', 'backgrounds/trees3.png')
    .add('bg4', 'backgrounds/trees4.png')
    .add('bg5', 'backgrounds/trees5.png')
    .add('bg6', 'backgrounds/trees6.png')
    .add('bg7', 'backgrounds/trees7.png')
    .add('bg8', 'backgrounds/trees8.png')
    .add('bg9', 'backgrounds/trees9.png')
    .add('bg10', 'backgrounds/trees10.png')
    .add('bg11', 'backgrounds/trees11.png')
}
const createBg = (texture) => {
  const tilling = new TilingSprite(texture, window.innerWidth, 900)
  tilling.position.set(0, -100)
  app.stage.addChild(tilling)
  return tilling
}

const updateBG = (bgs, bgSpeed) => {
  bgX = (bgX + bgSpeed)
  bgs.map((bg, index) => {
      bg.tilePosition.x = bgX * (index - 1)
  })
}

export {
  backgroundLoader,
  createBg,
  updateBG
}