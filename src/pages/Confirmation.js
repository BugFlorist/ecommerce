import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function StarRating() {
  const [selectedRating, setSelectedRating] = useState(0); // state to track clicked rating

  return (
    <div style={{ display: 'flex', gap: '0.5rem', cursor: 'pointer' }}>
      {[...Array(5)].map((_, index) => { // create an array of 5 elements for the stars
        // map through the array and render a star for each index
        const starValue = index + 1;
        return (
          <FaStar
            key={starValue}
            size={24}
            onClick={() => setSelectedRating(starValue)} // update the selected rating when a star is clicked
            color={starValue <= selectedRating ? '#f5c518' : '#e4e5e9'} // set color based on whether the star is selected
          />
        );
      })}
    </div>
  );
}


function Confirmation() {

  const handleSubmit = (e) => {
    alert('Thank you for your feedback!');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>Thank you for your purchase! Your order has been successfully placed.</h2>
      <h4>We will send you a confirmation email shortly.</h4>

      <p>Please let us know how we did by filling out the following survey:</p>
      <div>

      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>How was your overall experience?</label>
          <StarRating />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>How easy was it to complete your purchase?</label>
          <StarRating />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>How satisfied are you with the products?</label>
          <StarRating />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Additional Comments:</label><br />
          <textarea
            rows="4"
            cols="50"
            placeholder="Let us know if you have any feedback!"
            
          />
        </div>

        <Link to="/" className="btn btn-primary" onClick={handleSubmit}>
          Submit Feedback
        </Link>
      </form>
    </div>
  );
}

export default Confirmation;
