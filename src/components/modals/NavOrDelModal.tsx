import { useNavigate } from 'react-router';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  Text,
} from '@chakra-ui/react';
import { ISpecs, IUserWatch2 } from '../../types';
import { BiRightArrowAlt } from 'react-icons/bi';
import { formatTwoDecimals, formatPriceChangePercent } from '../../functions/price';
import { removeFromColl } from '../../api/lib/user';

interface INavOrDelModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  specs: ISpecs;
  userId: string;
  watchId: string;
  userWatch: IUserWatch2;
  priceChange: number;
  currentPrice: number;
}
const NavOrDelModal = ({
  isOpen,
  onClose,
  specs,
  userId,
  userWatch,
  priceChange,
  currentPrice,
  watchId,
}: INavOrDelModalProps) => {
  const navigate = useNavigate();
  const toast = useToast();
  async function handleRemove() {
    try {
      await removeFromColl(userId, userWatch.id);
      toast({
        title: 'Success.',
        description: 'Removed from collection',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Error.',
        description: 'Sorry. There was an error.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      onClose();
    }
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontFamily={'barlow'}
          >{`${specs.general.brand_name} ${specs.general.model_name} ${specs.general.model_number}`}</ModalHeader>
          <ModalBody pb={6}>
            <Text>{`Current price: $${formatTwoDecimals(currentPrice)}`}</Text>
            <Text>{`Purchase price: $${formatTwoDecimals(userWatch.purchase_price)}`}</Text>
            <Text>
              Difference:{' '}
              {priceChange >= 0 ? (
                <Text as={'span'} color='green.light'>
                  ${formatTwoDecimals(priceChange)} (
                  {formatPriceChangePercent(userWatch.purchase_price, priceChange)})
                </Text>
              ) : (
                <Text as={'span'} color='red'>
                  ${formatTwoDecimals(priceChange)} (
                  {formatPriceChangePercent(userWatch.purchase_price, currentPrice)})
                </Text>
              )}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant='pop'
              mr={3}
              type='submit'
              rightIcon={<BiRightArrowAlt />}
              onClick={() => navigate(`/watch/${watchId}`)}
            >
              Details
            </Button>
            <Button onClick={() => handleRemove()}>Remove</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { NavOrDelModal };
