import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:'HI',
        };
    }

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        borderRadius: 4,
                        height: 40,
                        width: 120,
                        padding: 5,
                        marginBottom: 10
                    }}
                    value={this.state.userName}
                    onChangeText={(text) => this.setState({ userName: text})}>
                    </TextInput>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('MyProfile')}>
                    <Text>Go to Profile</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}