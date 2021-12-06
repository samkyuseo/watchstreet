import { Container, Heading, Flex, Text, Box, Divider} from '@chakra-ui/layout'
import { LineChart, Line } from 'recharts';


const Chart = () => {
    return (
        <Container maxWidth="70%" mt="50px">
            <Box>
                <Heading>$120,100.12</Heading>
                <Text variant="bold" display="inline-block">-$172.5 (-0.14%)</Text>
                {" "}
                <Text display="inline-block">Today</Text>
            </Box>
            <Box>
                <LineChart width={700} height={285} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#24E5AF" strokeWidth={2} dot={false}/>
                </LineChart>
                <Flex style={{gap: 50}}>
                    <Text variant="bold" color="green.light" textDecoration="underline" textUnderlineOffset="10px" textDecorationThickness="2px">1D</Text>
                    <Text variant="bold">1M</Text>
                    <Text variant="bold">3M</Text>
                    <Text variant="bold">1Y</Text>
                    <Text variant="bold">ALL</Text>
                </Flex>
                <Divider mt="5px" width="700px" style={{ height: 0.1, backgroundColor: "black" }}/>
            </Box>
        </Container>
    )
}

export { Chart }

const data = [
    {
        pv: 2400
    },
    {
        pv: 1398
    },
    {
        pv: 9800
    },
    {
        pv: 3908
    },
    {
        pv: 10000
    },
    {
        pv: 9000
    },
    {
        pv: 5679
    },
    {
        pv: 30000
    },
    {
        pv: 8000
    },
    {
        pv: 10000
    },
    {
        pv: 7000
    },
    {
        pv: 12000
    },
    {
        pv: 9000
    },
    {
        pv: 20000
    },
    {
        pv: 20000
    },
    {
        pv: 10098
    },
    {
        pv: 9800
    },
    {
        pv: 15008
    },
    {
        pv: 30000
    },
    {
        pv: 40000
    },
    {
        pv: 50000
    }
];