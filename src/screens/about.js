import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';


class About extends Component {

  handlePress = () => {
    this.props.navigation.navigate('Profile');
  }

  render(){
    return (
      <View style={styles.container}>
         <Text>About</Text>
         <Button
           title="Ir al profile"
           onPress={this.handlePress}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //para que se expanda por toda la pantalla
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default About;
