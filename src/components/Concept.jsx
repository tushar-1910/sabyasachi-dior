import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import background from './background.png';
export default function Concept() {
  return (
    // <Box bgImage={background} bgSize="cover" bgRepeat="no-repeat" minH="100vh" pt={100} >
    //   <Box maxW="800px" bg="black" mx="auto" py={8} px={4}>
    //     <Heading as="h1" size="xl" color='white' textAlign="center" mb={8}>
    //       THAR Vision
    //     </Heading>
    //     <Text fontSize="xl" lineHeight="tall" color='white' p='10px'>
    //       Thar Vision is a proposed brand extension of Mahindra Thar that aims
    //       to offer a unique range of sport sunglasses to adventure enthusiasts,
    //       athletes, and outdoor enthusiasts. The sunglasses will be designed to
    //       provide superior optical performance and enhanced durability, making
    //       them perfect for all outdoor activities. Thar Vision is an exciting
    //       brand extension of Mahindra Thar that has the potential to become a
    //       leading brand in the sport sunglass market. With its focus on quality,
    //       durability, and performance, Thar Vision will appeal to adventure
    //       enthusiasts and outdoor enthusiasts looking for high-quality
    //       sunglasses that can withstand the rigors of their chosen activity.
    //     </Text>
    //   </Box>
    // </Box>
    <Box
      bgImage={background}
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
      pt="25vh"
      className="bg"
    >
      <Box bg="rgba(255, 255, 255, 0.8)" ml={20} mr={20}>
        <Flex pt={4} alignItems="center" flexDirection='column' p={30}>
          <Heading as="h1" size="xl" color="black" textAlign="center">
            THAR Vision
          </Heading>
          <Text p={10} color="black" fontSize="25px">
            Thar Vision is a proposed brand extension of Mahindra Thar that aims
            to offer a unique range of sport sunglasses to adventure
            enthusiasts, athletes, and outdoor enthusiasts. The sunglasses will
            be designed to provide superior optical performance and enhanced
            durability, making them perfect for all outdoor activities. Thar
            Vision is an exciting brand extension of Mahindra Thar that has the
            potential to become a leading brand in the sport sunglass market.
            With its focus on quality, durability, and performance, Thar Vision
            will appeal to adventure enthusiasts and outdoor enthusiasts looking
            for high-quality sunglasses that can withstand the rigors of their
            chosen activity.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
