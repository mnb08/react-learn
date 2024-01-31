import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = ({endpoint, setEndpoint}) => {


	return (
		<div 
			className='header'
			style={{
				margin: '0',
				boxSizing: 'border-box',
				width: '100%',
				height: '100px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '0 300px',
				background: 'lightgreen',
				color: 'white',
				fontSize: '30px',
				fontWeight: '900',
		}}>
			<Link to={'/'}>home</Link>
			<div className='cont'>
				<NavLink to={'/users'} onClick={ () => setEndpoint('users')} >Users </NavLink>
				<NavLink to={'/comments'}onClick={ () => setEndpoint('comments')} >Comments</NavLink>
				<Link to={'/posts'} onClick={ () => setEndpoint('posts')} >Posts</Link>
			</div>
		</div>
	)
}
