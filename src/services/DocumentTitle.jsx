import { useEffect } from 'react';

const DocumentTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - HOTELUX`;
    }, [title])
};

export default DocumentTitle;