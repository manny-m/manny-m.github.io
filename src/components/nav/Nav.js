import React , {useState}from 'react';
import './Nav.css';
import { useSpring, animated as a} from 'react-spring';
import PropTypes from 'prop-types';

const navItemLeftMargin = 50;
const navItemStartColor = 'rgba(0,0,0,0)'; 
const navItemDefaultColor = 'grey'; 

const NavItem = (props) =>{
  const {active, color, label, children} = props;
  const [hovering, setHovering] = useState(false);

  // When hover slide item by 20
  const aProps = useSpring({ 
    paddingLeft: hovering || active ? navItemLeftMargin + 20 : navItemLeftMargin,
    color: hovering ? color || navItemDefaultColor : navItemStartColor,
    '-webkit-text-stroke': `1.5px ${hovering ? color || navItemDefaultColor : 'white'}`
  });

  return(
    <div 
      className='NavItem'
      onMouseEnter={()=>{setHovering(true)}} 
      onMouseLeave={()=>{setHovering(false)}}
    >
      <a.span  style={aProps}> 
        {label || children}
      </a.span>
    </div>
  )    
}

NavItem.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

const Nav = (props) => {
  const { items } = props;
  return (
    <div className='Nav'>
      
      {items.map(item =>
        <NavItem
          key={item.label}
          color={item.color} 
          active={item.active}
          label={item.label}
        />
      )}
    </div>
  );
}

Nav.propTypes = { 
  items: PropTypes.arrayOf(PropTypes.shape(NavItem.propTypes)).isRequired
};

export default Nav;
