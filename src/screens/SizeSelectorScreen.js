import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
//database stuff 
//toDo:
export default class SizeSelectorScreen extends React.Component {//this component will allow users to select sizes that they would like to use for the counter
    constructor(props) {
        super(props);
        this.state = {
            sizes: [new Size(8), new Size(10), new Size(12)],
            types: [new Selectable('1/4 Inch'), new Selectable('1/2 Inch'), new Selectable('5/8 Inch'), new Selectable('Type-x'), new Selectable('Denshield')]
        };
    }
    renderSizeSelectButtons = () => {
        return this.state.sizes.map((item) => {//this should problably become it's own component considering it is duplicated, i plan to refactor later
            return (
                <View key={item.name}>
                    <Text>Selected: {item.isSelected() ? 'yes' : 'no'}</Text>{/* dyllan this is the turarary operator, not my favrite to use because it can be confuseing, but it is helpfull sometimes. it works like this ({true|false} ? {if True}| {If False}) */}
                    <Button title={JSON.stringify(item.name)} onPress={() => { item.changeSelection(); this.setState(this.state.sizes); }}></Button>
                </View>
            )
        })
    }
    renderTypeButtons = () => {
        return this.state.types.map((item) => {
            return (
                <View key={item.name}>
                    <Text>Selected: {item.isSelected() ? 'yes' : 'no'}</Text>
                    <Button title={item.name} onPress={() => { item.changeSelection(); this.setState(this.state.types); }}></Button>
                </View>
            )
        })
    }
    getSelectables = () => {
        let retData = {
            sizes: [],
            types: []
        }
        this.state.sizes.map((item) => {// once i set up redux we can just pass id's rather than objects
            if (item.isSelected()) {
                retData.sizes.push({ name: item.name, value: item.getValue() })
            }
        })
        this.state.types.map((item) => {
            if (item.isSelected()) {
                retData.types.push({ name: item.name })
            }
        })
        return (retData);
    }

    routeToCount = () => {
        var retData = this.getSelectables();
        // console.log(retData);
        // this.props.navigation.dispatch(navigateAction);
        this.props.navigation.navigate('SizeCounting', retData);
    }

    testDb = () => {
        // console.dir(db);
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM test_one where 1',
                (tx, results) => {
                    var len = results.rows.length;
                    console.log('len', len);
                    if (len > 0) {
                        console.log('responce', results)
                        //   this.setState({
                        //     userData: results.rows.item(0),
                        //   });
                    } else {
                        alert('No user found');
                        //   this.setState({
                        //     userData: '',
                        //   });
                    }
                }
            );
        })
    }
    render() {
        return (
            <View>
                <View class={styles.outLined}>
                    <Text>Sizes: </Text>
                    {this.renderSizeSelectButtons()}
                </View>
                <View class={styles.outLined}>
                    <Text>Types: </Text>
                    {this.renderTypeButtons()}
                </View>
                <Text></Text>
                <Button title='Start Counting' onPress={() => { this.routeToCount() }}></Button>
                <Button title='testDbConection' onPress={() => { this.testDb() }}></Button>
            </View>
        )
    }
}
class Selectable {
    selected = 0
    constructor(name) {
        this.name = name;
    }
    changeSelection = () => {
        this.selected = !this.selected;
    }
    isSelected = () => {
        return (this.selected);
    }
}
class Size extends Selectable {//extends adds these functions to the default class of selectable. this is nice sience we need the same base functionality for types and for sizes
    getValue = () => {
        return (this.name * 4);
    }
}
const styles = StyleSheet.create({
    outLined: {
        borderColor: '#333333',
        borderWidth: 0.5,
        paddingBottom: 20,
    }
})