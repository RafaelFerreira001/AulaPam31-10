import { StyleSheet, Text, View } from 'react-native';
const Cadastrar =()=>{
    return(
    <View style={styles.container}>
        <Text style={styles.title}>Cadastrar</Text>
    </View>
    
    )
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          padding: 20
        },
        title: {    
            fontSize: 22
        }
      });
    export default Cadastrar