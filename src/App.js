import { Header } from "./Header";
import React from "react";
import axios from 'axios'
import { Users } from "./components/Users";
import shortid from "shortid";
import { Pagination } from "./components/Pagination";
import { Posts } from "./components/Posts";
import { Comments } from "./components/Comments";

const url = 'http://localhost:9999'

function App() {

	const [data, setData] = React.useState([])
	const [endpoint, setEndpoint] = React.useState('users')
	const [maxNumberOfData, setMaxNumberOfData] = React.useState(0)
	const [limit, setLimit] = React.useState(5)
	const [page, setPage] = React.useState(1)
	const [active, setActive] = React.useState(1)
	const [deleteId, setDeleteId] = React.useState(null)

	const pagination = Array(Math.ceil(maxNumberOfData / limit))

	React.useEffect(() => {
		const getData = async() => {
			const response = await axios.get(`${url}/${endpoint}`)
			setMaxNumberOfData(response.data.length)
		}

		getData() 
	}, [endpoint])

	React.useEffect(() => {
		const getData = async() => {
			const response = await axios.get(`${url}/${endpoint}?_page=${page}&_per_page=${limit}`)
			setData(response.data.data)
			console.log(response.data.data)
		}

		getData() 
	}, [page, deleteId, endpoint])

	React.useEffect( () => {
		const deleteOneElement = () => {
			if(deleteId){
				axios.delete(`${url}/${endpoint}/${deleteId}`)
					.then( () => console.log('success'))
			}
			
		}
		deleteOneElement()
	}, [deleteId])

	const handleClick = (number) => {
		setActive(number)
		setPage(number)
	}

	return (
		<div className="App">
			<Header endpoint={endpoint} setEndpoint={setEndpoint} />	
			<div className="container">
				{
					endpoint === 'users' &&
					data.map( item => <Users key={shortid.generate(12)} item = {item} setDeleteId={setDeleteId} />)
					||
					endpoint === 'posts' &&
					data.map( (item) => <Posts key={item.id} item = {item} />)
					||
					endpoint === 'comments' &&
					data.map( (item) => <Comments key={item.id} item = {item} />)
				}
			</div>
			<div className="pagination">
				{
					[...pagination].map( (item, ind) => <Pagination active={active} handleClick={handleClick} ind={ind} />)
				}
			</div>
		</div>
	);
}

export { App }

