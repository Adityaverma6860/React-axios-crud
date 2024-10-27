// import axios from "axios";
// import React, { useState, useEffect, Link } from "react";
// import { useNavigate } from "react-router-dom";
// const Update = () => {
//   // local storage data ko read krna hai update wale page pe
//   const [id, setId] = useState(0);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();
//   // Jab ye page load hoga to localstorage data show hona chahiye
//   useEffect(() => {
//     setId(localStorage.getItem("id"));
//     setName(localStorage.getItem("name"));
//     setEmail(localStorage.getItem("email"));
//   }, []);
//   // update data
//   const handleUpdate = (e) => {
//     e.preventDefault();
//     console.log("Id...", id);
//     axios
//       .put(
//         `https://671caac809103098807ac81f.mockapi.io/Crud/${id}`,
//         {
//           name: name,
//           email: email,
//         }
//         // Update ke bad again go on read page (reride)
//       )
//       .then(() => {
//         navigate("/read");
//       });
//   };
//   return;
//   <>
//     <h2>Update</h2>
//     <form>
//       <div className="mb-3">
//         <label className="form-label">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label classNameName="form-label">Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <button
//         type="submit"
//         className="btn btn-primary mx-2"
//         // Edit krna hai and update
//         onClick={handleUpdate}
//       >
//         Update
//       </button>
//       {/*  Read page pe jayega  */}
//       <Link to="/read">
//         <button className="btn btn-secondry mx-2">Back</button>
//       </Link>
//     </form>
//   </>;
// };
// export default Update;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  // Local storage data ko read krna hai update wale page pe
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Jab ye page load hoga to localstorage data show hona chahiye
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  // Update data
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://671caac809103098807ac81f.mockapi.io/Crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        // Update ke bad again go on read page (reride)
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        {/* Read page pe jayega */}
        <Link to="/read">
          <button className="btn btn-secondary mx-2">Back</button>
        </Link>
      </form>
    </>
  );
};

export default Update;
