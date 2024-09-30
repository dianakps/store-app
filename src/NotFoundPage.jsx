import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      Sorry, 404 not found page
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFoundPage;
