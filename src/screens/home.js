
import './home.css'
import banner from '../assats/images/baner.png'
import Header from '../components/header'
import Footer from '../components/footer'

import  UserData from '../components/userData'



export default function Home(props) {
    return (
        <div>
           
           <Header/>

    <section className="maincontainer">
  
       <div className="banner">
          <img   src={banner} alt="" srcset=""   style={{width:"100%",}} />
       </div>

        
        <div className="inner-main-container dis-f js-c ">  

           
           <UserData/>

        </div>

    </section>



           <Footer/>
     

        </div>
    )
}



