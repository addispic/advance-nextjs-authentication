import axios from "axios"

// api uri
const apiURI = process.env.NEXT_PUBLIC_API_HOST

export default async function GetUsername({_id}: {_id: string}){
    const response = await axios.get(`${apiURI}/api/users/${_id}`)
    return (
        <>{response.data?.isUserExist?.username}</>
    )
}