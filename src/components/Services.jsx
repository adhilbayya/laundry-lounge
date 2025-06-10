function Services({ className }) {
  return (
    <section className={`py-16 bg-gray-100 mb-0 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Wash & Fold</h3>
            <p className="text-gray-600">
              Affordable and thorough cleaning for your everyday laundry needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Dry Cleaning</h3>
            <p className="text-gray-600">
              Gentle care for your delicate garments and specialty items.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Express Service</h3>
            <p className="text-gray-600">
              Same-day service for when you need your clothes back fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
