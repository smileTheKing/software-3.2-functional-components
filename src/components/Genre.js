
import Card from "./Card";
import Movie from "./Movie";


function Genre({ name, description,movieTitle1,movieTitle2 ,year1,year2}) {
  return (
    <Card>
      <h2>name: {name}</h2>
      <h4>description: {description}</h4>
      <h4>movieTitle1: {movieTitle1}</h4>
      <h4>movieTitle2: {movieTitle2}</h4>
      <Movie title={movieTitle1} year={year1}  />
      <Movie  title={movieTitle2} year={year2} /> 
    </Card>
  );
}

export default Genre;
