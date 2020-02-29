import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SettingScreen = ({navigation, route}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Setting Part</Text>
    <Text>{`Hello ${route.params.name}`}</Text>
    <Button
      title="Go to Setting again"
      onPress={() => {
        navigation.navigate('setting');
      }}
    />
    <Button
      title="Go to Main"
      onPress={() => {
        navigation.navigate('main');
      }}
    />
    <Button
      title="Go to Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
    <Button
      title="Go First"
      onPress={() => {
        navigation.popToTop();
      }}
    />
    <Button
      title="Post data back to main"
      onPress={() => {
        navigation.navigate('main', {post: 'this is post back'});
      }}
    />
    <Button
      title="Set title"
      onPress={() => {
        navigation.setOptions({title: 'updated'});
      }}
    />
    <Button
      title="Set headertTitle"
      onPress={() => {
        navigation.setOptions({headerTitle: <Text>Header title</Text>});
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default SettingScreen;
