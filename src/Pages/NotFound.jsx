import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div className="error bg-dark text-light vh-100 d-flex justify-content-center align-items-center">
        <div className="container-floud d-flex">
                <div className="container-error-404">
                  <h1>404</h1>
                </div>
                <h2 className="h1">Sorry! Page not found</h2>
        </div>
               <Link className="btn btn-outline-light" to="/">Home</Link>
    </div>
  );
}
