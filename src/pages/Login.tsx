import GoogleLogo from '../assets/svg/GoogleLogo.svg';

function Login() {
  return (
    <div className="p-6 pt-6 font-uber flex flex-col">
      <h1>Enter your mobile number</h1>
      <form className="w-full flex flex-col space-y-2 mt-2">
        <input
          className="w-full p-2 bg-gray-200 rounded-lg "
          type="email"
          placeholder="E-mail"
        />
        <input
          className="w-full p-2 bg-gray-200 rounded-lg "
          type="password"
          placeholder="Password"
        />
        <button
          className="w-full p-2 bg-black text-white rounded-lg "
          type="submit"
        >
          Continue
        </button>
      </form>
      <div className="w-full mt-5">
        <div className="h-[1.5px] w-full bg-gray-300 relative">
          <p className="absolute px-2 bg-white left-[50%] -translate-x-[50%] -top-3 text-gray-300">
            or
          </p>
        </div>
      </div>
      <div className="flex flex-col space-x-2 mt-5">
        <button className="w-full p-2 bg-gray-200 rounded-lg flex items-center justify-center">
          <img src={GoogleLogo} className="h-4 w-4 mx-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
