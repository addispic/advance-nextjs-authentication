import axios from "axios";
import { getPayload } from "@/app/lib/session";
export default async function GetUsername() {
  const payload = await getPayload()
  const response = await axios.get(`http://localhost:3000/api/user/${payload?._id}`);
  console.log(response.data)
  return <>Haddis Menelik</>;
}
