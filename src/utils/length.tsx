import React from 'react';

export function inchesXcentimeter(value: number) {

    return value * 2.54;
}

export function feetsXcentimeter(value: number) {

    return value * 30.48;
}

export function centimeterXmeter(value: number) {

    return value * 0.01;
}

export function meterXcentimeter(value: number) {

    return value * 100;
}

export function yardsXmeter(value: number) {

    return value * 0.9144;
}

export function stadiumsXmeter(value: number) {

    return value * 201.17;
}

export function meterXkilometer(value: number) {

    return value * 0.001;
}

export function kilometerXmeter(value: number) {

    return value * 1000;
}

export function kilometerXmiles(value: number) {

    return value * 1.6093;
}

export function milesXkilometer(value: number) {

    return value * 0.621371;
}
