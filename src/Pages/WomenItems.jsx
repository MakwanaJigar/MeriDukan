import React from 'react';
import Filter from '../Components/Filter';
// import WTShirt1 from '../Images/Women TShirts/WTshirt-1.webp'
// import WTShirt2 from '../Images/Women TShirts/WTshirt-2.webp'
// import WTShirt3 from '../Images/Women TShirts/WTshirt-3.webp'
// import WTShirt4 from '../Images/Women TShirts/WTshirt-4.webp'
// import WTShirt5 from '../Images/Women TShirts/WTshirt-5.webp'
// import WTShirt6 from '../Images/Women TShirts/WTshirt-6.webp'
// import WTShirt7 from '../Images/Women TShirts/WTshirt-7.webp'
// import WTShirt8 from '../Images/Women TShirts/WTshirt-8.webp'
// import WTShirt9 from '../Images/Women TShirts/WTshirt-9.webp'
// import WTShirt10 from '../Images/Women TShirts/WTshirt-10.webp'
// import WTShirt11 from '../Images/Women TShirts/WTshirt-11.webp'
// import WTShirt12 from '../Images/Women TShirts/WTshirt-12.webp'
// import WTShirt13 from '../Images/Women TShirts/WTshirt-13.webp'
// import WTShirt14 from '../Images/Women TShirts/WTshirt-14.webp'
// import WTShirt15 from '../Images/Women TShirts/WTshirt-15.webp'
// import Filter from '../Components/Filter';

const WomenItems = () => {

  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1',
      imageUrl: 'https://images.unsplash.com/photo-1519722417352-7d6959729417?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjBUJTIwc2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2',
      imageUrl: 'https://images.unsplash.com/photo-1533077650324-5cca2426cd20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBUJTIwc2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1586102931834-b14a6c079331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1608175602729-8980becd9c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1652638848589-470539b54b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdvbWVuJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1635650804977-3f9044b7d96e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdvbWVuJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1685640205910-75d56b280e70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdvbWVuJTIwVCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
  ];

  return (
    
    <>
    <h2 id='DATA'>Women's T-Shirts</h2>
      <Filter />
    <div className="container mt-5" id='DATA'>
      
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3 col-6 mb-4">
            <div className="card">
              <img src={card.imageUrl} id='img' className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
                <a href="#" className="btn btn-success"><i className='fa fa-shopping-cart'></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};


//   return (
//     <>

//     <div className="containe mb-5">
//     <Filter />
//     </div>

                        
// <div className="container">
      
//       <div className="row mb-4">
 
//      <div className="col-md-3 col-12" >
//        <div className="card" style={{width: "18rem"}}>
//          <img src={WTShirt1} id="img" className="card-img-top" alt="..."/>
//          <div className="card-body">
//            <h5 className="card-title">Card title</h5>
//            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//            <a href="#" className="btn btn-primary">Go somewhere</a>
//          </div>
//        </div>
//      </div>
    
//      <div className="col-md-3 col-12" >
//      <div className="col">
//        <div className="card" style={{width: "18rem"}}>
//          <img src={WTShirt2} id="img" className="card-img-top" alt="..."/>
//          <div className="card-body">
//            <h5 className="card-title">Card title</h5>
//            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//            <a href="#" className="btn btn-primary">Go somewhere</a>
//          </div>
//        </div>
//      </div>
 
//      </div>
//      <div className="col-md-3 col-12" >
//      <div className="col">
//        <div className="card" style={{width: "18rem"}}>
//          <img src={WTShirt3} id="img" className="card-img-top" alt="..."/>
//          <div className="card-body">
//            <h5 className="card-title">Card title</h5>
//            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//            <a href="#" className="btn btn-primary">Go somewhere</a>
//          </div>
//        </div>
//      </div>
 
//      </div>
//      <div className="col-md-3 col-12" >
//      <div className="col">
//        <div className="card" style={{width: "18rem"}}>
//          <img src={WTShirt4} id="img" className="card-img-top" alt="..."/>
//          <div className="card-body">
//            <h5 className="card-title">Card title</h5>
//            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//            <a href="#" className="btn btn-primary">Go somewhere</a>
//          </div>
//        </div>
//      </div>
 
//      </div>
   
//       </div>
 
       
//       <div className="row mb-4">
 
//  <div className="col-md-3 col-12" >
//    <div className="card" style={{width: "18rem"}}>
//      <img src={WTShirt5} id="img" className="card-img-top" alt="..."/>
//      <div className="card-body">
//        <h5 className="card-title">Card title</h5>
//        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//        <a href="#" className="btn btn-primary">Go somewhere</a>
//      </div>
//    </div>
//  </div>
 
