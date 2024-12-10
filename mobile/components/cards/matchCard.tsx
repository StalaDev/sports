import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground } from "react-native";
import { Div, Text } from "react-native-magnus";
import { scale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

const StyledImageBackground = styled(ImageBackground)`
  flex: 2.1;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${(props) => props.theme.borderRadius.medium}px;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.medium}px;
`;

const StyledLinearGradientLeft = styled(LinearGradient)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-left-radius: ${(props) => props.theme.borderRadius.medium}px;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.medium}px;
`;

const BlackOverlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Negro semitransparente */
  border-top-left-radius: ${(props) => props.theme.borderRadius.medium}px;
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.medium}px;
`;

const StyledLinearGradientRight = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

const RightImageBackground = styled(ImageBackground)`
  position: absolute;
  top: 0;
  right: -30%;
  width: 100%;
  height: 100%;
  opacity: 0.2;
`;

const MatchCard = () => {
  return (
    <Div
      h={verticalScale(150)}
      w={scale(325)}
      flexDir="row"
      rounded="lg"
      bg="grey"
      shadow="2xl"
      shadowColor="grey"
      overflow="hidden"
      ml={scale(12)}
    >
      {/* Parte izquierda */}
      <StyledImageBackground source={require("../../assets/cesped1.jpg")}>
        <StyledLinearGradientLeft
          colors={["rgba(169, 169, 160, 0)", "rgba(169, 169, 169, 0.7)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <BlackOverlay />
        <Text
          fontSize={scale(30)}
          color="white"
          fontFamily="RobotoCondensed-Bold"
        >
          2
        </Text>
        <Text fontSize="md" color="white" fontFamily="RobotoCondensed-Regular">
          MONDAY
        </Text>
        <Text fontSize="sm" color="white" fontFamily="RobotoCondensed-Regular">
          10:00 PM
        </Text>
      </StyledImageBackground>

      {/* Parte derecha */}
      <Div flex={7} justifyContent="space-between">
        <StyledLinearGradientRight
          colors={[
            "rgba(20, 20, 20, 8)", // Gris oscuro arriba
            "rgba(30, 30, 30, 0.7)", // Gris centro
            "rgba(20, 20, 20, 0.5)",
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.8, y: 1 }}
        />
        <Div style={{ flex: 1, position: "relative" }}>
          <RightImageBackground
            source={require("../../assets/Escudorosariocentral.png")}
          />
          <Div
            style={{
              flex: 1,
              zIndex: 1,
              justifyContent: "space-between",
            }}
            p="lg"
          >
            <Div>
              <Text
                fontSize={scale(18)}
                color="white"
                fontFamily="RobotoCondensed-Bold"
              >
                NOMBRE PARTIDO
              </Text>
            </Div>

            <Div
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                fontSize="3xl"
                color="white"
                fontFamily="RobotoCondensed-Regular"
              >
                Detalles
              </Text>
              <Div
                w={scale(25)}
                h={scale(25)}
                rounded="circle"
                bg="black"
                justifyContent="center"
                alignItems="center"
              >
                <Text fontSize="md" color="white">
                  ?
                </Text>
              </Div>
              <Text
                fontSize="3xl"
                color="white"
                fontFamily="RobotoCondensed-Regular"
              >
                Detalles
              </Text>
            </Div>
          </Div>
        </Div>

        <Div bg="black" p="lg">
          <Text
            color="white"
            fontFamily="RobotoCondensed-Regular"
            textTransform="uppercase"
            fontSize={scale(8)}
          >
            Abasto Fútbol 5
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export default MatchCard;
