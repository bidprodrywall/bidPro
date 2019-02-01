import React, { Component } from 'react';//imports 
import { View } from 'react-native';
import { DrywallType } from '../universal/drywallType';
import { SizeCounterButton } from './sizeCounterButton';
// this component will create buttons from passed in list 

export class SizeCounter extends Component {
    constructor (props) {
        super(props);
        this.state = {sizes: [new DrywallType('8', 42), new DrywallType('10', 54), new DrywallType('12', 65)]};//temerary manual creation of size list. will set up to be passed in
    }
    renderSizeButtons = () => {
        return this.state.sizes.map((itemOne) => {//loop through sizes and add a displayable, functional button for each
            return (
                <SizeCounterButton myItem={itemOne} />
            )
        })
    }
    render() {
        return (
            <View>
                {this.renderSizeButtons()}
            </View>
        )
    }
}