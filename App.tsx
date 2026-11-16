import { useState } from "react";
import {
  Leaf,
  Zap,
  ShieldCheck,
  Truck,
  Star,
  MessageCircle,
  Droplets,
  Hand,
  Sparkles,
  Minus,
  Plus,
  ChevronDown,
  CheckCircle2,
  Clock,
} from "lucide-react";
import VideoExplainer from "./components/VideoExplainer";
import { PRICE_FCFA, PRICE_MAD, formatFcfa, whatsappLink } from "./config";

const REVIEWS = [
  {
    name: "Aminata D.",
    city: "Dakar, Sénégal",
    rating: 5,
    text: "J'ai des douleurs aux genoux depuis des années. Je l'utilise matin et soir, et je monte les escaliers beaucoup plus facilement. Facile à appliquer, ça ne colle pas.",
  },
  {
    name: "Kouassi B.",
    city: "Abidjan, Côte d'Ivoire",
    rating: 5,
    text: "Je suis chauffeur et j'ai souvent mal au dos après de longues heures. Un coup de spray, un petit massage, et je me sens plus léger. Je recommande.",
  },
  {
    name: "Fatou S.",
    city: "Bamako, Mali",
    rating: 5,
    text: "Ma maman a des douleurs aux articulations des mains. Elle aime le spray car c'est simple et l'odeur de plantes est agréable. Elle en redemande !",
  },
  {
    name: "Moussa T.",
    city: "Ouagadougou, Burkina Faso",
    rating: 4,
    text: "Après le sport, mes chevilles étaient très tendues. Ce spray m'a bien aidé à récupérer. Livraison rapide et bon contact sur WhatsApp.",
  },
  {
    name: "Grace N.",
    city: "Douala, Cameroun",
    rating: 5,
    text: "Je souffre des pieds et des orteils quand le temps change. Depuis que j'utilise ce spray, je ressens un vrai soulagement. Pratique dans le sac !",
  },
  {
    name: "Ibrahima K.",
    city: "Conakry, Guinée",
    rating: 5,
    text: "Très bon rapport qualité-prix. Le flacon de 60 ml dure longtemps. Je l'ai pris pour mon père et pour moi.",
  },
];

