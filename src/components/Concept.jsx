import React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
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
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text color={'Black.400'} as={'span'}>
                Concept
              </Text>
            </Heading>
            <Text
              fontSize={{ base: 'md', lg: 'lg' }}
              bg="rgba(0, 0, 0, 0.8)"
              p={5}
              color={'white'}
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
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
