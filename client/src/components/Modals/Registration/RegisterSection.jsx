import Button from "~/components/Button";
import Input from "~/components/Input";
import PasswordChecklist from "react-password-checklist";
import { useState } from "react";

const RegisterSection = ({
  setIsRegistered,
  onClick,
  onChange,
  user,
  notify,
  error,
}) => {
  const [passwordAgain, setPasswordAgain] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="login-modal-bg hidden flex-col items-center justify-center gap-3 text-center text-white lg:flex">
        <h2 className="relative bottom-12 text-2xl font-semibold">Giriş Yap</h2>
        <p>
          Zaten bir hesabınız varsa Giriş yap tuşuna tıklayarak giriş
          yapabilirsiniz.
        </p>
        <Button
          variant="default"
          size="medium"
          className="relative top-[11.56rem] hidden w-2/4 py-2 lg:block"
          onClick={() => setIsRegistered(true)}
        >
          Giriş Yap
        </Button>
      </div>
      <div className="login-modal-bg p-8 py-12 sm:bg-none">
        <div className="text-center">
          <h2 className="pb-3 text-2xl font-semibold">Üye Ol</h2>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 overflow-hidden">
            <Input
              variant="register"
              placeholder="Adınız"
              size="small"
              id="firstname"
              value={user.firstName}
              onChange={onChange}
              required
            />
            <Input
              variant="register"
              placeholder="Soyadınız"
              size="small"
              id="lastname"
              value={user.lastName}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <Input
              variant="register"
              placeholder="Kullanıcı Adınız"
              size="small"
              id="username"
              value={user.username}
              onChange={onChange}
              required
            />
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
            <Input
              variant="register"
              placeholder="Şifre Tekrar"
              size="small"
              type="password"
              value={passwordAgain}
              name="confirmPassword"
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
            />
            <PasswordChecklist
              rules={["minLength", "number", "capital", "match"]}
              messages={{
                minLength: "Şifreniz en az 8 uzunluğunda olmalı.",
                number: "Şifreniz en az 1 rakam içermelidir.",
                capital: "Şifreinz en az 1 büyük harf içermelidir.",
                match: "Şifreler eşleşmiyor.",
              }}
              minLength={8}
              valueAgain={passwordAgain}
              value={user.password}
              onChange={(isValid) => setCheckPassword(isValid ? true : false)}
              className={`${checkPassword ? "hidden" : "block"}`}
            />
            <label
              htmlFor="birthDate"
              className="flex  items-center justify-between"
            >
              Doğum tarihiniz:
              <Input
                variant="register"
                size="small"
                type="date"
                id="dateofbirth"
                value={user.dateofbirth}
                onChange={onChange}
                required
              />
            </label>
          </div>
          <label className="flex w-fit gap-2 has-[:checked]:accent-violet-300">
            <Input variant="base" size="none" type="checkbox" required />
            <a className="text-blue-500 transition hover:text-blue-800">
              Üyelik sözleşmesini
            </a>
            okudum. Onalıyorum.
          </label>
          <label className="flex  w-fit gap-2 has-[:checked]:accent-violet-300">
            <Input
              variant="base"
              size="none"
              type="checkbox"
              id="notify"
              onChange={notify}
            />
            Yeniliklerden haberdar olmak istiyorum.
          </label>
          <div className="flex justify-center gap-2.5">
            <Button
              variant="default"
              size="medium"
              className="w-2/4 py-2"
              type="submit"
              onClick={onClick}
            >
              Üye Ol
            </Button>
            <Button
              variant="default"
              size="medium"
              className="w-2/4 py-2 lg:hidden"
              onClick={() => setIsRegistered(true)}
            >
              Giriş Yap
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterSection;
