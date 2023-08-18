import { useParams } from "react-router-dom"

const Details = () => {
  const { petId } = useParams()
  return <h2>Hi! ini detail dari petId {petId}</h2>
}

export default Details
