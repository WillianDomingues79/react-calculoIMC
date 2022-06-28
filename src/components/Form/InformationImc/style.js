import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: 3,
    padding: 5,
    width: '98%',
    marginLeft: '1%',
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  titleInformation: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textInformation: {
    fontSize: 15,
    textAlign: 'center',
    color: 'red'
  }
})

export default styles
