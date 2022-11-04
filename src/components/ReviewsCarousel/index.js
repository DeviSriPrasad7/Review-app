// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    isCount: 0,
  }

  nextProfile = () => {
    const {isCount} = this.state
    if (isCount < 3) {
      this.setState(prevState => ({
        isCount: prevState.isCount + 1,
      }))
    }
  }

  beforeProfile = () => {
    const {isCount} = this.state
    if (isCount > 0) {
      this.setState(prevState => ({
        isCount: prevState.isCount - 1,
      }))
    }
  }

  profile = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div>
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {isCount} = this.state
    console.log(isCount)
    const filteredList = reviewsList[isCount]
    console.log(filteredList)
    return (
      <div className="main-container">
        <div className="sub-container">
          <button
            type="button"
            onClick={this.beforeProfile}
            className="button"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="img"
            />
          </button>
          {this.profile(filteredList)}
          <button
            type="button"
            onClick={this.nextProfile}
            className="button"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="img"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
