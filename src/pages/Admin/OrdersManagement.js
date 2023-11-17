import React, { useState } from 'react';
import "../../assets/css/Admin/OrderManagement.css";
import Footer from '../../components/Footer';
import AdminHeader from "./AdminHeader";
import ConfirmationModal from '../../components/ConfirmationModal';


function OrderManagement() {
    // Dummy data for the users
    const [orders, setOrders] = useState([
        { orderId: '21', user: 'Test1', product: 'Music Cloud Drive', orderTime: '12/01/2023', trackingNumber: '222222', situation: 'Complete', price: '20$' },
        // Add more orders as needed
    ]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedOrder, setEditedOrder] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderToDelete, setOrderToDelete] = useState(null);
    const [isCreatingOrder, setIsCreatingOrder] = useState(false);
const [newOrder, setNewOrder] = useState({
  id: '',
  user: '',
  product: '',
  orderTime: '',
  trackingNumber: '',
  situation: '',
  price: '',
});

const handleNewOrderChange = (e) => {
    const { name, value } = e.target;
    setNewOrder(prevNewOrder => ({
      ...prevNewOrder,
      [name]: value
    }));
  };

  const handleCreateOrder = () => {
    // Perform any validation here
    setOrders([...orders, newOrder]);
    setNewOrder({ id: '', user: '', product: '', orderTime: '', trackingNumber: '', situation: '', price: '' });
    setIsCreatingOrder(false); // Exit create order mode
  };
  

    const handleEditClick = (index, order) => {
        setEditingIndex(index);
        setEditedOrder({ ...order });
    };

    const handleDeleteClick = (order) => {
        setOrderToDelete(order);
        setIsModalOpen(true);
    };
    const confirmDelete = () => {
        setOrders(orders.filter((order) => order.id !== orderToDelete.id));
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedOrder({ ...editedOrder, [name]: value });
    };

    const handleSaveClick = (index) => {
        const updatedOrders = [...orders];
        updatedOrders[index] = editedOrder;
        setOrders(updatedOrders);
        setEditingIndex(null);
    };

    const cancelEdit = () => {
        setEditingIndex(null);
    };

    return (
        <>   
        <AdminHeader />
            <div className="order-management-container">
            <h1>ORDERS MANAGEMENT</h1>
            <table>
    <thead>
        <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Product</th>
            <th>Order time</th>
            <th>Tracking number</th>
            <th>Situation</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {isCreatingOrder && (
        <tr>
            <td><input type="text" name="id" value={newOrder.id} onChange={handleNewOrderChange} /></td>
            <td><input type="text" name="user" value={newOrder.user} onChange={handleNewOrderChange} /></td>
            <td><input type="text" name="product" value={newOrder.product} onChange={handleNewOrderChange} /></td>
            <td><input type="text" name="orderTime" value={newOrder.orderTime} onChange={handleNewOrderChange} /></td>
            <td><input type="text" name="trackingNumber" value={newOrder.trackingNumber} onChange={handleNewOrderChange} /></td>
            <td><input type="text" name="situation" value={newOrder.situation} onChange={handleNewOrderChange} /></td>
            <td><input type="text" name="price" value={newOrder.price} onChange={handleNewOrderChange} /></td>
            <td className="order_management__crud-buttons">
                <button className="order_management__edit-btn" onClick={handleCreateOrder}>Save</button>
                <button className="order_management__delete-btn" onClick={() => setIsCreatingOrder(false)}>Cancel</button>
            </td>
        </tr>
    )}
        {orders.map((order, index) => (
            <tr key={order.id}>
                {editingIndex === index ? (
                    <>
                        {/* Editable inputs for the selected order */}
                        <td><input type="text" name="id" value={editedOrder.id} onChange={handleInputChange} /></td>
                        <td><input type="text" name="user" value={editedOrder.user} onChange={handleInputChange} /></td>
                        <td><input type="text" name="product" value={editedOrder.product} onChange={handleInputChange} /></td>
                        <td><input type="text" name="orderTime" value={editedOrder.orderTime} onChange={handleInputChange} /></td>
                        <td><input type="text" name="trackingNumber" value={editedOrder.trackingNumber} onChange={handleInputChange} /></td>
                        <td><input type="text" name="situation" value={editedOrder.situation} onChange={handleInputChange} /></td>
                        <td><input type="text" name="price" value={editedOrder.price} onChange={handleInputChange} /></td>
                        <td className="order_management__crud-buttons">
                            <button className="order_management__edit-btn" onClick={() => handleSaveClick(index)}>Save</button>
                            <button className="order_management__delete-btn" onClick={cancelEdit}>Cancel</button>
                        </td>
                    </>
                ) : (
                    <>
                        {/* Read-only data for non-selected orders */}
                        <td>{order.id}</td>
                        <td>{order.user}</td>
                        <td>{order.product}</td>
                        <td>{order.orderTime}</td>
                        <td>{order.trackingNumber}</td>
                        <td>{order.situation}</td>
                        <td>{order.price}</td>
                        <td className="order_management__crud-buttons">
                            <button className="order_management__edit-btn" onClick={() => handleEditClick(index, order)}>Edit</button>
                            <button className="order_management__delete-btn" onClick={() => handleDeleteClick(order)}>Delete</button>
                        </td>
                    </>
                )}
            </tr>
        ))}
    </tbody>
</table>
                {isModalOpen && (
                    <ConfirmationModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onConfirm={confirmDelete}
                        message={`Are you sure you want to delete order ${orderToDelete?.id}?`}
                    />
                )}
<button className="create-order-btn" onClick={() => setIsCreatingOrder(true)}>Create Order</button>
            </div>
            <Footer />
        </>

    );
}
export default OrderManagement;
