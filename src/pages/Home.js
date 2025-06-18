import React from 'react';
import { Link } from 'react-router-dom';

function Home (){
    return (
    <div style={{backgroundImage: 'url(/images/Gemini_Generated_Image_chyiz1chyiz1chyi.png)' , backgroundSize:'cover', backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: '80vh', width: '80vw' , padding: '40px', color: '#fff', textAlign: 'center', borderRadius: '8px'}}>
        <h1 style={{color: 'black'}}>Welcome to Clothing store!</h1>
        <p style={{color: 'black', fontSize: '1.3rem'}}>
            This is a simple clothing store application where you can browse and purchase items.
        </p>
        <p style={{color: 'black', fontSize: '1.3rem'}}>
            Start by exploring our collection of clothing items, add them to your cart, and proceed to checkout. 
        </p>
        <p  style={{color: 'black', fontSize: '1.4rem'}}>
            Click the button below to start shopping!
        </p>
        <Link to="/ecommerce">
            <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'rgb(230, 117, 173)', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Start Shopping
            </button>
        </Link>
        
    </div>
    );
}

export default Home;