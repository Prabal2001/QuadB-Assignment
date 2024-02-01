import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {API_URL} from '../API.js';
const MovieList = () => {
    const[movielist,setmovielist] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
       axios.get(API_URL)
       .then((res) => {
        console.log(res.data);
        setmovielist(res.data);
      })
      .catch((err) => console.log(err));
        },[])
  return (
      <div className="movie-list">
    {movielist.map((movie) => (
      <div className="movie-card" key={movie.show.id}>
        <div className="movie-banner">
          {movie.show.image ? (
            <img src={movie.show.image.original} alt="" />
          ) : (
            <img src={""} alt="" />
          )}
        </div>
        <div className="movie-title">
          <span>{movie.show.name}</span>
        </div>
        <div className="details-btn">
          <button onClick={() => navigate(`/shows/${movie.show.id}`)}>
            More Details
          </button>
        </div>
      </div>
    ))}
  </div>
);
          };

export default MovieList;