"use client";
import { useQuery } from "@tanstack/react-query";

// interface
interface User {
  id: number;
  email: string;
  name: string;
}

export default function Home() {
  const { data } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    select: (users) => users.map((user) => ({ id: user.id, name: user.name })),
  });
  console.log(data);
  return <div>Haddis Menelik From Bahir Dar</div>;
}
