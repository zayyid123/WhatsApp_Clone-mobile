import { View, Text } from 'react-native'
import React from 'react'

import { SparklesIcon } from "react-native-heroicons/solid";

const App = () => {
  return (
    <View
      className='bg-red-300'
    >
      <SparklesIcon size={30} fill={'#000'}/>
      <Text>App</Text>
    </View>
  )
}

export default App