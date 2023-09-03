function Movie({title, year,bgImg }) {
  return (
    <div className="movie" style={{ 
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition:'center',
      
    }}>
      <div className="movieTitle">
      <p>Title: {title}</p>
      <p>Year: {year}</p>
      </div> 
    </div>
  );
}
export default Movie;
