import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img, sellar, stock, star, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            {/* <div>
                <img src={img} alt="" />
            </div> */}
            <div>
                <h4>{name}</h4>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div >
            <div>
                <h4>tfgygygyg</h4>
            </div>
        </div >
    );
};

export default ReviewItem;