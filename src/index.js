"use strict";

import { StyleSheet, Platform, I18nManager } from "react-native";

export default {
    create(styles: Object): { [name: string]: number } {
        const platformStyles = {};
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

            platformStyles[name] = style;
        });
        return StyleSheet.create(platformStyles);
    }
};