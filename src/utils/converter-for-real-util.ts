class Converter {
    static forReal = (value: number): string => {
        return `R$ ${value.toFixed(2)}`
    }
}

export default Converter