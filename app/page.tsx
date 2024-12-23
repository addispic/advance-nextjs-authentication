// ui
import IdeasList from "./ui/idea/IdeasList";
import AddNewIdeaForm from "./ui/idea/AddNewIdeaForm";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      {/* idea lits */}
      <IdeasList />
      {/* add new idea */}
      <AddNewIdeaForm />
    </div>
  );
}
