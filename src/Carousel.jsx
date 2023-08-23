import { Component } from "react"

class Carousel extends Component {
  state = {
    active: 0,
  }

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  }

  // lifecycle -->
  // constructor = Hal pertama yang dirender
  // componentDidMount = Hal kedua yang dilakukan/ditampilkan setelah render pertama
  // componentDidUpdate = Proses yang dieksekusi jika ada perubahan pada state. --> useEffect
  // componentWillUnmount = pembersihan. ex: modal

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    })
  }

  render() {
    const { active } = this.state // -> destructuring
    const { images } = this.props

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((item, index) => (
            //eslint-disable-next-line
            <img
              key={item}
              src={item}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
