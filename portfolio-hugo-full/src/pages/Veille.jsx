export default function Veille(){
  return (
    <section className="section max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">Veille : Impact de l’IA générative sur les métiers IT</h2>
      <p className="text-gray-700 mb-4">
        L’IA générative (ChatGPT, GitHub Copilot, Gemini, Claude) transforme déjà les métiers IT : 
        accélération du développement, assistance à l’écriture de scripts, génération de documentation, 
        et support de niveau 1. Les administrateurs systèmes et réseaux tirent parti de ces outils pour 
        automatiser la rédaction de scripts (PowerShell, Bash), produire des guides pas-à-pas et analyser des logs.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
        <li><b>Gains de productivité</b> : génération de snippets et modèles de scripts.</li>
        <li><b>Qualité & sécurité</b> : relecture automatique, détection d’erreurs potentielles.</li>
        <li><b>Limites</b> : hallucinations, dépendance, confidentialité des données.</li>
        <li><b>Bonnes pratiques</b> : valider les sorties, versionner, chiffrer les secrets, privilégier on‑prem si sensible.</li>
      </ul>
      <p className="text-gray-700">
        Exemple concret pour SISR : génération d’un squelette de script PowerShell pour créer des comptes AD à partir d’un CSV,
        puis adaptation manuelle et mise en place d’un dry‑run. L’IA sert d’assistant, 
        mais l’humain reste responsable de la validation et de la sécurité.
      </p>
    </section>
  )
}
