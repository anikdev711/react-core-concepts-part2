import { useEffect, useState } from "react"


export default function Users(){
    const [users, setUsers] = useState([]);
    //there are two parameters in useEffect. function ()=>{} and dependencies []
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}