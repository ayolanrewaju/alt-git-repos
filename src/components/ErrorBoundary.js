import { Component } from "react";
import Error from "../assets/images/error.svg";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary container">
          <img src={Error} alt="Error"/>
          <h2>
            Something went wrong. What brought you here? Huh? Just follow instructions!
          </h2>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;