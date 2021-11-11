import React from 'react';
import footerBackgroundImage from '../../image/footer.jpg';
import FooterLogo from '../../image/logo.png';
import PaymentCardImage from '../../image/payment.png';


const footerStyleCoustom = {
    background: `url(${footerBackgroundImage}) center center no-repeat`,
    backgroundSize: 'cover',
    backgroundAttachment : 'fixed'
}
const Footer = () => {
    return (
        <div>
            {/* ==============Footer Top================ */}
            <section style={footerStyleCoustom} >
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                    <div className="md:border-r py-5 md:border-red-500">
                        <img className=" w-56" src={FooterLogo} alt="" />
                        <ul className="flex items-center flex-wrap h-full">
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-gray-900 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-linkedin-in"></i></span></li>
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-gray-900 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-facebook-f"></i></span></li>
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-gray-900 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fab fa-twitter"></i></span></li>
                            <li><span className="text-lg w-10 h-10 mr-3 flex items-center justify-center bg-gray-900 text-red-600 hover:bg-gray-600 hover:text-white transition-all duration-200 ease-linear cursor-pointer mb-3"><i class="fas fa-envelope"></i></span></li>
                    
                        </ul>
                    </div>
                    <div className="md:border-r px-6 md:border-red-500">
                        <ul className="py-4">
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Sitemap</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Latest News</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Special Products</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Terms of Products</li>
                        </ul>
                    </div>
                    <div className="md:border-r px-6 md:border-red-500">
                        <ul className="py-4">
                           <strong className="text-white text-lg">Contact us</strong>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Monday - 10 am 07 pm</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Tuesday - 10 am 07 pm</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Wednesday - 10 am 07 pm</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Thursday - 10 am 07 pm</li>
                            <li className="text-white font-medium text-md hover:text-red-900 transition-all duration-150 ease-linear cursor-pointer">Friday - 10 am 07 pm</li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className="md:ml-7 my-5 w-full" src={PaymentCardImage} alt="" />
                    </div>
                </div>
            </section>
            {/* ============Footer Bottom============ */}
           
<div className="bg-dark">
          <p className="text-center text-white m-0 py-3">
            Copyright &copy; All Reserved |
            <a
              className="ms-1 text-primary text-decoration-none"
              href="https://www.facebook.com/abuzargefari.2"
            >
              Watch Vally
            </a>
          </p>
        </div>
        </div>
    );
};

export default Footer;


















    