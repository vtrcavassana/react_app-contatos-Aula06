import React, { useState } from 'react';
import { View, Alert, FlatList } from 'react-native';

import ContatoInput from '../componentes/ContatoInput';
import ContatoItem from '../componentes/ContatoItem';
import ContatoCartao from '../componentes/ContatoCartao';

const TelaPrincipal = (props) => {

  const apagarContato = (idASerApagada) => {
    Alert.alert(
      "Apagar contato?",
      "Essa ação não podera ser revertida!",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Apagar", onPress: () => props.removerContato(idASerApagada) }
      ],
      { cancelable: true }
    );
  }

	return (
      <View>
        <ContatoInput
          onAdicionarContato = {props.adicionarContato}
        />
        <FlatList
          data = {props.contatos}
          renderItem = {
            contato => (
              // Mostra o ID (10) + nome + tel
              <ContatoCartao
                id = {contato.item.id}
                nome = {contato.item.nome}
                telefone = {contato.item.telefone}
                onDelete = {apagarContato}
                onEdit = {props.editarContato}
              />
            )
          }
        />
      </View>
	);
}

export default TelaPrincipal;