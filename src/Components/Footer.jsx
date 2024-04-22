import React from 'react';

const Footer = () => {

    return (
        <footer className="mt-24 flex justify-center" style={{ borderTop: '2px solid black', width: '38rem' }}>
            <div>
                Copyright &copy; {new Date().getFullYear()} Richard Senyo. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
