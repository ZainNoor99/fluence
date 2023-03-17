import "./resultsPage.css"
import { useLocation } from "react-router-dom"

import nikeUsers from "./userObjs/nike-userObjs.json"
import adidasUsers from "./userObjs/adidas-userObjs.json"
import athelticGreensUsers from "./userObjs/athelticgreens-userObjs.json"
import lorealUsers from "./userObjs/loreal-userObjs.json"
import indigoUsers from "./userObjs/indigo-userObjs.json"
import gymSharkUsers from "./userObjs/gymshark-userObjs.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"

function ResultsPage() {
  let userObjs = []
  const location = useLocation()
  let brand = location.state.brand
  console.log(brand)
  switch (brand) {
    case "Nike":
      userObjs = nikeUsers
      break
    case "Adidas":
      userObjs = adidasUsers
      break
    case "Athletic Greens":
      userObjs = athelticGreensUsers
      break
    case "L'Oréal":
      userObjs = lorealUsers
      break
    case "Indigo":
      userObjs = indigoUsers
      break
    case "Gym Shark":
      userObjs = gymSharkUsers
      break
  }

  userObjs.map((user) => {
    if (user.followers[user.followers.length - 1] === "K") {
      user.followers = Math.floor(
        parseFloat(user.followers.slice(0, -1)) * 1000
      )
    } else if (user.followers[user.followers.length - 1] === "M") {
      user.followers = Math.floor(
        parseFloat(user.followers.slice(0, -1)) * 1000000
      )
    } else {
      user.followers = Math.floor(parseInt(user.followers))
    }
  })

  userObjs.sort((a, b) => (a.followers <= b.followers ? 1 : -1))
  return (
    <div className="resultsPage">
      <h1 className="resultsTitle">Fluence</h1>
      <h3 className="resultsPeopleHeading">
        Here are some cool people that have worked with
        <span className="resultsBrand"> {brand}</span>!
      </h3>

      {userObjs.map((user) => {
        let linkText = user.link
        let userName = user.username
        if (linkText) {
          if (linkText.length > 10) {
            linkText = linkText.substring(0, 10) + "..."
          }
        }

        if (userName) {
          if (userName.length > 12) {
            userName = userName.substring(0, 13) + "..."
          }
        }
        return (
          <div className="userDiv">
            <div className="userPic">
              <img
                loading="lazy"
                src={user.userAvatar}
                class="tiktok-1zpj2q-ImgAvatar e1e9er4e1"
              />
            </div>
            <div className="userStats">
              <div className="resultsUserInfoName">
                <a href={user.profileLink} target="_blank">
                  @{userName}
                </a>
              </div>
              <div className="resultsUserInfo">
                Platform <br></br>
                <span className="userInfoSpan">TikTok</span>
              </div>
              <div className="resultsUserInfo">
                Followers <br></br>
                <span className="userInfoSpan">{user.followers}</span>
              </div>
              <div className="resultsUserInfo">
                Link <br></br>
                {linkText ? (
                  <a
                    className="userInfoSpan"
                    href={"//" + user.link}
                    target="_blank"
                  >
                    {linkText ? linkText : "N/A"}
                  </a>
                ) : (
                  <span className="userInfoSpan">N/A</span>
                )}
              </div>
              <div className="dropdown">
                <span className="resultsUserInfo">
                  Bio{" "}
                  {<FontAwesomeIcon icon={faCircleInfo} color={"#f8ba00"} />}
                </span>
                <span>
                  <div class="dropdown-content">
                    <p>{user.bio}</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ResultsPage
