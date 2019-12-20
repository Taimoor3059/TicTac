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

    this.winGame();
  }

  chooseItemIcon = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "Cross" : "Circle";
    }
    return "something";
  }

  chooseItemColor = (itemNumber) => {
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemNumber] ? "red" : "green";
    }
    return "black";
  }

  reset = () => {
    itemArray.fill("empty");
    this.setState({winMessaged : ""})
    this.forceUpdate();
    // forces the state to update 
  };

  winGame = () => {
    if ( (itemArray[0] !== "empty") && (itemArray[0] == itemArray[1]) && (itemArray[1] == itemArray[2]) ) {
      this.setState({winMessaged: () => (itemArray[0] ? "Cross" : "Circle").concat("Win") })
    } else if ( (itemArray[3] !== "empty") && (itemArray[3] == itemArray[4]) && (itemArray[4] == itemArray[5]) ) {
      this.setState({winMessaged: () => (itemArray[3] ? "Cross" : "Circle").concat("Win") })
    } else if ( (itemArray[6] !== "empty") && (itemArray[6] == itemArray[7]) && (itemArray[7] == itemArray[8]) ) {
      this.setState({winMessaged: () => (itemArray[6] ? "Cross" : "Circle").concat("Win") })
    } else if ( (itemArray[0] !== "empty") && (itemArray[0] == itemArray[3]) && (itemArray[3] == itemArray[6]) ) {
      this.setState({winMessaged: () => (itemArray[0] ? "Cross" : "Circle").concat("Win") })
    } else if ( (itemArray[1] !== "empty") && (itemArray[1] == itemArray[4]) && (itemArray[4] == itemArray[7]) ) {
      this.setState({winMessaged: () => (itemArray[1] ? "Cross" : "Circle").concat("Win") })
    } else if ( (itemArray[2] !== "empty") && (itemArray[2] == itemArray[5]) && (itemArray[5] == itemArray[8]) ) {
      this.setState({winMessaged: () => (itemArray[2] ? "Cross" : "Circle").concat("Win") })
    } else if ( (itemArray[0] !== "empty") && (itemArray[0] == itemArray[4]) && (itemArray[4] == itemArray[8]) ) {
      this.setState({winMessaged: () => (itemArray[0] ? "Cross" : "Circle").concat("Win") })
    } else if ( (itemArray[2] !== "empty") && (itemArray[2] == itemArray[4]) && (itemArray[4] == itemArray[8]) ) {
      this.setState({winMessaged: () => (itemArray[2] ? "Cross" : "Circle").concat("Win") })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>

            
            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(0) }>
              <Entypo
                name = {this.chooseItemIcon(0)}
                size = {50}
                color = {this.chooseItemColor(0)} 
              />
            </TouchableOpacity>
            </View>
            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(0) }>
              <Entypo
                name = {this.chooseItemIcon(0)}
                size = {50}
                color = {this.chooseItemColor(0)} 
              />
            </TouchableOpacity>
            </View>
            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(0) }>
              <Entypo
                name = {this.chooseItemIcon(0)}
                size = {50}
                color = {this.chooseItemColor(0)} 
              />
            </TouchableOpacity>
            </View>


          </View>
        </View>
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
 
