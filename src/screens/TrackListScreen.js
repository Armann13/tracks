import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';


const TrackListScreen = ({navigation}) => {

    return(
        <View>
            <Text>TrackListScreen</Text>
            <Button
            title="Go to Track Detail"
            onPress={() => navigation.navigate('Track Detail') }
            />
        </View>
    );

};


const styles = StyleSheet.create({


});


export default TrackListScreen;