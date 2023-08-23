import { Component } from "react"
import { Link } from "react-router-dom"

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary telah menangkap sebuah error", error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          Telah ditemukan sebuah error.
          <Link to="/">Klik disini</Link> untuk kembali ke beranda.
        </h2>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
