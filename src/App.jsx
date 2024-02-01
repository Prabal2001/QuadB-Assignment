
import './App.css'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route, }   from 'react-router-dom';
import BookMovieTicket from './Components/BookMovieTicket';
import MovieDetail from './Components/MovieDetail';
import Navbar from './Components/Navbar';
import MovieList from './Components/movieList';
function App() {
 

  return (
    <>
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/shows/:id" element={<MovieDetail />} />
        <Route path="/book/:id" element={<BookMovieTicket/>} />
        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
