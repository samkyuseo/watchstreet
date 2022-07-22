import { Box } from '@chakra-ui/react';

interface ISectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: ISectionProps) => {
  return (
    <Box width="100%" mt="40px">
      {children}
    </Box>
  );
};

export { Section };
