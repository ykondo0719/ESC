import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = '';

        switch (path) {
            case '/home':
                title = 'ESC | Home';
                break;
            case '/products':
                title = 'ESC | Products';
                break;
            case '/product':
                title = 'ESC | Product';
                break;
            case '/about-us/company':
                title = 'ESC | Company';
                break;
            case '/about-us/community-dev':
                title = 'ESC | Community & Dev';
                break;
            case '/contact':
                title = 'ESC | Contact Us';
                break;
            default:
                title = 'ESC | Home'; // Fallback title
        }

        document.title = title;
    }, [location]);
};

export default useDocumentTitle;
