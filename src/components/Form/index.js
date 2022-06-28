import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard
} from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form(props) {
  //Todas essas constates que tem o useState irá acontecer
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
  const [imc, setImc] = useState(null)
  const [textButtom, setTextButton] = useState('Calcular')
  const [errorMessage, setErrorMessage] = useState(null)

  //retorna o calculo do IMC
  function imcCalculator() {
    let heighFormat = height.replace(',', '.') //Converte as virgulas e pontos para funcionar em Iphone
    return setImc((weight / (heighFormat * heighFormat)).toFixed(2))
  }

  function verificationImc() {
    Vibration.vibrate() //Vibra o celular se não tiver nada colocado no campo
    if (imc == null) {
      setErrorMessage('Campo Obrigatório!')
    }
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
      setErrorMessage(null)
    } else {
      //Se for nulo
      verificationImc()
      setImc(null)
      setTextButton('Calcular')
      setMessageImc('Preencha o peso e altura')
    }
  }

  //O Pressable juntamento com o Keyboard.dismiss faz o teclado voltar
  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight} //Usado para alterar o estado do campo
            value={height} //Seta o valor como a variavel height
            placeholder="Ex. 1.75"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
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
            <Text style={styles.textButtonCalculator}>{textButtom}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        /* Chama o componente de resultado */
        <View style={styles.exibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            onPress={() => validatorImc()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{textButtom}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
