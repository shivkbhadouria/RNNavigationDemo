import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class More extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: ['Settings', 'AboutUs', 'FAQ', 'T&C']
        }
    }

    render() {
        return(
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    style={{
                        flex: 1,
                    }}
                        data={this.state.dataSource}
                        renderItem={({item, index }) => this.renderMoreRow(index, item)}
                        keyExtractor={item => item.id}
                    />
            </SafeAreaView>
        )
    }

    renderMoreRow(index, item) {
        console.log(index+item);
        const bgColor = index % 2 === 0 ? 'rgb(220,220,220)' : 'white';
        return(
            <View
            style={{
                padding: 10,
                height: 44,
                width: '100%',
                backgroundColor: bgColor,
                justifyContent: 'center'
            }}>
                <Text>{item}</Text>
            </View>
        );
    }
}