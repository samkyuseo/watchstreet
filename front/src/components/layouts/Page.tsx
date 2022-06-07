import { Box } from '@chakra-ui/react';

interface IPageProps {
  children: React.ReactNode;
  border?: string;
}
const Page = ({ children, border }: IPageProps) => {
  return (
    <Box
      display="flex"
      width="1000px"
      justifyContent={'space-between'}
      // Since the top most element in the page as mt=40
      pt="60px"
      pb="120px"
      margin="auto"
    >
      {children}
    </Box>
  );
};

export { Page };
