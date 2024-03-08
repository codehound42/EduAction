import { useLayoutEffect, useState } from 'react';

const HeaderSticky = ( offset = 0 ) => {
    const [sticky, setSticky] = useState( false );
  
    const handleScroll = () => {
        setSticky( window.scrollY > offset );
    };
    
    useLayoutEffect(() => {
        window.addEventListener( 'scroll', handleScroll );
        return ( () => {
            window.removeEventListener( 'scroll', handleScroll );
        } );
    } );

    return sticky;
}

export default HeaderSticky;