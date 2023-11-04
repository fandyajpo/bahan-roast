import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../lib/axios";

function UserInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      client.get(`https://64e495b5c555638029137451.mockapi.io/user/${id}`),
  });

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>

      <pre>{JSON.stringify(data?.data, null, 2)}</pre>
    </>
  );
}

export default UserInfo;
