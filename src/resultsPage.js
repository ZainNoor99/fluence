import "./resultsPage.css"
import { useLocation } from "react-router-dom"

function ResultsPage() {
  const location = useLocation()
  let users = location.state.users
  users = [...users, ...users, ...users, ...users]
  console.log("results", users)
  return (
    <div className="resultsPage">
      <h1 className="resultsTitle">Fluence</h1>
      <h3 className="resultsPeopleHeading">
        Here are some cool people that have worked with{" "}
        <span className="resultsBrand">Nike</span>!
      </h3>
      {users.map((user) => (
        <div className="userDiv">
          <div className="userPic">
            <img
              loading="lazy"
              src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8cb6606169e27a8a405c0c4d0a849af9~c5_100x100.jpeg?x-expires=1677794400&amp;x-signature=SwWfXsnV5vKuILswAyB3oYqc2aw%3D"
              class="tiktok-1zpj2q-ImgAvatar e1e9er4e1"
            />
          </div>
          <div className="userStats">
            <div className="resultsUserInfoName">@{user}</div>
            <div className="resultsUserInfo">
              Platform <br></br>
              <span className="userInfoSpan">TikTok</span>
            </div>
            <div className="resultsUserInfo">
              Followers <br></br>
              <span className="userInfoSpan">10.2k</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResultsPage
