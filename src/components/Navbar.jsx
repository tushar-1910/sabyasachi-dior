import React from 'react';
import {
  Text,
  Flex,
  Spacer,
  Link as ChakraLink,
  MenuButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Campaigns from './Campaings';
import Footer from './SocialMediaBar';

function Navbar() {
  return (
    <Flex bg="black" alignItems="center" justifyContent="center" p={4}>
      <Link to="/">
        <ChakraLink
          fontSize="xl"
          fontWeight="bold"
          mr={8}
          as={Flex}
          alignItems="center"
          _hover={{ textDecoration: 'none' }}
        >
          <Image
            src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/logo/mahindra-new-logo.png"
            boxSize={8}
            height="70px"
            width="240"
            mr={2}
          />
          <Text color="white" fontSize="xl" fontWeight="600">
            Extension of MAHINDRA Thar
          </Text>
        </ChakraLink>
      </Link>
      <Spacer />

      <ChakraLink
        as={Text}
        color="White"
        to="/concept"
        fontSize="18px"
        fontWeight="600"
        mr="28px"
        _hover={{ textDecoration: 'none' }}
      >
        <Link to="/concept">Concept</Link>
      </ChakraLink>
      <Menu>
        <MenuButton
          colorScheme="balck"
          color="white"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontSize="18px"
          fontWeight="600"
        >
          Products
        </MenuButton>
        <MenuList bg="black" border="none">
          <MenuItem as={Link} to="/dust" bg="black" color="white">
            Dust protection sunglass
          </MenuItem>
          <MenuItem as={Link} to="/uv" bg="black" color="white">
            UV Ray protected sunglass
          </MenuItem>
          <MenuItem as={Link} to="/night" bg="black" color="white">
            Night Vision sunglass
          </MenuItem>
        </MenuList>
      </Menu>
      <Campaigns />
      <Footer />
    </Flex>
  );
}

export default Navbar;
