import { Link } from "react-router-dom";
import NotFoundImg from "../assets/images/not-found.svg";

function NotFound() {
  return (
    <div className='notFound container'>
      <img src={NotFoundImg} alt="not-found" />
      <Link to='/'>You are lost, click Here to go back home</Link>
    </div>
  )
}

export default NotFound