import { Box } from '@chakra-ui/react';

interface ISidebarProps {
  height?: string;
  children: React.ReactNode;
}
// Stick side bar. Sets everything except the height, which can be optionally passed in
const Sidebar = ({ children, height }: ISidebarProps) => {
  return (
    <Box
      position='sticky'
      top='110px'
      width='35%'
      height={height ? height : '100%'}
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      boxShadow='md'
    >
      {children}
    </Box>
  );
};

export { Sidebar };
