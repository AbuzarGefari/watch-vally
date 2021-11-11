import React from 'react';
import Contact from '../../Contact/Contact';
import PostReview from '../../PostReview/PostReview';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products></Products>
          
            <PostReview></PostReview>

            <Contact></Contact>
        </div>
    );
};

export default Home;