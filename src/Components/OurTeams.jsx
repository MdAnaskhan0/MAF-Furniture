import React from 'react';
import { Link } from 'react-router-dom';
import Person1 from '../assets/images/Kabir.jpg';
import Person2 from '../assets/images/Anas.jpg';
import Person3 from '../assets/images/person_3.jpg';
import Person4 from '../assets/images/person_4.jpg';

const teamMembers = [
  {
    id: 1,
    name: "Md. Kabir Khan",
    title: "CEO, Founder, Maf Furniture",
    description:
      "Md. Kabir Khan is the visionary leader behind Maf Furniture, transforming spaces with exquisite furniture designs.",
    image: Person1,
  },
  {
    id: 2,
    name: "Md. Anas Khan",
    title: "COO, Maf Furniture",
    description:
      "Sarah Ahmed ensures operational excellence, driving innovation and growth at Maf Furniture.",
    image: Person2,
  },
  {
    id: 3,
    name: "David Johnson",
    title: "Lead Designer, Maf Furniture",
    description:
      "David Johnson crafts unique and elegant designs that redefine modern living spaces.",
    image: Person3,
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "Marketing Manager, Maf Furniture",
    description:
      "Emily Davis creates impactful marketing strategies to connect with our valued customers.",
    image: Person4,
  },
];

const OurTeams = () => {
  return (
    <div className="bg-[#EFF2F1] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h1>
          <p className="text-gray-600 mb-8 px-4 text-sm sm:text-base sm:px-0">
            Meet the dedicated professionals who drive Maf Furniture's success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-3"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.title}</p>
                <p className="text-gray-600 text-sm mb-6">{member.description}</p>
                <Link
                  to="/shop"
                  className="text-[#3B5D50] font-semibold hover:text-green-700"
                >
                  View Details...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
