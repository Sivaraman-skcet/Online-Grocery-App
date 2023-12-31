import React, { useState } from 'react';

const FormValidationExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate username
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      valid = false;
    } else {
      newErrors.username = '';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with form submission or other actions
      console.log('Form submitted:', formData);
    } else {
      // Form is not valid, do not submit
      console.log('Form not submitted due to validation errors');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidationExample;
