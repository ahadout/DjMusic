import React, { useState } from 'react';
import "../../assets/css/Admin/UserManagement.css";
import Footer from '../../components/Footer';
import AdminHeader from "./AdminHeader";
import ConfirmationModal from '../../components/ConfirmationModal';

function UserManagement() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [isCreating, setIsCreating] = useState(false);

const [newUser, setNewUser] = useState({
  username: '',
  email: '',
  orders: '',
  signUpDate: '',
});

const handleNewUserChange = (e) => {
  const { name, value } = e.target;
  setNewUser(prevNewUser => ({
    ...prevNewUser,
    [name]: value
  }));
};

const handleCreateUser = () => {
  // You would perform validation and potentially clear the form here
  setUsers(prevUsers => [...prevUsers, newUser]);
  setNewUser({ username: '', email: '', orders: '', signUpDate: '' });
  setIsCreating(false); // Exit create mode
};

    const requestDeleteUser = (user) => {
        setUserToDelete(user);
        setIsModalOpen(true);
    };

    const deleteUser = () => {
        setUsers(users.filter((user) => user.username !== userToDelete.username));
        closeDeleteModal();
    };

    const closeDeleteModal = () => {
        setIsModalOpen(false);
        setUserToDelete(null);
    };

    // Dummy data for the users
    const [users, setUsers] = useState([
        { username: 'User Test', email: 'test@mail.com', orders: 3, signUpDate: '12/01/2023' },
        { username: 'User Test2', email: 'test2@mail.com', orders: 0, signUpDate: '12/01/2023' },
        { username: 'User Test3', email: 'test3@mail.com', orders: 1, signUpDate: '12/01/2023' },
    ]);
    const [editingIndex, setEditingIndex] = useState(null); // Index of the user being edited
    const [editedUser, setEditedUser] = useState({}); // Data of the user being edited

    const handleEditClick = (index, user) => {
        setEditingIndex(index);
        setEditedUser({ ...user });
    };

    const handleDeleteClick = (user) => {
        requestDeleteUser(user);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const handleSaveClick = (index) => {
        const updatedUsers = [...users];
        updatedUsers[index] = editedUser;
        setUsers(updatedUsers);
        setEditingIndex(null); // Exit editing mode
    };
    return (
        <>   
        <ConfirmationModal
                isOpen={isModalOpen}
                onClose={closeDeleteModal}
                onConfirm={deleteUser}
                message={`Are you sure you want to delete ${userToDelete?.username}?`}
            />
        <AdminHeader />
        <div className="user-management-container">
            <h1>USERS MANAGEMENT</h1>
            <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Orders</th>
                            <th>Sign-up date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {isCreating && (
        <tr>
            <td><input type="text" name="username" value={newUser.username} onChange={handleNewUserChange} /></td>
            <td><input type="email" name="email" value={newUser.email} onChange={handleNewUserChange} /></td>
            <td><input type="number" name="orders" value={newUser.orders} onChange={handleNewUserChange} /></td>
            <td><input type="date" name="signUpDate" value={newUser.signUpDate} onChange={handleNewUserChange} /></td>
            <td className='user_management__crud-buttons'>
                <button className="user_management__edit-btn" onClick={handleCreateUser}>Save</button>
                <button className="user_management__delete-btn" onClick={() => setIsCreating(false)}>Cancel</button>
            </td>
        </tr>
    )}
                        {users.map((user, index) => (
                            <tr key={index}>
                                {editingIndex === index ? (
                                    <>
                                        {/* Editable inputs for the selected user */}
                                        <td><input type="text" name="username" value={editedUser.username} onChange={handleInputChange} /></td>
                                        <td><input type="email" name="email" value={editedUser.email} onChange={handleInputChange} /></td>
                                        <td><input type="number" name="orders" value={editedUser.orders} onChange={handleInputChange} /></td>
                                        <td><input type="date" name="signUpDate" value={editedUser.signUpDate} onChange={handleInputChange} /></td>
                                        <td className='user_management__crud-buttons'> 
                                            <button className="user_management__edit-btn" onClick={() => handleSaveClick(index)}>Save</button>
                                            <button className="user_management__delete-btn" onClick={() => setEditingIndex(null)}>Cancel</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        {/* Read-only data for non-selected users */}
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.orders}</td>
                                        <td>{user.signUpDate}</td>
                                        <td className='user_management__crud-buttons'>
                                            <button className="user_management__edit-btn" onClick={() => handleEditClick(index, user)}>Edit</button>
                                            <button className="user_management__delete-btn" onClick={() => handleDeleteClick(user)}>Delete</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="create-user-btn" onClick={() => setIsCreating(true)}>Create user</button>
        </div>
            <Footer />
        </>

    );
}
export default UserManagement;
