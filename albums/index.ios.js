import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create component
//flex:1 expand the component to fill the content of the area
const App = () =>
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>;

//Render to device
AppRegistry.registerComponent('albums', () => App);
