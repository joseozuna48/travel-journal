import NavBar from "./components/NavBar.js";
import Post from "./components/Post.js";
import data from "./data.js";


function App() {

  const articles = data.map( (info,index) =>{
    return <Post {...info} key={index} />
  } );

  return (
    <div>
      <NavBar/>
      <div className="post--section">
        {articles}
      </div>
      
    </div>
  );
}

export default App;
