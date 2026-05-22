import { StyleSheet, Image, Platform, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { memo, useCallback, useState } from 'react';

export default function TabTwoScreen() {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };
  const handleIncrease2 = () => {
    setCount2(prev => prev + 1);
  };

  const handleIncrease1 = useCallback(() => {

    setCount3(prevCount => prevCount + 1);

  }, []);
  console.log('render lai ca function')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textCount}>
          {count} - {count2}
        </Text>
        <Button title="Tăng state 1" onPress={handleIncrease} />
        <View style={styles.seperate} />
        <Button title="Tăng state 2" onPress={handleIncrease2} />
        <Content count2={count2} />
        <View style={styles.seperate} />
        <Text
          style={styles.textCount}>{count3}</Text>

        <ContentUseCallBack
          onIncrease={handleIncrease1} />
      </View>

    </SafeAreaView>

  );
}
type Props = {
  onIncrease: () => void;
};
export const Content = memo(({ count2 }: { count2: number }) => {
  console.log('re-render in Content, count =  ', count2);
  return (
    <View style={styles.container}>
      <Text>Use memo - CRO102 - MD19301</Text>
    </View>
  );
});
export const ContentUseCallBack = memo(({ onIncrease }: Props) => {

  console.log('re-render use callback');
  return (

    <View>

      <Text style={styles.textCount}>useCallBack</Text>

      <Button title="Tăng" onPress={onIncrease} />

    </View>


  );

});
const styles = StyleSheet.create({
  seperate: {
    height: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCount: {
    fontSize: 40
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});