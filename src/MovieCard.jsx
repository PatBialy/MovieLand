import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
       <div>
          <p>{movie.Year}</p>
       </div>
       <div>
          <img src={movie.Poster !== "N/A" ? movie.Poster : "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg"} alt={movie.Title}/>
        </div>
        <div>
           <span>{movie.Type}</span>
           <h3>{movie.Title}</h3>
        </div>
</div>
  )
}

export default MovieCard;