import {
  Box,
  Text,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  // MenuDivider,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';

import { useNavigate } from 'react-router';
import { signOutUser } from '../../functions/auth';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
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
      <Box
        width='200px'
        marginY='auto'
        onClick={() => {
          navigate('/profile');
        }}
      >
        <Image src={logo} width='60px' margin='auto' />
      </Box>
      {/* Search Bar */}
      <Box width='1000px' margin='auto'>
        <SearchBar />
      </Box>
      {/* Left Buttons */}
      <Box width='200px'>
        <LeftButtons />
      </Box>
    </Box>
  );
};

const SearchBar = () => {
  return (
    <InputGroup width='70%'>
      <InputLeftElement pointerEvents='none' children={<BsSearch color='gray' />} />
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
  const navigate = useNavigate();
  return (
    <Box display='flex'>
      <Button variant='minimal' mr='20px' onClick={() => navigate('/profile')}>
        Collection
      </Button>
      <Menu>
        <MenuButton as={Text} variant='bold-text' marginY='auto' mr='30px'>
          Account
        </MenuButton>
        <MenuList>
          {/* <MenuItem as={Text}>Account Settings</MenuItem>
          <MenuDivider /> */}
          <MenuItem as={Text} css={{ gap: 5 }} onClick={signOutUser}>
            <FaSignOutAlt color='#6f6f6f' />
            <span>Sign Out</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export { Navbar };
