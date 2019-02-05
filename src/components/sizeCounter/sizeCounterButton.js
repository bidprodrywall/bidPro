import React, { Component } from 'react';
import { Text, TouchableNativeFeedback, View, StyleSheet } from 'react-native';
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
//toDo: 
//this component are individual size buttons that will recive: a name, value,
//and return a total square footage, and total number of sheets
export class SizeCounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {//these are properties that can change and be displayed
            item: props.myItem
        };
    }
    decrease() {//on long press this subracts one from amount
        this.state.item.decrease();
        this.setState(this.state);
    }
    increase() {//on button click this increases and displays the increase
        this.state.item.increase();
        this.setState(this.state);
    }
    render() {
        return (
            <TouchableNativeFeedback key={this.state.item.value} style={[styles.tempButton, styles.styleOne]} onLongPress={() => this.decrease()} onPress={() => { this.increase() }} value={this.state.item.amount}>
                <View>
                    <Text>Size: {JSON.stringify(this.state.item.name)}</Text>
                    <Text>Count: {this.state.item.amount}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}
const styles = StyleSheet.create({
    tempButton: {
        width: 141,
        height: 146,
        borderRadius: 15,
        backgroundColor: "#f1f3f8",
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
          width: 1,
          height: 1
        },
        shadowRadius: 4,
        shadowOpacity: 1
    },
    styleOne: {
        backgroundColor: '#F5FCFF',
    }
})