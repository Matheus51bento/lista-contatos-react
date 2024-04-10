import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ButtonComponent } from './components/button';
import Line from './components/line';
import { Item } from './components/item';

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "#eee" }]}>
      <View style={styles.card}>
        <View style={styles.perfilContainer}>
          <Image style={styles.tinyLogo} source={require('./assets/eu.png')} />
          <Text>Matheus Bento</Text>
        </View>
        <Line />
        <View style={styles.buttonContainer}>
          <ButtonComponent title='View Profile' color='#ccc' textColor='#666' />
          <ButtonComponent title='Add User' color='#078c4a' textColor='#fff' />
        </View>
      </View>

      <View style={styles.card}>
        <Item nome="Gekko" status={10} />
        <Item nome="KillJoy" status={100} />
        <Item nome="Viper" status={42} />
        <Item nome="Skye" status={-20} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    width: '90%',
    borderRadius: 8,
    elevation: 2,
    marginTop: 15
  },
  perfilContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-evenly',
    marginVertical: 30
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
});
