export const inc = (item) => {
  return {
    type: 'HOTEL_INC',
    payload: item
  }
}

export const dec = (item) => {
  return {
    type: 'HOTEL_DEC',
    payload: item
  }
}

