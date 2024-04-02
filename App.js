import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';
import React, { useState } from 'react';

import login from './src/views/Login.js';
import materias from './src/views/Materias.js';
import Materia_1 from './src/views/Materias/Materia_1.js';
import Tema_1 from './src/views/Temas/Tema_0.js';
import { StatusBar } from 'react-native';

const stack = createNativeStackNavigator();

function App() {  
  NavigationBar.setBackgroundColorAsync("#0C356A");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName={ 'login' }>

        <stack.Screen name="Login" component={login} options={{ headerShown: false }} />

        <stack.Screen name="Materias" component={materias}
          options={{
            headerLeft: null, // Oculta el botón de retroceso en el header
            headerShown: false, // Oculta el header en la pantalla 'Materias'
          }}
        />
        <stack.Group>
          <stack.Screen name='Materia_1' component={Materia_1} options={{title:'Matematicas', headerTintColor:'#fff', headerStyle:{backgroundColor:'#0C356A'}}} />
          <stack.Group>
            <stack.Screen name='Regla de 3' component={Tema_1} options={{title:'Detalles', headerTintColor:'#fff', headerStyle:{backgroundColor:'#0C356A'}}} />
          </stack.Group>
        </stack.Group>
      </stack.Navigator>
      <StatusBar barStyle="auto" />
    </NavigationContainer>
  );

}
export default App;