const items = [
  { title: "CCNA : Présentation des réseaux", desc: "Certification Cisco Networking Academy.", file: "/certifications/CCNA.pdf" },
  { title: "Linux : L’administration avancée", desc: "Certification LinkedIn Learning sur l’administration Linux avancée.", file: "/certifications/Linux_Admin_Avancee.pdf" },
  { title: "Prompt engineering pour la génération de contenu avec l’IA", desc: "Certification LinkedIn Learning sur les techniques de prompt engineering.", file: "/certifications/Prompt_Engineering.pdf" },
  { title: "Les prompts engineering avancés", desc: "Certification LinkedIn Learning avancée sur l’IA générative.", file: "/certifications/Prompt_Engineering_Avance.pdf" }
]

const Card = ({ title, desc, file }) => (
  <div className="grid grid-cols-[120px_1fr] gap-6 card">
    <div className="bg-gray-200 rounded-xl flex items-center justify-center text-5xl">🎓</div>
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-700 mt-2">{desc}</p>
      <a href={file} target="_blank" className="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-full bg-indigo-900 text-white shadow-soft">Voir le certificat</a>
    </div>
  </div>
)

export default function Certifications(){
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-8">{items.map((it,i)=>(<Card key={i} {...it} />))}</div>
    </section>
  )
}
