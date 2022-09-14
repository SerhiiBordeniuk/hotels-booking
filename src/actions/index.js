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

export const hotelTotal = (item) => {
  return {
    type: 'HOTEL_TOTAL',
    payload: item
  }
}
