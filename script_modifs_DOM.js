function changeTitles() {

    const Title = document.querySelector('h1');
    console.log(Title);
    Title.textContent = "Ce que j'ai appris à THP";
    
    const subTitle = document.querySelector('p.lead.text-muted');
    console.log(subTitle);
    subTitle.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
  }

  function changeCallToActions() {
    
    const ActionButton = document.querySelector('.btn-primary.my-2');
    console.log(ActionButton);
    ActionButton.textContent = "OK je veux tester !";
    ActionButton.setAttribute('href', 'http://www.thehackingproject.org');

    const secondActionButton = document.querySelector('.btn-secondary.my-2');
    console.log(secondActionButton);
    secondActionButton.textContent = "Non, Merci!";
    secondActionButton.setAttribute('href', 'https://www.pole-emploi.fr/accueil/');

  }

  function changeLogoName() {
    const logo = document.querySelector('.navbar-brand');
    console.log(logo);
    logo.textContent = "The THP Experience!";
    logo.style.fontSize = "2em";
  }

function populateImages() {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"]; 
    const cards = document.querySelectorAll('.card');
    console.log(cards); 
  
    // Ajouter les images aux cartes
    cards.forEach((card, index) => {
      const img = document.createElement('img');
      img.src = imagesArray[index];
      img.className = 'card-img-top'; // Ajouter la classe Bootstrap appropriée
      card.prepend(img); // Ajouter l'image au début de la carte
    });
  }

  // Fonction pour supprimer les 3 dernières cartes
function deleteLastCards() {
    const cards = document.querySelectorAll('.card');
    for (let i = 0; i < 3; i++) {
      const cardToRemove = cards[cards.length - 1 - i];
      cardToRemove.remove();
    }
  }

  function changeCardsText() {
    const newCardTexts = [
        "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
        "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
        "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
    ];

    const cards = document.querySelectorAll('.card');

    // Boucle sur chaque carte
    cards.forEach((card, index) => {
        const cardText = card.querySelector('.card-text');
        // Modification du titre et du texte de la carte
        cardText.textContent = newCardTexts[index];
    });
}

function changeViewButtons() {
    // Sélectionne tous les boutons "View" des cards
    const viewButtons = document.querySelectorAll('.card .btn-outline-secondary');
  
    // Boucle sur chaque bouton "View"
    viewButtons.forEach(button => {
      // Remplace la classe btn-outline-secondary par btn-success
      button.classList.remove('btn-outline-secondary');
      button.classList.add('btn-success');
    });
  }

  function modifyDOMStructure() {
    // Crée une nouvelle div avec la classe "row"
    const newRow = document.createElement('div');
    newRow.classList.add('row');
  
    // Sélectionne toutes les cartes
    const cards = document.querySelectorAll('.card');
  
    // Déplace la 3ème carte vers la nouvelle div créée
    const jsCard = cards[2]; // La 3ème carte (index 2)
    newRow.appendChild(jsCard);
  
    // Insère la nouvelle div juste après la première div avec la classe "row"
    const firstRow = document.querySelector('.row');
    firstRow.parentNode.insertBefore(newRow, firstRow.nextSibling);
  }
  
  

  changeTitles();
  changeCallToActions();
  changeLogoName();
  populateImages();
  deleteLastCards();
  changeCardsText();
  changeViewButtons();

