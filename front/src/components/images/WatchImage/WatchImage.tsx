import { Image } from '@chakra-ui/react'

interface IWatchImageProp {
  image: string
}
const WatchImage = ({ image }: IWatchImageProp) => {
  // Take full width and height of whatever div surrounds it
  return <Image width='100%' height='100%' objectFit='contain' src={image} />
}

export { WatchImage }
