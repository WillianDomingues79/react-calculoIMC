import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30
  },
  form: {
    width: '100%'
  },
  formLabel: {
    color: '#000000',
    fontSize: 18,
    paddingLeft: 20
  },
  input: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 10
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#d13040',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30
  },
  textButtonCalculator: {
    fontSize: 20,
    color: '#ffffff'
  },
  errorMessage: {
    fontSize: 12,
    color: '#5336a3',
    fontWeight: 'bold',
    paddingLeft: 20
  },
  exibitionResultImc: {
    width: '100%',
    height: '60%'
  },
  listImcs: {
    marginTop: 20
  },
  resultImcItem: {
    fontSize: 26,
    color: '#5336a3',
    height: 50,
    width: '100%',
    paddingRight: 20
  },
  textResultItemList: {
    fontSize: 16,
    color: '#5336a3'
  },
  textAllResults: {
    color: '#5336a3',
    fontSize: 20,
    paddingTop: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  }
})

export default styles
