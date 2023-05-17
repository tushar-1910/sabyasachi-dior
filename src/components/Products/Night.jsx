import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import night1 from './night1.png';
import night2 from './night2.png';
import background from '../background.png';

export default function Night() {
  return (
    <Box
      bgImage={background}
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
      pt="20vh"
    >
      <Box bg="rgba(0, 0, 0, 0.8)" m="auto" width={1300}>
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
              <Image src={night1} height={300} ml={60} />
            </Box>
            <Box maxWidth="400px">
              <Image src={night2} height={300} ml="200px" />
            </Box>
          </Carousel>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Heading color='white' textAlign="center">Night Vision Sunglasses</Heading>
            <Text
              mt={4}
              textAlign="center"
              p={10}
              color="white"
              fontSize="25px"
            >
              Will protect and make your night treasure hunt easy and visible to
              see.
            </Text>
            <Button mt={4} bg="white" color="black" fontSize="xl">
              Price: 30000/- INR
            </Button>
            <Text
              textAlign="center"
              mt={2}
              color="white"
              fontSize="10px"
            >
              Prices may vary*
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
