import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("", {})} className="bg-black">
        Back
      </button>
      About
    </div>
  );
};

export default About;
