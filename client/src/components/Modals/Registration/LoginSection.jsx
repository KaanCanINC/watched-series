import Button from "~/components/Button";
import { CgSpinnerAlt } from "react-icons/cg";
import Input from "~/components/Input";

const LoginSection = ({
   setIsRegistered,
   onClick,
   onChange,
   user,
   error,
   loading
}) => (
   <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="login-modal-bg p-8 py-36 sm:bg-none lg:py-[11.5rem]">
         <div className="text-center">
            <h2 className="pb-3 text-2xl font-semibold">Giris yap</h2>
         </div>
         {error && <div className="text-red-500">{error}</div>}
         <form>
            <div className="flex flex-col gap-4 pb-4">
               <Input
                  variant="register"
                  placeholder="E-Posta"
                  size="small"
                  type="email"
                  id="email"
                  value={user.email}
                  onChange={onChange}
                  required
               />
               <Input
                  variant="register"
                  placeholder="Şifre"
                  size="small"
                  type="password"
                  id="password"
                  value={user.password}
                  onChange={onChange}
                  required
               />
            </div>
            <div className="flex items-center justify-between pb-4">
               <label className="flex w-fit gap-2 has-[:checked]:accent-violet-300">
                  <Input variant="base" size="none" type="checkbox" />
                  Beni Hatırla
               </label>
               <a
                  href="#"
                  className="text-sm text-blue-500 transition hover:text-blue-800"
               >
                  Şifremi unuttum
               </a>
            </div>
            <div className="flex justify-center gap-2.5">
               <Button variant="default" size="medium" className="w-2/4 py-2 flex justify-center items-center" onClick={onClick} disable={loading}>
                  {loading ?
                     <>
                        <CgSpinnerAlt className="animate-spin h-5 w-5" />
                        <p className="px-2">Lütfen bekleyin</p>
                     </>
                     : "Giriş Yap"
                  }
               </Button>
               <Button
                  variant="default"
                  size="medium"
                  type="button"
                  className="w-2/4 py-2 lg:hidden"
                  onClick={() => setIsRegistered(false)}
               >
                  Üye Ol
               </Button>
            </div>
         </form>
      </div>
      <div className="login-modal-bg hidden flex-col items-center justify-center gap-3 text-center text-white lg:flex">
         <h2 className="relative bottom-12 text-2xl font-semibold">Üye Ol</h2>
         <p>
            Eğer bir hesabınız yoksa altta yer alan Üye ol butonuna tıklayarak
            hesabınızı oluşturabilirsiniz.
         </p>
         <Button
            variant="default"
            size="medium"
            className="relative top-12 hidden w-2/4 py-2 lg:block"
            onClick={() => setIsRegistered(false)}
         >
            Üye Ol
         </Button>
      </div>
   </div>
);

export default LoginSection;
