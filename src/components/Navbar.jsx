import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Text,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { Link as ChakraLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from './logo.png';

const Links = ['Concept', 'Location', 'Itinerary'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('black.200', 'black.700'),
    }}
    fontSize={19}
    href={`/${children}`}
    color={'white'}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="black" px={4} opacity={0.9}>
        <Flex
          h={20}
          w="100%"
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Flex
            spacing={8}
            alignItems={'center'}
            justifyContent={'space-between'}
            w="100%"
          >
            <ChakraLink to="/">
              <Link
                href={'/'}
                fontSize="xl"
                fontWeight="bold"
                mr={8}
                as={Flex}
                alignItems="center"
                _hover={{ textDecoration: 'none' }}
              >
                <Image
                  src={logo}
                  boxSize={8}
                  height="70px"
                  width="240"
                  mr={2}
                />
                <Text color="white" fontSize="xl" fontWeight="600">
                  Collaboration between Sabyasachi & Dior
                </Text>
              </Link>
            </ChakraLink>
            <Spacer />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Flex>
          <IconButton
            size={'md'}
            icon={
              isOpen ? (
                <CloseIcon color={'white'} />
              ) : (
                <HamburgerIcon color="white" />
              )
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="black"
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
