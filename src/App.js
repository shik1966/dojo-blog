import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="content">
          <Home />
        </div>
    </div>
  );
}

/*function App() {
  const title = "Welcome to the Blog";
  const likes = 50;
  //cannot create object or boolean 
  //const person = { name: 'marwan', age: 20};

  const link = "https://www.google.com";

  return (
    <div className="App">
      <Navbar />
      {<Navbar></Navbar>}
        <div className="content">
          <h1> {title} </h1>
          <p>I have {likes} Likes!</p>

          {<p>{person}</p>}

          <p> 69 </p>
          <p> FUCK U </p>
          <p>{ [1,2,3,4,5] }</p>
          <p>{ (Math.random()*20) }</p>

          {<a ref =  "https://www.google.com"> Google Site</a>}
          <a href = {link}> Google Site</a> 
          
        </div>
    </div>
  );
}*/

export default App;
