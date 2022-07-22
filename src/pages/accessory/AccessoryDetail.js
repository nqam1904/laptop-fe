import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

const AccessoryDetail = () => {
   const dispatch = useDispatch()
   let { slug } = useParams()
   return (
      <div>Hello</div>
   )
}
export default AccessoryDetail