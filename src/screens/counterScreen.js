import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SizeCounter } from '../components/sizeCounter/sizeCounter';

export default class CounterScreen extends React.Component {
    constructor (props) {
        super(props);
        var navParams = this.getLists();
        this.state = {typeSizes: navParams};
    }
    getLists = () => {//this function retrives the lists from the props
        const { navigation } = this.props;
        return {sizes: navigation.getParam('sizes'), types: navigation.getParam('types')};
    }
    render() {
        return(
            <View style={styles.container}>
                <SizeCounter props={this.state.typeSizes}></SizeCounter>
            </View>
        )
    }
}
const styles = StyleSheet.create({//wtfits Yeah not sure on these, but here is majic css because react native. ref: https://facebook.github.io/react-native/docs/style 
    container: {//i'm not sure if this is the best place for css in react or if it is it's own files or what but we'll get it figured out buddy, right? 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
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