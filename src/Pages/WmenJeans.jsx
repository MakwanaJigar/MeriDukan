import React from 'react';
// import MenJeans from '../Images/MensJeans/MenJeans-1.avif'
import Filter from '../Components/Filter';

const WmenJeans = () => {
  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1',
      imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2',
      imageUrl: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1548615661-5d58be81cb9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1608370946545-7d93571b5593?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1599447541321-50706296bb7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1619595956858-8a7d60e7f537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1666265384816-f0838e895574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
  ];

  return (
    
    <>
    <h2 id='DATA'>Women's Jeans</h2>
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

export default WmenJeans;
