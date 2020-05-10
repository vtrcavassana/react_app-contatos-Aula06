import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Medidas from '../medidas/Medidas';
import Cores from '../cores/Cores';

const TelaDetalhes = (props) => {

	const [editar, setEditar] = useState(false);

	const [nome, setNome] = useState(props.contato.nome);
	const [telefone, setTelefone] = useState(props.contato.telefone);

	const capturaNome = (nome) => {
		setNome(nome);
	}

	const capturaTelefone = (telefone) => {
		setTelefone(telefone);
	}


	let bttnTitle
	if(editar){
		bttnTitle = "Salvar";
	}
	else{
		bttnTitle = "Editar";
	}

	return (
    	<View style = {styles.contato}>
            <TextInput
              placeholder = "Nome"
              style = {styles.contatoInputText}
              onChangeText = {capturaNome}
              value = {nome}
              editable = { editar }
            />
            <TextInput
              placeholder = "Telefone"
              style = {styles.contatoInputText}
              onChangeText = {capturaTelefone}
              value = {telefone}
              editable = { editar }
              keyboardType = {'number-pad'}
            />
            <View style = {styles.botoes}>
            	<Button
              		title = { bttnTitle }
              		onPress = {() => {
              			if(editar){
              				props.salvarContato(props.contato.id, nome, telefone);
              			}else{
              				setEditar(true);
              			}
              		}}
            	/>
            	<Button
              		title = "Voltar"
              		onPress = {() => {
              			if(editar){
              				setEditar(false);
              			}else{
              				props.setTelaPrincipal(true);
              			}
              		}}
            	/>
            </View>
        </View>
	);
}

const styles = StyleSheet.create({
    contato: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    contatoInputText: {
      width: Medidas.width80,
      borderBottomColor: Cores.preto,
      borderBottomWidth: Medidas.borderBottomWidth1,
      padding: Medidas.padding2,
      marginBottom: Medidas.marginBottom8
    },
    botoes: {
	  flexDirection: 'row',
	  flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
});

export default TelaDetalhes;