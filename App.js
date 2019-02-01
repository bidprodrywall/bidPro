/**
 * bidPro app
 * note structure is subject to change. once i figure out a structuring convention i like, i'll set it up better
 *  @authors Tanner, Dyllan
 * 
 * @toDo: everything
 * 
 */

import React, { Component } from 'react';//these are imports you need to import things that you want to use
import { Platform, StyleSheet, View } from 'react-native';
import { SizeCounter } from './src/components/sizeCounter/sizeCounter';

const instructions = Platform.select({//this is cool eventualy we will problably want to use this for things
  ios: 'suck on dezz nuts',
  android: 'This is fine',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SizeCounter></SizeCounter>
      </View>
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
