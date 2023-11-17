import React, { useState } from 'react';
import "../../assets/css/Admin/ProductManagement.css";
import Footer from '../../components/Footer';
import AdminHeader from "./AdminHeader";
import ConfirmationModal from '../../components/ConfirmationModal';

function ProductManagement() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [isCreating, setIsCreating] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});

    const [newProduct, setNewProduct] = useState({
        id: '',
        description: '',
        price: '',
        variants: '',
        quantity: '',
        image: '',
    });
    // Dummy data for the users
    const [products, setProducts] = useState([
        {
            id: '27TB',
            description: 'Music Cloud Drive',
            price: '20$',
            variants: '222222',
            quantity: '400',
            image: 'test.png'
        },
        // ... other products
    ]);
    const handleNewProductChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

    // Handle create new product
    const handleCreateProduct = () => {
        setProducts(prev => [...prev, newProduct]);
        setNewProduct({
            id: '',
            description: '',
            price: '',
            variants: '',
            quantity: '',
            image: '',
        });
        setIsCreating(false);
    };
    const requestDeleteProduct = (product) => {
        setProductToDelete(product);
        setIsModalOpen(true);
    };
    const deleteProduct = () => {
        setProducts(products.filter((p) => p.id !== productToDelete.id));
        setIsModalOpen(false);
    };

    const handleEditClick = (index, product) => {
        setEditingIndex(index);
        setEditedProduct({ ...product });
    };

    const handleDeleteClick = (product) => {
        requestDeleteProduct(product);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveClick = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index] = editedProduct;
        setProducts(updatedProducts);
        setEditingIndex(null);
    };

    return (
        <>
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={deleteProduct}
                message={`Are you sure you want to delete product ${productToDelete?.id}?`}
            />
            <AdminHeader />
            <div className="product-management-container">
                <h1>PRODUCTS MANAGEMENT</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Variants</th>
                            <th>Quantity</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    {isCreating && (
                            <tr>
                                {/* Inputs to create a new product */}
                                <td><input type="text" name="id" value={newProduct.id} onChange={handleNewProductChange} /></td>
                                <td><input type="text" name="description" value={newProduct.description} onChange={handleNewProductChange} /></td>
                                <td><input type="text" name="price" value={newProduct.price} onChange={handleNewProductChange} /></td>
                                <td><input type="text" name="variants" value={newProduct.variants} onChange={handleNewProductChange} /></td>
                                <td><input type="number" name="quantity" value={newProduct.quantity} onChange={handleNewProductChange} /></td>
                                <td><input type="text" name="image" value={newProduct.image} onChange={handleNewProductChange} /></td>
                                <td className='product_management__crud-buttons'>
                                    <button className="user_management__edit-btn" onClick={handleCreateProduct}>Save</button>
                                    <button className="user_management__delete-btn" onClick={() => setIsCreating(false)}>Cancel</button>
                                </td>
                            </tr>
                        )}
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                {editingIndex === index ? (
                                    <>
                                        <td><input type="text" name="id" value={editedProduct.id} onChange={handleInputChange} /></td>
                                        <td><input type="text" name="description" value={editedProduct.description} onChange={handleInputChange} /></td>
                                        <td><input type="text" name="price" value={editedProduct.price} onChange={handleInputChange} /></td>
                                        <td><input type="text" name="variants" value={editedProduct.variants} onChange={handleInputChange} /></td>
                                        <td><input type="number" name="quantity" value={editedProduct.quantity} onChange={handleInputChange} /></td>
                                        <td><input type="text" name="image" value={editedProduct.image} onChange={handleInputChange} /></td>
                                        <button className="user_management__edit-btn" onClick={() => handleSaveClick(index)}>Save</button>
                                        <button className="user_management__delete-btn" onClick={() => setEditingIndex(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <td>{product.id}</td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                        <td>{product.variants}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.image}</td>
                                        <td className='user_management__crud-buttons'>
                                            <button className="product_management__edit-btn" onClick={() => handleEditClick(index, product)}>Edit</button>
                                            <button className="product_management__delete-btn" onClick={() => handleDeleteClick(product)}>Delete</button>


                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="create-product-btn" onClick={() => setIsCreating(true)}>Create Product</button>
            </div>
            <Footer />
        </>

    );
}
export default ProductManagement;
