import axios from "axios";

const handleRegister = async (event, user, setIsRegistered, onClose, setErrorMessage) => {
   event.preventDefault();
   try {
      if (!user.firstname || !user.lastname || !user.username || !user.email || !user.password || !user.dateofbirth) {
         setErrorMessage("Lütfen tüm alanları doldurunuz.");
         return;
      }
      const birthDate = new Date(user.dateofbirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
         age--;
      }

      if (age < 18) {
         setErrorMessage("Üzgünüz, 18 yaşından küçükler kayıt olamaz.");
         return;
      }

      const response = await axios.post("http://localhost:3001/api/users/signup", user);
      console.log(response.status, response.data.token);
      alert("Kayıt başarılı!");
      setIsRegistered(true)
      onClose();
   } catch (error) {
      if (error.response && error.response.data) {
         setErrorMessage(error.response.data.message || "Bilinmeyen bir hata oluştu.");
      } else {
         setErrorMessage("Beklenmeyen bir hata oluştu.");
      }
   }
};

export default handleRegister
