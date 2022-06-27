import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

//Usado PROPS para poder receber os valores de outro componente
export default function ResultImc(props) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
  )
}
