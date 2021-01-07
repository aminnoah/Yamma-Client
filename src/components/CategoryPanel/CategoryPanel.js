import React, { Component } from 'react';
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';
import yammawest from '../../images/yammawest.jpg';
import yammamidwest from '../../images/yammamidwest.jpg';
import yammasouth from '../../images/yammasouth.jpg';
import yammaeast from '../../images/yammaeast.jpg';
import politicsicon from '../../images/politicsicon.png';
import businessicon from '../../images/businessicon.png';
import healthicon from '../../images/healthicon.png';
import techicon from '../../images/techicon.png';

export class CategoryList extends Component {
  static contextType = UserContext;

  render() {
    const { categories = [] } = this.context;
    return (
      <div className='categorylist-container'>
        <hr></hr>

        <ul className='subregion-ul'>
          <li className='subregion-item'>
            <img
              src={yammawest}
              width='80px'
              height='80px'
              className='subregion-img'
            />
            <Link to='/west'>West</Link>
          </li>
          <li className='subregion-item'>
            <img
              src={yammamidwest}
              width='80px'
              height='80px'
              className='subregion-img'
            />
            <Link to='/midwest'>Midwest</Link>
          </li>

          <li className='subregion-item'>
            <img
              src={yammasouth}
              width='80px'
              height='80px'
              className='subregion-img'
            />
            <Link to='/south'>South</Link>
          </li>
          <li className='subregion-item'>
            <img
              src={yammaeast}
              width='80px'
              height='80px'
              className='subregion-img'
            />
            <Link to='/east'>East</Link>
          </li>
        </ul>

        <hr></hr>

        <ul className='category-ul'>
          <li className='category-item'>
            <Link to='/politics'>Politics</Link>
            <img
              src={politicsicon}
              width='80px'
              height='80px'
              className='category-img'
            />
          </li>
          <li className='category-item'>
            <Link to='/business'>Business</Link>
            <img
              src={businessicon}
              width='80px'
              height='80px'
              className='category-img'
            />
          </li>
          <li className='category-item'>
            <Link to='/health'>Health</Link>
            <img
              src={healthicon}
              width='80px'
              height='80px'
              className='category-img'
            />
          </li>
          <li className='category-item'>
            <Link to='/tech'>Tech</Link>
            <img
              src={techicon}
              width='80px'
              height='80px'
              className='category-img'
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryList;
