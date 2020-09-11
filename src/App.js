import React from 'react'
import './App.css'
import Home from './pages/home/Home.jsx'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
		</Router>
	)
}

export default App
