/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { Button, Header, Image, Avatar, Input, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons';


const App: () => React$Node = () => {
  return (
    <>
      <ScrollView>
        <StatusBar barStyle="light-content"/>
        <Header
          placement='center'
          leftComponent={{ icon: 'home', color: 'white' }}
          centerComponent={{ text: 'Exercici de manel', style: { color: '#fff' } }}
        />
        <Image
          source={{ uri: 'https://www.wallpaperup.com/uploads/wallpapers/2013/08/19/135949/00297a2528269ffcd01955cb6acb0a12.jpg' }}
          style={{ width: '100%', height: 175 }}
        />
        <Avatar
          rounded
          source={{ uri:'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg'}}
        />
        <Input
          placeholder='Login'
          leftIcon={{ 
            name: 'account_box',
            size: 25,
            color: "black"
          }}
        />
        <Input
          placeholder='Password'
          leftIcon={{ 
            name: 'lock',
            size: 25,
            color: "black"
          }}
        />
        <Button icon='check_circle' title="Entrar..." type="outline"/>
        <Card>
          <Card.Title>2n DAM</Card.Title>
          <Image
            source={{ uri: 'https://blogs.florida.es/floridauniversitariablog/wp-content/uploads/sites/19/2018/10/FLORIDA-UNIVERSITARIA.png' }}
            style={{ width: '100%', height: 175 }}
          />
          <Text>Circle Formatiu de Desenvolupament D'Aplicacions Multiplataforma</Text>
        </Card>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  dam: {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 28,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
