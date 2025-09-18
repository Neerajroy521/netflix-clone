import React, { useRef, useEffect, useState } from 'react'
import cards_data from '../../assets/cards/Cards_data'
import './TitleCards.css'
import { Link } from 'react-router-dom';





const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTBmNWZlNjI5NmVlNDdlZmMwMTMxZWY4OTc0ZGI5ZCIsIm5iZiI6MTc1NDExOTY2OC4yNzMsInN1YiI6IjY4OGRiZGY0NTE2ZmMyMmIwZWE0NWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P_ZNDYk3MIMR74JtH9PNrJema1voBCdGJgOTiJWkZsc'
    }
  };



  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className='title-Cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
