

const HotelService = () => {
  
  const getAllHotels = async () => {
    const res = await request('https://6308173c46372013f5762546.mockapi.io/')
    return res.data.results.map()
  }

  console.log(getAllHotels())

}



