import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { MOVIE_DETAIL_URL } from "../API";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAIL_URL}/${id}`)
      .then((res) => {
        setMovieDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="detail-section">
      {movieDetail && (
        <div className="movie-details">
          <div className="movie-detail-img">
            {movieDetail.image ? (
              <img src={movieDetail.image.original} alt={movieDetail.name} />
            ) : (
              <img src={""} alt="" />
            )}
          </div>
          <div className="movie-detail-info">
            <div className="movie-detail-title">
              <h2>{movieDetail.name}</h2>
            </div>
            <div className="movie-detail-summary">
              <p dangerouslySetInnerHTML={{ __html: movieDetail.summary }} />
            </div>
            <div className="movie-detail-details">
              <p>
                <strong>Language:</strong> {movieDetail.language}
              </p>
              <p>
                <strong>Premiered:</strong>{" "}
                {movieDetail.premiered ? (
                  movieDetail.premiered
                ) : (
                  "Not Available"
                )}
              </p>
              <p>
                <strong>Rating:</strong>{" "}
                {movieDetail.rating && movieDetail.rating.average > 0 ? (
                  movieDetail.rating.average
                ) : (
                  "Not Available"
                )}
              </p>
            </div>
            <div className="book-ticket-btn">
              <Link to={`/book/${movieDetail.id}`}>Book Movie Ticket</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
