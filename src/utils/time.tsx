import React from 'react';

export function secondsXminutes(value: number) {

    const result = value / 60;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function secondsXhours(value: number) {

    // const result = value * 0.00027778;
    const result = value / 3600;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function secondsXdays(value: number) {

    const result = value * 0.0000115741;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function secondsXweeks(value: number) {

    const result = value * 0.0000016534;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function minutesXseconds(value: number) {

    const result = value * 60;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function minutesXhours(value: number) {

    const result = value * 0.016667;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function minutesXdays(value: number) {

    const result = value * 0.00069444;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function minutesXweeks(value: number) {

    const result = value * 0.0000992063;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function minutesXmonths(value: number) {

    const result = value * 0.0000228154;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function minutesXyears(value: number) {

    const result = value * 0.0000019013;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function hoursXseconds(value: number) {

    const result = value * 3600;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function hoursXminutes(value: number) {

    const result = value * 0.016667;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function hoursXdays(value: number) {

    const result = value * 0.041667;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function hoursXweeks(value: number) {

    const result = value * 0.00595238;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function hoursXmonths(value: number) {

    const result = value * 0.00136893;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function hoursXyears(value: number) {

    const result = value * 0.00011408;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function daysXseconds(value: number) {

    const result = value * 86400;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function daysXminutes(value: number) {

    const result = value * 1440;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function daysXhours(value: number) {

    const result = value * 24;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function daysXweeks(value: number) {

    const result = value * 0.142857;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function daysXmonths(value: number) {

    const result = value * 0.032854;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function daysXyears(value: number) {

    const result = value * 0.00273785;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function weeksXseconds(value: number) {

    const result = value * 604800.02;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function weeksXminutes(value: number) {

    const result = value * 10080;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function weeksXhours(value: number) {

    const result = value * 168;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function weeksXdays(value: number) {

    const result = value * 7;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function weeksXmonths(value: number) {

    const result = value * 0.229979;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function weeksXyears(value: number) {

    const result = value * 0.019165;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function monthsXseconds(value: number) {

    const result = value * 2629800;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function monthsXminutes(value: number) {

    const result = value * 43830;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function monthsXhours(value: number) {

    const result = value * 730.5;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function monthsXdays(value: number) {

    const result = value * 30.4375;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function monthsXweeks(value: number) {

    const result = value * 4.3482;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function monthsXyears(value: number) {

    const result = value * 0.083333;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function yearsXseconds(value: number) {

    const result = value * 31557600;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function yearsXminutes(value: number) {

    const result = value * 525960;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function yearsXhours(value: number) {

    const result = value * 8766;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function yearsXdays(value: number) {

    const result = value * 365.25;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function yearsXweeks(value: number) {

    const result = value * 52.1786;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}

export function yearsXmonths(value: number) {

    const result = value * 12;

    if(Number.isInteger(result)) { return Math.round(result); }
    else { return result.toFixed(1); }
}
