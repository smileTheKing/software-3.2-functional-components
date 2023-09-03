import Genre from "./Genre";
import poster1 from '../assets/post1.jpeg'
import poster2 from '../assets/post2.jpeg'
import poster3 from '../assets/poster3.jpeg'
import poster4 from '../assets/poster4.webp'

function Container() {
  return (
    <div className="container">
      <h1 className="title">Movie app</h1>
      <Genre name={'comedy'} moviePoster1={poster1} moviePoster2={poster2} movieTitle1={'Cook Special'}  movieTitle2={'Fame and Game'} description={'laugh your way to heaven all day'} year1={2012} year2={2023}/>
      <Genre name="romance" moviePoster1={poster3} moviePoster2={poster4}   movieTitle1={'Love Light'}  movieTitle2={'One Guy'} description={'The genre full of excited love movies'} year1={2017} year2={2003}/>
    </div>
  );
}

export default Container;
