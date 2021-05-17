import '../screens/home.css'
import Card from '../components/card'
import image1 from '../assats/images/phone-app.png'
import image2 from '../assats/images/artificalgrass.png'
import image3 from '../assats/images/car1.png'
import image4 from '../assats/images/car2.png'
import image5 from '../assats/images/bike.png'
import image6 from '../assats/images/filter.png'
import image7 from '../assats/images/home.png'
import image8 from '../assats/images/laptop1.png'
import image9 from '../assats/images/perfume.png'
import image10 from '../assats/images/table.png'
import image11 from '../assats/images/sofa.png'
import image12 from '../assats/images/watch.png'
import image13 from '../assats/images/samsung.png'



const userData = {
    user1:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:2000,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image1,
    },
    user2:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:1000,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image2,
    },
    user3:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:3000,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image3,
    },
    user4:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:56000,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image4,
    },
    user5:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:1300,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image5,
    },
    user6:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:10030,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image6,
    },
    user7:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:17700,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image1,
    },
    user8:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:77000,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image7,
    },
    user9:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:10700,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image8,
    },
    user10:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:100340,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image9,
    },
    user11:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:105400,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image10,
    },
    user12:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:10060,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image11,
    },
    user13:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:6000,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image12,
    },
    user14:{
        name:"abc",
        email:"",
        productCat:{},
        Productprice:2000,
        productDiscription:" this is product discraption",
        location:" karachi",
        uploadDate:new Date().toISOString().slice(0, 10) ,
        image: image13,
    },

    
}





export default function UserData() {
    return (
        <div>
            <div className="inner-main-container t-ali ">
           <h4>Fresh RECOMENDATION</h4>
             <div className="inner-main-container dis-f js-c ">
                <div className="based-on-your-last-serch dis-f f-wrep js-c ">
                   <Card image={ userData.user1.image} price={userData.user1.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                   <Card image={  userData.user2.image} price={userData.user2.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={  userData.user3.image} price={userData.user3.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={  userData.user4.image} price={userData.user4.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                </div>
            </div>
          </div>
          <div className="all-users-data dis-f f-wrep  ">
              <h4>Fresh RECOMENDATION</h4>
                <div className="all-users-data dis-f f-wrep js-c ">
                  <Card image={  userData.user5.image} price={userData.user5.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={ userData.user6.image} price={userData.user6.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={ userData.user7.image} price={userData.user7.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={ userData.user8.image} price={userData.user8.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={ userData.user9.image} price={userData.user9.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={ userData.user10.image} price={userData.user10.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={ userData.user11.image} price={userData.user11.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={ userData.user12.image} price={userData.user12.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
                  <Card image={ userData.user13.image} price={userData.user13.Productprice}  discription={userData.user1.productDiscription} location={userData.user1.location} date={userData.user1.uploadDate}/>
              </div>
           </div>
        </div>
    )
}
