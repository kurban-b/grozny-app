/** Деление числа на разряды по тысячам */
export const spaceDigits = (number: string | number): string => {
    /** Преобразование числа в number, если оно передано строкой */
    const value = typeof number === 'string' ? Number(number) : number
  
    return value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
  }
  