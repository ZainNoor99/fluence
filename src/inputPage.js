import './inputPage.css';
import { useState } from 'react';

function InputPage() {
	const [followers, setFollowers] = useState("");
	const [brand, setBrand] = useState("");

  return (
    <div className="inputPage"> 
      <div className="inputLeft">
      
      </div>
      <div className="inputMiddle">
        <h1 className="inputTitle">Fluence</h1>

				<input 
					type="text" 
					id="input-static-stats" 
					value="My stats..."
					className="inputField"
        />

        <input 
					type="number" 
					id="input-followers" 
					value={followers} 
					placeholder="Number of Followers or Subscribers"
					onChange={(e)=>setFollowers(e.target.value)}
					className="inputField"
        />

				<h2>on</h2>

				<input 
					type="text" 
					id="input-static" 
					placeholder="TikTok"
					className="inputField"
        />

				<input 
					type="text" 
					id="input-static-looking" 
					value="I'm looking for influencers who have worked with..."
					className="inputField"
        />

				<input 
					type="text" 
					id="input-brand" 
					value={brand} 
					placeholder="Comany/Brand"
					onChange={(e)=>setBrand(e.target.value)}
					className="inputField"
        />
        
				<button className="inputButton">Show me!</button>
      </div>
      <div className="inputRight">
      
      </div>
    </div>
  );
}

export default InputPage;
