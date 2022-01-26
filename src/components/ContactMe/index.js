import * as React from 'react';
import Media from '../../images/Media.svg';
import TypeWriterEffect from 'react-typewriter-effect';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@mui/material';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Img,
    ImgWrap,
} from './ContactMe';

const TextTypography = withStyles({
    root: {
      color: "#ffffff"
    }
  })(Typography);

const LinkedIn = withStyles({
    root: {
      color: "#4b59f7"
    }
  })(LinkedInIcon);

const GitHub = withStyles({
root: {
    color: "#4b59f7"
}
})(GitHubIcon);

const Email = withStyles({
    root: {
      color: "#4b59f7"
    }
  })(EmailIcon);

const Arrow = withStyles({
    root: {
        color: "#4b59f7"
    }
})(ArrowForwardIcon);

const Clipboard = withStyles({
    root: {
      color: "#4b59f7"
    }
  })(ContentCopyIcon);

const ContactMe = () => {   
    const copy = async () => {
        await navigator.clipboard.writeText('cschiavino23@gmail.com');
        alert('Copied!');
    }
    return (
        <>
            <InfoContainer id = "contact">
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Looking to get in touch?</TopLine>
                                <Heading>
                                <TypeWriterEffect
                                    textStyle={{ fontFamily: 'sans-serif' }}
                                    startDelay={100}
                                    cursorColor="white"
                                    text="Contact Me..."
                                    typeSpeed={300}
                                />
                                </Heading>
                                <Grid container spacing={2} alignItems = "center" height = "100">
                                    <Grid item style={{ textAlign: "center"}}>
                                        <Stack spacing={2}>
                                            <LinkedIn style={{ fontSize: 60 }}/>
                                            <GitHub style={{ fontSize: 60 }}/>
                                            <Email style={{ fontSize: 60 }}/>
                                        </Stack>
                                    </Grid>
                                    <Grid item style={{ textAlign: "center"}}>
                                        <Stack spacing={5.5}>
                                            <TextTypography variant = "h5" >LinkedIn</TextTypography>
                                            <TextTypography variant = "h5" >GitHub</TextTypography>
                                            <TextTypography variant = "h5" >Email: cschiavino23@gmail.com</TextTypography>
                                        </Stack>
                                    </Grid>
                                    <Grid item style={{ textAlign: "center"}}>
                                        <Stack spacing={2}>
                                            <IconButton target="_blank" href="https://www.linkedin.com/in/cschiavino">
                                                <Arrow style={{ fontSize: 42 }}/>
                                            </IconButton>
                                            <IconButton>
                                                <Arrow style={{ fontSize: 42 }}/>
                                            </IconButton>
                                            <IconButton>
                                                <Clipboard onClick={copy} style={{ fontSize: 42 }}/>
                                            </IconButton>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src = {Media}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ContactMe;