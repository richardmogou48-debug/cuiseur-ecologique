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
      { t: "Faites bouillir", d: "Cuisinez votre plat normalement jusqu'à l'ébullition, quelques minutes suffisent." },
      { t: "Mettez la marmite dans le sac", d: "Placez la marmite encore chaude directement dans le cuiseur." },
      { t: "Fermez bien", d: "Serrez le cordon pour garder toute la chaleur à l'intérieur." },
      { t: "Laissez finir la cuisson", d: "Le plat est prêt entre 30 minutes et 2 heures selon le repas." },
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
      eyebrow: "Preuves à venir",
      title: "Des résultats que nous documenterons ensemble",
      intro: "Cette section est prête pour accueillir vos photos, vos vrais témoignages et les résultats de vos prochains tests.",
      stats: [{ value: "À mesurer", label: "économie moyenne de combustible" }, { value: "À tester", label: "minutes de cuisson gagnées" }, { value: "À documenter", label: "foyers et communautés équipés" }],
      testimonials: [{ quote: "Votre témoignage client apparaîtra ici.", name: "Prénom du client", role: "Ville / activité" }, { quote: "Ajoutez ici une expérience réelle d'utilisation.", name: "Nom du bénéficiaire", role: "Programme pilote" }, { quote: "Une photo terrain pourra accompagner ce retour.", name: "Nom du partenaire", role: "ONG / entreprise" }],
      note: "Les chiffres et témoignages affichés ici sont des emplacements temporaires : remplacez-les par des données vérifiées avant publication."
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
      { t: "Bring to a boil", d: "Cook your dish as usual until it boils. A few minutes is enough." },
      { t: "Put the pot in the bag", d: "Place the hot pot straight into the cooker." },
      { t: "Close it tight", d: "Pull the cord to keep all the heat inside." },
      { t: "Let it finish cooking", d: "The meal is ready in 30 minutes to 2 hours, depending on the dish." },
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
      eyebrow: "Proof coming soon",
      title: "Results we will document together",
      intro: "This section is ready for your photos, real testimonials and results from your next tests.",
      stats: [{ value: "To measure", label: "average fuel savings" }, { value: "To test", label: "cooking minutes saved" }, { value: "To document", label: "homes and communities reached" }],
      testimonials: [{ quote: "Your customer testimonial will appear here.", name: "Customer name", role: "City / activity" }, { quote: "Add a real user experience here.", name: "Beneficiary name", role: "Pilot programme" }, { quote: "A field photo can accompany this feedback.", name: "Partner name", role: "NGO / business" }],
      note: "These figures and testimonials are temporary placeholders: replace them with verified data before publishing."
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
