import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Link as ChakraLink,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React from 'react';

export default function Campaigns() {
  const {
    isOpen: isOpenModal1,
    onOpen: onOpenModal1,
    onClose: onCloseModal1,
  } = useDisclosure();
  const {
    isOpen: isOpenModal2,
    onOpen: onOpenModal2,
    onClose: onCloseModal2,
  } = useDisclosure();
  const {
    isOpen: isOpenModal3,
    onOpen: onOpenModal3,
    onClose: onCloseModal3,
  } = useDisclosure();
  const {
    isOpen: isOpenModal4,
    onOpen: onOpenModal4,
    onClose: onCloseModal4,
  } = useDisclosure();
  return (
    <Box>
      <Menu>
        <MenuButton
          colorScheme="balck"
          color="white"
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontSize="18px"
          fontWeight="600"
        >
          Campaigns
        </MenuButton>
        <MenuList bg="black" border="none">
          <MenuItem onClick={onOpenModal1} bg="black" color="white">
            Contact
          </MenuItem>
          <MenuItem onClick={onOpenModal2} bg="black" color="white">
            Contact
          </MenuItem>
          <MenuItem onClick={onOpenModal3} bg="black" color="white">
            Contact
          </MenuItem>
          <MenuItem onClick={onOpenModal4} bg="black" color="white">
            Contact
          </MenuItem>
        </MenuList>
      </Menu>

      <Modal
        isOpen={isOpenModal1}
        onClose={onCloseModal1}
        overlayColor="rgba(0, 0, 0, 0.8)"
      >
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>Modal content goes here.</Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onCloseModal1}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenModal2}
        onClose={onCloseModal2}
        overlayColor="rgba(0, 0, 0, 0.8)"
      >
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>Modal 2</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>Content of Modal 2</Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal2}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenModal3}
        onClose={onCloseModal3}
        overlayColor="rgba(0, 0, 0, 0.8)"
      >
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>Modal 3</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>Content of Modal 3</Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal3}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenModal4}
        onClose={onCloseModal4}
        overlayColor="rgba(0, 0, 0, 0.8)"
      >
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>Modal 4</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={4}>Content of Modal 4</Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal4}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
