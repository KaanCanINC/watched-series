import { useState, useContext } from "react";
import { AuthContext } from "~/context/AuthContext";
import { handleSubmit } from "~/services/userService";


const Homepage = () => {
   const { userData } = useContext(AuthContext); // Access user data from context
   const [selectedFile, setSelectedFile] = useState(null);
   const [uploadStatus, setUploadStatus] = useState("");

   const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
   };

   console.log(userData)

   return (
      <main>
         <h2>Ana sayfa</h2>
         <div>
            <form onSubmit={(event) => handleSubmit(event, selectedFile, setUploadStatus)}>
               <input type="file" onChange={handleFileChange} />
               <button type="submit">Upload</button>
            </form>
            <img src={selectedFile} alt="" />
            {uploadStatus && <p>{uploadStatus}</p>}
         </div>
      </main>
   );
};

export default Homepage;

