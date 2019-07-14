import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';


class Profile extends Component {

  handlePress = () => {
    this.props.navigation.navigate('Home');
  }

  render(){
    return (
      <View style={styles.container}>
         <Text>Profile</Text>
         <Button title="Ir al Profile"
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

export default Profile;
