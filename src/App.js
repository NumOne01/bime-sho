import React from 'react'
import './App.css'
import Home from './pages/home/Home.jsx'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import Layout from './layout/Layout'

const theme = createMuiTheme({
	palette: {
		common: { black: '#000', white: '#fff' },
		background: { paper: '#fff', default: '#fafafa' },
		primary: {
			light: '#86dc23',
			main: '#70B81D',
			dark: '#599317',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff4081',
			main: '#f50057',
			dark: '#c51162',
			contrastText: '#fff'
		},
		error: {
			light: '#e57373',
			main: '#f44336',
			dark: '#d32f2f',
			contrastText: '#fff'
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)'
		}
	},
	typography: { fontFamily: 'Yekan' }
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Layout>
					<Switch>
						<Route path="/" component={Home} />
						<Redirect to="/" />
					</Switch>
				</Layout>
			</Router>
		</ThemeProvider>
	)
}

export default App
