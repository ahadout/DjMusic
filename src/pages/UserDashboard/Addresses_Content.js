import React, { useState, useEffect, useRef } from 'react';
import "../../assets/css/UserDashboard/Addresses_Content.css";

function Addresses_Content() {
  const [addresses, setAddresses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: ''
  });
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [errors, setErrors] = useState({});
  const popupRef = useRef();

  // useEffect(() => {
  //   if (addresses.length && selectedAddress === null) {
  //     setSelectedAddress(addresses[0].id);
  //   }
  // }, [addresses, selectedAddress]);

  useEffect(() => {
    if (addresses.length && selectedAddress === null) {
      setSelectedAddress(addresses[0].id);
    }

    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    // Add when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);
    // Return function to be called when it unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addresses, selectedAddress]);

  const validateFields = () => {
    const fields = ['street', 'city', 'state', 'zip', 'phone', 'email'];
    let newErrors = {};
    let isValid = true;

    fields.forEach(field => {
      if (!newAddress[field].trim()) {
        isValid = false;
        newErrors[field] = "This field can't be empty";
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleAddAddress = () => {
    if (validateFields()) {
      const id = new Date().getTime();
      setAddresses([...addresses, { ...newAddress, id }]);
      setShowPopup(false);
      setNewAddress({
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: ''
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
    // If the field is being edited, clear its error message
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleRemoveAddress = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
    if (selectedAddress === id) {
      setSelectedAddress(null);
    }
  };

  const handleSelectAddress = (id) => {
    setSelectedAddress(id);
  };

  return (
    <div>
      {addresses.map(address => (
        <div key={address.id} className="address-container">
          <input
            type="checkbox"
            id={`checkbox-${address.id}`}
            checked={selectedAddress === address.id}
            onChange={() => handleSelectAddress(address.id)}
          />
          <label htmlFor={`checkbox-${address.id}`} className="checkbox-label"></label>
          {selectedAddress === address.id && <p className="default-address-text">Default Address</p>}
          <div className="address-details">
            <p><strong>UserName</strong></p>
            <p>{address.userName}</p>
            <p>{address.street}, {address.city}, {address.state} {address.zip}</p>
            <p>{address.phone}</p>
            <p>{address.email}</p>
            <span className="remove-address" onClick={() => handleRemoveAddress(address.id)}>✕</span>
          </div>
        </div>
      ))}
      <button onClick={() => setShowPopup(true)}>Add Address</button>

      {showPopup && (
        <div className="popup-container" ref={popupRef}>
          <div className="popup">
            <span className="close-popup" onClick={() => setShowPopup(false)}>✕</span>
           <h2>Add new address</h2>
           <input name="street" placeholder="Street" value={newAddress.street} onChange={handleChange} />
           {errors.street && <p className="error-text">{errors.street}</p>}
           <input name="city" placeholder="City" value={newAddress.city} onChange={handleChange} />
           {errors.city && <p className="error-text">{errors.city}</p>}
           <input name="state" placeholder="State" value={newAddress.state} onChange={handleChange} />
           {errors.state && <p className="error-text">{errors.state}</p>}
           <input name="zip" placeholder="Zip Code" value={newAddress.zip} onChange={handleChange} />
           {errors.zip && <p className="error-text">{errors.zip}</p>}
           <input name="phone" placeholder="Phone Number" value={newAddress.phone} onChange={handleChange} />
           {errors.phone && <p className="error-text">{errors.phone}</p>}
           <input name="email" placeholder="Email" value={newAddress.email} onChange={handleChange} />
           {errors.email && <p className="error-text">{errors.email}</p>}
            <button onClick={handleAddAddress}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Addresses_Content;