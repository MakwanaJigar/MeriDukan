import React from "react";
import Filter from "../Components/Filter";

const MenItems = () => {

  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1',
      imageUrl: 'https://images.unsplash.com/photo-1638173727631-f77a4e331e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHRzaGlydCUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2',
      imageUrl: 'https://images.unsplash.com/photo-1596033389783-d31ed0c54440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHRzaGlydCUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1516442719524-a603408c90cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHRzaGlydCUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1516442443906-71605254b628?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHRzaGlydCUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHRzaGlydCUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1624561249977-d26e211e8611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHRzaGlydCUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1458044508387-6825c08a7870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHRzaGlydCUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx0c2hpcnQlMjBmb3IlMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1514353456378-94e73f7204b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHx0c2hpcnQlMjBmb3IlMjBtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
  ];

  return (
    <>
    <h2 id='DATA'>Men's T-Shirts</h2>
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

         
{/* <div className="container">
      
      <div className="row mb-4">
 
     <div className="col-md-3 col-6" >
       <div className="card" style={{width: "18rem"}}>
         <img src={MTshirt} id="img" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
       </div>
     </div>
    
     <div className="col-md-3 col-6" >
     <div className="col">
       <div className="card" style={{width: "18rem"}}>
         <img src={MTshirt1} id="img" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
       </div>
     </div>
 
     </div>
     <div className="col-md-3 col-6" >
     <div className="col">
       <div className="card" style={{width: "18rem"}}>
         <img src={MTshirt2} id="img" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
       </div>
     </div>
 
     </div>
     <div className="col-md-3 col-6" >
     <div className="col">
       <div className="card" style={{width: "18rem"}}>
         <img src={MTshirt3} id="img" className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">Card title</h5>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
       </div>
     </div>
 
     </div>
   
      </div>
 
       
      <div className="row mb-4">
 
 <div className="col-md-3 col-6" >
   <div className="card" style={{width: "18rem"}}>
     <img src={MTshirt4} id="img" className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" className="btn btn-primary">Go somewhere</a>
     </div>
   </div>
 </div>
 
 <div className="col-md-3 col-6" >
 <div className="col">
   <div className="card" style={{width: "18rem"}}>
     <img src={MTshirt5} id="img" className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" className="btn btn-primary">Go somewhere</a>
     </div>
   </div>
 </div>
 
 </div>
 <div className="col-md-3 col-6" >
 <div className="col">
   <div className="card" style={{width: "18rem"}}>
     <img src={MTshirt6} id="img" className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" className="btn btn-primary">Go somewhere</a>
     </div>
   </div>
 </div>
 
 </div>
 <div className="col-md-3 col-6" >
 <div className="col">
   <div className="card" style={{width: "18rem"}}>
     <img src={MTshirt7} id="img" className="card-img-top" alt="..."/>
     <div className="card-body">
       <h5 className="card-title">Card title</h5>
       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" className="btn btn-primary">Go somewhere</a>
     </div>
   </div>
 </div>
 
 </div>
 
      </div>
 
 
      <div className="row mb-4">
 
       <div className="col-md-3 col-6" >
         <div className="card" style={{width: "18rem"}}>
           <img src={MTshirt8} id="img" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
         </div>
       </div>
 
       <div className="col-md-3 col-6" >
       <div className="col">
         <div className="card" style={{width: "18rem"}}>
           <img src={MTshirt9} id="img" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
         </div>
       </div>
 
       </div>
       <div className="col-md-3 col-6" >
       <div className="col">
         <div className="card" style={{width: "18rem"}}>
           <img src={MTshirt1} id="img" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
         </div>
       </div>
 
       </div>
       <div className="col-md-3 col-6" >
       <div className="col">
         <div className="card" style={{width: "18rem"}}>
           <img src={MTshirt2} id="img" className="card-img-top" alt="..."/>
           <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
         </div>
       </div>
 
       </div>
 
      </div>
 
 
     <div className="row mb-4">
 
           <div className="col-md-3 col-6" >
             <div className="card" style={{width: "18rem"}}>
               <img src={MTshirt3} id="img" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
             </div>
           </div>
 
           <div className="col-md-3 col-6" >
           <div className="col">
             <div className="card" style={{width: "18rem"}}>
               <img src={MTshirt5} id="img" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
             </div>
           </div>
 
           </div>
           <div className="col-md-3 col-6" >
           <div className="col">
             <div className="card" style={{width: "18rem"}}>
               <img src={MTshirt8} id="img" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
             </div>
           </div>
 
           </div>
           <div className="col-md-3 col-6" >
           <div className="col">
             <div className="card" style={{width: "18rem"}}>
               <img src={MTshirt} id="img" className="card-img-top" alt="..."/>
               <div className="card-body">
                 <h5 className="card-title">Card title</h5>
                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" className="btn btn-primary">Go somewhere</a>
               </div>
             </div>
           </div>
 
           </div>
 
     </div>
 
 </div> */}

      

     
    
    {/* </>
  );
}; */}

export default MenItems;
