const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}
      onClick={onClose}
    >
      <div
        className="w-11/12 max-w-3xl rounded-lg bg-white shadow-lg lg:overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 py-36">
            <div className="text-center">
              <h2 className="pb-3 text-2xl font-semibold">Giris yap</h2>
            </div>
            <form action="">
              <div className="mb-4">
                <div className="flex items-center rounded border p-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-grow outline-none"
                  />
                </div>
              </div>{" "}
              <div className="mb-4">
                <div className="flex items-center rounded border p-2">
                  <input
                    type="password"
                    placeholder="Şifre"
                    className="flex-grow outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pb-4">
                <label>
                  <input
                    type="checkbox"
                    id="dontForget"
                    className="active:bg-violet-400"
                  />
                  Beni Hatırla
                </label>
                <a href="#" className="text-sm text-blue-500">
                  Şifremi unuttum
                </a>
              </div>
              <div className="flex justify-center gap-2.5">
                <button
                  type="submit"
                  className="w-2/4 rounded-xl bg-violet-400 py-2 text-white"
                >
                  Giriş
                </button>
                <button className="block w-2/4 rounded-xl bg-violet-400 py-2 text-white lg:hidden">
                  Üye Ol
                </button>
              </div>
            </form>
          </div>
          <div className="login-modal-bg hidden flex-col items-center justify-center gap-3 text-center text-white lg:flex">
            <h2 className="relative bottom-12 text-2xl font-semibold">
              Üye Ol
            </h2>
            <p>
              Eğer bir hesabınız yoksa altta yer alan Üye ol butonuna tıklayarak
              hesabınızı oluşturabilirsiniz.
            </p>
            <button className="relative top-12 w-2/4 rounded-xl bg-violet-400 py-2 text-white">
              Üye Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
