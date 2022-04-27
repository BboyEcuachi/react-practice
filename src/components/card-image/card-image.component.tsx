import React from 'react';

const CardImage = (props: any) => {
  const { url } = props;

  if (!url) return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden ">Loading...</span>
      </div>
    </div>
  );
  return <img className='card-img-top' src={url} alt='error img cap' />
};
export default CardImage;