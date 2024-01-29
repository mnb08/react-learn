import React from 'react'
import { Link } from 'react-router-dom'

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
			<div>home</div>
			<div className='cont'>
				<Link to={'/users'} onClick={ () => setEndpoint('users')} className={`item ${endpoint == 'users' ? 'active' : ''}`}>Users </Link>
				<Link to={'/comments'}onClick={ () => setEndpoint('comments')} className={`item ${endpoint == 'comments' ? 'active' : ''}`}>Comments</Link>
				<Link to={'/posts'} onClick={ () => setEndpoint('posts')} className={`item ${endpoint == 'posts' ? 'active' : ''}`}>Posts</Link>
			</div>
		</div>
	)
}
