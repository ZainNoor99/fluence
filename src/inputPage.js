import "./inputPage.css"
import { useState } from "react"
import { getData } from "./apiUtil"
import { useNavigate } from "react-router-dom"
import LoadingCircle from "./loadingCircle"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

function InputPage() {
  const navigate = useNavigate()

  const [followers, setFollowers] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [brand, setBrand] = useState("")
  const [brandPlaceHolder, setBrandPlaceHolder] = useState("Comany/Brand")
  const [users, setUsers] = useState([])

  //dropdown stuff
  const options = [
    "Nike",
    "Adidas",
    "Athletic Greens",
    "L'Oréal",
    "Indigo",
    "Gym Shark",
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    toggleDropdown()
  }

  const handleLoading = () => {
    console.log("line 34", isLoading)
    setIsLoading(true)
    console.log("line 36", isLoading)
    setTimeout(() => {
      setIsLoading(false)
    }, 100000000000000000)
    console.log("line 40", isLoading)
  }

  return (
    <div className="inputPage">
      <div className="inputMiddle">
        <h1 className="inputTitle">Fluence</h1>

        <div className="chat-bubble static chat-left">
          <p>I'm looking for Influencers with...</p>
        </div>

        <input
          type="number"
          min={0}
          value={followers}
          placeholder="Number of Followers"
          onChange={(e) => setFollowers(e.target.value)}
          className="chat-bubble chat-right"
        />

        <div className="chat-bubble chat-left">
          <p>On...</p>
        </div>

        <div className="chat-bubble chat-right">
          <p
            style={{
              color: "#909090",
            }}
          >
            TikTok
          </p>
          {/* <div
            style={{
              position: "fixed",
              marginLeft: "3vw",
              marginTop: "-2vh",
              zIndex: "-1"
            }}
          >
            <svg
              width="44"
              height="30"
              viewBox="0 0 44 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.4691 0.777621L43.6199 29.6505L0.410751 27.386L23.4691 0.777621Z"
                fill="white"
              />
            </svg>
          </div> */}
        </div>

        <div
          className="chat-bubble chat-left"
          style={{
            marginBottom: "2px",
          }}
        >
          <p>And...</p>
        </div>

        <div className="chat-bubble static chat-left">
          <p>That have worked with...</p>
        </div>

        {/* <input
          type="text"
          value={brand}
          placeholder={brandPlaceHolder}
          onChange={(e) => setBrand(e.target.value)}
          className="chat-bubble chat-right"
        /> */}

        <div className="chat-bubble chat-right">
          <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <div className="selectedOption">{selectedOption}</div>
              <div>
                <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
              </div>
            </div>
            {isOpen && (
              <ul className="dropdown-options">
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionSelect(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <button
          className="inputButton"
          onClick={async () => {
            handleLoading()
            navigate("/fluence/loading", { state: { brand: selectedOption } })
          }}
        >
          Show me!
        </button>
      </div>
      <div className="input-phone-svg">
        <svg
          width="400"
          height="600"
          viewBox="0 0 230 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_268_633)">
            <path
              d="M218.325 304.623L221.362 363C221.362 363 92.9092 240.594 76.9062 204.779C60.9033 168.964 91.0265 80.37 91.0265 80.37L157.862 117.127L218.325 304.623Z"
              fill="#9F616A"
            />
            <path
              d="M21.3665 55.8652L1.59814 57.7502C1.59814 57.7502 -8.75674 80.37 23.2492 82.255L21.3665 55.8652Z"
              fill="#9F616A"
            />
            <path
              d="M21.3665 90.7374L1.59814 92.6224C1.59814 92.6224 -8.75674 115.242 23.2492 117.127L21.3665 90.7374Z"
              fill="#9F616A"
            />
            <path
              d="M21.3665 128.437L1.59814 130.322C1.59814 130.322 -8.75674 152.942 23.2492 154.827L21.3665 128.437Z"
              fill="#9F616A"
            />
            <path
              d="M27.0147 166.137L7.24634 168.022C7.24634 168.022 -3.10855 190.641 28.8974 192.526L27.0147 166.137Z"
              fill="#9F616A"
            />
            <path
              d="M11.7424 64.9524H13.2424V23.8114C13.2424 20.6844 13.8576 17.5881 15.0527 14.6992C16.2479 11.8102 17.9997 9.18528 20.2081 6.97419C22.4165 4.7631 25.0383 3.00917 27.9237 1.81254C30.8091 0.615907 33.9017 2.39574e-06 37.0249 0H124.082C127.206 -6.38846e-06 130.298 0.615888 133.184 1.81251C136.069 3.00914 138.691 4.76307 140.899 6.97415C143.108 9.18523 144.859 11.8102 146.055 14.6991C147.25 17.588 147.865 20.6843 147.865 23.8113V249.514C147.865 252.641 147.25 255.738 146.055 258.627C144.859 261.516 143.108 264.141 140.899 266.352C138.691 268.563 136.069 270.317 133.184 271.513C130.298 272.71 127.206 273.326 124.082 273.326H37.025C30.7175 273.326 24.6683 270.817 20.2082 266.352C15.7481 261.886 13.2424 255.83 13.2424 249.515V94.2373H11.7424V64.9524Z"
              fill="#3F3D56"
            />
            <path
              d="M36.0655 6.19484H47.4293C46.9067 7.47763 46.7073 8.8694 46.8485 10.2476C46.9897 11.6257 47.4672 12.948 48.239 14.0978C49.0108 15.2477 50.0532 16.1898 51.2744 16.8413C52.4956 17.4928 53.858 17.8336 55.2418 17.8337H105.116C106.5 17.8336 107.862 17.4928 109.083 16.8413C110.304 16.1898 111.347 15.2477 112.119 14.0978C112.89 12.948 113.368 11.6257 113.509 10.2476C113.65 8.86939 113.451 7.47761 112.928 6.19482H123.542C128.253 6.19482 132.77 8.06827 136.101 11.403C139.432 14.7378 141.303 19.2607 141.303 23.9768V249.349C141.303 251.684 140.843 253.996 139.951 256.154C139.058 258.311 137.75 260.271 136.101 261.923C134.452 263.574 132.494 264.884 130.339 265.777C128.184 266.671 125.875 267.131 123.542 267.131H36.0655C33.7331 267.131 31.4236 266.671 29.2688 265.777C27.114 264.884 25.1561 263.574 23.5069 261.923C21.8577 260.271 20.5494 258.311 19.6569 256.154C18.7643 253.996 18.3049 251.684 18.3049 249.349V23.9768C18.3049 21.6417 18.7643 19.3294 19.6569 17.172C20.5494 15.0146 21.8577 13.0543 23.5069 11.4031C25.1561 9.75185 27.114 8.44204 29.2688 7.54841C31.4236 6.65478 33.7331 6.19484 36.0655 6.19484Z"
              fill="white"
            />
            <path
              d="M98.5454 69.3329H61.062V78.3889H98.5454V69.3329Z"
              fill="#EF8600"
            />
            <path
              d="M100.33 108.246H59.2776V117.302H100.33V108.246Z"
              fill="#E5E5E5"
            />
            <path
              d="M125.616 127.7H33.9912V136.756H125.616V127.7Z"
              fill="#E5E5E5"
            />
            <path
              d="M125.616 147.153H33.9912V156.209H125.616V147.153Z"
              fill="#E5E5E5"
            />
            <path
              d="M307 335.028L201.635 214.675L197.87 137.391L158.333 71.4163L147.037 43.1416C147.037 43.1416 120.679 45.9691 142.33 99.6911L151.273 128.437C143.212 145.821 139.035 164.756 139.035 183.922V249.793C139.035 265.304 212.86 349.79 221.453 362.696L307 335.028Z"
              fill="#9F616A"
            />
            <path
              opacity="0.2"
              d="M150.136 77.0068L157.996 73.1393L157.728 72.5933L150.466 76.1671L139.503 47.3901L138.936 47.6072L150.136 77.0068Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M1.70337 57.464L1.49341 58.0347L13.137 62.329L13.347 61.7583L1.70337 57.464Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M1.70337 92.7335L1.49341 93.3042L13.137 97.5985L13.347 97.0278L1.70337 92.7335Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M1.70337 130.435L1.49341 131.006L13.137 135.3L13.347 134.73L1.70337 130.435Z"
              fill="black"
            />
            <path
              opacity="0.2"
              d="M7.80353 168.149L7.54077 168.697L13.2096 171.421L13.4723 170.873L7.80353 168.149Z"
              fill="black"
            />
            <path
              d="M79.8502 234.363C94.351 234.363 106.106 222.594 106.106 208.075C106.106 193.557 94.351 181.787 79.8502 181.787C65.3493 181.787 53.594 193.557 53.594 208.075C53.594 222.594 65.3493 234.363 79.8502 234.363Z"
              fill="#EF8600"
            />
            <path
              d="M77.348 219.172L69.49 209.055L74.0598 205.497L77.7805 210.287L90.351 197.001L94.5545 200.988L77.348 219.172Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_268_633">
              <rect width="307" height="363" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="social-girl-svg">
        <svg width="500" height="450" viewBox="0 0 383 277" fill="none">
          <g clip-path="url(#clip0_268_604)" filter="url(#filter0_dd_268_604)">
            <path
              d="M74.7963 155.94C74.1898 155.968 73.5894 155.808 73.0764 155.483C72.5634 155.157 72.1627 154.682 71.9285 154.12C71.6943 153.559 71.6379 152.939 71.767 152.344C71.8961 151.75 72.2045 151.209 72.6503 150.796C72.725 150.499 72.7785 150.285 72.8532 149.988C72.8265 149.923 72.7996 149.859 72.7726 149.794C70.0466 143.28 60.8078 143.324 58.105 149.849C55.706 155.639 52.6517 161.439 51.8997 167.562C51.5685 170.268 51.7082 173.011 52.3126 175.67C46.6781 163.352 43.7523 149.964 43.7334 136.413C43.7323 133.013 43.9208 129.615 44.2981 126.236C44.6099 123.466 45.0426 120.715 45.596 117.984C48.616 103.167 55.1 89.2793 64.5155 77.4611C69.0726 74.9692 72.7581 71.1372 75.0751 66.4815C75.9145 64.8079 76.5078 63.0214 76.8365 61.1775C76.3224 61.245 75.7999 61.2873 75.2859 61.321C75.1257 61.3294 74.9572 61.3379 74.797 61.3464L74.7366 61.3491C74.1716 61.3745 73.6114 61.2357 73.1233 60.9494C72.6352 60.6631 72.2401 60.2415 71.9855 59.7354C71.7309 59.2293 71.6277 58.6602 71.6883 58.0967C71.749 57.5332 71.9709 56.9992 72.3272 56.5592C72.5492 56.2854 72.7713 56.0118 72.9935 55.7383C73.3307 55.316 73.6762 54.9021 74.0133 54.4799C74.0522 54.4398 74.0888 54.3974 74.1228 54.3531C74.5106 53.8717 74.8981 53.3988 75.2859 52.9173C74.5782 51.8166 73.6264 50.8946 72.5048 50.2231C68.6197 47.9428 63.2598 49.5221 60.4535 53.0441C57.6387 56.5659 57.1078 61.5069 58.0854 65.9071C58.9198 69.674 60.74 73.1284 62.7879 76.4137C62.5772 76.684 62.3581 76.9459 62.1474 77.2162C58.296 82.1794 54.9393 87.5089 52.1253 93.1284C52.9214 86.8959 51.746 79.3874 49.7422 74.5473C47.4612 69.0326 43.1858 64.388 39.4208 59.6205C34.8984 53.8941 25.6248 56.3932 24.828 63.6524C24.8203 63.7227 24.8128 63.793 24.8054 63.8632C25.3647 64.1794 25.9121 64.515 26.4477 64.87C27.1205 65.3205 27.6419 65.9643 27.9435 66.7169C28.245 67.4694 28.3127 68.2957 28.1377 69.0875C27.9627 69.8793 27.553 70.5997 26.9625 71.1542C26.372 71.7087 25.6281 72.0715 24.8283 72.1951L24.7464 72.2077C24.9457 74.2277 25.2978 76.2295 25.7998 78.1959C27.2546 83.6855 29.8252 88.8147 33.3506 93.262C36.876 97.7093 41.2802 101.379 46.2869 104.04C46.6156 104.209 46.9359 104.378 47.2646 104.539C44.4374 112.568 42.664 120.932 41.989 129.42C41.6069 134.428 41.6294 139.458 42.0564 144.462C42.048 144.403 42.0395 144.344 42.0311 144.285C40.9523 138.721 37.9905 133.7 33.6458 130.07C27.1928 124.758 18.076 122.802 11.1144 118.532C7.76326 116.476 3.46905 119.132 4.05391 123.026C4.06325 123.088 4.07274 123.15 4.08238 123.212C5.12014 123.636 6.13057 124.124 7.1078 124.674C7.66703 124.99 8.21445 125.325 8.75005 125.68C9.42291 126.131 9.94428 126.775 10.2458 127.527C10.5474 128.28 10.6151 129.106 10.4401 129.898C10.265 130.69 9.85541 131.41 9.2649 131.965C8.67438 132.519 7.9305 132.882 7.13072 133.005L7.04876 133.018C6.98979 133.027 6.9392 133.035 6.88029 133.043C8.65346 137.287 11.1422 141.192 14.2374 144.589C18.0611 148.701 22.6825 151.987 27.8182 154.245C32.954 156.503 38.496 157.687 44.1043 157.722H44.1127C45.6351 164.352 47.8409 170.806 50.6946 176.979H74.2071C74.2914 176.717 74.3672 176.447 74.4431 176.185C72.2667 176.322 70.0818 176.192 67.9371 175.797C69.6816 173.651 71.426 171.489 73.1705 169.344C73.2094 169.304 73.246 169.261 73.2801 169.217C74.165 168.119 75.0583 167.03 75.9431 165.932L75.9436 165.93C75.9908 162.565 75.6054 159.207 74.797 155.94L74.7963 155.94Z"
              fill="#F2F2F2"
            />
            <path
              d="M354.444 177.875L4.67401 178.019C4.52649 178.019 4.38502 177.96 4.28071 177.855C4.1764 177.751 4.1178 177.609 4.1178 177.461C4.1178 177.313 4.1764 177.172 4.28071 177.067C4.38502 176.963 4.52649 176.904 4.67401 176.904L354.444 176.76C354.591 176.76 354.733 176.819 354.837 176.923C354.941 177.028 355 177.17 355 177.317C355 177.465 354.941 177.607 354.837 177.712C354.733 177.816 354.591 177.875 354.444 177.875Z"
              fill="#CACACA"
            />
            <path
              d="M300.544 177.522C284.618 178.197 275.613 177.706 264.003 167.606C256.099 167.396 249.816 161.667 249.997 154.836C250.178 148.005 256.756 142.619 264.661 142.83L293.36 144.193C301.265 144.404 315.964 143.917 315.783 150.748C315.694 154.102 315.692 158.451 315.382 163.007C315.127 166.833 313.471 170.43 310.733 173.108C307.995 175.787 304.367 177.358 300.544 177.522Z"
              fill="#2F2E41"
            />
            <path
              d="M249.39 241.464L241.167 242.811L232.071 211.665L244.208 209.678L249.39 241.464Z"
              fill="#FFB6B6"
            />
            <path
              d="M246.122 176.52C261.454 180.298 272.774 176.043 282.098 176.595C287.399 167.632 304.318 156.247 295.086 151.454C289.946 148.785 237.684 142.633 230.824 149.734C213.182 167.992 235.086 225.653 235.086 225.653L247.268 225.496L251.161 219.928L248.026 213.86L250.991 208.899L247.597 203.788L246.122 176.52Z"
              fill="#2F2E41"
            />
            <path
              d="M255.045 247.688L249.658 249.133L247.335 244.294L246.234 250.052L231.946 253.886C231.261 254.07 230.535 254.03 229.875 253.771C229.214 253.512 228.654 253.049 228.275 252.448C227.896 251.848 227.719 251.141 227.769 250.433C227.819 249.724 228.093 249.049 228.553 248.508L237.853 237.549L236.476 232.396L248.669 229.893L255.045 247.688Z"
              fill="#2F2E41"
            />
            <path
              d="M316.777 231.313L310.775 237.106L285.625 216.665L294.482 208.116L316.777 231.313Z"
              fill="#FFB6B6"
            />
            <path
              d="M268.399 166.912C282.453 172.337 294.744 166.304 306.888 159.31C306.164 148.917 305.759 133.93 295.446 135.247C289.703 135.98 242.235 143.841 240.619 153.592C236.462 178.664 296.04 226.455 296.04 226.455L305.973 219.385L306.017 212.587L299.996 209.381L299.621 203.61L293.93 201.339L268.399 166.912Z"
              fill="#2F2E41"
            />
            <path
              d="M324.96 233.211L321.348 237.469L316.691 234.812L319.052 240.176L309.472 251.471C309.013 252.012 308.393 252.393 307.703 252.556C307.013 252.719 306.289 252.657 305.637 252.379C304.984 252.101 304.438 251.621 304.077 251.009C303.716 250.398 303.559 249.687 303.63 248.98L305.064 234.665L301.009 231.21L309.62 222.204L324.96 233.211Z"
              fill="#2F2E41"
            />
            <path
              d="M260.989 146.233C259.999 146.233 259.437 146.038 259.219 145.621C258.9 145.009 256.86 144.209 257.501 143.282C257.949 142.637 259.03 141.772 258.614 141.274C257.011 139.356 253.01 84.3442 252.067 76.8392C251.835 74.5164 252.15 72.1714 252.984 69.992C255.626 62.492 259.231 60.187 266.413 55.5957C266.996 55.2229 267.604 54.8335 268.235 54.4277C269.051 53.9018 269.006 55.1299 268.958 53.2836C268.904 51.2315 268.849 49.1094 269.852 47.7831L269.917 47.6966L270.023 47.672C272.449 47.11 280.609 46.0664 285.442 47.6796L285.508 47.7024L285.558 47.7521C286.706 48.9026 286.811 51.131 286.912 53.2859C286.995 55.0551 287.073 53.754 287.723 54.4797C290.205 57.253 293.946 58.8554 297.066 59.7645C299.021 60.3275 300.734 61.5283 301.932 63.1768C303.13 64.8252 303.745 66.8271 303.679 68.8654C303.341 79.1323 303.607 95.3668 301.858 106.807C298.948 125.848 325.517 153.346 310.299 153.911C310.338 153.971 310.359 154.04 310.362 154.111C310.364 154.183 310.346 154.253 310.311 154.315C309.225 156.349 264.72 146.233 260.989 146.233Z"
              fill="#E6E6E6"
            />
            <path
              d="M276.391 46.1436C286.409 46.1436 294.531 38.0043 294.531 27.964C294.531 17.9237 286.409 9.78442 276.391 9.78442C266.372 9.78442 258.251 17.9237 258.251 27.964C258.251 38.0043 266.372 46.1436 276.391 46.1436Z"
              fill="#2F2E41"
            />
            <path
              d="M277.851 47.6442C285.048 47.4399 290.717 41.4272 290.513 34.2146C290.309 27.002 284.309 21.3207 277.113 21.5251C269.916 21.7295 264.247 27.7421 264.451 34.9547C264.655 42.1673 270.654 47.8486 277.851 47.6442Z"
              fill="#FFB6B6"
            />
            <path
              d="M277.608 14.6601L272.323 14.8101C268.993 14.9074 265.837 16.3248 263.549 18.7514C261.26 21.1779 260.025 24.4153 260.116 27.7531L260.119 27.8704L260.215 27.9309C263.088 29.8355 266.478 30.8022 269.921 30.6982L270.218 30.6898L273.138 30.5572C273.629 29.2897 273.793 27.9186 273.615 26.5706C274.056 27.8484 274.401 29.1577 274.645 30.4873L287.747 29.8895C288.509 29.8517 289.226 29.5168 289.746 28.9564C290.265 28.3959 290.545 27.6542 290.527 26.8895C290.429 23.552 289.013 20.3898 286.591 18.097C284.169 15.8043 280.938 14.5682 277.608 14.6601Z"
              fill="#2F2E41"
            />
            <path
              d="M267.077 11.3818C265.884 12.8559 263.969 13.4701 262.248 14.2685C259.212 15.7075 256.572 17.867 254.557 20.5598C252.542 23.2526 251.212 26.3974 250.684 29.7215C250.278 32.4283 250.42 35.2144 249.734 37.8616C249.052 40.5085 247.252 43.1376 244.578 43.6696C242.768 44.0325 240.925 43.3805 239.195 42.7343C238.243 42.3821 237.292 42.0284 236.34 41.6732C237.252 39.1777 238.162 36.6822 239.07 34.1868C237.564 36.5602 235.796 38.7564 233.8 40.734C230.39 39.4673 226.977 38.2008 223.561 36.9343C231.871 36.7299 230.225 28.6861 231.854 20.5222C232.75 16.0362 241.366 12.7711 242.952 8.48212C243.809 6.15591 245.313 4.1244 247.286 2.62801C249.259 1.13163 251.618 0.233013 254.085 0.0385226C256.551 -0.155967 259.022 0.361813 261.204 1.53058C263.386 2.69934 265.188 4.47016 266.398 6.63346C268.123 7.2662 268.248 9.92641 267.077 11.3818Z"
              fill="#2F2E41"
            />
            <path
              d="M267.908 16.7884C271.639 16.7884 274.663 13.7576 274.663 10.0189C274.663 6.2802 271.639 3.24939 267.908 3.24939C264.178 3.24939 261.153 6.2802 261.153 10.0189C261.153 13.7576 264.178 16.7884 267.908 16.7884Z"
              fill="#2F2E41"
            />
            <path
              d="M291.902 114.465H260.718C259.65 114.464 258.626 114.038 257.871 113.282C257.116 112.525 256.691 111.499 256.69 110.429V76.8355C256.691 75.7653 257.116 74.7393 257.871 73.9825C258.626 73.2258 259.65 72.8001 260.718 72.799H291.902C292.97 72.8001 293.994 73.2258 294.749 73.9825C295.504 74.7393 295.928 75.7653 295.93 76.8355V110.429C295.928 111.499 295.504 112.525 294.749 113.282C293.994 114.038 292.97 114.464 291.902 114.465Z"
              fill="#3F3D56"
            />
            <path
              d="M261.595 80.0554C262.885 80.0554 263.931 79.0074 263.931 77.7146C263.931 76.4218 262.885 75.3738 261.595 75.3738C260.305 75.3738 259.259 76.4218 259.259 77.7146C259.259 79.0074 260.305 80.0554 261.595 80.0554Z"
              fill="#E6E6E6"
            />
            <path
              d="M261.595 79.1191C262.369 79.1191 262.996 78.4903 262.996 77.7146C262.996 76.9389 262.369 76.3101 261.595 76.3101C260.821 76.3101 260.194 76.9389 260.194 77.7146C260.194 78.4903 260.821 79.1191 261.595 79.1191Z"
              fill="#3F3D56"
            />
            <path
              d="M271.39 112.834L249.97 107.391L246.641 118.436C246.641 118.436 269.685 120.146 270.546 120.154C271.19 121.067 272.096 121.763 273.143 122.15C274.191 122.536 275.331 122.595 276.412 122.318C277.493 122.041 278.465 121.442 279.2 120.6C279.934 119.757 280.395 118.711 280.523 117.6C280.652 116.489 280.44 115.365 279.917 114.377C279.394 113.388 278.583 112.583 277.593 112.066C276.603 111.55 275.48 111.347 274.372 111.484C273.265 111.621 272.225 112.092 271.39 112.834Z"
              fill="#FFB6B6"
            />
            <path
              d="M257.096 62.7466C241.823 70.9256 235.13 89.1588 225.76 105.183C225.567 106.933 225.74 108.705 226.268 110.385C226.797 112.065 227.67 113.616 228.831 114.938C229.991 116.261 231.415 117.326 233.01 118.066C234.605 118.806 236.336 119.204 238.094 119.236L256.424 119.659L254.126 108.324L247.995 104.832L255.242 87.2626L257.096 62.7466Z"
              fill="#E6E6E6"
            />
            <path
              d="M279.735 80.4551L294.354 98.2339L288.316 107.821C288.316 107.821 273.617 84.7905 273.286 83.9937C272.199 83.7396 271.214 83.1608 270.463 82.3339C269.711 81.5069 269.228 80.4707 269.077 79.3625C268.925 78.2542 269.113 77.1261 269.616 76.1272C270.118 75.1284 270.912 74.306 271.891 73.7688C272.87 73.2316 273.988 73.0049 275.099 73.1188C276.209 73.2326 277.259 73.6816 278.109 74.4063C278.959 75.131 279.57 76.0973 279.86 77.1774C280.15 78.2575 280.107 79.4004 279.735 80.4551Z"
              fill="#FFB6B6"
            />
            <path
              d="M301.769 63.2016C306.181 60.7579 319.052 98.4457 305.509 119.881C303.963 120.719 302.26 121.226 300.508 121.367C298.756 121.509 296.994 121.282 295.334 120.703C293.675 120.123 292.154 119.202 290.87 118C289.585 116.798 288.565 115.34 287.875 113.72L280.864 96.5238L292.097 92.9349L297.462 99.1043L296.715 86.8302L303.1 69.3858L301.769 63.2016Z"
              fill="#E6E6E6"
            />
            <path
              d="M155.542 44.4441C167.143 44.4441 176.548 35.0189 176.548 23.3924C176.548 11.766 167.143 2.34082 155.542 2.34082C143.941 2.34082 134.536 11.766 134.536 23.3924C134.536 35.0189 143.941 44.4441 155.542 44.4441Z"
              fill="#EF8600"
            />
            <path
              d="M164.932 19.6667H146.152C145.364 19.6667 144.608 19.9805 144.051 20.5391C143.494 21.0977 143.18 21.8552 143.18 22.6452V41.4655C143.18 42.2555 143.494 43.013 144.051 43.5716C144.608 44.1302 145.364 44.444 146.152 44.444H164.932C165.72 44.444 166.476 44.1302 167.033 43.5716C167.59 43.013 167.904 42.2555 167.904 41.4655V22.6452C167.904 21.8553 167.59 21.0977 167.033 20.5391C166.476 19.9805 165.72 19.6667 164.932 19.6667ZM155.542 38.6627C154.238 38.6627 152.963 38.2751 151.879 37.5491C150.795 36.8231 149.95 35.7912 149.451 34.5839C148.952 33.3766 148.821 32.048 149.076 30.7664C149.33 29.4847 149.958 28.3074 150.88 27.3833C151.802 26.4593 152.977 25.83 154.256 25.5751C155.535 25.3201 156.86 25.451 158.065 25.9511C159.27 26.4511 160.299 27.298 161.024 28.3846C161.748 29.4711 162.135 30.7486 162.135 32.0554C162.135 33.8077 161.44 35.4883 160.204 36.7274C158.967 37.9665 157.291 38.6627 155.542 38.6627ZM162.959 25.4481C162.633 25.4481 162.314 25.3512 162.043 25.1697C161.772 24.9882 161.561 24.7302 161.436 24.4284C161.311 24.1266 161.279 23.7945 161.342 23.474C161.406 23.1536 161.563 22.8593 161.794 22.6283C162.024 22.3973 162.318 22.2399 162.637 22.1762C162.957 22.1125 163.289 22.1452 163.59 22.2702C163.891 22.3952 164.148 22.607 164.329 22.8786C164.511 23.1502 164.607 23.4696 164.607 23.7963C164.607 24.2344 164.434 24.6545 164.124 24.9643C163.815 25.2741 163.396 25.4481 162.959 25.4481Z"
              fill="white"
            />
            <path
              d="M162.11 165.018C173.711 165.018 183.116 155.593 183.116 143.966C183.116 132.34 173.711 122.914 162.11 122.914C150.509 122.914 141.104 132.34 141.104 143.966C141.104 155.593 150.509 165.018 162.11 165.018Z"
              fill="#EF8600"
            />
            <path
              d="M156.705 165.018C153.251 165.02 149.871 164.016 146.977 162.128L145.52 161.179L147.247 161.371C147.699 161.421 148.186 161.451 148.694 161.458C151.022 161.46 153.301 160.789 155.257 159.525C154.094 159.273 153.018 158.72 152.134 157.923C151.249 157.125 150.588 156.11 150.215 154.978L149.999 154.31L150.687 154.445C150.999 154.507 151.316 154.543 151.634 154.552C150.545 153.991 149.63 153.139 148.991 152.092C148.352 151.045 148.012 149.841 148.009 148.614V147.906L148.624 148.179C148.988 148.384 149.374 148.549 149.774 148.669C148.827 147.604 148.239 146.266 148.093 144.847C147.947 143.428 148.251 141.998 148.962 140.762L149.263 140.243L149.639 140.709C152.382 144.111 156.313 146.341 160.636 146.947C160.754 146.964 160.875 146.955 160.99 146.921C161.105 146.886 161.211 146.827 161.301 146.748C161.393 146.668 161.466 146.569 161.517 146.458C161.567 146.347 161.593 146.226 161.593 146.104C161.583 144.784 161.965 143.491 162.691 142.389C163.418 141.288 164.455 140.428 165.67 139.919C166.886 139.41 168.225 139.276 169.517 139.533C170.809 139.79 171.996 140.427 172.925 141.362C174.197 141.084 175.417 140.604 176.538 139.94L177.484 139.379L177.139 140.425C176.82 141.396 176.284 142.28 175.572 143.012C176.204 142.847 176.821 142.633 177.419 142.37L178.7 141.805L177.928 142.975C177.11 144.217 176.088 145.311 174.905 146.21V146.807C174.905 155.759 168.111 165.018 156.742 165.018H156.705Z"
              fill="white"
            />
            <path
              d="M113.029 104.731C124.631 104.731 134.035 95.3058 134.035 83.6793C134.035 72.0528 124.631 62.6276 113.029 62.6276C101.428 62.6276 92.0238 72.0528 92.0238 83.6793C92.0238 95.3058 101.428 104.731 113.029 104.731Z"
              fill="#EF8600"
            />
            <path
              d="M122.419 79.9536H103.64C102.852 79.9536 102.096 80.2674 101.538 80.826C100.981 81.3845 100.668 82.1421 100.668 82.932V101.752C100.668 102.542 100.981 103.3 101.538 103.858C102.096 104.417 102.852 104.731 103.64 104.731H122.419C123.207 104.731 123.963 104.417 124.521 103.858C125.078 103.3 125.391 102.542 125.391 101.752V82.932C125.391 82.1421 125.078 81.3845 124.521 80.826C123.963 80.2674 123.207 79.9536 122.419 79.9536ZM118.893 86.3076H116.739C115.269 86.3076 114.983 87.0053 114.983 88.0355V90.2198H118.489L118.034 93.6495H114.976V102.593C113.669 102.839 112.327 102.835 111.02 102.583V93.6495H108.216V90.2198H111.073V87.6834C111.073 84.6514 113.174 82.9953 115.881 82.9953C117.182 82.9953 118.574 83.0931 118.893 83.1387L118.893 86.3076Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_268_604"
              x="0"
              y="0"
              width="359"
              height="262"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_268_604"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_268_604"
                result="effect2_dropShadow_268_604"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_268_604"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_268_604">
              <rect
                width="351"
                height="254"
                fill="white"
                transform="translate(4)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      {isLoading && <LoadingCircle />}
    </div>
  )
}

export default InputPage
