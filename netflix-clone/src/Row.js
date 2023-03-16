import React, { useState, useEffect } from 'react'
import axios from "./axios";

function Row({ tittle, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  
    useEffect(()=>{

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    console.log(movies);
    return (
    <div className="row">
        <h2>{tittle}</h2>

            <div className="row__posters">
                {movies.map()}
            </div>
    </div>
  )
}

export default Row
