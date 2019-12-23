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
      return itemArray[itemNumber] ? "cross" : "circle";
    }
    return "pencil";
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
      this.setState({winMessaged: (itemArray[0] ? "cross" : "circle").concat(" Win") })
    } else if ( (itemArray[3] !== "empty") && (itemArray[3] == itemArray[4]) && (itemArray[4] == itemArray[5]) ) {
      this.setState({winMessaged: (itemArray[3] ? "cross" : "circle").concat(" Win") })
    } else if ( (itemArray[6] !== "empty") && (itemArray[6] == itemArray[7]) && (itemArray[7] == itemArray[8]) ) {
      this.setState({winMessaged: (itemArray[6] ? "cross" : "circle").concat(" Win") })
    } else if ( (itemArray[0] !== "empty") && (itemArray[0] == itemArray[3]) && (itemArray[3] == itemArray[6]) ) {
      this.setState({winMessaged: (itemArray[0] ? "cross" : "circle").concat(" Win") })
    } else if ( (itemArray[1] !== "empty") && (itemArray[1] == itemArray[4]) && (itemArray[4] == itemArray[7]) ) {
      this.setState({winMessaged: (itemArray[1] ? "cross" : "circle").concat(" Win") })
    } else if ( (itemArray[2] !== "empty") && (itemArray[2] == itemArray[5]) && (itemArray[5] == itemArray[8]) ) {
      this.setState({winMessaged: (itemArray[2] ? "cross" : "circle").concat(" Win") })
    } else if ( (itemArray[0] !== "empty") && (itemArray[0] == itemArray[4]) && (itemArray[4] == itemArray[8]) ) {
      this.setState({winMessaged: (itemArray[0] ? "cross" : "circle").concat(" Win") })
    } else if ( (itemArray[2] !== "empty") && (itemArray[2] == itemArray[4]) && (itemArray[4] == itemArray[8]) ) {
      this.setState({winMessaged: (itemArray[2] ? "cross" : "circle").concat(" Win") })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to Taimoor's first game!</Text>
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
            <TouchableOpacity onPress = { () => this.drawItem(1) }>
              <Entypo
                name = {this.chooseItemIcon(1)}
                size = {50}
                color = {this.chooseItemColor(1)} 
              />
            </TouchableOpacity>
            </View>
            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(2) }>
              <Entypo
                name = {this.chooseItemIcon(2)}
                size = {50}
                color = {this.chooseItemColor(2)} 
              />
            </TouchableOpacity>
            </View>


          </View>
          <View style={styles.row}>


            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(3) }>
              <Entypo
                name = {this.chooseItemIcon(3)}
                size = {50}
                color = {this.chooseItemColor(3)} 
              />
            </TouchableOpacity>
            </View>
            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(4) }>
              <Entypo
                name = {this.chooseItemIcon(4)}
                size = {50}
                color = {this.chooseItemColor(4)} 
              />
            </TouchableOpacity>
            </View>
            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(5) }>
              <Entypo
                name = {this.chooseItemIcon(5)}
                size = {50}
                color = {this.chooseItemColor(5)} 
              />
            </TouchableOpacity>
            </View>


          </View>
          <View style={styles.row}>


            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(6) }>
              <Entypo
                name = {this.chooseItemIcon(6)}
                size = {50}
                color = {this.chooseItemColor(6)} 
              />
            </TouchableOpacity>
            </View>
            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(7) }>
              <Entypo
                name = {this.chooseItemIcon(7)}
                size = {50}
                color = {this.chooseItemColor(7)} 
              />
            </TouchableOpacity>
            </View>
            <View style={styles.item}>
            <TouchableOpacity onPress = { () => this.drawItem(8) }>
              <Entypo
                name = {this.chooseItemIcon(8)}
                size = {50}
                color = {this.chooseItemColor(8)} 
              />
            </TouchableOpacity>
            </View>


          </View>
          
        </View>
        <Text style={styles.winMessage}>{this.state.winMessaged}</Text>
        <Button full rounded primary style={styles.button}>
          <Text style={styles.btntext} onPress={this.reset}>Reset Game</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74B9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {

  },
  row: {
    flexDirection: 'row'
  },
  item: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 30
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    margin: 20,
    padding: 10
  },
  btntext: {
    color: "#FFF",
    fontSize: 35,
    fontWeight: 'bold'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 5
  }

});
 
