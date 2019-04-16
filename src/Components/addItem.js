import React, {Component} from 'react';
import {TextInput, Button, View, Text, StyleSheet} from 'react-native';
import db from '../config';

let addItem = (item) =>{
    db.ref('/items').push({
        itemInfo:item
    });
};
let itemsRef = db.ref('/items');

export default class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            itemInfo:'',
            items:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        addItem(this.state.itemInfo);
    }
    handleChange(e){
        this.setState({itemInfo:e.nativeEvent.text})
    }
    componentDidMount(){
        itemsRef.on('value', snapshot =>{
            let data = snapshot.val();
            var items = Object.values(data);
            this.setState({items});
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                value={this.state.itemInfo}
                onChange={this.handleChange} 
                placeholder="Enter Item" 
                style={{borderColor:'#000', width:200, borderWidth:1, height:40}} />
                <Button 
                onPress={this.onClick} 
                color="#841584"
                title="Add me" 
                />
                {this.state.items.map(x=>{
                    return <Text>
                        {x.itemInfo}
                    </Text>
                })}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    //   justifyContent: 'center',
    },

  })