import React from 'react';

const PasswordList = ({ passwords, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Website/Title</th>
          <th>Username</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {passwords.length > 0 ? (
          passwords.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.username}</td>
              <td>{p.password}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(p)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">No passwords saved.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PasswordList;
