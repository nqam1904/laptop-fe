import { Loading, ScrollToTop } from 'components'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import configureStore, { history } from 'redux/store'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
// import css library react
import './global.scss'
import './reset.css'
import 'react-tabs/style/react-tabs.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-spring-bottom-sheet/dist/style.css'
let { store, persistor } = configureStore()
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate loading={null} persistor={persistor}>
				<ScrollToTop />
				<App history={history} />
				<ToastContainer
					position="bottom-center"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<Loading ref={(refs) => Loading.setRef(refs)} />
			</PersistGate>
		</BrowserRouter>
	</Provider>
)
