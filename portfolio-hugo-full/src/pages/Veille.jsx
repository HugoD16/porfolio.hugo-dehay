import React from "react";

const articles = [
  {
    title: "Mistral AI : incarnation de l’intelligence artificielle à la française",
    summary:
      "L’entreprise française Mistral AI s’impose comme un acteur majeur de l’IA en Europe. Elle développe des modèles ouverts et veut concurrencer les géants américains.",
    date: "26 septembre 2025",
    source: "Le Monde",
    link: "https://www.lemonde.fr/economie/article/2025/09/26/mistral-ai-incarnation-de-l-intelligence-artificielle-a-la-francaise_6643087_3234.html",
    image: "/images/veille/mistral.png",
  },
  {
    title: "Un chatbot déguisé en doudou : l’IA pénètre l’univers des enfants",
    summary:
      "Après avoir conquis les adultes, l’IA commence à se diffuser dans les jouets éducatifs. Des experts alertent sur les risques liés à la vie privée et au développement cognitif.",
    date: "25 septembre 2025",
    source: "Le Monde",
    link: "https://www.lemonde.fr/idees/article/2025/09/25/un-chatbot-deguise-en-doudou-apres-avoir-colonise-le-monde-des-adultes-l-ia-penetre-celui-des-enfants_6642899_3232.html",
    image: "/images/veille/chatbot.png",
  },
  {
    title: "La quête de pouvoir de Sam Altman, patron de ChatGPT",
    summary:
      "Sam Altman, PDG d’OpenAI, poursuit son ambition de faire de l’IA une technologie incontournable, soulevant des questions sur la concentration de pouvoir.",
    date: "27 septembre 2025",
    source: "Le Monde",
    link: "https://www.lemonde.fr/idees/article/2025/09/27/la-quete-de-pouvoir-de-sam-altman-patron-de-chatgpt_6643157_3232.html",
    image: "/images/veille/samaltman.png",
  },
];

export default function Veille() {
  return (
    <section className="py-16 bg-gray-50" id="veille">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Veille IA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.summary}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {article.date} — {article.source}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Lire l’article
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
