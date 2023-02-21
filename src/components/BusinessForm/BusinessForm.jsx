import { updateUser } from '../../utilities/users-api'
import PhotoUpload from '../PhotoUpload/PhotoUpload';

export default function BusinessForm(props) {
    const { setUser, handleChange, handleSubmit, formData, setFormData, setShowBusinessForm } = props 

  
    // handleSubmit = async (evt) => {
    //   evt.preventDefault();
    //   try {
    //     const {photoUrl, address, city, state, zipCode} = formState;
    //     const formData = {photoUrl, address, city, state, zipCode};
    //     // The promise returned by the signUp service
    //     // method will resolve to the user object included
    //     // in the payload of the JSON Web Token (JWT)
    //     const user = await updateUser(formData);
    //     props.setUser(user);
    //   } catch {
    //     // An error occurred
    //     // Probably due to a duplicate email
    //     setFormState({ error: 'Sign Up Failed - Try Again' });
    //   }
    // };
    //   const disable = formState.password !== formState.confirm;
      return (
        <>
          <div>
            <input className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" type="text" name="businessName" value={formData.businessName} placeholder='Business Name' onChange={handleChange}  />
          </div>
          <div>
            <input className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" type="text" name="businessType" value={formData.businessType} placeholder='Business Type' onChange={handleChange}  />
          </div>
          <div>
            <input className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" type="text" name="address" value={formData.address} placeholder='Address' onChange={handleChange}  />
          </div>
          <div>
            <input className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" type="text" name="city" value={formData.city} placeholder='City' onChange={handleChange}  />
          </div>
          <div>
            <input className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" type="text" name="state" value={formData.state} placeholder='State' onChange={handleChange}  />
          </div>
          <div>
            <input className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" type="text" name="zipCode" value={formData.zip} placeholder='Zip Code' onChange={handleChange}  />
          </div>
          <div>
            <input className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm mb-4" type="text" name="phoneNumber" value={formData.phoneNumber} placeholder='Phone Number' onChange={handleChange}  />
          </div>
          <PhotoUpload formData={formData} setFormData={setFormData}/>
            <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" type="submit">SIGN UP</button>
            <br />
            <button className='font-medium text-grey-600 hover:text-indigo-50 underline mb-4' onClick={() => setShowBusinessForm(true)}>Not a distributor?</button>
        </>


        /* // <>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Business Name</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
        //   </div>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Type of Business</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="businessType" value={formData.businessType} onChange={handleChange} required />
        //   </div>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Address</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="address" value={formData.address} onChange={handleChange} required />
        //   </div>
        //     <label className="font-bold mb-1 text-gray-700 block">City</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="city" value={formData.city} onChange={handleChange} required />
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">State</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="state" value={formData.state} onChange={handleChange} required />
        //   </div>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Zip</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="zipCode" value={formData.zip} onChange={handleChange} required />
        //   </div>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Phone #</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        //   </div>
        //     <button type="submit">SIGN UP</button>
        // </>


        // <>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Business Name</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
        //   </div>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Type of Business</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="businessType" value={formData.businessType} onChange={handleChange} required />
        //   </div>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Address</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="address" value={formData.address} onChange={handleChange} required />
        //   </div>
        //     <label className="font-bold mb-1 text-gray-700 block">City</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="city" value={formData.city} onChange={handleChange} required />
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">State</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="state" value={formData.state} onChange={handleChange} required />
        //   </div>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Zip</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="zipCode" value={formData.zip} onChange={handleChange} required />
        //   </div>
        //   <div className='mb-5'>
        //     <label className="font-bold mb-1 text-gray-700 block">Phone #</label>
        //     <input className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline text-gray-600 font-medium" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        //   </div>
        //     <button type="submit">SIGN UP</button>
        // </> */
      );
    }