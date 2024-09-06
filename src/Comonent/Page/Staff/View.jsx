import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const { id } = useParams();

  const [worker, setWorker] = useState([]);

  useEffect(() => {
    getWorker();
  }, []);
  async function getWorker() {
    try {
      const worker = await axios.get(`http://localhost:9999/worker/${id}`);
      setWorker(worker.data);
    } catch (error) {}
  }
  return (
    <div>
      <table className=" border-spacing-2 border shadow-amber-500 w-full">
        <tr>
          <th className="bg-red-500 h-10">Staff List</th>
        </tr>
        <tbody className="flex justify-around">
          <tr>
            <th className="flex">NO.</th>
            <td>{worker.id}</td>
          </tr>
          <tr>
            <th className="flex">Name</th>
            <td>{worker.stuName}</td>
          </tr>

          <tr>
            <th className="flex">Email</th>
            <td>{worker.email}</td>
          </tr>
          <tr>
            <th className="flex">Contact</th>
            <td>{worker.contact}</td>
          </tr>
          <tr>
            <th className="flex">image</th>
            <td>image:</td>
          </tr>
        </tbody>
      </table>
      <div className="back justify-items-center">
        <button
          type="button"
          className="btn btn-primary bg-slate-800  text-stone-50 w-40 rounded "
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default View;
