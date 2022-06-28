import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList
} from 'react-native'
import InformationImc from './InformationImc'
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
  const [imcList, setImcList] = useState([])

  //retorna o calculo do IMC
  function imcCalculator() {
    let heighFormat = height.replace(',', '.') //Converte as virgulas e pontos para funcionar em Iphone
    let totalImc = (weight / (heighFormat * heighFormat)).toFixed(2)
    setImcList(arr => [...arr, { id: new Date().getTime(), imc: totalImc }])
    setImc(totalImc)
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
    // console.log(imcList)
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
      {/* Começa já setando se for vazio o resultado mostrar os inputs,senão mostra só o resultado */}
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
          <InformationImc />
        </View>
      )}

      <Text style={styles.textAllResults}>Acompanhamento dos Resultados</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC = </Text>
              {item.imc}
            </Text>
          )
        }}
        keyExtractor={item => {
          item.id
        }}
      />
    </View>
  )
}
