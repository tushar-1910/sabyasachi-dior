import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import concept from './concept.png';
import background from './background.png';

export default function Concept() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={`url(${background})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justifyContent={'center'}
        alignItems={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Flex
          bg="rgba(0, 0, 0, 0.8)"
          maxW="80%"
          maxH="80%"
          align={'flex-start'}
          spacing={6}
        >
          <Image src={concept} boxSize={8} h="100%" w="30vw" mr={2} />

          <Box>
            <Heading
              color="white"
              textAlign={'center'}
              mt={5}
              fontWeight={700}
              fontSize={useBreakpointValue({ base: '10px', md: '3xl' })}
            >
              CONCEPT
            </Heading>
            <Text
              color={'white'}
              p={useBreakpointValue({ base: 5, md: 10 })}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '10px', md: '2xl' })}
            >
              It sounds like a fascinating partnership between two fashion
              houses, Sabyasachi and Dior, with a focus on contemporary Indian
              suits for men. Dior is famed for its high-end fashion and luxury
              goods, while Sabyasachi is noted for its traditional Indian
              attire. The combination of the traditional components of Indian
              clothes with the contemporary designs and cuts of Western suits
              could arise from the collaboration of these two firms. Combining
              the refinement of Western tailoring with the grace of Indian
              materials and motifs may be a fascinating mix.
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}
