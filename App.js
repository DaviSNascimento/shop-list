import { StyleSheet, Text, View } from 'react-native';
import Title from '../shop-list/src/components/Title';
import Form from '../shop-list/src/components/Form';
import ResultForm from './src/components/Form/ResultForm';


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    flex: 1,
    backgroundColor: '#f0d0df',

  },
});
