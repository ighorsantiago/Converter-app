import React, { useState } from 'react';
import {
   StyleSheet,
   TouchableWithoutFeedback,
   KeyboardAvoidingView,
   Keyboard
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
   centimeterXmeter,
   meterXcentimeter,
   meterXkilometer,
   kilometerXmeter
} from '../../utils/length';

import {
   Container,
   Text,
   Drop,
   Context,
   LabelContainer,
   Label,
   TextInput,
   Button
} from './styles';

export function Length() {

   const [value, setValue] = useState(0);
   const [comboValue, setComboValue] = useState('');
   const [convertedValue, setConvertedValue] = useState(0);
   const [firstValue, setFirstValue] = useState('');
   const [secondValue, setSecondValue] = useState('');

   const lengths = [
      { label: 'Centímetro X Metro', value: 'cm', first: 'Centímetro', second: 'Metro' },
      { label: 'Metro X Centímetro', value: 'mc', first: 'Metro', second: 'Centímetro' },
      { label: 'Metro X Quilometro', value: 'mk', first: 'Metro', second: 'Quilometro' },
      { label: 'Quilometro X Metro', value: 'km', first: 'Quilometro', second: 'Metro' },
   ];

   function handleConverter() {

      switch (comboValue) {
         case 'cm':
            setConvertedValue(centimeterXmeter(value))
            break;

         case 'mc':
            setConvertedValue(meterXcentimeter(value))
            break;


         case 'mk':
            setConvertedValue(meterXkilometer(value))
            break;

         case 'km':
            setConvertedValue(kilometerXmeter(value))
            break;

         default:
            break;
      }
   }

   return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <Container>
            <Drop>
               <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={lengths}
                  search
                  maxHeight={200}
                  labelField="label"
                  valueField="value"
                  placeholder="Select item"
                  searchPlaceholder="Search..."
                  value={comboValue}
                  onChange={item => {
                     setComboValue(item.value);
                     setFirstValue(item.first);
                     setSecondValue(item.second);
                     setValue(0);
                     setConvertedValue(0);
                  }}
                  renderLeftIcon={() => (
                     <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                  )}
               />
            </Drop>

            <Context>
               <LabelContainer>
                  <Label>{firstValue}</Label>
                  <TextInput
                     placeholder='0'
                     onChangeText={text => setValue(Number(text))}
                     keyboardType='numeric'
                  >
                     {value}
                  </TextInput>
               </LabelContainer>
               <LabelContainer>
                  <Label>{secondValue}</Label>
                  <TextInput>{convertedValue}</TextInput>
               </LabelContainer>
            </Context>

            <Button title='Converter' onPress={handleConverter} />
         </Container>
      </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
   dropdown: {
      width: '100%',
      height: 30,
      margin: 16,
      borderBottomColor: 'black',
      borderBottomWidth: 0.5,
      borderRadius: 5,
      backgroundColor: 'white'
   },
   icon: {
      marginRight: 5,
   },
   placeholderStyle: {
      fontSize: 16,
      color: '#fff'
   },
   selectedTextStyle: {
      fontSize: 16,
   },
   iconStyle: {
      width: 20,
      height: 20,
   },
   inputSearchStyle: {
      height: 40,
      fontSize: 16,
   },
});
