import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

const Form = ({setCapital, setInteres, setMonths}) => {
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={e => setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={e => setInteres(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={piketSelectStyle}
        onValueChange={value => setMonths(value)}
        placeholder={{
          label: 'Selecciona los plazos...',
          value: null,
        }}
        items={[
          {label: '3 meses', value: 3},
          {label: '6 meses', value: 6},
          {label: '12 meses', value: 12},
          {label: '24 meses', value: 24},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});

const piketSelectStyle = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: '#000',
    paddingRight: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
export default Form;
