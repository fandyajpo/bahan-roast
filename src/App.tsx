import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client } from "./lib/axios";
import { IUser } from "./types";
function App() {
  const { data } = useQuery({
    queryKey: ["getUser"],
    queryFn: () =>
      client.get("https://64e495b5c555638029137451.mockapi.io/user", {}),
  });

  return (
    <>
      <Link to={"/about"} className="">
        Go to About
      </Link>
      {data?.data?.map((data: IUser) => (
        <p>{data.name}</p>
      ))}
    </>
  );
}

export default App;
