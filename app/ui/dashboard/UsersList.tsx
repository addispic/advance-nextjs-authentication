import axios from "axios"
export default async function UsersList(){
    const response = await axios.get("http://localhost:3000/api/users") 
    console.log(response.data)
    return (
        <div className="flex-1">users list</div>
    )
}