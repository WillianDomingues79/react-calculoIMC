import React from 'react'
import { View, Text } from 'react-native'

import styles from './style'

export default function InformationImc() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleInformation}>Tabela do IMC</Text>
      <Text style={styles.textInformation}>Menor que 18,5 = MAGREZA</Text>
      <Text style={styles.textInformation}>Entre 18,5 e 24,9 = NORMAL</Text>
      <Text style={styles.textInformation}>Entre 25,0 e 29,9 = SOBREPESO</Text>
      <Text style={styles.textInformation}>Entre 30,0 e 39,9 = OBESIDADE</Text>
      <Text style={styles.textInformation}>
        Maior que 40,0 = OBRESIDADE GRAVE
      </Text>
    </View>
  )
}
