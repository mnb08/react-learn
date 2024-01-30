import React from 'react'
import shortid from 'shortid'
import axios from '../axios'

export const Users = () => {

    const [data, setData] = React.useState([])

    React.useEffect( () => {
        const getUsers = async() => {
            const response = await axios.get('/users')
            console.log(response)
            setData(response.data)
        }
        getUsers()
    }, [])

    return (
        
        data.map( item => {
            return (
                <div key={shortid.generate()}>
                    <h1> {item.firstname} </h1>
                    <h3> {item.lastname} </h3>
                    <h3> {item.email} </h3>
                    <button
                        // onClick={ () => setDeleteId(item.id)}
                    > x </button>
                </div>  
            )
        })
        
    )
}
