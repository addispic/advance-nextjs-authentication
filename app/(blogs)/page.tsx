import axios from "axios";
// base url
const baseURI = process.env.NEXT_PUBLIC_API_HOST;
// ui
import GetUsernameAndProfile from "../ui/users/GetUsernameAndProfile";
export default async function Home() {
  const response = await axios.get(`${baseURI}/api/users`);
  return (
    <div>
      {response.data?.users?.map((user: { _id: string }) => {
        return <GetUsernameAndProfile key={user?._id} _id={`${user?._id}`} />;
      })}
    </div>
  );
}
