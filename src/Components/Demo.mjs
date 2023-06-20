import axios from "axios";
import api from "../Config/Config";
import { useEffect,useState } from "react";

export default function Demo() {
  const [institutelist, setinstitutelist] = useState([]);
  const [Error, setError] = useState("");
  useEffect(() => {
    axios
      .get("https://localhost:7289/api/InstituteDetails/InstituteList")
      .then((response) =>
      {
        setinstitutelist(response.data);
        console.log(response.data);
      })
      .catch((error) => { 
        setError(error);
        console.log(error);
      })
  }, []);
  // using Async Await
  const getApiData = async () => {
    setinstitutelist(response.data);
    try {
      const response = api.get("InstituteDetails/InstituteList");
      
    } catch(error) {
      setError(error);
    }
  }
  return (
    <div>
      {Error !== "" && <h2>{Error}</h2>}
      {
        institutelist.map((InstituteDetail) => { 
          const { id, instituteName, location, city, postalCode, state, country } = InstituteDetail;
          return <div key={id}>
              <h3>{id}</h3>
              <h3>{instituteName}</h3>
              <h3>{location}</h3>
              <h3>{city}</h3>
              <h3>{postalCode}</h3>
              <h3>{state}</h3>
              <h3>{country}</h3>
            </div>
        })
      }
    </div>
  );
}