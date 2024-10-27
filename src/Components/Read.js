// import React, { useState, useEffect, Link } from "react";
// import axios from "axios";

// const Read = () => {
//   // Data ko store karne ke liye UseState ka used
//   const [data, setData] = useState([]);
//   const [tabledark, setTableDark] = useState("");
//   function getData() {
//     axios
//       .get("https://671caac809103098807ac81f.mockapi.io/Crud")
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data);
//       });
//   }
//   // Define  handle delete  maeans pass data yaha read kr rha hu
//   function handleDelete(id) {
//     axios
//       .delete(`https://671caac809103098807ac81f.mockapi.io/Crud/${id}`)
//       .then(() => {
//         getData(); // data delete hone ke bad ye function fir se call kr do (result main update result aayega)
//       });
//   }
//   // Data ko Local storage main Save kiya gya hai Edit optin ke liye we take  data from localstorage/Database
//   const setToLocalStorage = (id, name, email) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//   };
//   // jab read page pe aayenge /page reload hoga  tab get data function hit hona chahiye to used useEffect
//   useEffect(() => {
//     getData();
//   }, [data]);
//   // yaha deta pass nhi kr rhe hai to getdata ko dobara read & run hona hoga kyonki yaha delete krne pe component update hoga & remove hoga  to show krane ke liye  getdata pass krwana hoga
//   return (
//     <>
//       <div className="form-check form-switch">
//         <input
//           className="form-check-input"
//           type="checkbox"
//           onClick={() => {
//             if (tabledark === "table-dark") setTableDark("");
//             else setTableDark("table-dark");
//           }}
//         />
//       </div>
//       {/*  side main lagana hai  */}
//       <div className="d-flex justify-content-between m-2">
//         <h2>Read Operation </h2>
//         {/* Create page to read page  */}
//         <Link to="/create">
//           {/*  create page pe Button lagana hai */}

//           <button className="btn btn-secondry">Create</button>
//         </Link>
//       </div>
//       <table class={`table${tabledark}`}>
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col"></th>
//             <th scope="col"></th>
//           </tr>
//         </thead>
//         {
//           //  javascript = yaha loop run krne wale hai
//           data.map((eachData) => {
//             return (
//               <>
//                 <tbody>
//                   <tr>
//                     <th scope="row">{eachData.id}</th>
//                     <td>{eachData.name}</td>
//                     <td>{eachData.email}</td>
//                     <td>
//                       {/* yaha rap huaa hai yani update file se edit option se  data  aayega */}

//                       <Link to="/update">
//                         {/*  Edit pe click krne pe Database ko localstorage main Save krna hai  */}
//                         <button
//                           className="btn-success"
//                           onClick={() =>
//                             setToLocalStorage(
//                               eachData.id,
//                               eachData.name,
//                               eachData.emai
//                             )
//                           }
//                         >
//                           Edit{""}{" "}
//                         </button>
//                       </Link>
//                       {/* <button className="btn-success"> Edit </button> */}
//                     </td>
//                     <td>
//                       <button
//                         className="btn-danger"
//                         // yaha se data pass hoga
//                         onClick={() => handleDelete(eachData.id)}
//                       >
//                         Delete{" "}
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </>
//             );
//           })
//         }
//       </table>
//     </>
//   );
// };
// export default Read;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Read = () => {
  // Data state to store fetched data
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  // Fetch data from API
  function getData() {
    axios.get("https://671caac809103098807ac81f.mockapi.io/Crud").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }

  // Handle deletion of a record
  function handleDelete(id) {
    axios.delete(`https://671caac809103098807ac81f.mockapi.io/Crud/${id}`).then(() => {
      getData(); // Refresh data after deletion
    });
  }

  // Save data to local storage for editing
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  // Fetch data once when the component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            setTableDark(tabledark === "table-dark" ? "" : "table-dark");
          }}
        />
      </div>

      {/* Header with a button to navigate to the create page */}
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/create">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>

      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      setToLocalStorage(eachData.id, eachData.name, eachData.email)
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
