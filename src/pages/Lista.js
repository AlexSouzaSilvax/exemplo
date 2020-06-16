import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';

import ListItem from './src/components/ListItem';

export default function App() {

  const [tarefas] = useState([
    { id: '0', tarefa: 'Comprar Doritos' },
    { id: '1', tarefa: 'Estudar React Native' },
    { id: '2', tarefa: 'Estudar JavaScript' },
    { id: '3', tarefa: 'Se inscrever no canal' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) =>
          <ListItem
            data={item}
            handleLeft={() => {
              tarefas.splice(index, 1);
            }}
            handleRight={() => {
              tarefas.splice(index, 1);

            }}
          />
        }
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>

  );
}

const Separator = () => <View style={{ flex: 1, height: 1, backgroundColor: '#DDD' }} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: Constants.statusBarHeight,
  }
});


