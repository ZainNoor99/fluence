import React from "react"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import InputPage from "./inputPage"
import ResultsPage from "./resultsPage"

import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const root = document.getElementById("root")
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/fluence" element={<App />} />
      <Route path="/fluence/input" element={<InputPage />} />
      <Route path="/fluence/results" element={<ResultsPage />} />
    </Routes>
  </BrowserRouter>,
  root
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
