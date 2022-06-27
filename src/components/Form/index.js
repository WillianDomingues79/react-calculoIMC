import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {
  //Todas essas constates que tem o useState irá acontecer
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
  const [imc, setImc] = useState(null)
  const [textButtom, setTextButton] = useState('Calcular')

  //retorna o calculo do IMC
  function imcCalculator() {
    return setImc(
      (
        (weight.replace(',', '.') * 1) /
        (height.replace(',', '.') * 1 * height.replace(',', '.') * 1)
      ).toFixed(2)
    )
  }

  //Chama a função de calculo para o clique do botão e depois valida se os campos estão vazios
  //Se for diferente de nulo
  function validatorImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc('Seu imc é igual:')
      setTextButton('Calcular Novamente')
      return
    }
    //Se for nulo
    setImc(null)
    setTextButton('Calcular')
    setMessageImc('Preencha o peso e altura')
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight} //Usado para alterar o estado do campo
          value={height} //Seta o valor como a variavel height
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight} //Usado para alterar o estado do campo
          value={weight} //Seta o valor como a variavel weight
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        />
        {/* Chama a função de validação para o botão */}
        <TouchableOpacity
          onPress={() => validatorImc()}
          style={styles.buttonCalculator}
        >
          <Text style={styles.textButtonCalculator}>Calcular</Text>
        </TouchableOpacity>
      </View>
      {/* Chama o componente de resultado */}
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  )
}
