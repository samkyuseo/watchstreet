import { Box } from '@chakra-ui/react';

interface IStickySidebarProps {
  children: React.ReactNode;
  height?: string;
}
// Stick side bar. Sets everything except the height, which can be optionally passed in
const StickySidebar = ({ children, height }: IStickySidebarProps) => {
  return (
    <Box position='sticky' width='35%' height='100%'>
      {children}
    </Box>
  );
};

export { StickySidebar };
