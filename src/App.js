import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

import Card from "./components/Card"
//import icons

import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io"

import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs"

import { TbTemperatureCelsius } from "react-icons/tb"
import { ImSpinner8 } from "react-icons/im"

const App = () => {
  const [data, setData] = useState(null)
  const [location, setLocation] = useState("Bucharest")
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    axios.get(url).then(
      (res) => {
        setData(res.data)
      },
      [location]
    )
  })

  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className="text-5xl animate-spin" />
        </div>
      </div>
    )
  }

  let icon = null
  switch (data.weather[0].main) {
    case "Clouds":
      icon = <IoMdCloudy />
      break
    case "Haze":
      icon = <BsCloudHaze2Fill />
      break
    case "Rain":
      icon = <IoMdRainy />
      break
    case "Clear":
      icon = <IoMdSunny />
      break
    case "Drizzle":
      icon = <BsCloudDrizzleFill />
      break
    case "Snow":
      icon = <IoMdSnow />
      break
    case "Thunderstorm":
      icon = <IoMdThunderstorm />
      break
  }
  return (
    <div>
      <Card />
    </div>
  )
}

export default App
