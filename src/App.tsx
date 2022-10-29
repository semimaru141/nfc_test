/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleProp,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import onPress from './nfc';
import { useStart } from './hooks/start';
import { Timer } from './Timer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {
    isRunning,
    txt,
    startDatetime,
    start,
    stop
  } = useStart();

  const onP = useCallback(onPress(start), [start]);

  const backgroundStyle: StyleProp<ViewStyle> = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <SafeAreaView>
      <View style={backgroundStyle}>
        {
          isRunning ? (
            <View>
              <Timer startDatetime={startDatetime} />
              <Pressable
                onPress={stop}
                >
                <Text style={{fontSize: 30}}>{txt}</Text>
              </Pressable>
            </View>
          )
          :
          <Pressable
            
            onPress={onP}
            >
            <Text style={{fontSize: 50}}>{txt}</Text>
          </Pressable>
        }
      </View>
    </SafeAreaView>
  );
};

export default App;
