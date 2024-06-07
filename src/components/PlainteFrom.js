// components/ComplaintForm.js

import { useState } from 'react';

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Plainte envoyée: ${complaint}`);
    setComplaint('');
  };

  return (
    <div className="container mx-auto p-4 w-[80%]">
      <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="complaint"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Votre plainte
          </label>
          <textarea
            id="complaint"
            name="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Écrivez votre plainte ici..."
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
