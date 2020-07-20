import app from './app'
import { backgroundLoader } from './background'
import { init } from './bootstrap'

document.body.appendChild(app.view)

app.loader.baseUrl = 'assets'
backgroundLoader(app.loader)
app.loader.onComplete.add(init)
app.loader.load()
