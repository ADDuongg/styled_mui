import React from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import picGallery1 from './images/picGallery1.png';
import picGallery2 from './images/picGallery2.png';
import picGallery3 from './images/picGallery3.png';
import picGallery4 from './images/picGallery4.png';
import picGallery5 from './images/picGallery5.png';
import picGallery6 from './images/picGallery6.png';
import picGallery7 from './images/picGallery7.png';
import picGallery8 from './images/picGallery8.png';
import picGallery9 from './images/picGallery9.png';
import picGallery10 from './images/picGallery10.png';
import bgGallery1 from './images/bgGallery1.png';
import Header from './component/header';
import Footer from './component/footer';
const SectionTitle = styled(Typography)`
  && {
    color: #FF64AE;
    font-weight: bold;
  }
`;

const SubTitle = styled(Typography)`
  && {
    color: #414880;
    font-size: 24px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 2rem
  }
  
`;
const Content = styled(Typography)`
  && {
    color: #6B7280;
    width: 60;
    height: 100%;
    font-size: 1rem;
    text-align: start
  }
  @media (max-width: 888px) {
    margin-top: 1rem;
    width: 100%
  }
`;
const CustomButton = styled(Button)`
    cursor: pointer;
    background-color: #FF64AE;
    width: 250px;
    height: 50px;
    color: white;
    border-radius: 3.5rem;

    @media (max-width: 888px) {
      margin-top: 1rem
    }

      &:hover{
        background-color: white;
        color: #FF64AE;
        border: 1px solid #FF64AE
      }
`;

const BoxOne = styled(Box)`
  margin-top: 13rem;
  width: 100%

`;
const BoxTwo = styled(Box)`
  margin-top: 5rem;
  background-image: url(${picGallery10});
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  position: relative;
`;

const BoxThree = styled(Box)`
  padding-top: 5rem;
  margin-bottom: 3rem;
  background-image: url(${bgGallery1});
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Gallery = () => {
  const img = [picGallery1, picGallery2, picGallery3, picGallery4, picGallery5, picGallery6, picGallery7, picGallery8, picGallery9];
  const dataHome2 = {
    title: "Watch the video tour",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  };

  return (
    <div>
      <Header />
      <BoxOne >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10} md={6} textAlign="start" sx={{
            paddingLeft: '5rem',
            '@media (max-width: 888px)': {
              paddingLeft: '32px'
            }
          }}>
            <SectionTitle>Our Gallery</SectionTitle>
            <SubTitle>Check out the collection pictures from our clinic</SubTitle>
          </Grid>

          <Grid item xs={10} md={6} textAlign="end" sx={{
            paddingLeft: '5rem', '@media (max-width: 888px)': {
              paddingLeft: '32px'
            }
          }}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Content >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
              </Content>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px', padding: '5rem',  }}>
          {img.map((item, index) => (
            <Grid item xs={12} md={4} key={index} sx={{
            '@media (max-width: 888px)': {
                paddingLeft: '32px'
              }
            }}>
              <img src={item} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ padding: '0 5rem' }}>
          <Content >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <span style={{ fontWeight: 'bold', color: '#6B46C1' }}>our team.</span>
          </Content>
        </Box>
      </BoxOne>

      <BoxTwo >
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h2" style={{ color: '#FFFFFF', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>{dataHome2.title}</Typography>
          <Typography variant="body1" style={{ color: '#CBD5E0', marginBottom: '40px', textAlign: 'center', width: '70%', margin: '0 auto' }}>{dataHome2.subTitle}</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1rem' }}>
            <i className="fa-regular fa-circle-play text-9xl text-white shadow-lg"></i>
          </div>
        </div>
      </BoxTwo>

      <BoxThree >
        <Grid container sx={{ padding: '0 5rem' }}>
          <Grid item md={6} xs={12} alignItems="center">
            <SectionTitle  >Get the Quote</SectionTitle>
            <SubTitle  >Want to be handled by our professional team immediately?</SubTitle>
            <Content  >Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</Content>
          </Grid>
          <Grid item md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CustomButton >Make an Appointment</CustomButton>
          </Grid>
        </Grid>
      </BoxThree>
      <Footer />
    </div>
  );
}

export default Gallery;
