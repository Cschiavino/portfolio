import * as React from 'react';
import Working from '../../images/Working.svg';
import TypeWriterEffect from 'react-typewriter-effect';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle,
    Img,
    ImgWrap,
} from './AboutMe';

const AboutMe = () => {
    return (
        <>
            <InfoContainer id = "about">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Who am I?</TopLine>
                                <Heading>
                                <TypeWriterEffect
                                    textStyle={{ fontFamily: 'sans-serif' }}
                                    startDelay={100}
                                    cursorColor="black"
                                    text="About Me..."
                                    typeSpeed={300}
                                />
                                </Heading>
                                <Subtitle>
                                    My name is Christopher Schiavino and I am a computer engineering 
                                    undergraduate at the University of Central Florida.
                                    I am an eager student passionate about working in software engineering, 
                                    web development, and embedded systems. In my free time, I love to
                                    workout, rock climb, and build PCs.
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src = {Working}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default AboutMe;