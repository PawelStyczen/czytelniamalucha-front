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
    description: string;
    images: string[];
  };
};

export const products: Product[] = [
  {
    id: "pdf-001",
    name: "Zestaw do nauki czytania globalnego - pierwsze słowa, pierwsze książeczki",
    subtitle: "Pierwsze słowa + instrukcja pracy (do druku w domu).",
    price: 4900,
    priceLabel: "49 zł",
    badge: "Najpopularniejsze",
    image: "/img/product/1.jpg",
    bullets: [
      "Karty: pierwsze słowa bliskie dziecku",
      "Instrukcja: 5–10 min dziennie",
      "Format A4 do druku w domu",
      "Dla dzieci 2,5–6 lat (elastycznie)",
    ],
    details: {
      description: `Pomóż dziecku odkrywać świat słów poprzez zabawę
Pierwsze spotkanie z czytaniem nie musi zaczynać się od liter i sylab. Dla najmłodszych dzieci naturalnym początkiem może być poznawanie całych słów, które mają znaczenie i są częścią ich codziennego świata.
Nasz zestaw do czytania globalnego został stworzony z myślą o najmłodszych czytelnikach - dzieciach, które dopiero zaczynają swoją przygodę ze słowami.
To nie tylko nauka rozpoznawania wyrazów, ale przede wszystkim wspólna zabawa, rozwijanie ciekawości i budowanie pozytywnego skojarzenia z książkami.

Co znajdziesz w zestawie?
Po zakupie otrzymujesz kompletny zestaw materiałów do rozpoczęcia nauki czytania globalnego:
📚 10 książeczek do wspólnego czytania🔤 karty ze słowami do nauki rozpoznawania wyrazów🖼️ fiszki z obrazkami pomagające łączyć słowo ze znaczeniem
Materiały możesz od razu wydrukować i rozpocząć wspólną zabawę z dzieckiem.


Nauka podzielona na dwa poziomy
Dziecko nie musi od razu mierzyć się z dłuższymi wyrazami i bardziej złożonym tekstem.
Dlatego książeczki zostały podzielone na dwa poziomy trudności.
Poziom 1 - pierwsze słowa
Pierwsze 5 książeczek zostało przygotowanych dla dzieci rozpoczynających swoją przygodę z czytaniem.
Znajdziesz w nich:
* krótkie i proste słowa,
* powtarzalne struktury,
* niewielką ilość tekstu,
* łatwe do zapamiętania wyrażenia.
To spokojny początek, który pozwala dziecku oswoić się z wyglądem słów i czerpać radość z pierwszych sukcesów.

Poziom 2 - kolejne kroki w czytaniu
Kolejne 5 książeczek wprowadza dłuższe słowa i bardziej rozbudowane treści.
Dziecko może stopniowo:
* poznawać nowe wyrazy,
* rozwijać pamięć wzrokową,
* zauważać podobieństwa między słowami,
* budować pewność siebie podczas kontaktu z książką.

Otrzymujesz pliki PDF gotowe do wydruku
✔ drukujesz tyle razy, ile potrzebujesz
✔ możesz używać materiałów w domu
✔ możesz je zalaminować, aby korzystać z nich wielokrotnie
✔ możesz dostosować sposób pracy do swojego dziecka


Autorskie rymowane książeczki stworzone specjalnie dla najmłodszych czytelników
Krótkie, rytmiczne teksty i zabawne, nieoczywiste historie zachęcają dziecko do wielokrotnego wracania do książeczek. Dzięki powtarzalności słów dziecko może stopniowo oswajać się z ich wyglądem i znaczeniem.


Dla kogo jest ten zestaw?
Zestaw sprawdzi się dla:
* dzieci rozpoczynających przygodę z czytaniem,
* maluszków, które interesują się książeczkami i słowami,
* rodziców chcących wprowadzić czytanie globalne w domu,
* dzieci uczących się poprzez zabawę i powtarzalność.
Nie musisz czekać, aż dziecko pozna wszystkie litery.
Pierwsze zabawy ze słowami mogą pojawić się dużo wcześniej - podczas wspólnego czasu, oglądania książeczek i odkrywania języka.

Jak korzystać z zestawu?
Najważniejsza zasada: krótko, regularnie i z radością.
Możesz:
* pokazywać dziecku pojedyncze słowa,
* łączyć wyrazy z obrazkami,
* wspólnie oglądać książeczki,
* wracać do ulubionych historii,
* bawić się rozpoznawaniem znanych słów.
Nie chodzi o sprawdzanie dziecka.
Chodzi o stworzenie okazji do poznawania świata słów w spokojnej, przyjaznej atmosferze.

Co rozwija zestaw?
Regularny kontakt z materiałami może wspierać:
✓ zainteresowanie językiem i książkami
✓ rozwój słownictwa
✓ pamięć wzrokową
✓ koncentrację
✓ pewność siebie podczas pierwszych prób czytania

Przede wszystkim jednak pomaga stworzyć piękny pierwszy kontakt z czytaniem.

Pierwsze słowa mogą stać się początkiem wielkiej przygody
Nie każde dziecko zaczyna naukę czytania w ten sam sposób.
Dla jednych pierwszym krokiem będą litery, dla innych sylaby, a dla jeszcze innych całe słowa.
Ten zestaw został stworzony po to, aby najmłodsze dzieci mogły odkrywać świat czytania spokojnie, poprzez zabawę i wspólny czas z rodzicem.
Bo najważniejsze nie jest to, jak szybko dziecko zacznie czytać.
Najważniejsze jest to, aby pokochało książki.`,
      images: [
        "/img/product/1.jpg",
        "/img/product/2.jpg",
        "/img/product/3.jpg",
        "/img/product/4.jpg",
        "/img/product/5.jpg",
        "/img/product/6.jpg",
             "/img/product/7.jpg",
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
      description: `Karty tematyczne: zwierzęta domowe i leśne

Kategorie: dom, kuchnia, jedzenie (łatwe grupowanie)

Zabawy: „znajdź parę”, „co nie pasuje?”

Wskazówki: jak mieszać zestawy, żeby nie znudzić`,
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
      description: `Czasowniki: czynności domowe i zabawowe

Karty + propozycje scenek (rodzic czyta, dziecko pokazuje)

Łączenie: osoba + czynność (proste zdania)

Plan utrwalania na 10 minut`,
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
