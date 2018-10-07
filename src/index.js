"use strict";

import { StyleSheet, Platform, I18nManager } from "react-native";

//utils
import { normalize, deviceHeight, deviceWidth } from './utils';

function createStyleSheet(styles) {
    const blushStyles = {};
    Object.keys(styles).forEach(name => {

        let { ios, android, rtl, ltr, ...style } = { ...styles[name] };
        // check if the platform is ios
        if (ios && Platform.OS === "ios") {
            style = { ...style, ...ios };
        }
        // check if the platform is android
        if (android && Platform.OS === "android") {
            style = { ...style, ...android };
        }

        if (rtl && I18nManager.isRTL) {
            style = { ...style, ...rtl }
        }

        if (ltr && !I18nManager.isRTL) {
            style = { ...style, ...ltr }
        }

        blushStyles[name] = style;
    });
    return StyleSheet.create(blushStyles);
}

const Blush = (input) => {
    let inputedStyles = {};
    if (typeof input === 'function') { inputedStyles = input({ normalize, deviceHeight, deviceWidth }); }
    else if (typeof input === 'object') { inputedStyles = input; }
    else { throw new Error("Blush only accept a function or an object as a parameter.") }
    const finalStyles = createStyleSheet(inputedStyles);
    return finalStyles
}

export default Blush;