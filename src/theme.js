import {Platform} from 'react-native'


export const theme = {
    appBar: {
        primary: "#24292e",
        textPrimary: "#fff",
        textSecondary: "#888"
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586869',
        primary: "#8366d6",
        white: '#fff'
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            android: "System",
            ios: "Roboto",
            default: "System",
        })
    },
    fontWeights: {
        normal: "400",
        bold: "700"
    }
}