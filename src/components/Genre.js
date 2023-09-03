import Movie from "./Movie";

function Genre({
  name,
  description,
  movieTitle1,
  movieTitle2,
  moviePoster1,
  moviePoster2,
  year1,
  year2,
}) {
  return (
    <div className="genre">
      <div className="wrapper">
        <div className="textWrapper">
          <h2> {name} genre</h2>
          <h4>description: {description}</h4>
        </div>
        <hr />
        <div className="movies">
          <Movie title={movieTitle1} year={year1} bgImg={moviePoster1} />
          <Movie title={movieTitle2} year={year2} bgImg={moviePoster2} />
        </div>
      </div>
    </div>
  );
}

export default Genre;
