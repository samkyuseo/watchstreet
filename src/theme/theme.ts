import { extendTheme } from "@chakra-ui/react";

const components = {
    Heading: {
        baseStyle: {
            fontFamily: "barlow",
            fontWeight: 900
        }
    },
    Text: {
        baseStyle: {
            fontFamily: "barlow"
        },
        variants: {
            bold: {
                fontWeight: 800
            }
        }
    },
    Input: {
        baseStyle: {
            field: {
                fontFamily: "barlow",
            }
        }
    }
}

const color = {
    green: {
        dark: "#1CB68B"
    }

}

export const theme = extendTheme({ components, color });