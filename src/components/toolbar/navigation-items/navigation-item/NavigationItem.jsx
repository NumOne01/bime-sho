import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	navItem: {
		height: 80,
		[theme.breakpoints.down('xs')]: {
			height: 50,
			width: '100%',
			borderTop: 'solid 1px #ddd'
		}
	}
}))

const NavigationItem = ({ link, children }) => {
	const classes = useStyles()

	return (
		<NavLink to={link}>
			<Button component="li" className={classes.navItem}>
				{children}
			</Button>
		</NavLink>
	)
}

export default NavigationItem
