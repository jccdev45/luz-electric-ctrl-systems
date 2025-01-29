import Link from "next/link";

export function Mission() {
  return (
    <section className="max-w-7xl mx-auto my-12 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Trusted Electrical Services for New York City
      </h2>

      <div className="lg:flex lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-600 border-b-2 border-yellow-300 pb-2">
              OUR MISSION
            </h3>
            <p className="text-gray-700">
              At Luz Electric, we are committed to providing comprehensive,
              safe, and reliable electrical services to our valued clients
              across New York City. Established in 2003, we take pride in
              employing some of the finest electricians and project managers in
              the industry.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-600 border-b-2 border-yellow-300 pb-2">
              OUR EXPERTISE
            </h3>
            <p className="text-gray-700">
              With over 40 years of collective experience in electrical wiring
              and communication systems, we offer top-tier services across The
              Bronx, Manhattan, Queens, and Brooklyn. Our expertise spans
              maintenance, installations, and repairs for fire protection,
              building automation systems, security systems, and all types of
              electrical infrastructure.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-6 mt-6 lg:mt-0">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-600 border-b-2 border-yellow-300 pb-2">
              OUR SERVICES
            </h3>
            <p className="text-gray-700">
              As both prime and subcontractors, we specialize in new residential
              housing projects, industrial facilities, and HVAC controls. Our
              comprehensive range of electrical services caters to projects of
              all sizes, always prioritizing quality and customer satisfaction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-yellow-600 border-b-2 border-yellow-300 pb-2">
              OUR COMMITMENT
            </h3>
            <p className="text-gray-700">
              No matter the scale of the project, Luz Electric and Control
              Systems, Inc. is dedicated to delivering exceptional results. We
              understand the importance of reliable electrical systems in modern
              infrastructure and strive to exceed expectations with every job we
              undertake.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="#contact"
          className="inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
