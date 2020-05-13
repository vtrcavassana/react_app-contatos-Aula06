import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard } from 'react-native';

import TelaPrincipal from './telas/TelaPrincipal';
import TelaDetalhes from './telas/TelaDetalhes';
import Medidas from './medidas/Medidas';
import Cores from './cores/Cores';
import ContatoCartao from './componentes/ContatoCartao';

export default function App() {
  const [telaPrincipal, setTelaPrincipal] = useState (true);
  const [contatoAtual, setContatoAtual] = useState ({});
  const [contatos, setContatos] = useState ([]);
  const [id, setId] = useState (10);

  const removerContato = (idASerRemovida) => {
    setContatos (contatos => {
      return contatos.filter ((contato) => {
        return contato.id !== idASerRemovida;
      })
    });
  };

  const editarContato = (idASerEditada) => {
    setContatoAtual(
      contatos.filter((contato) => {
        return contato.id == idASerEditada;
      })[0]
    );
    setTelaPrincipal(false);
  }

  const salvarContato = (id, nome, telefone) => {
    setContatos(
      contatos.map((contato) => {
        if(contato.id == id)
          return {id: id, nome: nome, telefone: telefone};
        else
          return contato;
      })
    );
    setTelaPrincipal(true);
  }

  const adicionarContato = (nome, telefone) => {
    Keyboard.dismiss();
    setContatos(contatos => {
      //console.log(contatos); para checar os ID's pelo terminal
      setId(id + 2);
      return [...contatos, {
        id: id.toString(),
        nome: nome,
        telefone: telefone
      }];
    });
  }

  let conteudo
  if(telaPrincipal)
    conteudo = 
      <TelaPrincipal
        adicionarContato = { adicionarContato }
        contatos = { contatos }
        removerContato = { removerContato }
        editarContato = { editarContato }
      />;
  else
    conteudo = 
      <TelaDetalhes 
        contato = { contatoAtual }
        salvarContato = { salvarContato }
        setTelaPrincipal = { setTelaPrincipal }/>;


  return (
    <View style = {styles.container}>
      { conteudo }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Medidas.marginTop10,
    padding: Medidas.padding20,
    flex: Medidas.flex1,
    backgroundColor: Cores.branco,
    alignItems: 'center',
    justifyContent: 'center',
 },
})