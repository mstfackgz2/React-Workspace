import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const BASE_URL = "http://localhost:3005";

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = (await axios.post(`${BASE_URL}/users`, newUser)).status;
    console.log(response);
  };

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(
      `${BASE_URL}/users/${userId}`,
      updatedUser
    );
    console.log(response.data);
  };

  const deleteUser = async (userId) => {
    const responseStatus = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(responseStatus.status);
  };

  useEffect(() => {
    //getAllUsers();
    //getUserById(1);
    // createUser({ username: "deneme1", password: "deneme1" });
    // updateUser("1", {
    //   username: "updatedUser2",
    //   password: "updatedUser2",
    // });

    deleteUser("1");
  }, []);

  return <h1></h1>;
}

export default App;
