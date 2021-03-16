import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our cargo trucks !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.pixabay.com/photo/2010/12/16/20/56/van-3676__340.jpg'
              text='Min-truck van'
              label='light movement'
              path='/services'
            />
            <CardItem
              src='https://cdn.pixabay.com/photo/2020/01/21/16/18/cargo-4783290__340.jpg'
              text='Medium truck'
              label='light movement'
              path='/services'
            />
            <CardItem
              src='https://cdn.pixabay.com/photo/2020/06/02/00/03/truck-5248809_960_720.jpg'
              text='Huge truck'
              label='Heavy movement'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.pixabay.com/photo/2020/04/06/16/48/truck-5010373__340.png'
              text='Tanker'
              label='liquids'
              path='/services'
            />
            <CardItem
              src='https://cdn.pixabay.com/photo/2017/09/17/14/17/truck-2758534_960_720.jpg'
              text='Trolley'
              label='crude materials'
              path='/products'
            />
            <CardItem
              src='https://cdn.pixabay.com/photo/2020/06/12/22/10/truck-5292026_960_720.jpg'
              text='Ride through though terrein on a wheeler'
              label='Poles'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
