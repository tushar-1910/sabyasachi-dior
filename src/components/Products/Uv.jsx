import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import uv1 from './uv1.png';
import uv2 from './uv2.png';
import background from '../background.png';

export default function Uv() {
  return (
    <Box
      bgImage={background}
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
      pt="20vh"
    >
      <Box bg="rgba(255, 255, 255, 0.8)" m="auto" width={1300}>
        <Flex pt={4} alignItems="center" p={30}>
          <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={3000}
            transitionTime={500}
            swipeable
            maxWidth="400px"
          >
            <Box alignSelf="center" maxWidth="400px">
              <Image src={uv1} height={300} ml={60} />
            </Box>
            <Box maxWidth="400px">
              <Image src={uv2} height={300} ml='200px' />
            </Box>
          </Carousel>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Heading textAlign="center">UV Ray Protected Sunglasses</Heading>
            <Text
              mt={4}
              textAlign="center"
              p={10}
              color="black"
              fontSize="25px"
            >
              Will protect you from harmful UV rays while having a free
              adventure exploration.
            </Text>
            <Button mt={4} bg="black" color="white" fontSize="xl">
              Price: 30000/- INR
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
