import {
  BatteryCharging,
  Factory,
  Home,
  Lightbulb,
  Shield,
  Wrench,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SERVICES = [
  {
    title: "New Construction",
    description:
      "Comprehensive electrical solutions for new buildings and renovations.",
    details: [
      "Light Fixtures",
      "Panels, Switches, and Disconnects",
      "Power Wiring for Light, HVAC and All Related Equipment",
      "Motor Controls, Starters, Pumps and All Related Equipment",
    ],
    icon: BatteryCharging,
  },
  {
    title: "Residential",
    description: "Tailored electrical services for homes and apartments.",
    details: [
      "Violation Removals",
      "Accented Lighting",
      "Renovations",
      "Security and Entertainment Systems",
    ],
    icon: Home,
  },
  {
    title: "Commercial and Industrial",
    description:
      "Large-scale electrical systems for businesses and industrial facilities.",
    details: [
      "ECB Violation Removals and Certificates of Occupancy",
      "Control and Service Upgrades",
      "Parking and Outdoor Lighting",
      "Automated Building Maintenance Controls and HVAC Systems",
    ],
    icon: Factory,
  },
  {
    title: "Service and Maintenance",
    description:
      "Ongoing support to keep your electrical systems running smoothly.",
    details: [
      "Preventive Maintenance",
      "Installation of Electrical Power for Appliances",
    ],
    icon: Wrench,
  },
  {
    title: "Property Inspection",
    description: "Thorough assessments of electrical systems in properties.",
    details: [
      "Identify Violations, Repair and Upgrades Required in Properties for Sale or Rent",
    ],
    icon: Shield,
  },
  {
    title: "Prevention and Property Protection",
    description:
      "Safeguarding your property with advanced electrical safety measures.",
    details: [
      "Installation of Fire Alarm Systems",
      "Wiring and Related Equipment",
    ],
    icon: Lightbulb,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Services
        </h2>
        <p className="text-center mb-12 text-balance text-xl mx-auto text-gray-600">
          With <strong>over 40 years</strong> of experience providing electrical
          services to NYC, our team of skilled electricians, estimators, and
          project managers brings unparalleled expertise to every job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <service.icon size={32} color="#f59e0b" />
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-800">{service.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
