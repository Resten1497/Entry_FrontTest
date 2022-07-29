import React from 'react'
import Lottie from 'react-lottie-player'

import lottieJson from './lottie.json'

export default function Animation() {
  return (
    <Lottie
      loop={false}
      animationData={lottieJson}
      play
      style={{ width: `150px` }}
    />
  )
}
