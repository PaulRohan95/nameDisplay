import React, { useState } from 'react';

function Display() {

const [formData, setFormData] = useState({ firstName: '', lastName: '' });
const [errors, setErrors] = useState({ firstName: '', lastName: '' });
const [fullName, setFullName] = useState('');

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ 
        ...formData,
        [name]: value
     });

    setErrors({
        ...errors,
        [name]: value ? '' : 'Please fill out this field'
    })
};


const handleSubmit = (event) => {
    event.preventDefault();
    
    const newErrors = {
        firstName: formData.firstName ? '' : 'Please fill out this field',
        lastName: formData.lastName ? '' : 'Please fill out this field'
    };

    setErrors(newErrors);


    if (!newErrors.firstName && !newErrors.lastName) {
    const fullName = `${formData.firstName} ${formData.lastName}`;
    setFullName(fullName);
  } else {
    setFullName('');
  }
};



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Full Name Display</h1>
            <div>
                <label>First Name: </label>
                <input 
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange} 
                />
                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
            </div>
            <div>
                <label>Last Name: </label>
                <input 
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange} 
                />
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
        {fullName && (
            <div>
                <p>Full Name: {fullName}</p>
            </div>
        )}
    </div>
  )
}

export default Display;