import { Box, Flex, Tag, Text, Tooltip } from '@chakra-ui/react';
import { WatchTableItem } from './WatchTableItem';

import { IUser2 } from '../../../types';
import { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { getUser } from '../../../api/lib/user';
import { UpdateCollection } from '../../providers/UpdateCollection';

const WatchCollectionTable = () => {
  const [user] = useAuthState(getAuth());
  const collectionUpdated = useContext(UpdateCollection);
  const [userData, setUserData] = useState<IUser2>();

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const userData = await getUser(user.uid);
        setUserData(userData);
      }
    };
    fetchData().catch(console.error);
  }, [collectionUpdated.value]);

  return (
    <Box
      // make content always 80% of the vh
      height='80vh'
      // make content scrollable
      overflowX='hidden'
      overflowY='auto'
      // hide scroll bar
      css={{
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'transparent',
        },
      }}
      // border settings
      borderRadius='sm'
      border='1px'
      borderColor='gray.200'
      boxShadow='md'
    >
      {/* Watch Collection */}
      {userData ? (
        <>
          <Flex
            borderBottom='1px'
            borderColor='gray.200'
            // justifyContent='space-between'
            width='100%'
            p='10px'
            gap={'10px'}
          >
            <Text variant='bold-text' fontSize='lg'>
              Collection
            </Text>
            <Tooltip label='Search for watches to add your collection.'>
              <Tag marginTop={'auto'}>info</Tag>
            </Tooltip>
            {/* <Flex marginY='auto' marginRight='8px'>
              <AiOutlinePlus />
            </Flex> */}
          </Flex>
          {/* Table content */}
          {userData.collection.map((watch, index) => {
            return <WatchTableItem key={index} watch={watch} />;
          })}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export { WatchCollectionTable };
