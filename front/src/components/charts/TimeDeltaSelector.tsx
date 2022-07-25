import { useState, useEffect } from 'react'
import { Flex, Button, Divider } from '@chakra-ui/react'
import { ITimeDelta } from '../../../../types'

interface ITimeDeltaSelectorProps {
  defaultIndex: number
  setParentTimeDelta: React.Dispatch<React.SetStateAction<ITimeDelta>> // sets the parent elements state
}
function TimeDeltaSelector({ defaultIndex, setParentTimeDelta }: ITimeDeltaSelectorProps) {
  const chartTimeDeltas: ITimeDelta[] = [
    { id: '0', selectText: '1W', displayText: 'Past Week', numDays: 7 },
    { id: '1', selectText: '1M', displayText: 'Past Month', numDays: 30 },
    { id: '2', selectText: '3M', displayText: 'Past 3 Months', numDays: 90 },
    { id: '3', selectText: '6M', displayText: 'Past 6 Months', numDays: 180 },
    { id: '4', selectText: '1Y', displayText: 'Past Year', numDays: 365 },
    { id: '5', selectText: 'ALL', displayText: 'All Time', numDays: Infinity },
  ]
  const [timeDelta, setTimeDelta] = useState<ITimeDelta>(chartTimeDeltas[defaultIndex])
  useEffect(() => {}, [timeDelta]) // rerender when timeDelta state gets changed
  return (
    <>
      <Flex style={{ gap: 20 }}>
        {chartTimeDeltas.map((ctd: ITimeDelta) => {
          return (
            <Button
              key={ctd.id}
              id={ctd.id}
              variant={ctd.id === timeDelta.id ? 'chart-time-delta-focus' : 'chart-time-delta'}
              onClick={() => {
                setTimeDelta(ctd)
                setParentTimeDelta(ctd)
              }}
            >
              {ctd.selectText}
            </Button>
          )
        })}
      </Flex>
      <Divider my='5px' width='100%' />
    </>
  )
}

export { TimeDeltaSelector }
