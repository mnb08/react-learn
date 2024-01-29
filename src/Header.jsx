import React from 'react'

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
			<div onClick={ () => setEndpoint('users')} className={`item ${endpoint == 'users' ? 'active' : ''}`}>Users </div>
			<div onClick={ () => setEndpoint('comments')} className={`item ${endpoint == 'comments' ? 'active' : ''}`}>Comments</div>
			<div onClick={ () => setEndpoint('posts')} className={`item ${endpoint == 'posts' ? 'active' : ''}`}>Posts</div>
		</div>
	)
}
