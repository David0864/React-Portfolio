import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
 
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    console.log(formData);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div class="container mx-auto mt-8">
      <div class="text-green-400 text-3xl font-bold mb-4 text-center">Contact Page</div>
      <form onSubmit={handleSubmit} class="max-w-lg mx-auto">
        <div class="mb-4">
          <label htmlFor="name" class="block text-gray-300">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} class="form-input mt-1 block w-full" />
          {errors.name && <p class="text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div class="mb-4">
          <label htmlFor="email" class="block text-gray-300">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} class="form-input mt-1 block w-full" />
          {errors.email && <p class="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div class="mb-4">
          <label htmlFor="message" class="block text-gray-300">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" class="form-textarea mt-1 block w-full"></textarea>
          {errors.message && <p class="text-red-500 mt-1">{errors.message}</p>}
        </div>
        <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default Contact;



