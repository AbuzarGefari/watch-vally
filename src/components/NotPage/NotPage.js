import React from 'react';
import { Link } from 'react-router-dom';

const NotPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div>
                <div className="flex items-center">
                    <div>
                        <h1 className="text-6xl md:text-8xl">404</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">you're lost</h1>
                        <p className="text-lg font-medium">The page was not found.</p>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <Link className="border-2 border-indigo-800 py-2 px-6  smooth-animation" to="/home">Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotPage;