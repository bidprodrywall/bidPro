import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SizeCounter } from '../components/sizeCounter/sizeCounter';
import Swiper from 'react-native-swiper';

export default class CounterScreen extends React.Component {
    constructor(props) {
        super(props);
        var navParams = this.getLists();
        this.state = { types: navParams.types, sizes: navParams.sizes };
    }
    getLists = () => {//this function retrives the lists from the props
        const { navigation } = this.props;
        return { sizes: navigation.getParam('sizes'), types: navigation.getParam('types') };
    }
    renderSizeLists = () => {
        return this.state.types.map((type) => {
            return (
                <View style={styles.container}>
                    <Text style={styles.title}>{type.name}</Text>
                    <SizeCounter sizes={this.state.sizes}></SizeCounter>
                </View>
            );
        })
    }
    render() {
        return (
            <Swiper
                loop={false}
                showsPagination={true}
                index={0}>
                {this.renderSizeLists()}
            </Swiper>
        );
    }
}
const styles = StyleSheet.create({//wtfits Yeah not sure on these, but here is majic css because react native. ref: https://facebook.github.io/react-native/docs/style 
    container: {//i'm not sure if this is the best place for css in react or if it is it's own files or what but we'll get it figured out buddy, right? 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});