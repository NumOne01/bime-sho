import React from 'react'
import Toolbar from '../components/toolbar/Toolbar.jsx'
import Footer from '../components/footer/Footer.jsx'

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<Toolbar />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default Layout
