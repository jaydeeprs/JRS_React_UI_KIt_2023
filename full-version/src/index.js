// React-related imports
import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Redux-related imports
import { store } from './redux/store'
import { Provider } from 'react-redux'

// Context-related imports for Intl, CASL, and ThemeColors
import ability from './configs/acl/ability'
import { AbilityContext } from './utility/context/Can'
import { ThemeContext } from './utility/context/ThemeColors'

// PrismJS and other styling-related imports
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx.min'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '@styles/react/libs/react-hot-toasts/react-hot-toasts.scss'
import './@core/assets/fonts/feather/iconfont.css'
import './@core/scss/core.scss'
import './assets/scss/style.scss'

// ThemeConfig import
import themeConfig from './configs/themeConfig'

// Toast-related imports
import { Toaster } from 'react-hot-toast'

// i18n import
import './configs/i18n'

// Spinner import for splash screen
import Spinner from './@core/components/spinner/Fallback-spinner'

// Ripple Button import
import './@core/components/ripple-button'

// Fake database import
import './@fake-db'

// Service Worker import
import * as serviceWorker from './serviceWorker'

// Lazy loading of app
const LazyApp = lazy(() => import('./App'))

// Rendering of React app
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <AbilityContext.Provider value={ability}>
          <ThemeContext>
            <LazyApp />
            <Toaster position={themeConfig.layout.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
          </ThemeContext>
        </AbilityContext.Provider>
      </Suspense>
    </Provider>
  </BrowserRouter>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
