import { Box } from '@chakra-ui/react';
interface IContentProps {
  children: React.ReactNode;
}
const Content = ({ children }: IContentProps) => {
  return <Box width='60%'>{children}</Box>;
};

export { Content };
