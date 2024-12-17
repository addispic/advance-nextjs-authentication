// icons
import { PiUserLight } from "react-icons/pi";

export default function GetProfile({ _id }: { _id: string }) {
  return (
    <>
      {!true ? (
        <div>image</div>
      ) : (
          <PiUserLight className="text-xl"/>
      )}
    </>
  );
}
