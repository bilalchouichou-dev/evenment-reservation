import Image from 'next/image';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Page de Paiement</h1>
        
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Numéro de carte</label>
            <input type="text" id="cardNumber" name="cardNumber" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Nom sur la carte</label>
            <input type="text" id="cardName" name="cardName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          
          <div className="flex space-x-4">
            <div className="form-group w-1/2">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Date expiration</label>
              <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/AA" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
            
            <div className="form-group w-1/2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input type="text" id="cvv" name="cvv" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 my-4">
            <Image src={'/visa.png'} alt="Visa" width={70} height={120} />
            <Image src={'/mastercard.svg'} alt="MasterCard" width={70} height={120} />
          </div>
          
          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Payer
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
