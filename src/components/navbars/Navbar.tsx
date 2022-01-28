import {
  Box,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';

import { signOutFromGoogle } from '../../functions/auth';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    // Just the outer border
    <Box
      display='flex'
      top={0}
      position='fixed'
      width='100%'
      paddingY='10px'
      zIndex={1}
      bg='white'
      borderBottom='1px solid'
      borderColor='gray.100'
    >
      {/* Logo */}
      <Box width='200px' marginY='auto'>
        <Image src={logo} boxSize='40px' margin='auto' />
      </Box>
      {/* Search Bar */}
      <Box width='1000px' margin='auto'>
        <SearchBar />
      </Box>
      {/* Left Buttons */}
      <Box width='200px' marginY='auto'>
        <LeftButtons />
      </Box>
    </Box>
  );
};

const SearchBar = () => {
  return (
    <InputGroup width='70%'>
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
  );
};

const LeftButtons = () => {
  return (
    <Box display='flex'>
      <Text variant='bold-text' mr='20px'>
        Collection
      </Text>
      <Menu>
        <MenuButton as={Text} variant='bold-text'>
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
    </Box>
  );
};

export { Navbar };
