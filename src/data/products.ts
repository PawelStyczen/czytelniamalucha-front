export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceLabel: string;
  badge: string;
  image: string; // tło karty (okładka)
  bullets: string[];
  details: {
    inside: string[];
    images: string[];
  };
};

export const products: Product[] = [
  {
    id: "pdf-001",
    name: "Zestaw PDF #1: Start czytania globalnego (Montessori)",
    subtitle: "Pierwsze słowa + instrukcja pracy (do druku w domu).",
    price: 4900,
    priceLabel: "49 zł",
    badge: "Najpopularniejsze",
    image: "/img/offers/p1-cover.jpg",
    bullets: [
      "Karty: pierwsze słowa bliskie dziecku",
      "Instrukcja: 5–10 min dziennie",
      "Format A4 do druku w domu",
      "Dla dzieci 2,5–6 lat (elastycznie)",
    ],
    details: {
      inside: [
        "120 kart: pierwsze słowa (osoby, przedmioty, jedzenie)",
        "Instrukcja wdrożenia: plan na 7 dni",
        "Checklisty: jak utrwalać i kiedy zmieniać zestaw",
        "Mini-gry: dopasuj słowo → obraz, memory (propozycje)",
      ],
      images: [
        "/img/pdfs/p1-1.jpg",
        "/img/pdfs/p1-2.jpg",
        "/img/pdfs/p1-3.jpg",
        "/img/pdfs/p1-4.jpg",
      ],
    },
  },
  {
    id: "pdf-002",
    name: "Zestaw PDF #2: Zwierzęta + kategorie",
    subtitle: "Rozszerzenie słownictwa i zabawy utrwalające.",
    price: 3900,
    priceLabel: "39 zł",
    badge: "Rozszerzenie",
    image: "/img/offers/p2-cover.jpg",
    bullets: [
      "Tematyczne zestawy: zwierzęta, dom, jedzenie",
      "Proste gry: dopasuj słowo → obraz",
      "A4 do druku",
      "Dla dzieci 3–6 lat",
    ],
    details: {
      inside: [
        "Karty tematyczne: zwierzęta domowe i leśne",
        "Kategorie: dom, kuchnia, jedzenie (łatwe grupowanie)",
        "Zabawy: „znajdź parę”, „co nie pasuje?”",
        "Wskazówki: jak mieszać zestawy, żeby nie znudzić",
      ],
      images: [
        "/img/pdfs/p2-1.jpg",
        "/img/pdfs/p2-2.jpg",
        "/img/pdfs/p2-3.jpg",
        "/img/pdfs/p2-4.jpg",
      ],
    },
  },
  {
    id: "pdf-003",
    name: "Zestaw PDF #3: Czasowniki i codzienne czynności",
    subtitle: "Słowa w ruchu: czynności, które dziecko zna z życia.",
    price: 4500,
    priceLabel: "45 zł",
    badge: "Nowość",
    image: "/img/offers/p3-cover.jpg",
    bullets: [
      "Czasowniki: je, pije, myje, biegnie…",
      "Pomysły na krótkie sesje i powtórki",
      "A4 do druku",
      "Dla dzieci 3–6 lat",
    ],
    details: {
      inside: [
        "Czasowniki: czynności domowe i zabawowe",
        "Karty + propozycje scenek (rodzic czyta, dziecko pokazuje)",
        "Łączenie: osoba + czynność (proste zdania)",
        "Plan utrwalania na 10 minut",
      ],
      images: [
        "/img/pdfs/p3-1.jpg",
        "/img/pdfs/p3-2.jpg",
        "/img/pdfs/p3-3.jpg",
        "/img/pdfs/p3-4.jpg",
      ],
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductHref(id: string): string {
  return `/produkty/${id}/`;
}
