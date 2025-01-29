import { useState, useEffect } from "react";
import  axios  from "axios";
import FilterCustomerTable from "../FilterCustomerTable";

const Users = ({customers}) => {
  const [user, setUser] = useState([]);

  const getUsers = () =>{
    axios.get("http://localhost:3000/users").then(res =>{
      setUser(res.data)
    })
  }

  useEffect(() => {
    getUsers()
  }, []);

  return <FilterCustomerTable customers={customers} />;
};

export default Users;

