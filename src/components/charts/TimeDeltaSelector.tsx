import { useState, useEffect } from 'react';
import { Flex, Button, Divider } from '@chakra-ui/react';
import { ITimeDelta } from './types';

interface ITimeDeltaSelectorProps {
  chartTimeDeltas: ITimeDelta[];
  defaultIndex: number;
  setParentTimeDelta: React.Dispatch<React.SetStateAction<ITimeDelta>>; // sets the parent elements state
}
function TimeDeltaSelector({
  chartTimeDeltas,
  defaultIndex,
  setParentTimeDelta,
}: ITimeDeltaSelectorProps) {
  const [timeDelta, setTimeDelta] = useState<ITimeDelta>(
    chartTimeDeltas[defaultIndex]
  );
  useEffect(() => {}, [timeDelta]); // rerender when timeDelta state gets changed
  return (
    <>
      <Flex style={{ gap: 20 }}>
        {chartTimeDeltas.map((ctd: ITimeDelta) => {
          return (
            <Button
              key={ctd.id}
              id={ctd.id}
              variant={
                ctd.id === timeDelta.id
                  ? 'chart-time-delta-focus'
                  : 'chart-time-delta'
              }
              onClick={() => {
                setTimeDelta(ctd);
                setParentTimeDelta(ctd);
              }}
            >
              {ctd.selectText}
            </Button>
          );
        })}
      </Flex>
      <Divider my="5px" width="100%" />
    </>
  );
}

export { TimeDeltaSelector };
