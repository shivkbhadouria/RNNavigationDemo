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

export default class Login extends React.Component {

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity
                    style={{ height: 34, width: 120, backgroundColor: 'blue'}}
                    onPress={() => this.props.navigation.navigate('signup')}>
                        <Text
                        style={{
                            color: 'white',
                            fontSize: 25
                        }}>Move to SignUp</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}