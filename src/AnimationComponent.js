// AnimationComponent.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/animation.json';

function AnimationComponent() {
  return <Lottie animationData={animationData} loop={true} />;
}

export default AnimationComponent;
