import React from 'react';
import Video from '../../images/video.mp4';
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP } from './Home';

const Home = () => {
    return (
        <HomeContainer className = "home">
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
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