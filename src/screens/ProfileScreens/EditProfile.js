import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


export default class EditProfile extends React.Component {

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Edit profile</Text>
                </View>
            </SafeAreaView>
        )
    }
}