const FAQ = [
  {
    q: "Comment utiliser le spray ?",
    a: "Vaporisez 2 à 3 fois sur la zone douloureuse (genou, dos, épaule, cheville, mains…), puis massez doucement jusqu'à absorption. Renouvelez 2 à 3 fois par jour selon le besoin.",
  },
  {
    q: "Est-ce naturel ?",
    a: "Oui, la formule est à base de plantes et se présente sous forme de spray transparent de 60 ml, pour un usage externe sur le corps.",
  },
  {
    q: "Pour qui est ce produit ?",
    a: "Pour les adultes qui souhaitent soulager les douleurs corporelles : articulations, dos, genoux, muscles, etc. Usage externe uniquement.",
  },
  {
    q: "Comment commander ?",
    a: "Cliquez sur « Commander sur WhatsApp ». Un message pré-rempli s'ouvre : envoyez-le et nous confirmons votre commande et la livraison avec vous.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-amber-400 text-amber-400" : "text-stone-300"}`} />
      ))}
    </div>
  );
}

function WaButton({ qty = 1, big = false, label }: { qty?: number; big?: boolean; label?: string }) {
  return (
    <a
      href={whatsappLink(qty)}
      target="_blank"
      rel="noreferrer"
      className={`anim-wa inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#1fb957] ${
        big ? "px-8 py-4 text-lg" : "px-5 py-2.5 text-sm"
      }`}
    >
      <MessageCircle className={big ? "h-6 w-6" : "h-5 w-5"} />
      {label ?? "Commander sur WhatsApp"}
    </a>
  );
}

export default function App() {
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen pb-20 sm:pb-0">
      {/* Top banner */}
      <div className="bg-red-700 px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        🔥 Offre de lancement : {formatFcfa(PRICE_FCFA)} · Commande simple et rapide via WhatsApp
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-red-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 font-extrabold text-red-700">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-700 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg">Zhufeng Tong</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
            <a href="#video" className="hover:text-red-700">Vidéo</a>
            <a href="#avantages" className="hover:text-red-700">Bienfaits</a>
            <a href="#avis" className="hover:text-red-700">Avis</a>
            <a href="#faq" className="hover:text-red-700">FAQ</a>
          </nav>
          <WaButton />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-red-200/40 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <div className="anim-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700">
              <Sparkles className="h-4 w-4" /> Spray anti-douleur 100% à base de plantes
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Dites adieu aux <span className="text-red-600">douleurs</span> qui vous empêchent de vivre.
            </h1>
            <p className="mt-5 text-lg text-stone-600">
              Genoux, dos, articulations, goutte, arthrite, muscles… Un simple geste : <b>vaporisez, massez, soulagez</b>.
              Retrouvez le plaisir de bouger.
            </p>
            <ul className="mt-6 space-y-2 text-stone-700">
              {["Formule naturelle à base de plantes", "Spray pratique, sans huile qui colle", "Flacon de 60 ml qui dure longtemps"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div>
                <div className="text-4xl font-black text-red-700">{formatFcfa(PRICE_FCFA)}</div>
                <div className="text-sm text-stone-500">soit {PRICE_MAD} DH · le flacon de 60 ml</div>
              </div>
              <WaButton big />
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-stone-600">
              <Stars n={5} /> <b>4,8/5</b> · avis de nos clients
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-red-500 to-orange-400 opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-2xl ring-1 ring-red-100">
              <img src="/product.png" alt="Spray anti-douleur Zhufeng Tong 60ml" className="anim-float w-full rounded-2xl object-contain" />
              <span className="absolute left-4 top-4 rounded-full bg-red-700 px-3 py-1 text-xs font-bold text-white">NOUVEAU</span>
            </div>
            <div className="absolute -bottom-4 -left-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <Leaf className="h-6 w-6 text-emerald-600" />
              <div className="text-xs leading-tight">
                <b className="block text-sm">100% naturel</b>à base de plantes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-stone-900 py-16 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <img
            src="https://images.pexels.com/photos/8763984/pexels-photo-8763984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Personne souffrant du genou"
            className="h-80 w-full rounded-3xl object-cover shadow-2xl"
          />
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">Ces douleurs vous parlent ?</h2>
            <p className="mt-4 text-stone-300">
              Une articulation gonflée, enflammée, une raideur le matin, une douleur qui revient à chaque changement de temps…
              La douleur gâche le travail, le sommeil et les moments en famille.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Douleurs aux genoux", "Mal de dos", "Articulations raides", "Crises de goutte", "Arthrite", "Courbatures musculaires"].map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-3 text-sm font-medium">
                  <span className="text-red-400">●</span> {t}
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg font-semibold text-red-300">Il existe une solution simple, naturelle et rapide à appliquer.</p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="bg-gradient-to-b from-white to-red-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">Vidéo explicative</span>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Découvrez comment il vous soulage</h2>
            <p className="mt-2 text-stone-600">Appuyez sur ▶ et activez le son pour écouter l'explication.</p>
          </div>
          <VideoExplainer />
        </div>
      </section>

      {/* Benefits */}
      <section id="avantages" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">Pourquoi le choisir</span>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Un soulagement naturel au quotidien</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Leaf, t: "À base de plantes", d: "Formule 100% naturelle d'origine végétale." },
              { i: Zap, t: "Action ciblée", d: "Vaporisez directement sur la zone douloureuse." },
              { i: Droplets, t: "Non gras", d: "Spray transparent, ne tache pas, ne colle pas." },
              { i: ShieldCheck, t: "Usage externe", d: "Pour adultes, sur le corps, en soins personnels." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-1 text-sm text-stone-600">{d}</p>
              </div>
            ))}
          </div>

          {/* How to use */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-red-700 to-rose-600 p-8 text-white sm:p-12">
            <h3 className="text-center text-2xl font-black sm:text-3xl">Utilisation en 3 étapes</h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { i: Droplets, t: "1. Vaporisez", d: "2 à 3 pulvérisations sur la zone douloureuse." },
                { i: Hand, t: "2. Massez", d: "Massez doucement jusqu'à absorption complète." },
                { i: Sparkles, t: "3. Soulagez", d: "Renouvelez 2 à 3 fois par jour si besoin." },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
                  <Icon className="mx-auto h-10 w-10" />
                  <div className="mt-3 text-xl font-bold">{t}</div>
                  <p className="mt-1 text-sm text-red-100">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="avis" className="bg-amber-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-red-600">Avis clients</span>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Ils ont retrouvé le plaisir de bouger</h2>
            <div className="mt-3 flex items-center justify-center gap-2">
              <Stars n={5} /> <b>4,8/5</b> <span className="text-stone-500">· basé sur {REVIEWS.length * 20}+ avis</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100 transition hover:shadow-xl">
                <Stars n={r.rating} />
                <blockquote className="mt-3 flex-1 text-stone-700">“{r.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-orange-500 font-bold text-white">
                    {r.name[0]}
                  </span>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 font-bold">
                      {r.name} <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div className="text-stone-500">{r.city} · Achat vérifié</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + order */}
      <section id="commande" className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">Caractéristiques</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white">
              {[
                ["Produit", "Spray anti-douleur Zhufeng Tong"],
                ["Forme", "Spray à vaporiser"],
                ["Ingrédients", "100% naturels, à base de plantes"],
                ["Utilisation", "Corps · soins personnels"],
                ["Fonction", "Soulager les douleurs corporelles"],
                ["Public", "Adultes"],
                ["Volume", "60 ml"],
                ["Poids", "65 g"],
                ["Couleur", "Transparent"],
                ["Emballage", "1 pièce / boîte"],
              ].map(([k, v], i) => (
                <div key={k} className={`grid grid-cols-2 gap-3 px-4 py-3 text-sm ${i % 2 ? "bg-white" : "bg-stone-50"}`}>
                  <span className="text-stone-500">{k}</span>
                  <span className="font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="self-start rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-red-100 sm:p-8">
            <div className="flex items-center gap-4">
              <img src="/product.png" alt="" className="h-24 w-24 rounded-2xl object-contain ring-1 ring-stone-200" />
              <div>
                <h3 className="text-xl font-bold">Spray anti-douleur 60 ml</h3>
                <Stars n={5} />
              </div>
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <div className="text-4xl font-black text-red-700">{formatFcfa(PRICE_FCFA * qty)}</div>
                <div className="text-sm text-stone-500">soit {PRICE_MAD * qty} DH</div>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-stone-200 px-2 py-1">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="rounded-full p-2 hover:bg-stone-100" aria-label="Moins">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-6 text-center font-bold">{qty}</span>
                <button onClick={() => setQty((q) => Math.min(10, q + 1))} className="rounded-full p-2 hover:bg-stone-100" aria-label="Plus">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-stone-700">
              <li className="flex items-center gap-3"><Truck className="h-5 w-5 text-red-600" /> Livraison en Afrique, confirmée par WhatsApp</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-red-600" /> Réponse rapide, commande en 1 minute</li>
              <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-red-600" /> Service client disponible sur WhatsApp</li>
            </ul>

            <div className="mt-6">
              <WaButton qty={qty} big label="Commander sur WhatsApp" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-stone-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-black">Questions fréquentes</h2>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold">
                  {f.q}
                  <ChevronDown className={`h-5 w-5 transition ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="px-5 pb-4 text-sm text-stone-600">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-red-700 to-rose-600 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-black sm:text-4xl">Ne laissez plus la douleur décider pour vous.</h2>
          <p className="mt-3 text-red-100">
            Commandez votre spray maintenant pour {formatFcfa(PRICE_FCFA)} ({PRICE_MAD} DH).
          </p>
          <div className="mt-8">
            <WaButton qty={1} big />
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 px-4 py-8 text-center text-xs text-stone-400">
        <p>© {new Date().getFullYear()} Zhufeng Tong · Spray anti-douleur 60 ml</p>
        <p className="mx-auto mt-2 max-w-2xl">
          Produit à usage externe uniquement. Ne remplace pas un avis médical. Les résultats peuvent varier d'une personne à l'autre.
          En cas de douleur persistante, consultez un professionnel de santé. Conversion indicative : 1 DH ≈ 60 FCFA.
        </p>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-stone-200 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <div>
          <div className="text-lg font-black text-red-700">{formatFcfa(PRICE_FCFA)}</div>
          <div className="text-xs text-stone-500">{PRICE_MAD} DH</div>
        </div>
        <WaButton label="Commander" />
      </div>
    </div>
  );
}
