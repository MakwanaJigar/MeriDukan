import React from 'react';
import Filter from '../Components/Filter';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CardList = () => {
  // Sample data representing the content of each card
  const cardData = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1',
      imageUrl: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBzaGlydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2',
      imageUrl: 'https://images.unsplash.com/photo-1521820298019-160c4bc0dc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW4lMjBzaGlydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1651496918126-cce288efa33f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHdvbWVuJTIwc2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1676281161960-c6d1d369b755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHdvbWVuJTIwc2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1663099538775-52cfc267f22e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdvbWVuJTIwc2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1613591674239-216f556d9ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvbWVuJTIwc2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1668191032118-50ed3e741b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHdvbWVuJTIwc2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1676020068743-b95b81e75f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx3b21lbiUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3',
      imageUrl: 'https://images.unsplash.com/photo-1496899985819-00ca56093a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx3b21lbiUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    },
  ];

  return (


    <>
    <h2 id='DATA'>Women's Shirts</h2>
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

export default CardList;


// export default WomenShirts;
