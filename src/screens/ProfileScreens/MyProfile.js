import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';


export default class MyProfile extends React.Component {

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>MyProfile</Text>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                        <Text>Go Back</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        )
    }
}