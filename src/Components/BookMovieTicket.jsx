import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MOVIE_DETAIL_URL } from "../API.js";

const BookMovieTicket = () => {
  const [movieData, setMovieData] = useState({});
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [bookingDate, setBookingDate] = useState(localStorage.getItem("bookingDate") || "");
  const[mobile,setmobile] = useState(localStorage.getItem("mobile") || "");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${MOVIE_DETAIL_URL}/${id}`)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleBooking = () => {
    // Check if user details are provided
    if (!userName || !bookingDate  || !mobile) {
      alert("Please fill in all details.");
      return;
    }

    // Store user details in local storage
    localStorage.setItem("userName", userName);
    localStorage.setItem("bookingDate", bookingDate);
    localStorage.setItem("mobile",mobile);
    // Redirect to the root route after booking
    alert("ticket booked !");
    window.location.href = "/";
  };

  return (
    <div className="book-ticket-section">
      <div className="book-ticket">
        <h3>Fill Booking Details</h3>
        <div className="movie-image">
          {movieData.image ? (
            <img src={movieData.image.original} alt="" />
          ) : (
            <img src={""} alt="" />
          )}
        </div>
        <form>
          <div>
            <label>Movie Name:</label>
            <input type="text" defaultValue={movieData.name} disabled />
          </div>
          <div>
            <label> Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>Pick Booking Date:</label>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
            />
          </div>
          <div>
            <label>Mobile No. :</label>
            <input
              type="number"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
            />
          </div>
          <div className="book">
            <button type="button" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookMovieTicket;
