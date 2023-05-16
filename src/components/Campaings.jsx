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
            Launch Event
          </MenuItem>
          <MenuItem onClick={onOpenModal2} bg="black" color="white">
            Tour
          </MenuItem>
          <MenuItem onClick={onOpenModal3} bg="black" color="white">
            Race
          </MenuItem>
          <MenuItem onClick={onOpenModal4} bg="black" color="white">
            Filter
          </MenuItem>
        </MenuList>
      </Menu>

      <Modal
        isOpen={isOpenModal1}
        onClose={onCloseModal1}
        overlayColor="rgba(0, 0, 0, 0.8)"
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>Campaign 1</ModalHeader>
          <ModalBody>
            <Box p={4} fontSize="25px">
              Launch event with The Brand ambassador
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenModal2}
        onClose={onCloseModal2}
        overlayColor="rgba(0, 0, 0, 0.8)"
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>Campaign 2</ModalHeader>
          <ModalBody>
            <Box p={4} fontSize="25px">
              A tour organized for women to gracefully explore new grounds
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenModal3}
        onClose={onCloseModal3}
        overlayColor="rgba(0, 0, 0, 0.8)"
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>Campaign 3</ModalHeader>
          <ModalBody>
            <Box p={4} fontSize="25px">
              An exclusive race Adventure hosted by Rannvijay Sinha
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isOpenModal4}
        onClose={onCloseModal4}
        overlayColor="rgba(0, 0, 0, 0.8)"
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalHeader>Campaign 4</ModalHeader>
          <ModalBody>
            <Box p={4} fontSize="25px">
              An Instagram filter of the sunglasses to try it on before buying
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
