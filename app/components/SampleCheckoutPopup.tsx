"use client"
import React, { useState } from 'react'
import ResponsiveImage from './ResponsiveImage'

type ProductOptions = {
  size: string;
  grind: string;
  purchaseType: string;
}

type SampleCheckoutPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productImage: string;
  selectedOptions?: ProductOptions;
  activeDetail?: string;
}

const SampleCheckoutPopup = ({ isOpen, onClose, productName, productImage, selectedOptions, activeDetail }: SampleCheckoutPopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postal: '',
    country: 'Canada',
    payment: 'credit',
    formType: 'sample'
  });
  
  const [step, setStep] = useState(1);
  const samplePrice = 9.99;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Process payment and order
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        // Add product info to the form data
        const submissionData = {
          ...formData,
          productName,
          productPrice: samplePrice,
          shipping: 3.99,
          total: (samplePrice + 3.99).toFixed(2),
          orderDate: new Date().toISOString(),
          _subject: `New Sample Order: ${productName}`,
          // Include selected options if available
          ...(selectedOptions && {
            productSize: selectedOptions.size,
            productGrind: selectedOptions.grind,
            purchaseType: selectedOptions.purchaseType
          }),
          // Include active detail if available
          ...(activeDetail && {
            activeProductDetail: activeDetail
          })
        };
        
        // Send the form data to Formspree
        const response = await fetch('https://formspree.io/f/xkgrnlve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(submissionData),
        });
        
        const result = await response.json();
        
        if (response.ok) {
          alert('Your sample has been ordered! Thank you.');
          onClose();
          setStep(1);
          setFormData({
            name: '',
            email: '',
            address: '',
            city: '',
            postal: '',
            country: 'Canada',
            payment: 'credit',
            formType: 'sample'
          });
        } else {
          setSubmitError(result.error || 'Failed to process your order. Please try again.');
        }
      } catch (error) {
        console.error('Error processing order:', error);
        setSubmitError('There was an error processing your order. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Helper function to display grind type in human-readable format
  const formatGrindType = (grindId: string): string => {
    switch(grindId) {
      case 'whole-bean': return 'Whole Bean';
      case 'espresso': return 'Espresso';
      case 'filter': return 'Filter';
      default: return grindId;
    }
  };

  // Helper function to display purchase type in human-readable format
  const formatPurchaseType = (typeId: string): string => {
    switch(typeId) {
      case 'one-time': return 'One-time Purchase';
      case 'subscribe': return 'Subscription';
      default: return typeId;
    }
  };

  // Format the active detail label for display
  const getDetailLabel = (detail: string | undefined): string => {
    if (!detail) return '';
    
    switch(detail) {
      case 'coffeeProfile': return 'Coffee Profile';
      case 'originFarmInfo': return 'Origin & Farm Info';
      case 'sampleBrewGuide': return 'Sample Brew Guide';
      default: return '';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-primary p-6 rounded-md max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Purchase a Sample</h2>
          <button 
            onClick={onClose}
            className="text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/3">
                <ResponsiveImage 
                  src={`/images/${productImage}`} 
                  alt={productName}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold">{productName} Sample</h3>
                <p className="mb-2">200g Sample Pack</p>
                <p className="text-lg font-bold mb-4">${samplePrice}</p>
                
                {selectedOptions && (
                  <div className="bg-gray-50 p-3 rounded-md mb-4">
                    <h4 className="font-semibold mb-1">Selected Options:</h4>
                    <ul className="text-sm">
                      <li><span className="font-medium">Size:</span> {selectedOptions.size}</li>
                      <li><span className="font-medium">Grind:</span> {formatGrindType(selectedOptions.grind)}</li>
                      <li><span className="font-medium">Purchase Type:</span> {formatPurchaseType(selectedOptions.purchaseType)}</li>
                    </ul>
                  </div>
                )}
                
                {activeDetail && (
                  <div className="bg-gray-50 p-3 rounded-md mb-4">
                    <p className="text-sm font-medium">Selected Detail: {getDetailLabel(activeDetail)}</p>
                  </div>
                )}
                
                <p className="text-sm">
                  Try our premium Ethiopian coffee with this sample pack. 
                  Perfect for testing before making larger wholesale purchases.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium">Address</label>
              <input 
                type="text" 
                id="address" 
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium">City</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
                />
              </div>
              <div>
                <label htmlFor="postal" className="block text-sm font-medium">Postal Code</label>
                <input 
                  type="text" 
                  id="postal" 
                  name="postal"
                  required
                  value={formData.postal}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1" 
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium">Country</label>
                <select 
                  id="country" 
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                >
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Japan">Japan</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="Other">Other Countries</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <button 
                type="submit"
                className="w-full p-3 bg-dark text-primary rounded-md hover:bg-primary hover:text-dark border border-dark transition"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Payment Details</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Payment Method</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={formData.payment === 'credit'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={formData.payment === 'paypal'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  PayPal
                </label>
              </div>
            </div>

            {formData.payment === 'credit' && (
              <>
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium">Card Number</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456" 
                    className="w-full p-2 border border-gray-300 rounded mt-1" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium">Expiry Date</label>
                    <input 
                      type="text" 
                      id="expiry" 
                      placeholder="MM/YY" 
                      className="w-full p-2 border border-gray-300 rounded mt-1" 
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium">CVC</label>
                    <input 
                      type="text" 
                      id="cvc" 
                      placeholder="123" 
                      className="w-full p-2 border border-gray-300 rounded mt-1" 
                    />
                  </div>
                </div>
              </>
            )}

            <div className="border-t border-gray-200 pt-4 mt-6">
              <div className="flex justify-between mb-2">
                <span>Sample Price (200g):</span>
                <span>${samplePrice}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>$3.99</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${(samplePrice + 3.99).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button 
                type="button"
                onClick={() => setStep(1)}
                className="w-1/2 p-3 bg-primary text-dark rounded-md hover:bg-gray-200 border border-dark transition"
              >
                Back
              </button>
              <button 
                type="submit"
                className="w-1/2 p-3 bg-dark text-primary rounded-md hover:bg-primary hover:text-dark border border-dark transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Complete Purchase'}
              </button>
            </div>
            {submitError && <p className="text-red-500 mt-4">{submitError}</p>}
          </form>
        )}
      </div>
    </div>
  )
}

export default SampleCheckoutPopup