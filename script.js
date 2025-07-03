// Fonction pour obtenir une recommandation de plateforme en utilisant l'API Gemini
async function getPlatformRecommendation() {
  const projectDescription = document.getElementById('projectDescription').value;
  const geminiResponseDiv = document.getElementById('geminiResponse');
  const loadingIndicator = document.getElementById('loadingIndicator');

  if (!projectDescription.trim()) {
    geminiResponseDiv.textContent = "Veuillez décrire votre projet pour obtenir une recommandation.";
    return;
  }

  // Afficher l'indicateur de chargement
  loadingIndicator.style.display = 'block';
  geminiResponseDiv.textContent = ''; // Effacer la réponse précédente

  try {
    let chatHistory = [];
    const prompt = `Basé sur la description de projet suivante, recommandez la ou les meilleures plateformes de déploiement parmi la liste ci-dessous. Expliquez pourquoi et mentionnez brièvement les avantages et les inconvénients. Si plusieurs plateformes conviennent, listez-les par ordre de pertinence. Si aucune plateforme ne convient, expliquez pourquoi.

Description du projet : "${projectDescription}"

Plateformes disponibles :
- Netlify (sites statiques, CI/CD)
- Vercel (JAMstack, déploiement rapide)
- GitHub Pages (sites statiques, gratuit avec dépôt GitHub)
- Heroku (applications web dynamiques, déploiement facile)
- Render (applications full-stack, sites statiques, infra moderne)
- DigitalOcean (infra cloud évolutive)
- AWS (solutions cloud robustes et évolutives)
- Google Cloud (services puissants)
- Microsoft Azure (solutions cloud complètes)
- Firebase (développement rapide d'applications, bases de données en temps réel)
- Linode (serveurs Linux haute performance)
- Oracle Cloud (applications d'entreprise)
- IBM Cloud (plateforme polyvalente)
- Cloudflare Pages (sites statiques, réseau mondial rapide)
- Surge.sh (projets front-end, CLI simple)

Veuillez fournir la recommandation en français.`;

    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = ""; // Canvas fournira automatiquement la clé API
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      const text = result.candidates[0].content.parts[0].text;
      geminiResponseDiv.textContent = text;
    } else {
      geminiResponseDiv.textContent = "Désolé, je n'ai pas pu générer de recommandation pour le moment. Veuillez réessayer.";
      console.error("Structure de réponse inattendue de l'API Gemini :", result);
    }
  } catch (error) {
    geminiResponseDiv.textContent = "Une erreur s'est produite lors de la récupération de la recommandation. Veuillez vérifier votre connexion ou réessayer.";
    console.error("Erreur lors de l'appel à l'API Gemini :", error);
  } finally {
    loadingIndicator.style.display = 'none'; // Masquer l'indicateur de chargement
  }
}
