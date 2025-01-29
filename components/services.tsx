import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Residential",
      description: "Electrical services for homes and apartments",
    },
    {
      title: "Commercial",
      description: "Electrical solutions for businesses and offices",
    },
    {
      title: "Industrial",
      description: "Large-scale electrical systems for industrial facilities",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
