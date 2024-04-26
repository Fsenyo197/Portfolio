import React from 'react';

const Footer = () => {

    return (
        <footer className="footer mt-32 flex justify-center items-center">
            <div className="text-gray-600 text-sm">
                <span className="mr-2">&copy; {new Date().getFullYear()}</span>
                <span className="font-semibold">Richard Senyo.</span> All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
