import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { GlobalContext, GlobalProvider } from './src/database/GlobalContext.js';
import initializeDatabase from './src/database/database.js';

import login from './src/views/Login.js';
import Carreras from './src/views/Carreras.js';
import semestres from './src/views/semestres.js';
import materias from './src/views/Materias.js';
import SubCom from './src/views/SubCompetencias.js';
import Materia_1 from './src/views/Materias/Materia_1.js';
import Tema_1 from './src/views/Temas/Tema_0.js';

const stack = createNativeStackNavigator();

function App() {  
  NavigationBar.setBackgroundColorAsync("#0C356A");

  useEffect( () => {
    initializeDatabase();
  }, []);

  return (
    <GlobalProvider>
      <NavigationContainer>
        <stack.Navigator initialRouteName={ 'login' }>

          <stack.Screen name="Login" component={login} options={{ headerShown: false }} 
          />

          {/*  Este elemento puede ser integrado en caso de abarcar mas carreras

          <stack.Screen name="Carreras" component={Carreras}
            options={{
              headerLeft: null, 
              headerShown: false, 
            }}
          /> 

          */}

          < stack.Screen name="semestres" component={ semestres } 
          options={{ 
            headerLeft: null, 
            headerTintColor:'#fff', 
            headerStyle:{ backgroundColor:'#0C356A' }, 
            headerShadowVisible:false, 
            headerShown:false,
          }} />
          <stack.Screen name="Materias" component={ materias } options={{ headerTintColor:'#fff', headerStyle:{ backgroundColor:'#0C356A' } }} />

          <stack.Screen name="Sub-Competencias" component={ SubCom } options={{ headerTintColor:'#fff', headerStyle:{ backgroundColor:'#0C356A' } }} />
          <stack.Group>

            {/* <stack.Screen name='Materia_1' component={ Materia_1 } options={{ title:'Matematicas', headerTintColor:'#fff', headerStyle:{ backgroundColor:'#0C356A' } }} /> */}
            
            <stack.Screen name='Temas' component={ Tema_1 } options={{ title:'Detalles', headerTintColor:'#fff', headerStyle:{ backgroundColor:'#0C356A' }, headerShadowVisible:false }} />

          </stack.Group>
        </stack.Navigator>
        <StatusBar barStyle="auto" />
      </NavigationContainer>
    </GlobalProvider>
  );

}
export default App;