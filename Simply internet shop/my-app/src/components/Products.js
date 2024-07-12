/* Import data */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


// Array of product objects
const products = [
  { id: 2, title: "The Muddy Marvels", description: "Introducing our signature collection of socks that have been through the muck and back. Each pair tells a story of epic adventures—whether it’s surviving a puddle jump or conquering a muddy trail. Wear them proudly and let them smell...", imageUrl: "/images/socks1.jpg",
  price: '$19.99', },
  { id: 3, title: "Stinkin’ Good", description: "These socks aren’t just dirty; they’re seasoned. Imagine the aroma of a thousand soccer games, a week-long camping trip, and a dash of mystery funk. Slip into these and embrace the scent of adventure. Warning: May attract curious noses.", imageUrl: "/images/socks2.jpg",
  price: '$19.99', },
  { id: 4, title: "Dirt Couture", description: "Forget clean lines and pristine fabrics. Our socks are all about rugged elegance. The more stains, the better. Each speck of dirt adds character, like battle scars for your feet. Perfect for rebels, wanderers, and anyone who’s ever danced in the rain.", imageUrl: "/images/socks3.jpg",
  price: '$19.99', },
  { id: 5, title: "Grime Glam", description: "Who needs glitter when you can sparkle with soil? Our Grime Glam collection features socks adorned with tiny dirt crystals. They catch the light just right, making you the trendiest mud enthusiast in town. Pair them with your favorite well-worn sneakers.", imageUrl: "/images/socks4.jpg",
  price: '$19.99', },
  { id: 6, title: "Soggy Chic", description: "These socks have been soaked, squished, and squelched. But fear not! They’ve emerged stronger, softer, and slightly squishier. The secret? A blend of swamp water and determination. Slip them on and embrace the soggy chic lifestyle.", imageUrl: "/images/socks5.jpg",
  price: '$19.99', },
  { id: 7, title: "Mud Monarchs", description: "Kings and queens of the muck unite! Our Mud Monarchs collection celebrates the regal art of getting dirty. These socks feature crowns made of dried mud and come with a certificate of authenticity (and a smudge of adventure).", imageUrl: "/images/socks6.jpg",
  price: '$19.99', },
  { id: 8, title: "Filthy Fables", description: "Each pair of Filthy Fables socks comes with a hidden story—a tale of secret tunnels, forbidden forests, and clandestine puddle-jumping societies. Wear them and become part of the legend. Bonus: They’re excellent...", imageUrl: "/images/socks7.jpg",
  price: '$19.99', },
  { id: 9, title: "Dusty Dreams", description: "Close your eyes and imagine the soft caress of dust against your ankles. Our Dusty Dreams socks are like walking on memories—of summer afternoons, tree forts, and childhood escapades. Slip them on and relive the magic.", imageUrl: "/images/socks8.jpg",
  price: '$19.99', },
  { id: 10, title: "Silt Sensations", description: "These socks have been gently massaged by riverbeds and whispered to by mud sprites. They’re not just footwear; they’re a sensory experience. With every step, you’ll feel the ancient wisdom of the earth. Plus, they’re...", imageUrl: "/images/socks9.jpg",
  price: '$19.99', },
  { id: 11, title: "Funky Footprints", description: "Leave your mark wherever you go with our Funky Footprints socks. The dirtier, the better. Each step becomes a masterpiece—a Jackson Pollock of mud splatters. Wear them proudly, and remember: Life is...", imageUrl: "/images/socks10.jpg",
  price: '$19.99', },
];

export default function Products(props) {
    // State to manage the selected color for each product
    const [selectedColors, setSelectedColors] = useState({}); 
  
    // Function to handle the color selection in the dropdown
    const handleColorSelect = (productId, color) => {
      setSelectedColors(prevColors => ({
        ...prevColors,         // Copy the previous state
        [productId]: color,   // Update the color for the selected product
      }));
    };
  
    return (
      <div>
        <h2>Products</h2>      
        <hr />                  
  
        {/* Grid layout for product cards */}
        <Row xs={1} md={2} lg={6} className="product-container">
          {products.map((product) => { // Map through the products array
            const currentColor = selectedColors[product.id] || 'success'; // Get the current color for the product or default to 'success'
  
            return (
              // Create a Col for each product
              <Col key={product.id} className="mb-4"> 
                {/* Create a Card component for each product */}
                <Card className="product-card"> 
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>      
                    <Card.Text>{product.description}</Card.Text>    
                    
                    {/* Dropdown for color selection */}
                    <Dropdown>
                      <Dropdown.Toggle 
                        variant={currentColor} // Set the variant based on the selected color
                        id={`dropdown-basic-${product.id}`} // Unique ID for each dropdown
                      >
                        {/* Display either the selected color or the default "Colour option" */}
                        {currentColor === 'success' ? 'Colour option' : currentColor} 
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {/* Dropdown items for color selection */}
                        <Dropdown.Item onClick={() => handleColorSelect(product.id, 'pink')}>Pink</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleColorSelect(product.id, 'red')}>Red</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleColorSelect(product.id, 'yellow')}>Yellow</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="price">{product.price}</div>   
                    <Button variant="primary" onClick={() => props.onBuy(19.99)}>Buy</Button>  
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }