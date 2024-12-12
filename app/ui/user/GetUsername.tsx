import axios from "axios";
import { getPayload } from "@/app/lib/session";
export default async function GetUsername({ _id }: { _id: string | null }) {
  const payload = await getPayload();
  const userId = _id || payload?._id;
  const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
  return <>{response.data?.username || response.data?.email}</>;
}
