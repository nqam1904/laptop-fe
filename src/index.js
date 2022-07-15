import { Loading } from 'components'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import configureStore, { history } from 'redux/store'
import App from './App'
import './global.css'
import './reset.css'
import 'react-tabs/style/react-tabs.css'
let { store } = configureStore()
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
	<Provider store={store}>
		<BrowserRouter>
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
		</BrowserRouter>
	</Provider>
)
