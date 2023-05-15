import { Flex, Icon, Link, Tooltip } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa';

export default function Footer() {
  return (
    <Flex bg="black.200" p={2} justify="center">
      <Tooltip label="Facebook">
        <Link href="#" isExternal mx={2}>
          <Icon as={FaFacebook} boxSize={6} color="yellow.600" />
        </Link>
      </Tooltip>
      <Tooltip label="Instagram">
        <Link href="#" isExternal mx={2}>
          <Icon as={FaInstagram} boxSize={6} color="yellow.600" />
        </Link>
      </Tooltip>
      <Tooltip label="LinkedIn">
        <Link href="#" isExternal mx={2}>
          <Icon as={FaSnapchat} boxSize={6} color="yellow.600" />
        </Link>
      </Tooltip>
    </Flex>
  );
}
