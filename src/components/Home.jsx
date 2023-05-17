import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import home from './home.png';
import background from './background.png';
import './Home.css';

export default function Home() {
  return (
    <Box
      bgImage={background}
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
      pt="25vh"
      className='bg'
    >
      <Box bg="rgba(0, 0, 0, 0.8)" ml={20} mr={20}>
        <Flex pt={4} alignItems="center" p={30}>
          <Text mr={150} p={10}  color="white" fontSize="25px">
            TharVision is a sport sunglasses brand. The name combines the rugged
            and adventurous spirit of the Mahindra Thar with the idea of clear,
            sharp vision needed for outdoor sports. It also incorporates the
            concept of "vision," which is essential for any sports person. This
            name could be a great fit for a sport sunglasses brand that aims to
            provide high-quality eyewear designed for adventure and optimal
            vision.
          </Text>
          <Image src={home} width="30vw" height="30vh" mr="50" />
        </Flex>
      </Box>
    </Box>
  );
}
