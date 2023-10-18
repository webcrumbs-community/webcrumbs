export enum Colors {
    RAINSTORM = "#264653",
    AZURE_TIDE = "#2A9D8F",
    GOLDEN_CHALICE = "#E9C46A",
    SHRIMP_COCKTAIL = "#F4A261",
    BLOODLETTER = "#E76F51",
}

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptopS: '1024px',
    laptopL: '1440px',
    desktop: '1920px'
}

export const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptopS: `(min-width: ${sizes.laptopS})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`
}