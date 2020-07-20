import { Application } from '@pixi/app'
import { AppLoaderPlugin } from '@pixi/loaders'
import { TilingSpriteRenderer } from '@pixi/sprite-tiling'
import { Renderer } from '@pixi/core'
import { BatchRenderer } from '@pixi/core'
import { TickerPlugin } from '@pixi/ticker'

Renderer.registerPlugin('batch', BatchRenderer)
Renderer.registerPlugin('tilingSprite', TilingSpriteRenderer)
Application.registerPlugin(AppLoaderPlugin)
Application.registerPlugin(TickerPlugin)

const app = new Application({
	width: window.innerWidth,
  height: window.innerHeight
})

export default app