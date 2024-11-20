import { Div, Text } from "react-native-magnus"
import { scale } from "react-native-size-matters"

const MatchCard = () => {
    return (
        <Div h={'25%'} w={"90%"} flexDir="row" rounded={"2xl"} bg="red" shadow={"2xl"} shadowColor="black">
            <Div flex={3} justifyContent="center" alignItems="center" roundedTopLeft={"2xl"} roundedBottomLeft={"2xl"} bg="blue">
                <Text fontSize={'6xl'}>1</Text>
                <Text>FRIDAY</Text>
                <Text>8:30 PM</Text>
            </Div>
            <Div justifyContent="flex-end" flex={7}>
                <Div flex={8} justifyContent="space-evenly" pl={scale(10)}>
                    <Text>NOMBRE DEL PARTIDO?</Text>
                    <Text>DETALLE?</Text>
                </Div>
                <Div flex={2} bg="black" justifyContent="center" pl={scale(10)} roundedBottomRight={"2xl"} >
                    <Text color="white">LOYAL</Text>
                </Div>
            </Div>
        </Div>
    )
}

export default MatchCard