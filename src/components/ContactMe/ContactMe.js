// import * as React from 'react';
import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fff;
background: #101522;

@media screen and (max-width: 760px) {
    padding: 100px 0;
}
`
export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`
export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};

@media screen and (max-width: 760px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1' 'col2'`)};
}
`
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`
export const TopLine = styled.p`
color: #4b59f7;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`
export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 24px;
line-height: 1.1;
font-weight: 600;
color: #fff;

@media screen and (max-width: 480px) {
    font-size: 24px;
}
`
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`
export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`