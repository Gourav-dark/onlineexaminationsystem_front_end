import { NavLink } from "react-router-dom"
export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found 404</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}
