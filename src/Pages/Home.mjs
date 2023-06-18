import axios from "axios";
import { useEffect,useState } from "react";

export default function Home() {
  const [institutelist, setinstitutelist] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7289/api/InstituteDetails/InstituteList")
      .then((response) =>
      {
        setinstitutelist(response.data);
        console.log(response.data);
      })
  },[]);
  return (
    <div>
      <h1>Home Pages</h1>
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