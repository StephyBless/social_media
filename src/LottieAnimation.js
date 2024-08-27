// LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animation.json';

function LottieAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
}

export default LottieAnimation;
