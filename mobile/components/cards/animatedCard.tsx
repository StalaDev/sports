import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

interface ModalAnimationProps {
    open: boolean;
    children: React.ReactNode;
    onFinish: () => void;
    time?: {
        duration?:number,
        opacityDuration?:number
    };
    containerStyle?: StyleProp<ViewStyle>
}

const ModalAnimation = ({
    open,
    children,
    onFinish,
    time = { duration: 1500, opacityDuration: 1300 },
    containerStyle ={}
}: ModalAnimationProps) => {
    const [visible, setVisible] = useState(false);
    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
        opacity: opacity.value, 
    }));

    useEffect(() => {
        handleModal()
    }, [open])

    const handleModal = () => {
        if (open) {
            showModal()
        } else {
            hideModal()
        }
    }

    const showModal = () => {
        setVisible(true);
        opacity.value = withTiming(1, {
            duration: time.opacityDuration,
            easing: Easing.out(Easing.exp),
        });
        scale.value = withTiming(1, {
            duration: time.duration,
            easing: Easing.out(Easing.exp),
        });
    };

    const hideModal = () => {
        opacity.value = withTiming(0, {
            duration: time.opacityDuration,
            easing: Easing.in(Easing.exp),
        });
        scale.value = withTiming(0, {
            duration: time.duration, 
            easing: Easing.in(Easing.exp),
        });
        setTimeout(() => {
            setVisible(false)
            onFinish()
        }, time.duration! + 200); 
    };

    return (
        <View style={styles.container}>
            <Button title="Mostrar Modal" onPress={showModal} />
            {visible && (
                <Animated.View style={[styles.modal, animatedStyle,StyleSheet.flatten(containerStyle) ]}>
                    {children}
                    <Button title="Cerrar" onPress={hideModal} />
                </Animated.View>
            )}
        </View>
    );
};

export default ModalAnimation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    modal: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
