import {
  Flex,
  Text,
  Stack,
  Button,
  VStack,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import background from './background.JPEG';
import background1 from './background.png';
import './Home.css';

export default function Home() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={`url(${background})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    ></Flex>
  );
}
