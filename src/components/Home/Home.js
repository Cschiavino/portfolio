import styled from 'styled-components'

export const HomeContainer = styled.div`
background: #101522;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1
`;

export const HomeBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
overflow: hidden;
`;

export const ImageBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
overflow: hidden;
`;

export const HomeContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`
export const HomeH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 760px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`
export const HomeP = styled.p`
margin-toop: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 760px) {
    font-size: 24px;
}

@media screen and (max-width; 480px) {
    font-size: 18px;
}
`
