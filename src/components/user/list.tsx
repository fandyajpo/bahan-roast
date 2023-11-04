import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../lib/axios";
import { IUser } from "../../types";
function Users() {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["getUser"],
    queryFn: () =>
      client.get(`https://64e495b5c555638029137451.mockapi.io/user`),
  });

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>

      <div className="flex flex-col gap-2">
        {data?.data?.map((data: IUser) => (
          <Link to={`/user/${data.id}`}>{data.name}</Link>
        ))}
      </div>
    </>
  );
}

export default Users;
