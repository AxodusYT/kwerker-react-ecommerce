const Hero = () => {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        <div className="max-w-3xl">

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-600" />
            Discover something new
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            Everything you need,
            <span className="text-violet-600">
              {" "}all in one place.
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl leading-relaxed">
            Discover products you'll love and find everything
            you need in one simple shopping experience.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;