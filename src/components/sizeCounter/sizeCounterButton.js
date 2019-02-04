import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
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
    decrease() {//on swipe left this subracts one from amount
        this.state.item.decrease();
        this.setState(this.state);
    }
    increase() {//on button click this increases and displays the increase
        this.state.item.increase(); 
        this.setState(this.state);
    } 
    render() {
        return (
            <GestureRecognizer onSwipeLeft={() => this.decrease()}>
                <Button key={this.state.item.value} onPress={() => {this.increase()}} value={this.state.item.amount} title={JSON.stringify(this.state.item.name)}></Button>
                <Text>Count: {this.state.item.amount}</Text>
            </GestureRecognizer>
        )
    }
}