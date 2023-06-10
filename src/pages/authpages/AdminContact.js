import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/viewer/getcontact');
        setContacts(response.data);
      } catch (error) {
        console.log('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ways-service.onrender.com/api/viewer/delete/${id}`);
      console.log('Post deleted successfully');
      setContacts((prevContacts) => prevContacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };


  return (
    <div className="text-slate-200">
      <div className='sm:grid md:grid-cols-3 gap-6 p-6 sm:grid-cols-2'>
        {contacts.map((contact) => (
          <div key={contact._id} className='mb-6'>
            <div className='gap-6 flex mt-4'>
              <h1 className='font-semibold p-2 text-blue-700'>{contact.contactmail}</h1>

              <h1 className='font-semibold p-2 text-blue-700'>{contact.contactnumber}</h1>

              <h1 className='font-semibold p-2 text-blue-700'>{contact.subject}</h1>
              <p>{contact.enquiry }</p>
              <button onClick={() => handleDelete(contact._id)} className='bg-red-800 w-24 rounded-lg mx-auto text-center'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminContact