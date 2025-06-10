function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Laundry Lounge</h1>
        <p className="text-xl mb-8">
          Fast, reliable, and eco-friendly laundry services at your doorstep
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
          Book a Pickup
        </button>
      </div>
    </section>
  );
}

export default Hero;
