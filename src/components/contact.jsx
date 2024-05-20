import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xayrkrrw");
  if (state.succeeded) {
      return <p className="text-green-400 text-3xl font-bold mb-4 text-center">Message Sent - I'll Get Back to You Soon!</p>;
  }
  return (
    <div className="container mx-auto mt-8">
      <div className="text-green-400 text-3xl font-bold mb-4 text-center">Contact Page</div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">Email Address</label>
          <input
            id="email"
            type="email" 
            name="email"
            className="form-input mt-1 block w-full"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea mt-1 block w-full"
            rows="4"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 mt-1"
          />
        </div>
        <button type="submit" disabled={state.submitting} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
