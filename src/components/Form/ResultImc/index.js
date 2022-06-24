import React from 'react'
import { View, Text } from 'react-native'

//Usado PROPS para poder receber os valores de outro componente
export default function ResultImc(props) {
  return (
    <View>
      <Text>{props.messageResultImc}</Text>
      <Text>{props.resultImc}</Text>
    </View>
  )
}
