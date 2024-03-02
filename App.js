import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './StartScreen';
import QuizScreen from './QuizScreen';
import ResultsScreen from './ResultsScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5B84B1FF',
          },
          headerTintColor: '#FCF6F5FF', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="StartScreen" 
          component={StartScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="QuizScreen" 
          component={QuizScreen} 
          options={{ title: 'Questionnaire' }} 
        />
        <Stack.Screen 
          name="ResultsScreen" 
          component={ResultsScreen} 
          options={{ title: 'Resultados' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};