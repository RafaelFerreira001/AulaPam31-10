import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cadastrar from './components/cadastrar';
import Consultar from './components/consultar';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
        headerStyle:{ // Título: Plano de fundo blue
            backgroundColor: '#00f',            
        },
        headerTitleStyle:{ // Título: Cor e espessura da fonte, 
            color: "#fff",
            fontWeight: '100',            
        },
        headerTitleAlign: 'center', // Título alinhado ao centro
        tabBarStyle:{
            height: 60,
            backgroundColor: '#000'
        }
    }}>
      <Tab.Screen name="Cadastrar" component={Cadastrar} options={{
        tabBarIcon: ()=>(
          <AntDesign name="pluscircleo" size={24} color="black" />
        )
      }} />

    <Tab.Screen name="Consultar" component={Consultar} options={{
        tabBarIcon: ()=>(
          <FontAwesome5 name="clipboard-list" size={24} color="black" />
        )
      }} />
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//FbaP4px07lKKKE8gdwmhi2guQk8VymHpWTij2oD2

//hSagtyjj9tBy4GuQK7X38lVEiqjEm7IUXuBJq7YT