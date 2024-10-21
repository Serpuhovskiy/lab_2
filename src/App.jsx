import './App.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';

import firstSlideBg from './assets/first_slide_bg.png';
import slideBg from './assets/slide_bg.png';
import endImg from './assets/end.jpg';

// Import Swiper styles
import 'swiper/css';
import { linksList, slidesInfo } from './slides';
import { Slide } from './Slide';

function App() {
  return (
    <AppContainer>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        speed={1500}
      >
        <StyledFirstSlide>
          <StyledFirstSlideWrapper>
            <StyledPresetationTitle>
              Компьютерные видеоигры. Появление, эволюция, отрицательное влияние
            </StyledPresetationTitle>
            <StyledStudentInfo>
              Подготовил студент группы ИУ3-31М <br />
              Антонов Сергей
            </StyledStudentInfo>
          </StyledFirstSlideWrapper>
        </StyledFirstSlide>
        {slidesInfo.map((slide, idx) => {
          const { title, img, text } = slide;
          return (
            <StyledSlide>
              <Slide title={title} img={img} text={text} idx={idx} />
            </StyledSlide>
          );
        })}
        <StyledSlide>
          <StyledTitle>Список использованных источников</StyledTitle>
          <StyledLinksList>
            {linksList.map((link) => (
              <StyledLinkItem>
                <StyledLink href={link} target="_blank" rel="noreferrer">
                  {link}
                </StyledLink>
              </StyledLinkItem>
            ))}
          </StyledLinksList>
        </StyledSlide>
        <StyledSlide>
          <StyledTitle style={{ marginLeft: '20px', textAlign: 'center' }}>
            Спасибо за внимание!
          </StyledTitle>
          <StyledEndImg src={endImg} />
        </StyledSlide>
      </Swiper>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  background-image: url(${slideBg});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`;

const StyledFirstSlide = styled(SwiperSlide)`
  background-image: url(${firstSlideBg});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`;

const StyledFirstSlideWrapper = styled.div``;
const StyledPresetationTitle = styled.div`
  text-align: left;
  margin: 200px 20px 0 545px;
  font-size: 45px;
`;

const StyledTitle = styled.div`
  text-align: left;
  margin: 140px 20px 0 280px;
  font-size: 45px;
`;

const StyledStudentInfo = styled.div`
  text-align: right;
  margin: 300px 82px 0 545px;
  font-size: 20px;
`;

const StyledLinksList = styled.ul`
  margin: 120px;
`;
const StyledLinkItem = styled.li`
  text-align: left;
  word-break: break-all;
  margin-bottom: 10px;
`;
const StyledLink = styled.a`
  color: #7890cd;
  font-size: 28px;
`;

const StyledEndImg = styled.img`
  margin: 100px auto;
  width: 500px !important;
  height: auto !important;
`;

export default App;
