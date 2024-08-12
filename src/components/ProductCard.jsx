import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ imgSrc, title, description, price }) => {

const history = useHistory();

const handleReadMore = () => {
  history.push({
    pathname: '/product-detail',
    state: { title, description, imgSrc, price }
  });
  window.scrollTo(0, 0);
};

return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
<Link to="/">
<img className="rounded-t-lg" src={imgSrc} alt="" />
</Link>
<div className="p-5">
<Link to="/">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
</Link>
<p className="mb-3 font-normal text-gray-700">{description}</p>
<p className="mb-3 font-normal text-gray-700">Price: ${price}</p>
<button
       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
       onClick={handleReadMore}
     >
Read more
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
</div>
</div>
);
};

ProductCard.propTypes = {
imgSrc: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
price: PropTypes.number.isRequired,
};

export { ProductCard };