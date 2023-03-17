import React from "react"
import { css } from "@emotion/react"
import { HashLoader } from "react-spinners"
import { useNavigate, useLocation } from "react-router-dom"
import "./loadingPage.css"

const override = css`
  height: 40;
  transform: rotate(5deg);
`

function LoadingCircle() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleTimeout = () => {
    const timer = Math.floor(Math.random() * (10000 - 6000 + 1)) + 6000
    console.log("timer", timer)
    setTimeout(() => {
      navigate("/fluence/results", { state: { brand: location.state.brand } })
    }, timer)
  }
  return (
    <div className="loadingPage">
      <div className="loadingMain">
        <div className="loadingCircle">
          <HashLoader
            color={"#f8ba00"}
            size={200}
            cssOverride={override}
            height={20}
            width={300}
            radius={100}
          />
        </div>
        <div className="loadingText">Loading...</div>
      </div>
      {handleTimeout()}
    </div>
  )
}

export default LoadingCircle
