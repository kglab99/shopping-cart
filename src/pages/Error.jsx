import { Link } from "react-router-dom";
import { error } from "../sources/sources";

const ErrorPage = () => {
  return (
    <div className="error">
        <img src={error} alt="" />
      <Link to="/">
        Go back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
