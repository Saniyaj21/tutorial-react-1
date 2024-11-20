import React, { useState, useEffect } from 'react';
import PasswordForm from './PasswordForm';
import PasswordList from './PasswordList';

const PasswordManager = () => {
  const [passwords, setPasswords] = useState([]);
  const [editPassword, setEditPassword] = useState(null);

  // Load passwords from localStorage
  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    setPasswords(storedPasswords);
  }, []);

  // Update localStorage whenever passwords change
  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(passwords));
  }, [passwords]);

  // Add or Update password
  const handleSavePassword = (password) => {
    if (editPassword) {
      setPasswords(passwords.map(p => (p.id === editPassword.id ? password : p)));
      setEditPassword(null);
    } else {
      setPasswords([...passwords, { ...password, id: Date.now() }]);
    }
  };

  // Delete password
  const handleDeletePassword = (id) => {
    setPasswords(passwords.filter(p => p.id !== id));
  };

  return (
    <div>
      <PasswordForm
        onSavePassword={handleSavePassword}
        editPassword={editPassword}
      />
      <PasswordList
        passwords={passwords}
        onEdit={setEditPassword}
        onDelete={handleDeletePassword}
      />
    </div>
  );
};

export default PasswordManager;
