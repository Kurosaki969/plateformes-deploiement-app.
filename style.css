/* Styles généraux du corps de la page */
body {
  font-family: 'Inter', Arial, sans-serif; /* Utilisation de la police Inter */
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #111; /* Fond sombre */
  color: white; /* Texte blanc pour le contraste */
  display: flex; /* Utilisation de flexbox pour la mise en page globale */
  flex-direction: column; /* Empilement vertical des éléments */
  align-items: center; /* Centrage horizontal du contenu */
  min-height: 100vh; /* Hauteur minimale de la fenêtre */
}

/* Styles de l'en-tête */
header {
  background: url('https://source.unsplash.com/featured/?cloud,tech') no-repeat center center/cover; /* Image de fond dynamique */
  padding: 40px 20px; /* Espacement interne de l'en-tête */
  color: white;
  width: 100%; /* Pleine largeur */
  box-sizing: border-box; /* Inclure le padding dans la largeur */
  border-radius: 0 0 15px 15px; /* Coins inférieurs arrondis */
}

header h1 {
  font-size: 36px;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255,255,0,0.8); /* Lueur jaune pour le titre */
  margin-bottom: 10px;
}

/* Styles du paragraphe de description */
.description {
  font-size: 18px;
  margin: 15px auto;
  color: lightgray;
  max-width: 800px;
  padding: 0 15px; /* Ajout de padding horizontal pour les petits écrans */
  line-height: 1.6; /* Amélioration de la lisibilité */
}

/* Styles du conteneur des plateformes (flexbox pour les cartes) */
.platform-container {
  display: flex;
  flex-wrap: wrap; /* Permet aux cartes de passer à la ligne suivante */
  justify-content: center; /* Centre les cartes horizontalement */
  gap: 20px; /* Espacement entre les cartes */
  max-width: 1200px; /* Largeur maximale du conteneur */
  margin: 20px auto;
  padding: 10px;
}

/* Styles des cartes de plateforme individuelles */
.platform {
  background: #222; /* Fond plus sombre pour les cartes */
  width: 280px; /* Largeur fixe pour les cartes */
  padding: 20px;
  border-radius: 15px; /* Coins plus arrondis */
  box-shadow: 0 0 15px rgba(0,0,0,0.7); /* Ombre plus prononcée */
  text-align: center;
  position: relative;
  display: flex; /* Utilisation de flexbox pour la mise en page interne de la carte */
  flex-direction: column; /* Empilement vertical du contenu */
  justify-content: space-between; /* Distribution de l'espace */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; /* Effet de survol fluide */
}

.platform:hover {
  transform: translateY(-5px); /* Soulève la carte au survol */
  box-shadow: 0 10px 20px rgba(0,0,0,0.9); /* Ombre améliorée au survol */
}

.platform h2 {
  font-size: 24px; /* Titre légèrement plus grand */
  margin: 10px 0;
  color: #fff;
}

.platform p {
  font-size: 16px;
  color: #bbb; /* Gris plus clair pour la description */
  margin: 10px 0 20px 0; /* Plus d'espace sous la description */
  flex-grow: 1; /* Permet à la description de prendre l'espace disponible */
}

/* Styles des boutons dans les cartes */
.platform button {
  padding: 12px 25px; /* Plus de padding pour les boutons */
  font-size: 17px; /* Police légèrement plus grande */
  font-weight: bold;
  border: none;
  border-radius: 8px; /* Boutons plus arrondis */
  cursor: pointer;
  margin-top: auto; /* Pousse le bouton vers le bas */
  color: white;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out; /* Transitions fluides */
  box-shadow: 0 4px 8px rgba(0,0,0,0.3); /* Ombre du bouton */
}

/* Classes de couleur pour les boutons */
.red { background-color: #e74c3c; }
.blue { background-color: #3498db; }
.yellow { background-color: #f1c40f; color: black; } /* Bouton jaune avec texte noir */
.purple { background-color: #9b59b6; }

/* Effet de survol des boutons */
.platform button:hover {
  opacity: 0.9;
  transform: translateY(-2px); /* Léger soulèvement au survol */
  box-shadow: 0 6px 12px rgba(0,0,0,0.4);
}

/* Section des liens de support */
.support-links {
  margin-top: 30px; /* Plus d'espace au-dessus des liens */
  padding: 10px;
  display: flex; /* Utilisation de flexbox pour les liens */
  flex-wrap: wrap; /* Permet aux liens de passer à la ligne */
  justify-content: center; /* Centre les liens */
  gap: 15px; /* Espacement entre les liens */
}

.support-links a {
  display: inline-block;
  background: #00a000; /* Fond vert pour les liens de support */
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.support-links a:hover {
  background: #007700; /* Vert plus foncé au survol */
  transform: translateY(-2px);
}

/* Ajustements responsifs */
@media (max-width: 768px) {
  header h1 {
    font-size: 30px;
  }
  .description {
    font-size: 16px;
  }
  .platform {
    width: 90%; /* Les cartes prennent plus de largeur sur les petits écrans */
    max-width: 320px; /* Limite la largeur maximale */
  }
  .platform-container {
    padding: 10px;
    gap: 15px;
  }
  .support-links a {
    padding: 10px 15px;
    font-size: 15px;
  }
}

/* Styles pour la nouvelle section de la fonctionnalité Gemini API */
.gemini-feature-container {
  background: #222;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0,0,0,0.7);
  padding: 30px;
  margin: 40px auto;
  max-width: 800px;
  width: 90%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gemini-feature-container h2 {
  font-size: 28px;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 0 8px rgba(255,255,255,0.5);
}

.gemini-feature-container textarea {
  width: 100%;
  max-width: 700px;
  height: 120px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #444;
  background-color: #333;
  color: white;
  font-size: 16px;
  resize: vertical; /* Permet le redimensionnement vertical */
  margin-bottom: 20px;
  box-sizing: border-box;
}

.gemini-feature-container button {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #6a0dad; /* Un violet vibrant pour le bouton Gemini */
  color: white;
  transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
  box-shadow: 0 5px 15px rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  gap: 10px;
}

.gemini-feature-container button:hover {
  background-color: #5a009a;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
}

.gemini-response {
  margin-top: 30px;
  padding: 20px;
  background: #333;
  border-radius: 10px;
  border: 1px solid #444;
  max-width: 700px;
  width: 100%;
  text-align: left;
  min-height: 50px; /* Assure un espace pour la réponse */
  box-sizing: border-box;
  color: #e0e0e0;
  line-height: 1.6;
  white-space: pre-wrap; /* Préserve les espaces blancs et les sauts de ligne */
}

.loading-indicator {
  margin-top: 20px;
  font-size: 18px;
  color: #f1c40f;
  display: none; /* Masqué par défaut */
}
