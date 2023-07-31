import React from 'react';
import Filter from '../Components/Filter';
// import Shoes1 from '../Images/Shoes/Shoes-1.webp'
// import Shoes2 from '../Images/Shoes/Shoes-2.webp'
// import Shoes3 from '../Images/Shoes/Shoes-3.webp'
// import Shoes4 from '../Images/Shoes/Shoes-4.webp'
// import Shoes5 from '../Images/Shoes/Shoes-5.webp'
// import Shoes6 from '../Images/Shoes/Shoes-6.webp'
// import Shoes7 from '../Images/Shoes/Shoes-7.webp'
// import Shoes8 from '../Images/Shoes/Shoes-8.webp'
// import Shoes9 from '../Images/Shoes/Shoes-9.webp'
// import Shoes10 from '../Images/Shoes/Shoes-10.webp'
// import Shoes11 from '../Images/Shoes/Shoes-11.webp'
// import Shoes12 from '../Images/Shoes/Shoes-12.webp'
// import Shoes13 from '../Images/Shoes/Shoes-13.webp'
// import Shoes14 from '../Images/Shoes/Shoes-14.webp'
// import Shoes15 from '../Images/Shoes/Shoes-15.webp'
// import Filter from '../Components/Filter';

const MWShoes = () => {

  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1663127429325-3acefe582da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
  ];

  return (
    
    <>
    <h2 id='DATA'>Shoes</h2>
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
//     <div>
      
//       <div className="containe mb-5">
//     <Filter />

//     </div>

//     {/*  */}

               
// <div className="container">
      
//       <div className="row mb-4">
 
//      <div className="col-md-3 col-12" >
//        <div className="card" style={{width: "18rem"}}>
//          <img src={Shoes1} id="img" className="card-img-top" alt="..."/>
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
//          <img src={Shoes2} id="img" className="card-img-top" alt="..."/>
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
//          <img src={Shoes3} id="img" className="card-img-top" alt="..."/>
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
//          <img src={Shoes4} id="img" className="card-img-top" alt="..."/>
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
//      <img src={Shoes5} id="img" className="card-img-top" alt="..."/>
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
//      <img src={Shoes6} id="img" className="card-img-top" alt="..."/>
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
//      <img src={Shoes7} id="img" className="card-img-top" alt="..."/>
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
//      <img src={Shoes8} id="img" className="card-img-top" alt="..."/>
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
//            <img src={Shoes9} id="img" className="card-img-top" alt="..."/>
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
//            <img src={Shoes10} id="img" className="card-img-top" alt="..."/>
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
//            <img src={Shoes11} id="img" className="card-img-top" alt="..."/>
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
//            <img src={Shoes12} id="img" className="card-img-top" alt="..."/>
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
//                <img src={Shoes13} id="img" className="card-img-top" alt="..."/>
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
//                <img src={Shoes14} id="img" className="card-img-top" alt="..."/>
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
//                <img src={Shoes15} id="img" className="card-img-top" alt="..."/>
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
//                <img src={Shoes10} id="img" className="card-img-top" alt="..."/>
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


//     {/*  */}
      
//     </div>
//   );
// }

export default MWShoes;
