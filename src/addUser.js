// const AddUser = () => {
 

  

//     return(
//         <>
//         <input type="text" placeholder="addUser"/>
//         <input type="button" value={"Add"} />
//         </>
//     )

// };
// export default AddUser;
import React, { useState } from 'react';

const AddUser = ({ addUser }) => {
  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = () => {
    if (newUserName.trim()) {
      addUser(newUserName);
      setNewUserName('');
    }
  };

  const handleInputChange = (e) => {
    setNewUserName(e.target.value);
  };

  return (
    <div>
      <h2>Add User</h2>
      <input type="text" value={newUserName} onChange={handleInputChange} />
      <button onClick={handleAddUser}>Add</button>
    </div>
  );
};

export default AddUser;
