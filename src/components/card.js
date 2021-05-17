import '../screens/home.css'



export default function Card(props) {
    return (
        <div>
            
        <div className="Card-main-container" >
               <div className="card" style={{width: '15rem' , height:"19rem"  }}>
                <div className="dis-f js-c" > <img src={props.image} className="card-img-top" alt="..."  style={{width:"150px", height:"150px"}}/>  </div> 
             
               <div className="card-body  ">
                  <p className="card-text " style={{textAlign:"left", fontSize:"19px" , fontWeight:"bolder",}}>{props.price}</p>
                  <p className="card-text " style={{textAlign:"left", }}>{props.discription}</p>
               </div>

               <div className="card-body dis-f jc-Sb ">
                  <p className="card-text "style={{ fontSize:"11px" , }} >{props.location}</p>
                  <p className="card-text "  style={{ fontSize:"11px" , }}>{props.date}</p>
               </div>
          </div>
        </div>





        </div>
    )
}
