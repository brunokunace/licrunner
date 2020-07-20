import app from './app'
import { backgroundLoader } from './background'
import { playerLoader } from './player'
import { init } from './bootstrap'

document.body.appendChild(app.view)

app.loader.baseUrl = 'assets'
backgroundLoader(app.loader)
playerLoader(app.loader)
app.loader.onComplete.add(init)
app.loader.load()
