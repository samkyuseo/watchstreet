import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Flex, Input, Image, Button, InputGroup, Divider } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MdOutlineEmail } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';
import { signInWithGoogle, signInWithEmail } from '../../functions/auth';

type Creds = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Creds>();
  const [authError, setAuthError] = useState<string>();
  const onSubmit: SubmitHandler<Creds> = async (data) => {
    try {
      await signInWithEmail(data.email, data.password);
    } catch (error: any) {
      setAuthError(error.message);
    }
  };
  return (
    <Flex justifyContent={'center'} alignItems={'center'} height={'100vh'} width={'100wh'}>
      <Flex
        width={'400px'}
        border={'1px'}
        borderColor={'gray.400'}
        borderRadius={'lg'}
        alignItems={'center'}
        justifyContent='center'
        flexDir={'column'}
        padding='20px'
      >
        <Image onClick={() => navigate('/')} src={logo} height={'50px'} />
        <br />
        <Button
          variant='outline'
          size='lg'
          rightIcon={<FcGoogle />}
          onClick={signInWithGoogle}
          width='100%'
        >
          Login with Google
        </Button>
        <br />
        <Text>- or -</Text>
        <br />
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          {/* Email input */}
          <InputGroup size='lg'>
            <Input
              type='email'
              focusBorderColor='gray'
              borderColor='gray.300'
              placeholder='Email'
              {...register('email', { required: true })}
            />
          </InputGroup>
          {errors.email && <Text color={'red'}>This field is required</Text>}
          <br />
          {/* Password input */}
          <InputGroup size='lg'>
            <Input
              type={'password'}
              focusBorderColor='gray'
              {...register('password', { required: true })}
              borderColor='gray.300'
              placeholder='Enter password'
            />
          </InputGroup>
          {errors.password && <Text color={'red'}>This field is required</Text>}
          {authError && <Text color={'red'}>{authError}</Text>}
          <br />
          <Button
            type='submit'
            width='100%'
            variant='outline'
            size='lg'
            rightIcon={<MdOutlineEmail />}
          >
            Login with Email
          </Button>
        </form>
        <br />
        <Divider />
        <br />
        <Text fontSize={'17px'}>{"Don't have an account?"}</Text>
        <Button
          onClick={() => navigate('/signup')}
          color='green.light'
          fontSize={'17px'}
          variant='minimal'
        >
          Sign up Here!
        </Button>
      </Flex>
    </Flex>
  );
};

export { LoginPage };
