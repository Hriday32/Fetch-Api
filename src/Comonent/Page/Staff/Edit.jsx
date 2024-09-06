import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [worker, setWorker] = useState({
    stuName: "",
    email: "",
    contact: "",
  });

  const { id } = useParams();

  function onTextFieldChange(e) {
    setWorker({
      ...worker,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    getWorker();
  }, [id]);
  async function getWorker() {
    try {
      const worker = await axios.get(`http://localhost:9999/worker/${id}`);
      setWorker(worker.data);
    } catch (error) {}
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9999/worker/${id}`, worker);
    } catch (error) {}
  }
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        React CRUD with API Call
      </h1>
      <form style={{ border: "1px solid #ddd", padding: "20px" }}>
        <h2
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Edit Worker
        </h2>

        <div className="form-group">
          <label>ID :</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={worker.id}
            onChange={onTextFieldChange}
          />
        </div>

        <div className="form-group">
          <label>Name :</label>
          <input
            type="text"
            className="form-control"
            name="stuName"
            value={worker.stuName}
            onChange={onTextFieldChange}
          />
        </div>

        <div className="form-group">
          <label>Email Address :</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={worker.email}
            onChange={onTextFieldChange}
          />
        </div>

        <div className="form-group">
          <label>Contact </label>
          <input
            type="tel"
            className="form-control"
            name="contact"
            value={worker.contact}
            onChange={onTextFieldChange}
          />
        </div>

        <div className="form-group">
          <label>Image </label>
          <input type="file" className="form-control" name="image" />
        </div>

        <div className="flex mt-5 justify-around gap-2">
          <button
            type="submit"
            className="btn btn-primary bg-slate-800 text-stone-50 w-full rounded"
            onClick={(e) => {
              onSubmitForm(e);
              window.location.href = "/";
            }}
          >
            Update
          </button>
          <button
            type="button"
            className="btn btn-primary bg-slate-800  text-stone-50 w-full rounded"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};
export default Edit;
