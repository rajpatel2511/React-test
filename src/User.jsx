import { useEffect, useState } from "react";

import { API } from "./apiService";
const User1 = () => {
 
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);

  const fetchUsers = async() => {
    try {
      setUsersLoading(true);
    const response = await API.getUsers();
    console.log(response)
      setUsersLoading(false);
      setUsers(response.data)
      } catch (error) {
    
        setUsersLoading(false);
      };
    };

    useEffect(()=>{
      fetchUsers();
    },[]);
  return (
    <>
      {usersLoading ? (
        <center>Loading...</center>
      ) : (
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default User1;
