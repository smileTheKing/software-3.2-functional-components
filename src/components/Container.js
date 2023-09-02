import Genre from "./Genre";


function Container() {
  return (
    <>
      <h1>Movie app</h1>
      <Genre name={'comedy'} movieTitle1={'Cook Special'}  movieTitle2={'Fame and Game'} description={'laugh your way to heaven all day'} year1={2012} year2={2023}/>
      <Genre name="romance"   movieTitle1={'Love Light'}  movieTitle2={'One Guy'} description={'The genre full of excited love movies'} year1={2017} year2={2003}/>
    </>
  );
}

export default Container;
