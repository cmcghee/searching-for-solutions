import React from 'react'
import ReactPlayer from "react-player"
import './responsivePlayer.css'

const ResponsivePlayer = () => {
      return (
        <div className='player-wrapper'>
            <div className="react-player">
                <div className="flex-box">
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=Gh5cjk2E86w&ab_channel=Phish'
                        width="80%"
                        height="80%"
                    />
                </div>
            </div>
        </div>
      )
};

export default ResponsivePlayer;