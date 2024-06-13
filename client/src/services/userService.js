import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const handleSubmit = async (event, selectedFile, setUploadStatus) => {
   event.preventDefault();

   if (!selectedFile) {
      alert("Please select a file first!");
      return;
   }

   const formData = new FormData();
   formData.append("avatar", selectedFile);

   const token = cookies.get("JWT_TOKEN");

   try {
      const response = await axios.put("http://localhost:3001/api/avatar", formData, {
         headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": token,
         },
      });

      if (response.status === 200) {
         setUploadStatus("Upload successful!");
      } else {
         setUploadStatus("Upload failed.");
      }
   } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Upload failed.");
   }
};


export { handleSubmit }
