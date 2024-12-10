import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Div, Text, Button } from "react-native-magnus";
import { scale } from "react-native-size-matters";

const StatisticCard = () => {
  return (
    <Div w="100%" h="24%" justifyContent="flex-end" overflow="hidden">
      {/* Parte negra */}
      <Div
        flex={8}
        bg="#1F2120"
        roundedTop="2xl"
        justifyContent="center"
        px="lg"
      >
        <Text fontSize="5xl" fontFamily="RobotoCondensed-Bold" color="#FFFFFF">
          PREGAME
        </Text>
        <Text fontSize="5xl" fontFamily="RobotoCondensed-Bold" color="#FFFFFF">
          BREAKDOWN
        </Text>
      </Div>

      {/* Parte azul con botón */}
      <Div
        w="100%"
        bg="#333c84"
        flex={2}
        roundedBottom="2xl"
        justifyContent="space-between"
        alignItems="center"
        px="lg"
        flexDir="row"
      >
        <Text fontFamily="RobotoCondensed-Regular" color="#FFFFFF">
          BULLS AT MAGIC
        </Text>
        <Div
          mb={scale(15)} 
          justifyContent="center"
          alignItems="center"
        >
          <Button
            w={85}
            h={45}
            bg="#1F2120"
            rounded="md"
            justifyContent="center"
            alignItems="center"
            borderWidth={3} 
            borderColor="#333c84" 
            p="lg"
            
          >
            <Text
              fontFamily="RobotoCondensed-Bold"
              color="#FFFFFF"
              
            >
              Botonzuku
            </Text>
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default StatisticCard;
