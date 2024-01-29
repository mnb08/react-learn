import { Item } from "./Item"

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Selena'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Luiza'},
    {id: 5, name: 'Will'},
    {id: 6, name: 'Nill'},
    {id: 7, name: 'Robert'}
]

const stylesForBlock = {
    color: 'red',
    padding: '10px',
    listStyle: 'none',

}

const List = () => {
    return(
        <ul style={stylesForBlock}>
            <h1>List</h1> 
            {
                users.map( user => {
                    return <Item name={user.name} />
                })
            }
        </ul>
    )
}

export { List }