import { Box } from '@chakra-ui/react';

interface IPageProps {
  children: React.ReactNode;
}
const Page = ({ children }: IPageProps) => {
  return (
    <Box
      display='flex'
      width='1000px'
      justifyContent='space-between'
      // Since the top most element in the page as mt=40
      height='100vh' // bg='red'
      pt='60px'
      pb='120px'
      margin='auto'
    >
      {children}
    </Box>
  );
};

export { Page };
