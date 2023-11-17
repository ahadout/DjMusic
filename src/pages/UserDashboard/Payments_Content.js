import React, { useState, useEffect, useRef } from 'react';
// import "../../assets/css/UserDashboard/PaymentDetails_Content.css";

function Payments_Content() {
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newPayment, setNewPayment] = useState({
    cardName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [errors, setErrors] = useState({});
  const popupRef = useRef();

  useEffect(() => {
    if (paymentDetails.length && selectedPayment === null) {
      setSelectedPayment(paymentDetails[0].id);
    }

    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [paymentDetails, selectedPayment]);

  const validateFields = () => {
    const fields = ['cardName', 'cardNumber', 'expiryMonth', 'expiryYear', 'cvv'];
    let newErrors = {};
    let isValid = true;

    fields.forEach(field => {
      if (!newPayment[field].trim()) {
        isValid = false;
        newErrors[field] = "This field can't be empty";
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleAddPayment = () => {
    if (validateFields()) {
      const id = new Date().getTime();
      setPaymentDetails([...paymentDetails, { ...newPayment, id }]);
      setShowPopup(false);
      setNewPayment({
        cardName: '',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: ''
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPayment(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleRemovePayment = (id) => {
    setPaymentDetails(paymentDetails.filter(detail => detail.id !== id));
    if (selectedPayment === id) {
      setSelectedPayment(null);
    }
  };

  const handleSelectPayment = (id) => {
    setSelectedPayment(id);
  };

  return (
    <div>
      {/* List existing payment details here */}
      <button onClick={() => setShowPopup(true)}>Add Payment Detail</button>

      {showPopup && (
        <div className="popup-container" ref={popupRef}>
          <div className="popup">
            <span className="close-popup" onClick={() => setShowPopup(false)}>✕</span>
            <h2>Add New Payment Detail</h2>
            {/* The input fields for payment details */}
            <input name="cardName" placeholder="Name on Card" value={newPayment.cardName} onChange={handleChange} />
            {errors.cardName && <p className="error-text">{errors.cardName}</p>}
            <input name="cardNumber" placeholder="Number of Card" value={newPayment.cardNumber} onChange={handleChange} />
            {errors.cardName && <p className="error-text">{errors.cardNumber}</p>}
            <input name="expiryMonth" placeholder="Expiry month" value={newPayment.expiryMonth} onChange={handleChange} />
            {errors.cardName && <p className="error-text">{errors.expiryMonth}</p>}
            <input name="expiryYear" placeholder="Expiry year" value={newPayment.expiryYear} onChange={handleChange} />
            {errors.cardName && <p className="error-text">{errors.expiryYear}</p>}
            <input name="cvv" placeholder="cvv" value={newPayment.cvv} onChange={handleChange} />
            {errors.cardName && <p className="error-text">{errors.cvv}</p>}
            <button onClick={handleAddPayment}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payments_Content