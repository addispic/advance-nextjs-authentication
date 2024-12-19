export default function Profiles({
  searchParams,
}: {
  // searchParams: { _id: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const _id  = searchParams?._id;
  console.log("USER ID FROM PAGE: ",_id)
  return <div>Haddis Menelik From Bahir Dar</div>;
}
