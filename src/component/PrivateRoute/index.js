import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = () => {

    return <Navigate to="/" replace />
}
export default PrivateRoute