import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  Text,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addToColl } from '../../api/lib/user';
import { ISpecs } from '../../types';

interface IAddToCollModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  specs: ISpecs;
  userId: string;
  watchId: string;
}
const AddToCollModal = ({ isOpen, onClose, specs, userId, watchId }: IAddToCollModalProps) => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ purchasePrice: number }>();

  const handleAdd: SubmitHandler<{ purchasePrice: number }> = async (data) => {
    try {
      await addToColl(userId, watchId, Number(data.purchasePrice));
      toast({
        title: 'Success.',
        description: 'Added to your collection',
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
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontFamily={'barlow'}
          >{`${specs.general.brand_name} ${specs.general.model_name} ${specs.general.model_number}`}</ModalHeader>
          <form onSubmit={handleSubmit(handleAdd)}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel fontFamily='barlow'>What was your purchase price?</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none' children='$' />{' '}
                  <Input
                    placeholder='Purchase price'
                    focusBorderColor='gray'
                    type={'number'}
                    {...register('purchasePrice', { required: true })}
                  />
                </InputGroup>
                {errors.purchasePrice && <Text color={'red'}>This field is required</Text>}
                <FormHelperText fontFamily='barlow'>
                  {'We will calculate % gain or loss will be based on this.'}
                </FormHelperText>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant='pop' mr={3} type='submit'>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export { AddToCollModal };
