import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;

    align-items: center;

    background-color: black;
`;

export const Text = styled.Text`
    font-size: 18px;
    font-weight: bold;

    color: white;
`;

export const Drop = styled.View`
    width: 80%;

    flex-direction: row;

    justify-content: center;
    align-items: center;

    margin-top: 100px;

    background-color: black;
`;

export const Context = styled.View`
    
    flex-direction: row;
    
    justify-content: center;
    align-items: center;

    background-color: black;
`;

export const LabelContainer = styled.View`
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 20px;

    background-color: black;
`;

export const Label = styled.Text`
    font-size: 12px;
    color: white;

    margin-bottom: 5px;
`;

export const TextInput = styled.TextInput`
    width: 70px;
    height: 50px;

    text-align: center;

    font-size: 12px;

    border-width: 1px;
    border-color: white;
    border-radius: 5px;

    color: white;
`;

export const Button = styled.Button`
    width: 80px;
    height: 30px;

    margin-bottom: 100px;

    background-color: green;
`;
