import React from 'react';
import { Button, Text, View } from 'react-native';
import useFetch from '../hooks/useGet';
import { AppScreenProps, AppScreens } from '../navigation/screens';
import MatchCard from '../components/cards/matchCard';


function SettingsScreen({ navigation }: AppScreenProps<AppScreens.SETTINGS_SCREEN>) {
    return(
        <View>
            <MatchCard/>
        </View>
    )
}

export default SettingsScreen