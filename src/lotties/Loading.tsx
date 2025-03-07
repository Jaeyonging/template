import React from 'react'
import loadingAnimation from '../lotties/loading.json';
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%]">
      <Lottie options={defaultOptions} style={{ width: '10%', height: '10%' }} />
      <span className="text-[20px] font-bold">Loading...</span>
    </div>
  )
}

export default Loading;
