import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Medidas from '../medidas/Medidas';
import Cores from '../cores/Cores';

const ContatoItem = (props) => {
  return (
    <TouchableOpacity 
      delayLongPress = {1100} 
      onLongPress = {props.onDelete.bind(this, props.id)}
      onPress = {props.onEdit.bind(this, props.id)}>
      <View style = {styles.listaDeContatos}>
        <Text>{props.id}</Text>
        <Text>{props.nome}</Text>
        <Text>{props.telefone}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listaDeContatos: {
    padding: Medidas.padding12,
    backgroundColor: Cores.cinza,
    borderColor: Cores.preto,
    borderWidth: Medidas.borderBottomWidth1,
    marginBottom: Medidas.marginBottom8,
    borderRadius: Medidas.borderRadius8
  }
});

export default ContatoItem;