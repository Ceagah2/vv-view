import Slider from 'react-slick';
import * as S from './styles'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderData } from '../../../constants/slider-data';



export const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 1000, 
    autoplay: true, 
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };


  return (
    <S.Container>
      <Slider {...settings}>
        {SliderData.map((slide) => (
          <S.SlideContainer key={slide.id}>
            <S.ImageContainer bgImage={slide.image}>
              <S.Title>{slide.title}</S.Title>
            </S.ImageContainer>
          </S.SlideContainer>
        ))}
      </Slider>
    </S.Container>
  );
};