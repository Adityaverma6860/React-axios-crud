// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Create = () => {
//   // useState used
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const history = useNavigate();

//   // Axios Used

//   const header = { "Acess-control-Allow=Origin": "*" };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("clicked");
//     axios
//       .post("https://671caac809103098807ac81f.mockapi.io/Crud", {
//         name: name,
//         email: email,
//         header,
//       })
//       // after worl axios  is page ko redirect kro
//       // history("/read");
//       .then(() => {
//         history("/read");
//       });
//   };
//   return (
//     <>
//       {/*  Button ko side main lagaya  */}
//       <div className="d-flex justify-content-between m-2">
//         <h2> Create </h2>
//         {/* Create page to read page  */}
//         <Link to="/read">
//           {/*  create page pe Button lagana hai */}

//           <button className="btn btn-primary">Show Data</button>
//         </Link>
//       </div>
//       <form>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="mb-2">
//           <label classNameName="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             aria-describedby="emailHelp"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };
// export default Create;


import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  // useState hooks for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    axios
      .post(
        "https://671caac809103098807ac81f.mockapi.io/Crud",
        { name: name, email: email },
        { headers: { "Access-Control-Allow-Origin": "*" } } // Setting headers
      )
      .then(() => {
        // After successful submission, navigate to the read page
        navigate("/read");
      });
  };

  return (
    <>
      {/* Header with link to read page */}
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      
      <form onSubmit={handleSubmit}>
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
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
