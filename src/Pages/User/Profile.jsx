import { useContext } from "react";
import { AuthContext } from '../../Config/AuthProvider';
export default function Profile() {
  const { user,token } = useContext(AuthContext);

  return (
    <div className="profile">
        <div className="row">
          <div className="col-4 border border-danger">
            {/* This for Image */}

          </div>
          <div className="col border border-info">

          </div>
        </div>
    </div>
  );
}
