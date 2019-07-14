import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';


class Login extends Component {

  handlePress = () => {
    this.props.navigation.navigate('About');
  }

  render(){
    return (
      <View style={styles.container}>
         <Text>Login</Text>
         <Button
           title="Ir al login"
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

export default Login;
