import React from 'react'
import { Container } from '@material-ui/core'
import classes from './Toolbar.module.scss'
import { Button } from '@material-ui/core'
import NavigationItems from './navigation-items/NavigationItems.jsx'
import logo from '../../assets/logo.png'
import { Menu } from '@material-ui/icons'

const Toolbar = () => {
	const [collapse, setCollapse] = React.useState(true)

	const toggleNavBar = () => {
		setCollapse(collapse => !collapse)
	}

	return (
		<div className={classes.toolbar}>
			<Container>
				<div className="clearfix">
					<div className={classes.toolbar__left}>
						<div className={classes.items}>
							<Button color="primary" variant="contained">
								ورود یا ثبت نام
							</Button>
							<Button style={{ marginLeft: 10 }}>
								دانلود اپلیکیشن
							</Button>
						</div>
						<div className={classes.menu} onClick={toggleNavBar}>
							<Menu fontSize="large" />
						</div>
					</div>

					<div className={classes.logo}>
						<img src={logo} alt="logo" className="img-fluid" />
					</div>
					<nav className={classes.toolbar__right}>
						<NavigationItems collapse={collapse} />
					</nav>
				</div>
			</Container>
		</div>
	)
}

export default Toolbar
