//templet for blog entries

import React from 'react';
import { Link } from 'react-router-dom'; 

export function BlogCard ({ title, summary, blogLink }) {
  return (
    <div className="Blog-Card">
      <Link to={blogLink}>
      <button className='Blog-Button'>
      <h3>{title}</h3>
      <p>{summary}</p>      
      </button>
      </Link>
    </div>
  );
};
