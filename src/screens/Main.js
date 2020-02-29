import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MainScreen = ({navigation, route}) => {
  //   useEffect(() => {
  //     if (route.params?.post) {
  //     }
  //   }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Part</Text>
      <Button
        title="Go to Setting"
        onPress={() => {
          navigation.navigate('setting', {name: 'wolfag'});
        }}
      />
      <Text>Post:{route.params?.post}</Text>
    </View>
  );
};

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

export default MainScreen;
