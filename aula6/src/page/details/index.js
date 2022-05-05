import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetDetails } from "../../service/getFilmes";

// import { Container } from './styles';

function Details() {
  const params = useParams();

  const [details, setDetails] = useState({});

  const handleGetDatails = async (id) => {
    const response = await GetDetails(id);

    console.log(response);
    setDetails(response);
  };

  useEffect(() => {
    handleGetDatails(params.id);
  }, []);

  return (
    <div>
      <h1>{details.Title}</h1>
    </div>
  );
}

export default Details;
