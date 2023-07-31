import React from 'react';
import Filter from '../Components/Filter';
// import MenJEans1 from '../Images/MensJeans/MenJeans-1.avif'
// import MenJEans2 from '../Images/MensJeans/MenJeans-2.avif'
// import MenJEans3 from '../Images/MensJeans/MenJeans-3.avif'
// import MenJEans4 from '../Images/MensJeans/MenJeans-4.avif'
// import MenJEans5 from '../Images/MensJeans/MenJeans-5.avif'
// import MenJEans6 from '../Images/MensJeans/MenJeans-6.avif'
// import MenJEans7 from '../Images/MensJeans/MenJeans-7.avif'
// import MenJEans8 from '../Images/MensJeans/MenJeans-8.avif'
// import MenJEans9 from '../Images/MensJeans/MenJeans-9.avif'
// import MenJEans10 from '../Images/MensJeans/MenJeans-10.avif'
// import MenJEans11 from '../Images/MensJeans/MenJeans-11.avif'
// import MenJEans12 from '../Images/MensJeans/MenJeans-12.avif'
// import MenJEans13 from '../Images/MensJeans/MenJeans-13.avif'
// import MenJEans14 from '../Images/MensJeans/MenJeans-14.avif'
// import MenJEans15 from '../Images/MensJeans/MenJeans-15.avif'
// import MenJEans16 from '../Images/MensJeans/MenJeans-16.avif'

const MenJeans = () => {

  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2',
      imageUrl: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1520517238863-2a437c6b1b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1605192554260-6a38e95f9bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1599004211404-7632fe4f8617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1586441310277-ed1a8fae585d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1591213954196-2d0ccb3f8d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
  ];

  return (
    
    <>
    <h2 id='DATA'>Men's Jeanss</h2>
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

     {/* <div className="row mb-5">

    <div className="col-md-3 col-12" >
      <div className="card" style={{width: "18rem"}}>
        <img src={MenJEans1} id="img" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Jeans</h5>
      <p className="card-text">$16.02</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
        </div>
      </div>
    </div> */}
   
    {/* <div className="col-md-3 col-12" >
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src={MenJEans2} id="img" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Jeans</h5>
      <p className="card-text">$20</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
        </div>
      </div>
    </div>

    </div>
    <div className="col-md-3 col-12" >
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src={MenJEans3} id="img" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Jeans</h5>
      <p className="card-text">$23.22</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
        </div>
      </div>
    </div>

    </div>
    <div className="col-md-3 col-12" >
    <div className="col">
      <div className="card" style={{width: "18rem"}}>
        <img src={MenJEans4} id="img" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Jeans</h5>
      <p className="card-text">$25</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
        </div>
      </div>
    </div>

    </div> */}
  
     {/* </div> */}
{/*       
     <div className="row mb-5">

     <div className="col-md-3 col-12" >
<div className="col">
  <div className="card" style={{width: "18rem"}}>
    <img src={MenJEans5} id="img" className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Jeans</h5>
      <p className="card-text">$10.02</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
    </div>
  </div>
</div>
</div>
    

<div className="col-md-3 col-12" >
<div className="col">
  <div className="card" style={{width: "18rem"}}>
    <img src={MenJEans6} id="img" className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Jeans</h5>
      <p className="card-text">$17.02</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
    </div>
  </div>
</div>
</div>

<div className="col-md-3 col-12" >
<div className="col">
  <div className="card" style={{width: "18rem"}}>
    <img src={MenJEans7} id="img" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Jeans</h5>
      <p className="card-text">$13.02</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
    </div>
  </div>
</div>

</div>
<div className="col-md-3 col-12" >
<div className="col">
  <div className="card" style={{width: "18rem"}}>
    <img src={MenJEans8} id="img" className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title">Jeans</h5>
      <p className="card-text">$15.02</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
    </div>
  </div>
</div>
</div>
     </div>

     <div className="row mb-5">

      <div className="col-md-3 col-12" >
        <div className="card" style={{width: "18rem"}}>
          <img src={MenJEans9} id="img" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Jeans</h5>
      <p className="card-text">$10.52</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-12" >
      <div className="col">
        <div className="card" style={{width: "18rem"}}>
          <img src={MenJEans10} id="img" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Jeans</h5>
      <p className="card-text">$20</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
          </div>
        </div>
      </div>

      </div>
      <div className="col-md-3 col-12" >
      <div className="col">
        <div className="card" style={{width: "18rem"}}>
          <img src={MenJEans11} id="img" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Jeans</h5>
      <p className="card-text">$10</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
          </div>
        </div>
      </div>

      </div>
      <div className="col-md-3 col-12" >
      <div className="col">
        <div className="card" style={{width: "18rem"}}>
          <img src={MenJEans12} id="img" className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">Jeans</h5>
      <p className="card-text">$14</p>
      <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
          </div>
        </div>
      </div>

      </div>

     </div>

    <div className="row mb-5">

          <div className="col-md-3 col-12" >
            <div className="card" style={{width: "18rem"}}>
              <img src={MenJEans13} id="img" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Jeans</h5>
                <p className="card-text">$30</p>
                <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
             </div>
            </div>
          </div>

          <div className="col-md-3 col-12" >
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src={MenJEans14} id="img" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Jeans</h5>
                    <p className="card-text">$13</p>
                    <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
              </div>
            </div>
          </div>

          </div>
          <div className="col-md-3 col-12" >
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src={MenJEans15} id="img" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Jeans</h5>
                    <p className="card-text">$13.02</p>
                    <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
              </div>
            </div>
          </div>

          </div>
          <div className="col-md-3 col-12" >
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src={MenJEans16} id="img" className="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Jeans</h5>
                <p className="card-text">$13.02</p>
                <a href="#" className="btn btn-primary"><i className='fa fa-shopping-cart'></i></a>
              </div>
            </div>
          </div>

          </div>

    </div> */}

// </div>
// </>
//   );
// }

export default MenJeans;
