import { Box } from '@chakra-ui/react';

interface IStickySidebarProps {
  children: React.ReactNode;
  height?: string;
}
// Stick side bar. Sets everything except the height, which can be optionally passed in
const StickySidebar = ({ children, height }: IStickySidebarProps) => {
  return (
    <Box
      position='sticky'
      top='110px'
      width='35%'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      boxShadow='md'
      height={height ? height : '100%'}
    >
      {children}
    </Box>
  );
};

export { StickySidebar };
