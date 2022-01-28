import { Box } from '@chakra-ui/react';

interface IStickySidebarProps {
  height?: string;
  children: React.ReactNode;
}
// Stick side bar. Sets everything except the height, which can be optionally passed in
const StickySidebar = ({ children, height }: IStickySidebarProps) => {
  return (
    <Box
      position='sticky'
      top='110px'
      width='35%'
      height={height ? height : '100%'}
    >
      {children}
    </Box>
  );
};

export { StickySidebar };
