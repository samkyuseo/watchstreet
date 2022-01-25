import { Image } from '@chakra-ui/react';

interface IWatchImageProp {
  image: string;
}
const WatchImage = ({ image }: IWatchImageProp) => {
  return (
    <Image
      position='sticky'
      top='120px'
      left='850px'
      width='35%'
      height='350px'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      objectFit='contain'
      boxShadow='md'
      src={image}
    />
  );
};

export { WatchImage };
