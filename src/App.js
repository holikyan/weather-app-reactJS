import React, { useState, useEffect } from "react"
import axios from "axios"

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
  BsThreeDots,
} from "react-icons/bs"

import { TbTemperatureCelsius } from "react-icons/tb"
import { ImSpinner8 } from "react-icons/im"

const App = () => {
  const [data, setData] = useState(null)
  const [location, setLocation] = useState("New York")
  const [inputValue, setInputValue] = useState("")
  const [animate, setAnimate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue !== "") {
      setLocation(inputValue)
    } else {
      setAnimate(true)
      setTimeout(() => {
        setAnimate(false)
      }, 500)
    }
    setInputValue("")
  }

  useEffect(() => {
    setLoading(true)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

    axios
      .get(url)
      .then(
        (res) => {
          setTimeout(() => {
            console.log("Fetched data:", res.data)
            setData(res.data)
            setLoading(false)
            setErrorMsg(null)
          }, 1500)
        },
        (error) => {
          console.error("Error fetching data:", error)
          setErrorMsg(error)
          setLoading(false)
        }
      )
      .catch((error) => {
        console.error("Network error:", error)
        setErrorMsg(error)
        setLoading(false)
      })
  }, [location])

  if (!data && !loading) {
    return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <ImSpinner8 className="text-5xl animate-spin text-white" />
      </div>
    )
  }

  let icon = null

  if (data) {
    console.log("Weather main:", data.weather[0].main)

    switch (data.weather[0].main) {
      case "Clouds":
        icon = <IoMdCloudy />
        break
      case "Haze":
        icon = <BsCloudHaze2Fill />
        break
      case "Rain":
        icon = <IoMdRainy className="text-[#31cafb]" />
        break
      case "Clear":
        icon = <IoMdSunny className="text-[#ffde33]" />
        break
      case "Drizzle":
        icon = <BsCloudDrizzleFill className="text-[#31cafb]" />
        break
      case "Snow":
        icon = <IoMdSnow className="text-[#31cafb]" />
        break
      case "Thunderstorm":
        icon = <IoMdThunderstorm />
        break
      default:
        icon = <BsThreeDots />
        break
    }
  }

  const date = new Date()
  return (
    <div className="w-full h-screen bg-gradientBg bg-origin-border bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
      {errorMsg && (
        <div className="w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md">
          {errorMsg.response?.data?.message || errorMsg.message}
        </div>
      )}
      <form
        className={`${
          animate ? "animate-shake" : "animate-none"
        } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8`}
        onSubmit={handleSubmit}
      >
        <div className="h-full relative flex items-center justify-between p-2">
          <input
            onChange={handleInput}
            value={inputValue}
            className="flex-1 bg-transparent outline-none placeholder:text-white text-[15px] font-light pl-6 h-full"
            type="text"
            placeholder="Search by city or country"
          />
          <button
            type="submit"
            className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition"
          >
            <IoMdSearch className="text-2xl text-white" />
          </button>
        </div>
      </form>
      <div className="w-full bg-black/20 max-w-[450px] min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <ImSpinner8 className="text-5xl animate-spin" />
          </div>
        ) : (
          data && (
            <div>
              <div className="flex items-center gap-x-5">
                <div className="text-[87px]">{icon}</div>
                <div>
                  <div className="text-2xl font-semibold">
                    {data.name}, {data.sys.country}
                  </div>
                  <div>
                    {date.getUTCDate()}/{date.getUTCMonth() + 1}/
                    {date.getUTCFullYear()}
                  </div>
                </div>
              </div>
              <div className="my-20">
                <div className="flex justify-center items-center">
                  <div className="text-[144px] leading-none font-light">
                    {parseInt(data.main.temp)}
                  </div>
                  <div className="text-4xl">
                    <TbTemperatureCelsius />
                  </div>
                </div>
                <div className="capitalize text-center">
                  {data.weather[0].description}
                </div>
              </div>
              <div className="max-w-[378px] mx-auto flex flex-col gap-y-6">
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="text-[20px]">
                      <BsEye />
                    </div>
                    <div>
                      Visibility
                      <span className="ml-2">{data.visibility / 1000} km</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="text-[20px]">
                      <BsThermometer />
                    </div>
                    <div className="flex">
                      Feels like
                      <div className="flex ml-2">
                        {parseInt(data.main.feels_like)}
                        <TbTemperatureCelsius />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-x-2">
                    <div className="text-[20px]">
                      <BsWater />
                    </div>
                    <div>
                      Humidity
                      <span className="ml-2">{data.main.humidity} %</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="text-[20px]">
                      <BsWind />
                    </div>
                    <div>
                      Wind <span className="ml-5">{data.wind.speed} m/s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App
