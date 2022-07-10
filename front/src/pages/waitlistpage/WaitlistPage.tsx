import { useState, useEffect } from 'react';

import { Content } from '../../components/layouts/Content';
import { Section } from '../../components/layouts/Section';
import { Chart } from './Chart';
import { WatchImage } from '../../components/images/WatchImage/WatchImage';

import {
  Button,
  Box,
  Heading,
  Spacer,
  Input,
  Text,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { getWatch } from '../../api/lib/watch';
import { IWatch } from '../../../../types';
import { LoadingPage } from '../loadingpage/LoadingPage';
import { LandingNavbar } from '../../components/navbars/LandingNavbar';
import { Footer } from '../../components/footers/Footer';
import { addToWaitlist } from '../../api/lib/user';

import { isMobile } from 'react-device-detect';

import rolex from '../../assets/images/rolexgmt2.png';

type Inputs = {
  email: string;
};

const WaitlistPage = () => {
  const [watch, setWatch] = useState<IWatch | null>(null);
  const [id] = useState<string>('2');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      const watch = await getWatch(id);
      setWatch(watch);
    };
    fetchData().catch(console.error);
  }, [id]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await addToWaitlist(data.email);
      toast({
        title: res.msg,
        status: 'success',
        position: 'bottom-left',
        isClosable: true,
      });
    } catch (_e) {
      if (_e instanceof Error) {
        toast({
          title: _e.message,
          status: 'error',
          position: 'bottom-left',
          isClosable: true,
        });
      }
    }
  };

  if (isMobile) {
    return (
      <Flex height="100%" width="100%" flexDir="column">
        <LandingNavbar />
        <br />
        <Flex flexDir="column" alignItems={'center'} textAlign="center">
          <Heading variant={'hero-heading-mobile'}>
            Learn, Discover, Track.
          </Heading>
          <br></br>
          <Text variant="hero-text-mobile">
            Gray watch market prices and watch news - All in one location.
          </Text>
          <br></br>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              size="md"
              width="100%"
              placeholder="Enter your email"
              focusBorderColor="green.light"
              fontSize="20px"
              type="email"
              {...register('email', { required: true })}
            />
            <Spacer />
            <br></br>
            <Button type="submit" size="md" variant="pop" borderRadius="md">
              Join the waitlist
            </Button>
          </form>
        </Flex>
        <br></br>
        <Flex
          justifyContent="space-between"
          paddingX="30px"
          paddingBottom="30px"
        >
          {watch ? (
            <Flex flexDir="column" width="100%">
              {/* Price Data Section */}
              <Flex flexDir="column">
                <Chart title={watch.specs.model} data={watch.priceData} />
                {/* Image */}
                {/* Actions */}
                <Flex height="300px">
                  <WatchImage image={rolex} />
                </Flex>
                <Button variant="pop" width="100%">
                  Add to Collection
                </Button>
                <Button mt="20px" variant="outline" width="100%">
                  Add to List
                </Button>
              </Flex>
            </Flex>
          ) : (
            <LoadingPage />
          )}
        </Flex>
        <br />
        <br />
        <Footer />
      </Flex>
    );
  }

  return (
    <Flex height="100%" width="100%" flexDir="column">
      <LandingNavbar />
      <br />
      <Flex flexDir="column" alignItems={'center'}>
        <Heading variant={'hero-heading'}>Learn, Discover, Track.</Heading>
        <br></br>
        <Text variant="hero-text">
          Gray watch market prices and watch news - All in one location.
        </Text>
        <br></br>
        <Flex textAlign="center" flexDir="column">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              size="lg"
              width="100%"
              placeholder="Enter your email"
              focusBorderColor="green.light"
              fontSize={'20px'}
              borderWidth="0.5"
              marginBottom="35px"
              {...register('email', { required: true })}
            />
            <Button type="submit" size="lg" variant="pop" borderRadius="md">
              Join the waitlist
            </Button>
          </form>
        </Flex>
      </Flex>
      <br></br>
      <br></br>
      <Flex
        maxWidth="80%"
        justifyContent={'space-between'}
        paddingX="30px"
        paddingBottom="30px"
        margin="auto"
        border="1px"
        borderColor="gray.200"
        borderRadius="lg"
        boxShadow="md"
      >
        {watch ? (
          <>
            <Content>
              {/* Price Data Section */}
              <Section>
                <Chart title={watch.specs.model} data={watch.priceData} />
              </Section>
            </Content>
            <Box top="110px" width="30%" height="350">
              {/* Image */}
              <br />
              <br />
              <WatchImage image={rolex} />
              {/* Actions */}
              <Button mt="40px" variant="pop" width="100%">
                Add to Collection
              </Button>
              <Button mt="20px" variant="outline" width="100%">
                Add to List
              </Button>
            </Box>
          </>
        ) : (
          <LoadingPage />
        )}
      </Flex>
      <br />
      <br />
      <Footer />
    </Flex>
  );
};

export { WaitlistPage };
