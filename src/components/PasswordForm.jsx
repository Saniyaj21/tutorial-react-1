import React, { useState, useEffect } from 'react';

const PasswordForm = ({ onSavePassword, editPassword }) => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (editPassword) {
      setTitle(editPassword.title);
      setUsername(editPassword.username);
      setPassword(editPassword.password);
    }
  }, [editPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && username && password) {
      onSavePassword({ title, username, password, id: editPassword?.id || null });
      setTitle('');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Website/Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editPassword ? 'Update Password' : 'Save Password'}
      </button>
    </form>
  );
};

export default PasswordForm;
