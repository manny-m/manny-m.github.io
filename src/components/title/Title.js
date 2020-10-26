import React from 'react';
import './Title.scss';
import PropTypes from 'prop-types';
import { useSpring, animated as a } from 'react-spring'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

const interpolatorGen = (x, y, factor) => `translate(${x / factor}px,${y / factor}px)`;

const images = [
  {
    imgAddress: `url(${window.location.origin}/nopattern1.png)`,
    interpolator: (x, y) => interpolatorGen(x, y, 10)
  },
  {
    imgAddress: `url(${window.location.origin}/nopattern2.png)`,
    interpolator: (x, y) => interpolatorGen(x, y, 30)
  },
  {
    imgAddress: `url(${window.location.origin}/nopattern3.png)`,
    interpolator: (x, y) => interpolatorGen(x, y, 40)
  },
];


function Title(props) {
  const [spring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

  const {greeting, name } = props;
  return (
    <>
      <div className='titleCard bgContainer'>
        {images.map((imgData, index) =>
          <a.div key={`title-background-${index}`} className='bg titleCard' 
            style ={{
              zIndex: `${-1 * index -2}`,
              backgroundImage: imgData.imgAddress,
              transform: spring.xy.interpolate(imgData.interpolator),
            }}
          >
          </a.div>
        )}
        
      </div>
      <div className='titleCard content' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <span className='subtitle greeting'>
          {greeting}
        </span>
        <span className='name'>
          {name} 
        </span>
        <div className='border'>
          {/* <span className='helper'></span> */}
          <img alt='Portrait of Manuel' src={window.location.origin + '/manny450.png'} />
          <div> 
            <a href='https://www.linkedin.com/in/mmoquete/'  target='_blank' rel='noopener noreferrer'>
              <FaLinkedin/>
            </a>
            <a  href='https://github.com/manny-m'  target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

Title.propTypes = { 
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired

}
export default Title;
