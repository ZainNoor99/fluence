import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="main"> 
      <div className="mainLeft">
      
      </div>
      <div className="mainRight">
        <h1 className="mainWelcome">Welcome <br></br>to Fluence</h1>
        <p className="mainFind">Want to find influencers and grow together?</p>
        <Link to="/fluence/input">
          <button className="mainButton">Let's do it!</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
