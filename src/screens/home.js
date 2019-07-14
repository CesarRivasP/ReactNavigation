import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';


class Home extends Component {

  handlePress = () => {
    // console.log(this.props.navigation);
    // this.props.navigation esta propiedad es heredada del stackNavigator
    // al parametro navigate, se le pasa la ruta a la que se quiere ir, asi como otros parametros
    this.props.navigation.navigate('Login');  //el nombre tiene que escribirse igual que al declararlo en el stack
  }

  render(){
    return (
      <View style={styles.container}>
         <Text>Home</Text>
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

export default Home;

// <TouchableOpacity>
//   <Text>Home</Text>
// </TouchableOpacity>
