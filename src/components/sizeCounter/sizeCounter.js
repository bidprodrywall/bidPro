import React, { Component } from 'react';//imports 
import { View } from 'react-native';
import { DrywallType } from '../universal/drywallType';
import { SizeCounterButton } from './sizeCounterButton';
// this component will create buttons from passed in list 
export class SizeCounter extends Component {
    constructor (props) {
        super(props);
        this.state = {sizes: this.createSizes(props.props.sizes), types: props.props.types};
    }
    componentDidMount() {
    //component lifecycle hook, i think
    }
    createSizes = (array) => {
        var sizeArray =[];
        for (let sizeBluePrint of array) {
            sizeArray.push(new DrywallType(sizeBluePrint.name, sizeBluePrint.value));
        }
        return sizeArray;
    }
    renderSizeButtons = () => {//once i get redux added in the unike key problem will be solved
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