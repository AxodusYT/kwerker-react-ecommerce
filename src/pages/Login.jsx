import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Login = () => {
  const { loginUser } = useContext(MyStore);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const result = loginUser(data.email, data.password);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(result.message);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb] flex">
      {/* ================= LEFT SIDE ================= */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#eeeaff]">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#c4b5fd]/30 rounded-full blur-3xl" />

        <div className="relative z-10 w-full p-12 flex flex-col justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-black tracking-tight text-gray-900"
          >
            K<span className="text-violet-600">werker</span>
          </Link>

          {/* Hero Content */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full text-sm font-medium text-violet-700 mb-6">
              <span className="w-2 h-2 bg-violet-600 rounded-full" />
              Your shopping destination
            </div>

            <h1 className="text-6xl font-black tracking-tight text-gray-900 leading-[1.05]">
              Find what
              <br />
              <span className="text-violet-600">you love.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">
              Discover products you'll love, explore new collections, and enjoy
              a simple shopping experience with Kwerker.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              <Feature
                icon="✦"
                title="Curated Products"
                description="Discover products selected for you"
              />

              <Feature
                icon="⚡"
                title="Fast & Easy"
                description="Simple shopping from start to finish"
              />

              <Feature
                icon="♡"
                title="Made For You"
                description="Save and discover your favourites"
              />
            </div>
          </div>

          {/* Footer */}
          <p className="text-sm text-gray-400">
            © 2026 Kwerker. All rights reserved.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          {/* Back */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-600 transition mb-8"
          >
            <span>←</span>
            Back to store
          </Link>

          {/* Card */}
          <div className="bg-white rounded-[28px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 sm:p-10">
            {/* Header */}
            <div className="mb-8">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 text-xl mb-5">
                ✦
              </div>

              <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>

              <p className="text-gray-500 mt-2">
                Login to your Kwerker account.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full h-13 px-4 rounded-xl border border-gray-200 bg-gray-50/50 outline-none text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-violet-600 hover:text-violet-700"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full h-13 px-4 rounded-xl border border-gray-200 bg-gray-50/50 outline-none text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition"
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("remember")}
                  className="w-4 h-4 accent-violet-600"
                />

                <span className="text-sm text-gray-500">Remember me</span>
              </label>

              {/* Login */}
              <button
                type="submit"
                className="w-full h-13 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 active:scale-[0.98] transition shadow-lg shadow-violet-600/20"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="h-px bg-gray-200 flex-1" />

              <span className="text-xs text-gray-400 uppercase tracking-wider">
                or
              </span>

              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="h-12 rounded-xl border border-gray-200 hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
              >
                <span className="font-bold">G</span>
                Google
              </button>

              <button
                type="button"
                className="h-12 rounded-xl border border-gray-200 hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
              >
                <span className="font-bold">◉</span>
                GitHub
              </button>
            </div>

            {/* Register */}
            <p className="text-center text-sm text-gray-500 mt-8">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-violet-600 hover:text-violet-700"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= FEATURE ================= */

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-violet-600 font-bold">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>

        <p className="text-sm text-gray-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
};

export default Login;
