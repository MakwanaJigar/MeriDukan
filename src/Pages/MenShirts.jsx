import React from 'react';
import Filter from '../Components/Filter';
// import MenShirt1 from '../Images/MenShirts/MenShirt-1.avif'
// import MenShirt2 from '../Images/MenShirts/MenShirt-2.avif'
// import MenShirt3 from '../Images/MenShirts/MenShirt-3.avif'
// import MenShirt4 from '../Images/MenShirts/MenShirt-4.avif'
// import MenShirt5 from '../Images/MenShirts/MenShirt-5.avif'
// import MenShirt6 from '../Images/MenShirts/MenShirt-6.avif'
// import MenShirt7 from '../Images/MenShirts/MenShirt-7.avif'
// import MenShirt8 from '../Images/MenShirts/MenShirt-8.avif'
// import MenShirt9 from '../Images/MenShirts/MenShirt-9.avif'
// import MenShirt10 from '../Images/MenShirts/MenShirt-10.avif'
// import MenShirt11 from '../Images/MenShirts/MenShirt-11.avif'
// import MenShirt12 from '../Images/MenShirts/MenShirt-12.avif'
// import MenShirt13 from '../Images/MenShirts/MenShirt-13.avif'
// import MenShirt14 from '../Images/MenShirts/MenShirt-14.avif'
// import MenShirt15 from '../Images/MenShirts/MenShirt-15.avif'
// import Filter from '../Components/Filter';

const MenShirts = () => {

  const cardData = [
    {
      title: 'Shirt',
      content: '$20.23',
      imageUrl: 'https://images.unsplash.com/photo-1591357037205-166318b51afd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1609178879134-23206a67e48d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1598032895455-526c9e347a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1602810318660-d2c46b750f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1608030609295-a581b8f46672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Shirt',
      content: '10.23',
      imageUrl: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
  ];

  return (
    <>
    <h2 id='DATA'>Men's Shirts</h2>
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
      
//     <div className="containe mb-5 mx-5 ">
//     <Filter />
//     </div>

// <div className="container">
      
//      <div className="row">

//     <div className="col-md-3 col-12" >
//       <div className="card" style={{width: "18rem"}}>
//         <img src={MenShirt1} id="img" className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>
   
//     <div className="col-md-3 col-12" >
//     <div className="col">
//       <div className="card" style={{width: "18rem"}}>
//         <img src={MenShirt2} id="img" className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>

//     </div>
//     <div className="col-md-3 col-12" >
//     <div className="col">
//       <div className="card" style={{width: "18rem"}}>
//         <img src={MenShirt3} id="img" className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>

//     </div>
//     <div className="col-md-3 col-12" >
//     <div className="col">
//       <div className="card" style={{width: "18rem"}}>
//         <img src={MenShirt4} id="img" className="card-img-top" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">Card title</h5>
//           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     </div>

//     </div>
  
//      </div>

      
//      <div className="row">

// <div className="col-md-3 col-12" >
//   <div className="card" style={{width: "18rem"}}>
//     <img src={MenShirt5} id="img" className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
// </div>

// <div className="col-md-3 col-12" >
// <div className="col">
//   <div className="card" style={{width: "18rem"}}>
//     <img src={MenShirt6} id="img" className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
// </div>

// </div>
// <div className="col-md-3 col-12" >
// <div className="col">
//   <div className="card" style={{width: "18rem"}}>
//     <img src={MenShirt7} id="img" className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
// </div>

// </div>
// <div className="col-md-3 col-12" >
// <div className="col">
//   <div className="card" style={{width: "18rem"}}>
//     <img src={MenShirt8} id="img" className="card-img-top" alt="..."/>
//     <div className="card-body">
//       <h5 className="card-title">Card title</h5>
//       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//       <a href="#" className="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
// </div>

// </div>

//      </div>


//      <div className="row">

//       <div className="col-md-3 col-12" >
//         <div className="card" style={{width: "18rem"}}>
//           <img src={MenShirt9} id="img" className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>

//       <div className="col-md-3 col-12" >
//       <div className="col">
//         <div className="card" style={{width: "18rem"}}>
//           <img src={MenShirt10} id="img" className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>

//       </div>
//       <div className="col-md-3 col-12" >
//       <div className="col">
//         <div className="card" style={{width: "18rem"}}>
//           <img src={MenShirt11} id="img" className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>

//       </div>
//       <div className="col-md-3 col-12" >
//       <div className="col">
//         <div className="card" style={{width: "18rem"}}>
//           <img src={MenShirt12} id="img" className="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>

//       </div>

//      </div>


//     <div className="row">

//           <div className="col-md-3 col-12" >
//             <div className="card" style={{width: "18rem"}}>
//               <img src={MenShirt13} id="img" className="card-img-top" alt="..."/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-3 col-12" >
//           <div className="col">
//             <div className="card" style={{width: "18rem"}}>
//               <img src={MenShirt14} id="img" className="card-img-top" alt="..."/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>

//           </div>
//           <div className="col-md-3 col-12" >
//           <div className="col">
//             <div className="card" style={{width: "18rem"}}>
//               <img src={MenShirt15} id="img" className="card-img-top" alt="..."/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>

//           </div>
//           <div className="col-md-3 col-12" >
//           <div className="col">
//             <div className="card" style={{width: "18rem"}}>
//               <img src={MenShirt1} id="img" className="card-img-top" alt="..."/>
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//               </div>
//             </div>
//           </div>

//           </div>

//     </div>

// </div>





//     </>
//   );
// }

export default MenShirts;
