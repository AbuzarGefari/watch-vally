import React from 'react';
import WatchIcon from '@mui/icons-material/Watch';
import { Link } from 'react-router-dom';
import footerBackgroundImage from '../../../image/footer.jpg'
const footerStyleCoustom = {
    background: `url(${footerBackgroundImage}) center center no-repeat`,
    backgroundSize: 'cover',
    backgroundAttachment : 'fixed'
}

const Banner = () => {
    return (
        <section style={footerStyleCoustom} >


<div className="min-h-screen text-center flex items-center justify-center">
            <div>

            <h1 style={{fontFamily: `'Festive', cursive`}} className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">WelCome to<br/>< WatchIcon/>    Online Watch Shop</h1>
                    <p className="text-2xl mt-10 text-white">What would you like to watch?</p>


            </div>
        </div>
        </section>
    );
};

export default Banner;