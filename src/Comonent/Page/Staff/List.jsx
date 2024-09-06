import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdVisibility } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const List = () => {
  const [worker, setWorker] = useState([]);
  useEffect(() => {
    getAllWorker();
  }, []);

  async function getAllWorker() {
    try {
      const worker = await axios.get("http://localhost:9999/worker");
      const workerr = worker.data.sort((item1, item2) => {
        return item2.id - item1.id;
      });
      console.log("hello", workerr);
      setWorker(worker.data);
    } catch (error) {}
  }

  const handleDelet = async (id) => {
    await axios.delete(`http://localhost:9999/worker/${id}`);
    var newWorker = worker.filter((item) => {
      return item.id !== id;
    });
    setWorker(newWorker);
  };
  return (
    <table className=" border-spacing-2 border shadow-amber-500 w-full">
      <tr>
        <th className="bg-red-500 h-10">Worker List</th>
      </tr>
      {worker.map((worker, i) => {
        return (
          <tbody key={i} className="flex justify-around">
            <tr>
              <th className="flex">NO.</th>
              <td>{i + 1}</td>
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
              <td>image</td>
            </tr>
            <tr>
              <th className="flex">Action</th>
              <td className="flex gap-3">
                <Link to={`/view/${worker.id}`}>
                  <MdVisibility />
                </Link>
                <Link to={`/edit/${worker.id}`}>
                  <RiEdit2Fill />
                </Link>
                <Link onClick={() => handleDelet(worker.id)}>
                  <MdDeleteForever />
                </Link>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default List;
