import { CarWidget } from "../CarWidget"

export const NavBar = () => {
    return(
        <ol style={{marginLeft: 20, marginRight: 20, listStyleType: "none"}}>
            <li style={{display: "inline", marginLeft: 5, marginRight: 10, fontSize: 35}}><a href="" style={{textDecoration: "none"}}>Inicio</a></li>
            <li style={{display: "inline", marginLeft: 5, marginRight: 10, fontSize: 35}}><a href="" style={{textDecoration: "none"}}>Modelos</a></li>
            <li style={{display: "inline", marginLeft: 5, marginRight: 10, fontSize: 35}}><a href="" style={{textDecoration: "none"}}>Contactanos</a></li>
            <li style={{display: "inline", marginLeft: 5, marginRight: 10, fontSize: 35}}> <CarWidget/> </li>
        </ol>
    )
}