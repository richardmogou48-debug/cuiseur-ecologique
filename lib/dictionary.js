export const PHONES = ["+237 696 976 848", "+237 670 718 090"];
export const WA = "https://wa.me/237696976848";
export const ORDER_WA = "https://wa.me/237670718090";
export const PRODUCTS = [
  { size: 5, price: 15000 },
  { size: 8, price: 20000 },
  { size: 11, price: 25000 },
  { size: 15, price: 30000 },
];
export const waMsg = (t) => `${WA}?text=${encodeURIComponent(t)}`;

export const dict = {
  fr: {
    meta: { title: "Cuiseur Écologique | Cuiseur sans feu en pagne, Cameroun", desc: "Cuiseur isolant en pagne fabriqué à Yaoundé. Moins de gaz, moins de charbon, moins de fumée. Pour les familles, les restaurateurs et les ONG." },
    nav: { home: "Accueil", partners: "Partenariats", order: "Commander", shop: "Boutique" },
    hero: { title: "Cuisinez une fois. Le cuiseur fait le reste.", sub: "Un sac isolant en pagne qui garde la chaleur de votre marmite. Le plat finit de cuire sans gaz, sans charbon et sans fumée.", cta1: "Commander sur WhatsApp", cta2: "Devenir partenaire", orderMsg: "Bonjour, je souhaite commander un cuiseur écologique." },
    stepsTitle: "Comment ça marche",
    steps: [
      { t: "Cuisez jusqu'à ébullition", d: "Préparez votre plat normalement et laissez-le bouillir pendant quelques minutes." },
      { t: "Retirez du feu et placez", d: "Mettez la marmite encore brûlante directement au centre du cuiseur." },
      { t: "Fermez hermétiquement", d: "Serrez le cordon pour emprisonner la chaleur et laisser la cuisson continuer." },
      { t: "Laissez reposer", d: "Le plat termine sa cuisson doucement : comptez 30 minutes à 2 heures selon la recette." },
    ],
    whyTitle: "Pourquoi l'adopter",
    why: [
      { t: "Moins d'énergie", d: "Une fois la marmite fermée dans le cuiseur, le feu s'éteint. Vous dépensez moins de gaz, de charbon ou d'électricité." },
      { t: "Une cuisine plus saine", d: "Moins de temps devant le feu, donc moins de fumée dans la maison." },
      { t: "Sans surveillance", d: "Lancez le plat, partez travailler ou au marché. Il reste chaud et ne brûle pas." },
    ],
    pricesTitle: "Tailles et prix",
    pricesNote: "Chaque cuiseur est fait main en pagne. Les motifs varient selon les arrivages.",
    proof: {
      eyebrow: "Exemples de démonstration",
      title: "Une cuisson plus simple, du foyer au terrain",
      intro: "Voici un aperçu du contenu de preuve que nous compléterons avec vos photos, vos mesures et vos vrais retours clients.",
      stats: [{ value: "30–120 min", label: "de finition selon le plat" }, { value: "1 marmite", label: "qui reste isolée et bien chaude" }, { value: "0 fumée", label: "pendant la finition hors du feu" }],
      testimonials: [{ quote: "Je peux lancer la cuisson puis m'occuper d'autre chose sans rester devant le feu.", name: "Exemple de retour", role: "Famille à Yaoundé" }, { quote: "Le riz reste chaud et termine doucement sa cuisson dans le sac.", name: "Exemple de retour", role: "Utilisatrice pilote" }, { quote: "Le format est pratique pour présenter une solution de cuisson propre à notre communauté.", name: "Exemple de retour", role: "Partenaire terrain" }],
      note: "Contenu illustratif à remplacer par vos photos, vos mesures vérifiées et les témoignages autorisés de vos clients."
    },
    cols: ["Contenance", "Prix", "Environ"],
    rows: [["5 L", "15 000 FCFA", "23 €"], ["8 L", "20 000 FCFA", "30 €"], ["11 L", "25 000 FCFA", "38 €"], ["15 L", "30 000 FCFA", "46 €"]],
    audience: [
      { t: "Pour votre foyer", d: "Choisissez la taille de votre marmite et commandez par WhatsApp. Livraison à Yaoundé.", cta: "Commander" },
      { t: "Pour les ONG et les entreprises", d: "Commandes en volume, formation des bénéficiaires et distribution communautaire.", cta: "Voir l'offre partenaires" },
    ],
    shop: {
      title: "Boutique", intro: "Choisissez vos cuiseurs, puis envoyez votre commande sur WhatsApp. Nous confirmons le prix, la disponibilité et la livraison avec vous.",
      unit: "Cuiseur", fabric: "en pagne", more: "Ajouter un", less: "Retirer un", cart: "Votre panier", empty: "Votre panier est vide. Ajoutez un cuiseur pour commander.",
      total: "Total", name: "Votre nom", place: "Quartier ou ville de livraison", send: "Envoyer la commande sur WhatsApp",
      note: "Le total est indicatif. Les frais de livraison sont confirmés sur WhatsApp.",
      hello: "Bonjour, je souhaite commander :", sum: "Total", nameL: "Nom", placeL: "Livraison",
    },
    footer: "Fabriqué à Yaoundé, Cameroun. Vente au marché Mokolo.",
    p: {
      title: "Partenariats ONG et entreprises",
      intro: "Nous fournissons des cuiseurs en pagne fabriqués localement pour vos programmes de cuisson propre, de santé et d'autonomie des femmes.",
      offersTitle: "Ce que nous proposons",
      offers: [
        { t: "Commandes en volume", d: "Toutes les tailles de 5 à 15 L, avec tarifs dégressifs sur devis." },
        { t: "Formation", d: "Démonstration et formation des bénéficiaires à l'usage et à l'entretien du cuiseur, avec notre experte en cuisson propre." },
        { t: "Fabrication locale", d: "Des femmes et des jeunes formés cousent les cuiseurs au Cameroun, avec des tissus locaux." },
      ],
      docsTitle: "Documents pour votre dossier",
      docs: ["Fiche technique du cuiseur (bientôt disponible)", "Résultats de tests de performance (bientôt disponibles)", "Références et photos de terrain (bientôt disponibles)"],
      cta: "Demander un devis",
      ctaMsg: "Bonjour, nous représentons une organisation et souhaitons un devis pour des cuiseurs écologiques. Quantité estimée : ",
    },
  },
  en: {
    meta: { title: "Cuiseur Écologique | Fireless cooker made from African wax print, Cameroon", desc: "Insulated retained-heat cooker made in Yaoundé. Less gas, less charcoal, less smoke. For families, restaurants and NGOs." },
    nav: { home: "Home", partners: "Partnerships", order: "Order", shop: "Shop" },
    hero: { title: "Cook once. The cooker does the rest.", sub: "An insulated bag in African wax print that keeps your pot hot. The meal finishes cooking with no gas, no charcoal and no smoke.", cta1: "Order on WhatsApp", cta2: "Become a partner", orderMsg: "Hello, I would like to order an eco cooker." },
    stepsTitle: "How it works",
    steps: [
      { t: "Cook until boiling", d: "Prepare your dish as usual and let it boil for a few minutes." },
      { t: "Remove from heat and place", d: "Put the still-hot pot directly in the center of the cooker." },
      { t: "Close hermetically", d: "Pull the cord tight to trap the heat and let cooking continue." },
      { t: "Let it rest", d: "The dish finishes cooking gently in 30 minutes to 2 hours, depending on the recipe." },
    ],
    whyTitle: "Why use it",
    why: [
      { t: "Less energy", d: "Once the pot is sealed in the cooker, the stove goes off. You use less gas, charcoal or electricity." },
      { t: "A healthier kitchen", d: "Less time at the fire means less smoke in the home." },
      { t: "No supervision", d: "Start the meal, then go to work or the market. It stays hot and does not burn." },
    ],
    pricesTitle: "Sizes and prices",
    pricesNote: "Each cooker is handmade in wax print fabric. Patterns vary with fabric availability.",
    proof: {
      eyebrow: "Demonstration examples",
      title: "Simpler cooking, from home to the field",
      intro: "Here is a preview of the proof content we will complete with your photos, measurements and real customer feedback.",
      stats: [{ value: "30–120 min", label: "finishing time depending on the dish" }, { value: "1 pot", label: "kept insulated and hot" }, { value: "0 smoke", label: "during off-fire finishing" }],
      testimonials: [{ quote: "I can start cooking and take care of something else without staying by the fire.", name: "Example feedback", role: "Family in Yaoundé" }, { quote: "The rice stays hot and gently finishes cooking inside the bag.", name: "Example feedback", role: "Pilot user" }, { quote: "The format makes it easy to present a clean-cooking solution to our community.", name: "Example feedback", role: "Field partner" }],
      note: "Illustrative content to replace with your photos, verified measurements and authorised customer testimonials."
    },
    cols: ["Capacity", "Price", "About"],
    rows: [["5 L", "15,000 FCFA", "€23"], ["8 L", "20,000 FCFA", "€30"], ["11 L", "25,000 FCFA", "€38"], ["15 L", "30,000 FCFA", "€46"]],
    audience: [
      { t: "For your home", d: "Pick the size of your pot and order on WhatsApp. Delivery in Yaoundé.", cta: "Order" },
      { t: "For NGOs and businesses", d: "Bulk orders, beneficiary training and community distribution.", cta: "See the partner offer" },
    ],
    shop: {
      title: "Shop", intro: "Choose your cookers, then send your order on WhatsApp. We confirm price, availability and delivery with you.",
      unit: "Cooker", fabric: "wax print", more: "Add one", less: "Remove one", cart: "Your cart", empty: "Your cart is empty. Add a cooker to place an order.",
      total: "Total", name: "Your name", place: "Delivery district or city", send: "Send the order on WhatsApp",
      note: "The total is indicative. Delivery fees are confirmed on WhatsApp.",
      hello: "Hello, I would like to order:", sum: "Total", nameL: "Name", placeL: "Delivery",
    },
    footer: "Made in Yaoundé, Cameroon. Sold at Mokolo market.",
    p: {
      title: "NGO and business partnerships",
      intro: "We supply locally made wax print cookers for your clean cooking, health and women's livelihood programmes.",
      offersTitle: "What we offer",
      offers: [
        { t: "Bulk orders", d: "All sizes from 5 to 15 L, with volume pricing on quotation." },
        { t: "Training", d: "Demonstration and training for beneficiaries on using and maintaining the cooker, led by our clean cooking expert." },
        { t: "Local manufacturing", d: "Trained women and young people sew the cookers in Cameroon, using local fabric." },
      ],
      docsTitle: "Documents for your proposal",
      docs: ["Cooker technical sheet (coming soon)", "Performance test results (coming soon)", "References and field photos (coming soon)"],
      cta: "Request a quote",
      ctaMsg: "Hello, we represent an organisation and would like a quote for eco cookers. Estimated quantity: ",
    },
  },
};
