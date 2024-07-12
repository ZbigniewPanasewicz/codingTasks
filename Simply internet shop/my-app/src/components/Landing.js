import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import featuredSock from '../socks1.jpg';

export default function Landing(props) {
  // State variables for username and login status
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the login form submission
  const handleLogin = (event) => {
    event.preventDefault(); 
    if (username.trim()) {  
      setIsLoggedIn(true); 
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); 
    setUsername('');       
  };

  return (
    <div className="landing-container">
  
      <Card className="featured-sock"> 
        <Card.Img variant="top" src={featuredSock} className="sock-image" />
        <Card.Body>
          <Card.Title><h3>Sock of the Week!</h3></Card.Title>
          <Card.Text>
            <h4>The Muddy Marvels</h4>
            <p>
              Introducing our signature collection of socks...
            </p>
            <div className="price">
              <a href='/products'>More details</a> 
            </div>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Right Column (Login/News) */}
      <div className="right-column">
        {/* Conditional Rendering: Show login form or welcome message */}
        {isLoggedIn ? (
          <>
            <h3>Welcome, {username}!</h3>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        )}

        {/* Dirty Sock News Section */}
        <hr /> {/* Added for visual separation */}
        <div className="news-section">
          <h3>Dirty Sock News</h3>
          <article>
            <h4>Study Finds Dirty Socks Boost Creativity</h4>
            <p>
            A groundbreaking study reveals that the unique microbial ecosystem of dirty socks might actually enhance creative thinking. Researchers recommend wearing your socks for at least a week before starting your next masterpiece.
            </p>
          </article>
          
        </div>
      </div>
    </div>
  );
}
