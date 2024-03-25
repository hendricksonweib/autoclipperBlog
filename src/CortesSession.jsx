import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cortesimg from "../src/assets/Cortes.svg";
import TitleCortesSession from './TitleCortesSession';
import { useSpring, animated } from 'react-spring';
import '../src/css/CortesSession.css'

function CortesSession() {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 }, 
  });
  return (
    <animated.div style={animationProps}>
      <div className="cortes-session">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 col-xs-12 text-end">
              <img className="img-fluid" src={Cortesimg} alt="Cortesimg" />
            </div>
            <div className="col-md-6 col-xs-12">
              <TitleCortesSession />
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default CortesSession;
