import { Link } from "react-router-dom";
export default function Index() {
  return (
    <div>
      Index
      <Link to={"/user"}>Check User</Link>
    </div>
  );
}
