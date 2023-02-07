
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LineGraph } from 'react-native-graph';
import { generateRandomGraphData, generateSinusGraphData } from './data/GraphData';

const POINT_COUNT = 70
const POINTS = generateRandomGraphData(POINT_COUNT)
const SMALL_POINTS = generateSinusGraphData(9)

const App = () => {
  const [points, setPoints] = useState(SMALL_POINTS)

  console.log('opa', points);

  return (
    <SafeAreaView style={{ flex: 1, }}>
          <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle={'dark-content'} />
      

      <LineGraph
          style={styles.miniGraph}
          animated={false}
          color="#4484B2"
          points={POINTS} />
    </GestureHandlerRootView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  miniGraph: {
    width: 200,
    height: 60,
    marginLeft: 5,
  },
})


export default App;
