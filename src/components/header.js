import React from 'react'
import '../screens/home.css'
import img from '../assats/images/logo.png'
import { FaChevronDown ,FaSearch,FaMapMarkerAlt } from "react-icons/fa";

export default function Header() {
    return (
        <div>
            
            <header>
         <section  className="HeaderSection1">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="container-fluid">
               <a className="navbar-brand" href="#">
                <img style={{width:"40px", height:"30px",}}  src={img} alt="" />
               </a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     
                      <form className="d-flex me-3 serchbar1 ">
                      <FaMapMarkerAlt style={{marginTop:"10px",}}/>
                        <input className="form-control  " type="search" placeholder="Pakistan" aria-label="Search" /> 
                        <div class="dropdown dropstart">
                             <button class=" dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <FaChevronDown/></button>
                         <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                         <li><a class="dropdown-item " href="#"><span style={{fontSize:"22px", }}></span> use current Location </a></li>
                            <li><a class="dropdown-item" href="#"><FaMapMarkerAlt style={{margin:"2px",}}/>Punjab</a></li>
                            <li><a class="dropdown-item" href="#"><FaMapMarkerAlt style={{margin:"2px",}}/>islamabad</a></li>
                            <li><a class="dropdown-item" href="#"><FaMapMarkerAlt style={{margin:"2px",}}/>Sindh</a></li>
                        </ul>
                         </div>
                       </form>
                    
                      <form className="d-flex serchbar2 fS25 me-2">
                        <input className="form-control me-4 " type="search" placeholder="Search" aria-label="Search" />
                        <button class="searchbtn" ><FaSearch/></button>
                      </form>
                       <a className="nav-link active" aria-current="page" href="#">Login</a>
                       <form action="/datainput" >
                       <button className="btn " type="submit"  > <label style={{fontSize: 20, fontWeight: 'bolder',}} > &#x271A; SELL </label> </button>
                       </form> 
               </div>
             </div>
           </nav>
        </section>

        <section className="HeaderSection1">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="btn-group" style={{marginRight:"50px",}}>
           <button type="button" className="  dropdown" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
              ALL CATEGORIES <FaChevronDown/>
           </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
             <li><a className="dropdown-item" href="#"> </a></li>
             <li><a className="dropdown-item" href="#">Menu item</a></li>
             <li><a className="dropdown-item" href="#">Menu item</a></li>
            </ul>
        </div>
        <ul className="nav">
            <li className="nav-item"> <a className="nav-link " href="#">Mobile Phone</a> </li>
            <li className="nav-item"> <a className="nav-link " href="#">Cars</a> </li>
            <li className="nav-item"> <a className="nav-link " href="#">Motorcycles</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Houses</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">TV-Video-Audioo</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#"> Tablets </a> </li>
            <li className="nav-item"> <a className="nav-link" href="#">Land &amp; Plots</a> </li>
         </ul>
         </div>
         </div>
         </nav>         

        </section>

      </header>

        </div>
    )
}
