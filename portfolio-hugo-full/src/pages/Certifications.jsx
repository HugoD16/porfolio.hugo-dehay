const items = [
  { title: "SecNumAcadémie", desc: "MOOC d’initiation à la cybersécurité (BTS SIO).", logo: "🎓", link: "#" },
  { title: "DRSD Secret Défense", desc: "MOOC sur la sécurité des données et des intérêts nationaux.", logo: "🦅", link: "#" },
  { title: "CNIL — MOOC RGPD", desc: "Sensibilisation à la protection des données.", logo: "🛡️", link: "#" },
  { title: "PIX", desc: "Évaluation des compétences numériques.", logo: "📊", link: "#" }
]

const Card = ({logo, title, desc, link}) => (
  <div className="grid grid-cols-[120px_1fr] gap-6 card">
    <div className="bg-gray-200 rounded-xl flex items-center justify-center text-5xl">{logo}</div>
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-700 mt-2">{desc}</p>
      <a href={link} target="_blank" className="inline-flex items-center gap-2 mt-4 px-5 py-3 rounded-full bg-indigo-900 text-white shadow-soft">Voir l’attestation</a>
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
