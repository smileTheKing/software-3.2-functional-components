
import Movie from "./Movie";


function Genre({ name, description,movieTitle1,movieTitle2 ,year1,year2}) {
  return (
    <div>
      <h2> {name} Genre</h2>
      <h4>description: {description}</h4>
      <Movie title={movieTitle1} year={year1}  />
      <Movie  title={movieTitle2} year={year2} /> 
    </div>
  );
}

export default Genre;
