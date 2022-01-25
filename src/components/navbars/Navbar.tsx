import { Container, Box, Text, HStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Image } from '@chakra-ui/image';
import { BsSearch } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import {
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { signOutFromGoogle } from '../../functions/auth';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <Box
      top={0}
      position='fixed'
      display='flex'
      width='100%'
      zIndex={1}
      borderBottom='1px solid'
      borderColor='gray.100'
      bg='white'
    >
      <Container display='flex' maxWidth='90%' paddingY='10px'>
        <HStack flex='1' justifyContent='left'>
          <Image src={logo} boxSize='40px' />
        </HStack>
        <HStack flex='4'>
          <InputGroup width='100%'>
            <InputLeftElement
              pointerEvents='none'
              children={<BsSearch color='gray' />}
            />
            <Input
              variant='outline'
              placeholder='Search watches'
              maxWidth='100%'
              focusBorderColor='gray'
            />
          </InputGroup>
        </HStack>
        <HStack flex='4' justifyContent='right'>
          <Text mx='20px' variant='bold-text'>
            Collection
          </Text>
          <Menu>
            <MenuButton as={Text} mx='20px' variant='bold-text'>
              Account
            </MenuButton>
            <MenuList>
              <MenuItem>Account Settings</MenuItem>
              <MenuDivider />
              <MenuItem css={{ gap: 5 }} onClick={signOutFromGoogle}>
                <FaSignOutAlt color='#6f6f6f' />
                <span>Sign Out</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </Box>
  );
};

export { Navbar };
