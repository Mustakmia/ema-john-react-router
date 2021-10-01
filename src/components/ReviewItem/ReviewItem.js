import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img, sellar, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <button className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;