import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const items = [ // Sample items for the ecommerce page. Each item has an id, name, category, price, and image URL.
  {
    id: 1,
    name: 'T-Shirt',
    category: 'Tops',
    price: 19.99,
    image: 'https://cdn-icons-png.flaticon.com/512/5258/5258010.png',
  },
  {
    id: 2,
    name: 'Jeans',
    category: 'Bottoms',
    price: 39.99,
    image: 'https://cdn-icons-png.flaticon.com/512/5258/5258257.png',
  },
  {
    id: 3,
    name: 'Hoodie',
    category: 'Outerwear',
    price: 49.99,
    image: 'https://cdn-icons-png.flaticon.com/256/5258/5258076.png',
  },
  {
    id: 4,
    name: 'Sneakers',
    category: 'Footwear',
    price: 69.99,
    image: 'https://cdn-icons-png.flaticon.com/512/1785/1785348.png',
  },
  {
    id: 5,
    name: 'Cap',
    category: 'Accessories',
    price: 14.99,
    image: 'https://cdn-icons-png.flaticon.com/512/1974/1974158.png',
  },
  {
    id: 6,
    name: 'Blouse',
    category: 'Tops',
    price: 29.99,
    image: 'https://cdn-icons-png.flaticon.com/512/105/105951.png',
  },
  {
    id: 7,
    name: 'Shorts',
    category: 'Bottoms',
    price: 24.99,
    image: 'https://cdn-icons-png.flaticon.com/512/5029/5029595.png',
  },
  {
    id: 8,
    name: 'Scarf',
    category: 'Accessories',
    price: 12.99,
    image: 'https://cdn-icons-png.flaticon.com/512/2290/2290501.png',
  },
  {
    id: 9,
    name: 'Boots',
    category: 'Footwear',
    price: 89.99,
    image: 'https://cdn-icons-png.flaticon.com/512/6858/6858763.png',
  },
  {
    id: 10,
    name: 'Jacket',
    category: 'Outerwear',
    price: 79.99,
    image: 'https://cdn-icons-png.flaticon.com/512/9026/9026219.png',
  },
  {
    id: 11,
    name: 'Tank Top',
    category: 'Tops',
    price: 17.99,
    image: 'https://cdn-icons-png.flaticon.com/512/4053/4053771.png',
  },
  {
    id: 12,
    name: 'Skirt',
    category: 'Bottoms',
    price: 34.99,
    image: 'https://cdn-icons-png.flaticon.com/512/2290/2290546.png',
  },
  {
    id: 13,
    name: 'Belt',
    category: 'Accessories',
    price: 15.99,
    image: 'https://cdn-icons-png.flaticon.com/512/1291/1291389.png',
  },
  {
    id: 14,
    name: 'Sandals',
    category: 'Footwear',
    price: 29.99,
    image: 'https://cdn-icons-png.flaticon.com/512/4864/4864239.png',
  },
  {
    id: 15,
    name: 'Coat',
    category: 'Outerwear',
    price: 109.99,
    image: 'https://cdn-icons-png.flaticon.com/512/2719/2719743.png',
  },
  {
    id: 16,
    name: 'Cardigan',
    category: 'Tops',
    price: 44.99,
    image: 'https://cdn-icons-png.flaticon.com/512/1983/1983560.png',
  },
  {
    id: 17,
    name: 'Leggings',
    category: 'Bottoms',
    price: 22.99,
    image: 'https://cdn-icons-png.flaticon.com/512/5258/5258347.png',
  },
  {
    id: 18,
    name: 'Watch',
    category: 'Accessories',
    price: 59.99,
    image: 'https://cdn-icons-png.flaticon.com/512/3094/3094784.png',
  },
  {
    id: 19,
    name: 'Loafers',
    category: 'Footwear',
    price: 54.99,
    image: 'https://cdn-icons-png.flaticon.com/512/2589/2589866.png',
  },
  {
    id: 20,
    name: 'Raincoat',
    category: 'Outerwear',
    price: 64.99,
    image: 'https://cdn-icons-png.flaticon.com/512/3504/3504754.png',
  },
  {
    id: 21,
    name: 'Polo Shirt',
    category: 'Tops',
    price: 26.99,
    image: 'https://cdn-icons-png.flaticon.com/512/7451/7451764.png',
  },
  {
    id: 22,
    name: 'Cargo Pants',
    category: 'Bottoms',
    price: 42.99,
    image: 'https://cdn-icons-png.flaticon.com/512/6812/6812984.png',
  },
];



function Ecommerce() {
  const [cart, setCart] = useState([]); // State to manage the cart items
  const [categoryFilter, setCategoryFilter] = useState(''); // State to manage the selected category filter
  const [searchTerm, setSearchTerm] = useState(''); // State to manage the search term

  const filteredItems = items.filter( // Filter items based on the selected category and search term
    (item) => // If no category is selected, show all items
      (!categoryFilter || item.category === categoryFilter) && // If the search term is empty, show all items
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter items based on the search term
  );

  const addToCart = (item) => setCart([...cart, item]); // Function to add an item to the cart

  return (
    <Container className="py-4">
        <Row className="mb-4">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term state on input change
            />
          </Col>
          <Col md={6}>
            <Form.Select
            value={categoryFilter} // Set the value of the select to the current category filter
            onChange={(e) => setCategoryFilter(e.target.value)} // Update category filter state on selection change
          >
            <option value="">All Categories</option>
            {Array.from(new Set(items.map(item => item.category))).map((category) => ( // Create a unique list of categories from the items
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>

          </Col>
        </Row>

        <Row>
        {filteredItems.map((item) => ( // Map through the filtered items and display them in cards
          <Col md={3} className="mb-4" key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} /> {/* Display item image */}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title> {/* Display item name */}
                <Card.Subtitle className="mb-2 text-muted">
                  {item.category} {/* Display item category */}
                </Card.Subtitle>
                <Card.Text>${item.price.toFixed(2)}</Card.Text> {/* Display item price */}
                <Button onClick={() => addToCart(item)}>Add to Cart</Button> {/* Button to add item to cart */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>


      {/* Cart Display */}
      
      <div className="mt-5">
        <h5>Cart ({cart.length} items)</h5> {/* Display the number of items in the cart */}
        <ListGroup>
          {cart.map((item, idx) => ( // Map through the cart items and display them in a list
            <ListGroup.Item key={idx}>
              {item.name} – ${item.price.toFixed(2)} {/* Display item name and price */}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="mt-3">
          <Link to='/checkout' className="btn btn-primary">
            Proceed to Checkout
          </Link>
        </div>
      </div>
      


      
    </Container>
  );
}

export default Ecommerce;