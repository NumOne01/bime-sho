import React from 'react'
import NavigationItem from './navigation-item/NavigationItem.jsx'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Collapse, makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
	nav: {
		listStyle: 'none',
		margin: 0,
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			width: '100%',
			padding: 0
		}
	}
}))

const NavigationItems = ({ collapse }) => {
	const styles = useStyle()

	const desktopMedia = useMediaQuery('(min-width:600px)')

	return (
		<Collapse in={!collapse || desktopMedia} style={{ width: '100%' }}>
			<ul className={styles.nav}>
				<NavigationItem link="/">صفحه اصلی</NavigationItem>
				{!desktopMedia && (
					<NavigationItem link="/">ورود</NavigationItem>
				)}
				<NavigationItem link="/moshaver">
					سامانه مشاوران بیمه شو
				</NavigationItem>
				<NavigationItem link="/blog">بلاگ</NavigationItem>
				<NavigationItem link="/contact-us">تماس با ما</NavigationItem>
				{!desktopMedia && (
					<NavigationItem link="/contact-us">
						دانلود اپلیکیشن
					</NavigationItem>
				)}
			</ul>
		</Collapse>
	)
}

export default NavigationItems
