import React from 'react';
import Video from '../../images/homeScreen.mp4';
import Picture from '../../images/homeScreenPic.jpg';
import { HomeContainer, ImageBg, HomeBg, VideoBg, HomeContent, HomeH1, HomeP } from './Home';
import $ from 'jquery';

const Home = () => {
    $(function() {
        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
          $('#video-img').replaceWith('');
        }
      });
    
    return (
        <HomeContainer className = "home">
            <HomeBg>
                <VideoBg
                    id="video-img"
                    autoPlay={true}
                    poster={Picture}
                    loop
                    playsInline={true}
                    muted={true}
                    src={Video}
                    type='video/mp4'
                />
                <ImageBg src={Picture} />
            </HomeBg>
            <HomeContent>
                <HomeH1>My name is Christopher Schiavino</HomeH1>
                <HomeP>
                    Welcome to my website!
                </HomeP>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home;