//  <div className="col-md-3 col-12" >
//  <div className="col">
//    <div className="card" style={{width: "18rem"}}>
//      <img src={WTShirt6} id="img" className="card-img-top" alt="..."/>
//      <div className="card-body">
//        <h5 className="card-title">Card title</h5>
//        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//        <a href="#" className="btn btn-primary">Go somewhere</a>
//      </div>
//    </div>
//  </div>
 
//  </div>
//  <div className="col-md-3 col-12" >
//  <div className="col">
//    <div className="card" style={{width: "18rem"}}>
//      <img src={WTShirt7} id="img" className="card-img-top" alt="..."/>
//      <div className="card-body">
//        <h5 className="card-title">Card title</h5>
//        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//        <a href="#" className="btn btn-primary">Go somewhere</a>
//      </div>
//    </div>
//  </div>
 
//  </div>
//  <div className="col-md-3 col-12" >
//  <div className="col">
//    <div className="card" style={{width: "18rem"}}>
//      <img src={WTShirt8} id="img" className="card-img-top" alt="..."/>
//      <div className="card-body">
//        <h5 className="card-title">Card title</h5>
//        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//        <a href="#" className="btn btn-primary">Go somewhere</a>
//      </div>
//    </div>
//  </div>
 
//  </div>
 
//       </div>
 
 
//       <div className="row mb-4">
 
//        <div className="col-md-3 col-12" >
//          <div className="card" style={{width: "18rem"}}>
//            <img src={WTShirt9} id="img" className="card-img-top" alt="..."/>
//            <div className="card-body">
//              <h5 className="card-title">Card title</h5>
//              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//              <a href="#" className="btn btn-primary">Go somewhere</a>
//            </div>
//          </div>
//        </div>
 
//        <div className="col-md-3 col-12" >
//        <div className="col">
//          <div className="card" style={{width: "18rem"}}>
//            <img src={WTShirt10} id="img" className="card-img-top" alt="..."/>
//            <div className="card-body">
//              <h5 className="card-title">Card title</h5>
//              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//              <a href="#" className="btn btn-primary">Go somewhere</a>
//            </div>
//          </div>
//        </div>
 
//        </div>
//        <div className="col-md-3 col-12" >
//        <div className="col">
//          <div className="card" style={{width: "18rem"}}>
//            <img src={WTShirt11} id="img" className="card-img-top" alt="..."/>
//            <div className="card-body">
//              <h5 className="card-title">Card title</h5>
//              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//              <a href="#" className="btn btn-primary">Go somewhere</a>
//            </div>
//          </div>
//        </div>
 
//        </div>
//        <div className="col-md-3 col-12" >
//        <div className="col">
//          <div className="card" style={{width: "18rem"}}>
//            <img src={WTShirt12} id="img" className="card-img-top" alt="..."/>
//            <div className="card-body">
//              <h5 className="card-title">Card title</h5>
//              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//              <a href="#" className="btn btn-primary">Go somewhere</a>
//            </div>
//          </div>
//        </div>
 
//        </div>
 
//       </div>
 
 
//      <div className="row mb-4">
 
//            <div className="col-md-3 col-12" >
//              <div className="card" style={{width: "18rem"}}>
//                <img src={WTShirt13} id="img" className="card-img-top" alt="..."/>
//                <div className="card-body">
//                  <h5 className="card-title">Card title</h5>
//                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                  <a href="#" className="btn btn-primary">Go somewhere</a>
//                </div>
//              </div>
//            </div>
 
//            <div className="col-md-3 col-12" >
//            <div className="col">
//              <div className="card" style={{width: "18rem"}}>
//                <img src={WTShirt14} id="img" className="card-img-top" alt="..."/>
//                <div className="card-body">
//                  <h5 className="card-title">Card title</h5>
//                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                  <a href="#" className="btn btn-primary">Go somewhere</a>
//                </div>
//              </div>
//            </div>
 
//            </div>
//            <div className="col-md-3 col-12" >
//            <div className="col">
//              <div className="card" style={{width: "18rem"}}>
//                <img src={WTShirt15} id="img" className="card-img-top" alt="..."/>
//                <div className="card-body">
//                  <h5 className="card-title">Card title</h5>
//                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                  <a href="#" className="btn btn-primary">Go somewhere</a>
//                </div>
//              </div>
//            </div>
 
//            </div>
//            <div className="col-md-3 col-12" >
//            <div className="col">
//              <div className="card" style={{width: "18rem"}}>
//                <img src={WTShirt2} id="img" className="card-img-top" alt="..."/>
//                <div className="card-body">
//                  <h5 className="card-title">Card title</h5>
//                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                  <a href="#" className="btn btn-primary">Go somewhere</a>
//                </div>
//              </div>
//            </div>
 
//            </div>
 
//      </div>
 
//  </div>  

   

//     </>
//   );
// }

export default WomenItems;
