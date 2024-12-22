// ui
import AddNewIdeaForm from "./ui/idea/AddNewIdeaForm";
export default function Home() {
  return (
    <div className="h-full flex flex-col">
      {/* idea lits */}
      <div className="flex-1 max-h-[92vh] overflow-y-auto">Idea List Here</div>
      {/* add new idea */}
      <AddNewIdeaForm />
    </div>
  );
}
