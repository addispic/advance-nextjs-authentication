// ui
import AddNewPost from "./components/AddNewPost";
import Posts from "./components/Posts";
export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="max-w-[520px] mx-auto h-full flex flex-col">
        {/* posts list */}
        <div className="flex-1 overflow-y-auto px-5">
          <Posts />
        </div>
        {/* add new post */}
        <AddNewPost />
      </div>
    </div>
  );
}
