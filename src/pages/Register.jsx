import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Register = () => {
  const { registerUser } = useContext(MyStore);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  ///password //// watch helps to get realtime and actual value

  const password = watch("password");

  const onSubmit = (data) => {
    const result = registerUser(data);

    if (!result.success) {
      alert(result.message);
      return;
    }
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb] flex">
      {/* ================= LEFT SIDE ================= */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#fff0f4]">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl" />

        <div className="relative z-10 w-full p-12 flex flex-col justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-black tracking-tight text-gray-900"
          >
            K<span className="text-pink-600">werker</span>
          </Link>

          {/* Hero */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 rounded-full text-sm font-medium text-pink-700 mb-6">
              <span className="w-2 h-2 bg-pink-600 rounded-full" />
              Join the Kwerker community
            </div>

            <h1 className="text-6xl font-black tracking-tight text-gray-900 leading-[1.05]">
              Your next
              <br />
              <span className="text-pink-600">favourite thing.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-md">
              Create your account and discover a better way to explore, save and
              shop the products you love.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              <Feature
                icon="♡"
                title="Save Your Favourites"
                description="Keep the products you love in one place"
              />

              <Feature
                icon="✦"
                title="Discover More"
                description="Explore products across different categories"
              />

              <Feature
                icon="✓"
                title="Simple Shopping"
                description="Everything you need, without the clutter"
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
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-pink-600 transition mb-8"
          >
            <span>←</span>
            Back to store
          </Link>

          {/* Card */}
          <div className="bg-white rounded-[28px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8 sm:p-10">
            {/* Header */}
            <div className="mb-7">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-xl mb-5">
                ✦
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                Create account
              </h2>

              <p className="text-gray-500 mt-2">
                Join Kwerker and start exploring.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)} /// onSubmit func is created on top
              className="space-y-5"
            >
              {/* Name */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full h-12 rounded-xl border border-gray-200 px-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />

                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
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
                  className="w-full h-12 rounded-xl border border-gray-200 px-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />

                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full h-12 rounded-xl border border-gray-200 px-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />

                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="w-full h-12 rounded-xl border border-gray-200 px-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />

                {errors.confirmPassword && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
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
                className="h-11 rounded-xl border border-gray-200 hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
              >
                <span className="font-bold">G</span>
                Google
              </button>

              <button
                type="button"
                className="h-11 rounded-xl border border-gray-200 hover:bg-gray-50 transition flex items-center justify-center gap-2 text-sm font-medium text-gray-700"
              >
                <span className="font-bold">◉</span>
                GitHub
              </button>
            </div>

            {/* Login */}
            <p className="text-center text-sm text-gray-500 mt-7">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-pink-600 hover:text-pink-700"
              >
                Login
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
      <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-pink-600 font-bold">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>

        <p className="text-sm text-gray-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
};

export default Register;
