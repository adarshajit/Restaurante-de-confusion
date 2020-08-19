import React, {Component} from 'react';
import { Navbar, NavbarBrand,Jumbotron } from 'reactstrap';



class Header extends Component{

    render(){

        return(
        <>
            <Navbar dark>
            <NavbarBrand href="/"><h1>reactstrap</h1></NavbarBrand>
        </Navbar>
        <Jumbotron>
        <div className='container'>
            <div className="row row-header">
                <div className="col-12 col-sm-6">
                    <h1>Ristorante Con Fusion</h1>
                    <p>We take inspiration from the worlds best cuisines, and create a fusion experience, Our lipsmacking creations will tickle your culinary senses!</p>
                </div>
            </div>
        </div>
        </Jumbotron>
        </>
        )
    } 

}

export default Header;