import React, { useState } from "react";
import List from "./Staff/List";
import axios from "axios";
const Home = () => {
  const [worker, setworker] = useState({
    stuName: "",
    email: "",
    contact: "",
  });
  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setworker({
      ...worker,
      [e.target.name]: e.target.value,
    });
  }
  console.log(worker);
  async function onFormEvent(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9999/worker", worker);
      setStatus(true);
    } catch (error) {
    }
  }
  if (status) {
    return <Home />;
  }
  return (
    <div className="navbar m-0 p-0">
      <div className="w-full h-10 bg-slate-500 justify-center text-center">
        <h1 className="text-white text-center">React CRUD with Api Call</h1>
      </div>
      <div className="flex justify-around gap-3">
        <div className="mt-2 flex justify-around gap-3">
          <table className="border-spacing-2 border shadow-amber-500 w-full  h-">
            <tr>
              <th className="bg-red-500 h-4">Staff Form</th>
            </tr>
            <tbody>
              <tr className=" justify-between">
                <td className="flex justify-around my-2">
                  <label htmlFor="Name">Full Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2"
                    onChange={(e) => onTextFieldChange(e)}
                    name="stuName"
                    required={true}
                  />
                </td>
              </tr>
              <tr>
                <td className="flex my-2">
                  <label htmlFor="Name">Date of birth:</label>
                  <input
                    type="date"
                    placeholder="Enter your birthdate"
                    className="border-gray-500"
                    name="date"
                    onChange={(e) => onTextFieldChange(e)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="flex my-2">
                  <label htmlFor="Name">Email:</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    className="w-full h-8 p-2"
                    onChange={(e) => onTextFieldChange(e)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="my-2">
                  <label htmlFor="Name">Mobile No.:</label>
                  <input
                    type="number"
                    placeholder="Enter your number"
                    onChange={(e) => onTextFieldChange(e)}
                    name="contact"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="my-2">
                  <label htmlFor="Name">Upload your Profile image: </label>
                  <input type="file" placeholder="upload your image" />
                </td>
              </tr>
              <tr>
                <td className="my-2">
                  <button
                    className="bg-purple-700 w-full rounded"
                    type="submit"
                    onClick={(e) => onFormEvent(e)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <List />
      </div>
    </div>
  );
};

export default Home;
