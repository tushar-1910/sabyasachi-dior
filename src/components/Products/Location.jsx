import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  Heading,
} from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import location1 from './location1.png';
import location2 from './location2.png';
import location3 from './location3.png';
import background from '../background.png';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Location() {
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://i.pinimg.com/originals/b9/63/7d/b9637da93542aad8add2ddb413205f11.jpg',
    'https://i.pinimg.com/564x/a7/c3/9d/a7c39de0686bc65f1ab69b4861e587e5.jpg',
    location3,
  ];
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={`url(${background})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <Heading
        color="black"
        textAlign={'center'}
        mt={5}
        fontWeight={700}
        fontSize={useBreakpointValue({ base: '20px', md: '4xl' })}
      >
        VICTORIA MEMORIAL, Kolkata
      </Heading>
      <Box
        position={'relative'}
        height={'600px'}
        width={'80%'}
        overflow={'hidden'}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="white"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="white"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={slider => setSlider(slider)}>
          {cards.map((url, index) => (
            <Flex
              key={index}
              height={'500px'}
              position="relative"
              backgroundPosition="center center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${url})`}
            />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
