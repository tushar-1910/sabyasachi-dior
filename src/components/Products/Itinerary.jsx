import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Flex,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import background from '../background.png';

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

export default function Itinerary() {
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      text: '',
      title: 'Horse ride of the garden from valet to venue',
      image:
        'https://i.pinimg.com/564x/3e/a5/9d/3ea59d5b71a8670cd2481bcc169866d4.jpg',
    },
    {
      text: '',
      title: 'Speech by Sabyasachi Mukherjee',
      image:
        'https://i.pinimg.com/564x/3e/a5/9d/3ea59d5b71a8670cd2481bcc169866d4.jpg',
    },
    {
      text: '',
      title: 'Christian Dior appearing as an AI',
      image:
        'https://i.pinimg.com/564x/b9/63/b0/b963b025de2e1a92ce3a87c2e256abf9.jpg',
    },
    {
      text: '',
      title: 'Fashion ramp walk for showcasing the collection',
      image:
        'https://i.pinimg.com/564x/b9/63/b0/b963b025de2e1a92ce3a87c2e256abf9.jpg',
    },
    {
      text: '',
      title: 'Installation',
      image:
        'https://i.pinimg.com/564x/b9/63/b0/b963b025de2e1a92ce3a87c2e256abf9.jpg',
    },
    {
      text: '',
      title: 'Guests embroidering on a sustainable cotton fabric',
      image:
        'https://i.pinimg.com/564x/b9/63/b0/b963b025de2e1a92ce3a87c2e256abf9.jpg',
    },
    {
      text: '',
      title: 'Inside tour of Victoria Memorial',
      image:
        'https://i.pinimg.com/564x/b9/63/b0/b963b025de2e1a92ce3a87c2e256abf9.jpg',
    },
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
    >
      <Box
        position={'relative'}
        height={'250px'}
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
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={slider => setSlider(slider)}>
          {cards.map((card, index) => (
            <Heading color="White" p={10} fontSize={'20px'} bg="rgb(0,0,0,0.8)">
              {card.title}
            </Heading>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
