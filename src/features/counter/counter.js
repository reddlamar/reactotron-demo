import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './counterSlice';
import {Pressable, View, Text} from 'react-native';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <View>
        <Pressable
          aria-label="Increment value"
          onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </Pressable>
        <Text>{count}</Text>
        <Pressable
          aria-label="Decrement value"
          onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
        </Pressable>
      </View>
    </View>
  );
}
