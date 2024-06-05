import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './index.css';
const SliderContainer = styled.div`
  position: relative;
  display: none;
  &.active {
    display: block;
  }
`;
export const Slide = styled.div`
  background-image: url(${(props) => (props.image ? props.image : '')});
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px 9%;
  padding-bottom: 70px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    z-index: 777;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
  }
  img {
    width: 100%;
    animation: slideImage 0.4s linear;
  }
`;

export const Content = styled.div`
  @keyframes slideContent {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
  }
  text-align: center;
  animation: slideContent 0.7s ease-out;
  flex: 1 1 350px;
  z-index: 999;
  h3 {
    font-size: 35px;
    color: #fff;
  }
  p {
    font-size: 16px;
    color: #ddd;
    padding: 10px 0;
  }
  .btn {
    margin-top: 10px;
    display: inline-block;
    background-color: #3691bc;
    color: #fff;
    font-size: 17px;
    padding: 9px 40px;
    &:hover {
      background-color: #2c7a9f;
    }
  }
`;
export const ImageSlider = ({ slides, autoplay = false, timeout = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  const previousSlide = () => {
    //reaches last slide
    if (current === slides.length - 1) {
      setCurrent(0);
    }
    //clicks previous btn on being slide 1(index 0)
    if (current <= 0) {
      setCurrent(slides.length - 1);
    } else {
      //somewhere between
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, timeout);
    return () => clearTimeout(timer);
  }, [current]);
  // const AutoPlay=()=>{
  //     setInterval(nextSlide, timeout)
  // }
  // if (autoplay){
  //     AutoPlay()
  // }

  return (
    <div className='container'>
      {slides.map((slide, index) => (
        <SliderContainer
          className={current === index ? 'active' : ''}
          key={index}
        >
          <Slide image={slide.img}>
            <Content>
              <h3>{slide.headline}</h3>
              <p>{slide.description}</p>
              <a href='' className='btn'>
                Learn more
              </a>
            </Content>
          </Slide>
        </SliderContainer>
      ))}

      <div id='prev' onClick={() => previousSlide()}>
        &lt;
      </div>
      <div id='next' onClick={() => nextSlide()}>
        &gt;
      </div>
    </div>
  );
};
