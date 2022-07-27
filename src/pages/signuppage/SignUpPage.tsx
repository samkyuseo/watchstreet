import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Flex, Input, Image, Button, InputGroup, Divider } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MdOutlineEmail } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { signInWithGoogle, createUserWithEmail } from '../../functions/auth';

type Creds = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Creds>();
  const [authError, setAuthError] = useState<string>();

  const validate = (confirm: string) => {
    if (confirm !== watch('password')) {
      return 'Your passwords do not match';
    }
  };

  const onSubmit: SubmitHandler<Creds> = async (data) => {
    try {
      await createUserWithEmail(data.email, data.password);
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
        <Image src={logo} height={'50px'} />
        <br />
        <Button
          variant='outline'
          size='lg'
          rightIcon={<FcGoogle />}
          onClick={signInWithGoogle}
          width='100%'
        >
          Sign up with Google
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
              placeholder='Email'
              {...register('email', {
                required: { value: true, message: 'This field is required' },
              })}
            />
          </InputGroup>
          {errors.email && <Text color={'red'}>This field is required</Text>}
          <br />
          {/* Password input */}
          <InputGroup size='lg'>
            <Input
              type={'password'}
              focusBorderColor='gray'
              {...register('password', {
                required: { value: true, message: 'This field is required' },
                minLength: { value: 8, message: 'Password must be atleast 8 characters' },
              })}
              placeholder='Enter a secure password'
            />
          </InputGroup>
          {errors.password && <Text color={'red'}>{errors.password.message}</Text>}
          <br />
          {/* Confirm password input */}
          <InputGroup size='lg'>
            <Input
              type={'password'}
              focusBorderColor='gray'
              {...register('confirmPassword', {
                required: { value: true, message: 'This field is required' },
                validate: (cp) => validate(cp),
              })}
              placeholder='Confirm password'
            />
          </InputGroup>
          {errors.confirmPassword && <Text color={'red'}>{errors.confirmPassword.message}</Text>}
          {authError && <Text color={'red'}>{authError}</Text>}
          <br />
          <Button
            type='submit'
            width='100%'
            variant='outline'
            size='lg'
            rightIcon={<MdOutlineEmail />}
          >
            Sign up with Email
          </Button>
        </form>
        <br />
        <Divider />
        <br />
        <Text fontSize={'17px'}>{'Have an account?'}</Text>
        <Button
          onClick={() => navigate('/login')}
          color='green.light'
          fontSize={'17px'}
          variant='minimal'
        >
          Login Here!
        </Button>
      </Flex>
    </Flex>
  );
};

export { SignUpPage };
