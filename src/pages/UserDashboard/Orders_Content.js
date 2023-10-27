import React from 'react';
import SandiskTwotbSolidState from "../../assets/images/Sandisk 2tb solid state.png";
import hard_drive_2tb_white_background from "../../assets/images/2tb_hard_drive_white_background.png"
import cloud_2tb_white_background from "../../assets/images/2tb_cloud_white_background.png";
import "../../assets/css/UserDashboard/Orders_Content.css";

function OrderProductCard(props) {
  return (
    <div id="Order_product_card" className={props.class}>
      <div className="Order_product_card_circle">
        <img src={props.imgSrc} alt={props.imgAlt} className={props.imgClass} />
      </div>
      <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
    </div>
  );
}

function OrderDetails({ title, address, number, date, total, productType, subscriptionExpiryDate }) {
  return (
    <div className="order-details">
      <h3>{title}</h3>
      <div>
        <div className="order-detail">
          <strong>Address:</strong> <span>{address}</span>
        </div>
        <div className="order-detail">
          <strong>Number:</strong> <span>{number}</span>
        </div>
        <div className="order-detail">
          <strong>Date:</strong> <span>{date}</span>
        </div>
        <div className="order-detail">
          <strong>Total:</strong> <span>${total}</span>
        </div>
        {productType === 'cloudDrive' && (
          <div className="order-detail">
            <strong>Order Subscription:</strong> <span>{subscriptionExpiryDate}</span>
          </div>
        )}
      </div>
      <div className='order-buttons'>
        <button id='tracking-number'>Tracking Number</button>
        <button id='confirm'>Confirm</button>
        <a href='#' id='refund'>Refund</a>
      </div>
    </div>
  );
}

function Orders_Content() {

  const order = {
    title: '2TB DJ Standard Music Cloud Drive',
    address: '123 Main St, Hometown, ABC',
    number: '45678',
    date: '10/26/2024',
    total: '99.99',
    productType: 'cloudDrive',
    subscriptionExpiryDate: '10/26/2024'
  };

  return (
    <>
      <div className='Orders_container'>
        <div className='Orders_number'>
          <p>You have 2 orders</p>
        </div>
        <div className='Orders_order_container'>
          <div className='Orders_order_image'>
            <OrderProductCard
              imgSrc={cloud_2tb_white_background}
              imgAlt="2TB DJ Standard Music Cloud Drive"
              description="2TB DJ Standard <br /> Music <br /> Cloud Drive"
              imgClass="CloudDrives_Section2_ProductCard_img"
            />
          </div>
          <div className='Orders_order_details_container'>
            <OrderDetails 
              title={order.title}
              address={order.address}
              number={order.number}
              date={order.date}
              total={order.total}
              productType={order.productType}
              subscriptionExpiryDate={order.subscriptionExpiryDate}
            />
          </div>
        </div>

        <div className='Orders_order_container'>
          <div className='Orders_order_image'>
            <OrderProductCard
              imgSrc={hard_drive_2tb_white_background}
              imgAlt="2TB DJ Standard Music Cloud Drive"
              description="2TB DJ Standard <br /> Music <br /> Cloud Drive"
              imgClass="CloudDrives_Section2_ProductCard_img"
            />
          </div>
          <div className='Orders_order_details_container'>
            <OrderDetails 
              title={order.title}
              address={order.address}
              number={order.number}
              date={order.date}
              total={order.total}
              productType={order.productType}
              subscriptionExpiryDate={order.subscriptionExpiryDate}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders_Content