// ui
import axios from "axios";
import SingleIdea from "./SingleIdea";

// ideas
export interface Idea {
  _id: string;
  author: string;
  text: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export default async function IdeasList() {
  const response = await axios.get<Idea[]>("http://localhost:3000/api/ideas");


  return (
    <div className=" flex-1 max-h-[90vh] overflow-y-auto pt-1.5">
      {response.data?.length ? (
        <div>
          {response.data.map((idea: Idea) => {
            return <SingleIdea key={idea._id} idea={idea} />;
          })}
        </div>
      ) : (
        <div>No Ideas Yet</div>
      )}
    </div>
  );
}
