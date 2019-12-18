import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross : false,
      winMessaged : ''
    }
  }

  drawItem = () => {
    
  }

  chooseItemIcon = () => {

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

