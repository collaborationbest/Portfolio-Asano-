import React from 'react';
import { useEffect, useState } from 'react';

import './ScrollToTop.css';

const ScrollToTop = () => {
    const [backToTopButton, setBackTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setBackTopButton(true);
            } else {
                setBackTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className='App'>
        {backToTopButton && (
            <button className='cm-up' onClick={scrollUp}>
                <span className="cm-icon">
                    <i className="fas fa-chevron-up"></i>
                </span>
            </button>
        )}
    </div>
};

export default React.memo(ScrollToTop);