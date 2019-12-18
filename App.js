import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";



var itemArray = new Array(9).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross : false,
      winMessaged : ''
    }
  }

  drawItem = (itemNumber) => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross
      this.setState({isCross : !itemArray[itemNumber]})
    }
  }

  chooseItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "something";
  }

  chooseItemColor = () => {

  }

  reset = () => {

  }

  winGame = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>this is cool </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

