import "./resultsPage.css"
import { useLocation } from "react-router-dom"
import nikeUsers from "./userObjs/nike-userObjs.json"
import adidasUsers from "./userObjs/adidas-userObjs.json"
import athelticGreens from "./userObjs/athelticgreens-userObjs.json"

function ResultsPage() {
  console.log("zains user objs: ", athelticGreens)
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
      userObjs = athelticGreens
      break
  }
  console.log("userobjs", userObjs)
  return (
    <div className="resultsPage">
      <h1 className="resultsTitle">Fluence</h1>
      <h3 className="resultsPeopleHeading">
        Here are some cool people that have worked with{" "}
        <span className="resultsBrand">{brand}</span>!
      </h3>
      {userObjs.map((user) => {
        let followers = 0
        if (user.followers.charAt(user.followers.length - 1) === "K") {
          followers = parseFloat(user.followers.slice(0, -1)) * 1000
        } else if (user.followers.charAt(user.followers.length - 1) === "M") {
          followers = parseFloat(user.followers.slice(0, -1)) * 1000000
        } else {
          followers = parseInt(user.followers)
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
                  @{user.username}
                </a>
              </div>
              <div className="resultsUserInfo">
                Platform <br></br>
                <span className="userInfoSpan">TikTok</span>
              </div>
              <div className="resultsUserInfo">
                Followers <br></br>
                <span className="userInfoSpan">{followers}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ResultsPage
