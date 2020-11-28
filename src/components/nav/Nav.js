import React, {useState, useEffect, useRef} from 'react';
import './Nav.scss';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Nav = (props) => {
  const { items } = props;
  const { height, width } = useWindowDimensions();
  console.log(height);
  const [scrolled,setScrolled]= useState(false);
  const navRef = useRef();

  const handleScroll=() => {
    const sticky = navRef.current.offsetTop;
    const offset = window.pageYOffset;
    if(offset >= sticky ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  });

  let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }


  return (
    <div ref={navRef} className={navbarClasses.join(' ')}>
      
      nav
    </div>
  );
}

export default Nav;
