import { Image } from '@chakra-ui/react';
import patek from '../../assets/images/patek.jpg';

interface IWatchImageProp {
  image: string;
}
const WatchImage = ({ image }: IWatchImageProp) => {
  return (
    <Image
      width='300px'
      height='350px'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      src={image}
      objectFit='contain'
      position='fixed'
      top='110px'
      left='850px'
      boxShadow='md'
    />
  );
};

export { WatchImage };
