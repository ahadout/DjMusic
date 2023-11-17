import React ,{ useState }  from 'react';
import '../../assets/css/Admin/AdminProfile.css';
import Footer from '../../components/Footer';
import AdminHeader from "./AdminHeader";

const AdminProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        userName: "Admin",
        fullName: "Admin Admin",
        email: "admin@email.com",
        password: "************",
        phone: "+120920202933",
        country: "USA",
        language: "English"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        // Handle backend call here
        console.log(formData); // For now, just log the data
    }

    const fields = [
        { label: "User name", name: "userName" },
        { label: "Full name", name: "fullName" },
        { label: "Email", name: "email" },
        { label: "Password", name: "password" },
        { label: "Phone", name: "phone" },
        { label: "Country", name: "country" },
        { label: "Language", name: "language" },
    ];

    return (
        <>
        <AdminHeader />
        <div className="admin-profile">
            <h2>ADMIN PROFIL</h2>
            <div className="profile-details">
                {fields.map(field => (
                    <div key={field.name} className="detail">
                        <span className="label">{field.label}</span>
                        {isEditing ? (
                            <input
                                className="value-input"
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                            />
                        ) : (
                            <span className="value">{formData[field.name]}</span>
                        )}
                    </div>
                ))}
            </div>
            {isEditing ? (
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            ) : (
                <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
                    <Footer />
                    </>
    );
}

export default AdminProfile;
