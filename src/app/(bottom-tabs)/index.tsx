import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { store } from '@/store';
import CounterEx from '@/components/CounterEx';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function HomeScreen() {
  console.log('render lại cả function')
  const [count, setCount] = useState(0);

  const [inforUser, setInforUser] = useState({
    name: 'Ne ne',
    age: 25,
  });


  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const updateInforUser = () => {
    setInforUser((prev) => {
      if (prev.name === 'Kinn') {
        return {
          name: 'Ne ne',
          age: 25,
        };
      }

      return {
        name: 'Kinn',
        age: 21,
      };
    });
  };

  useEffect(() => {
    console.log('useEffect này chạy mỗi lần component render');
  });

  // useEffect(() => {
  //   console.log('useEffect chỉ chạy lần đầu tiên khi component render');
  // }, []);

  useEffect(() => {
    console.log('useEffect khởi chạy khi bien thay đổi giá trị');
  }, [count]);

  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count;

  }, [count]);

  console.log(
    'prevCount = ', prevCount.current, 'count = ', count
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Provider store={store} >
          <View style={{ width: 100}}>
            <CounterEx />
          </View>
        </Provider>
        <View style={styles.seperate} />
        <Button title='Cập nhật thông tin người dùng' onPress={updateInforUser} color="red" />
        <Text style={styles.textCount}>{inforUser.name} - {inforUser.age}</Text>
      </View>
      <Button
        title="Đi tới trang photo"
        onPress={() => router.push('/PhotoScreen')}
      />

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodycount: {
    width: 40
  },
  seperate: {
    height: 20
  },

  textCount: {
    fontSize: 40
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});