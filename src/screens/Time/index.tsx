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
    secondsXminutes,
    secondsXhours,
    secondsXdays,
    secondsXweeks,
    minutesXseconds,
    minutesXhours,
    minutesXdays,
    minutesXweeks,
    minutesXmonths,
    minutesXyears,
    hoursXseconds,
    hoursXminutes,
    hoursXdays,
    hoursXweeks,
    hoursXmonths,
    hoursXyears,
    daysXseconds,
    daysXminutes,
    daysXhours,
    daysXweeks,
    daysXmonths,
    daysXyears,
    weeksXseconds,
    weeksXminutes,
    weeksXhours,
    weeksXdays,
    weeksXmonths,
    weeksXyears,
    monthsXseconds,
    monthsXminutes,
    monthsXhours,
    monthsXdays,
    monthsXweeks,
    monthsXyears,
    yearsXseconds,
    yearsXminutes,
    yearsXhours,
    yearsXdays,
    yearsXweeks,
    yearsXmonths
} from '../../utils/time';

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

export function Time() {

    const [value, setValue] = useState(null);
    const [convertedValue, setConvertedValue] = useState(null);

    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    
    const [firstLabel, setFirstLabel] = useState('');
    const [secondLabel, setSecondLabel] = useState('');

    const lengths = [
        { label: 'Segundos', value: 'seg' },
        { label: 'Minutos', value: 'mi' },
        { label: 'Horas', value: 'h' },
        { label: 'Dias', value: 'd' },
        { label: 'Semanas', value: 'sem' },
        { label: 'Meses', value: 'me' },
        { label: 'Anos', value: 'a' },
    ];

    function handleConverter() {

        const comboValue = firstValue + secondValue;

        switch (comboValue) {
            case 'segmi':
                setConvertedValue(secondsXminutes(value))
                break;

            case 'segh':
                setConvertedValue(secondsXhours(value))
                break;


            case 'segd':
                setConvertedValue(secondsXdays(value))
                break;

            case 'segse':
                setConvertedValue(secondsXweeks(value))
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
                        value={firstValue}
                        onChange={item => {
                            setFirstValue(item.value);
                            setFirstLabel(item.label);
                            setValue(null);
                            setConvertedValue(null);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                    />
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
                        value={secondValue}
                        onChange={item => {
                            setSecondValue(item.value);
                            setSecondLabel(item.label);
                            setValue(null);
                            setConvertedValue(null);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                    />
                </Drop>

                <Context>
                    <LabelContainer>
                        <Label>{firstLabel}</Label>
                        <TextInput
                            placeholder='0'
                            onChangeText={text => setValue(Number(text))}
                            keyboardType='numeric'
                        >
                            {value}
                        </TextInput>
                    </LabelContainer>
                    <LabelContainer>
                        <Label>{secondLabel}</Label>
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
        width: '50%',
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
