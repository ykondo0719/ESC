import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        preferredProduct: '',
        message: '',
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form' data-aos='fade-up'>
            <div className='form-name'>
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-inline'>
                <div className='form-phone'>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder='+1 1235790864'
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-product'>
                    <select
                        name="preferredProduct"
                        value={formData.preferredProduct}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Preferred products</option>
                        <option value="Product A">Product A</option>
                        <option value="Product B">Product B</option>
                        <option value="Product C">Product C</option>
                    </select>
                </div>
            </div>
            <div className='form-msg'>
                <textarea
                    name="message"
                    placeholder='Write your message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-terms'>
                <label>
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                    />
                    <div className='terms-text'>
                        I agree with the <span>Terms & Conditions</span>
                    </div>
                </label>
            </div>
            <button type="submit" className='form-button'>Submit</button>
        </form>
    );
};

export default ContactForm;
