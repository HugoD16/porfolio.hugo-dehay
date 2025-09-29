import React from "react";

const certifications = [
  {
    title: "CCNA",
    description: "Certification Cisco Certified Network Associate.",
    image: "/images/certifications/ccna.png",
  },
  {
    title: "Linux : Administration avancée",
    description: "Certification sur la gestion avancée des systèmes Linux.",
    image: "/images/certifications/linux.png",
  },
  {
    title: "Prompts engineering avancés",
    description: "Certification sur l'optimisation des prompts pour l’IA.",
    image: "/images/certifications/prompt.png",
  },
  {
    title: "Création de contenu avec l’IA",
    description: "Certification sur l’utilisation de l’IA pour générer du contenu.",
    image: "/images/certifications/ai.png",
  },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-gray-50" id="certifications">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 hover:shadow-xl transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
