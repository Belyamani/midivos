import { useCallback, useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Volume2, VolumeX, Pause } from "lucide-react";
import { formatFcfa, PRICE_FCFA, whatsappLink } from "../config";

const SCENES = [
  {
    text: "Vous souffrez des articulations, du dos ou des genoux ? Chaque mouvement devient une épreuve, et les nuits sont difficiles.",
  },
  {
    text: "Découvrez le spray anti-douleur Zhufeng Tong : une formule à base de plantes, en flacon pratique de soixante millilitres.",
  },
  {
    text: "Utilisation très simple : vaporisez sur la zone douloureuse, puis massez doucement. Sans geste compliqué, et sans huile qui colle.",
  },
  {
    text: "De nombreux clients témoignent d'un vrai soulagement, et retrouvent le plaisir de marcher, de travailler et de bouger librement.",
  },
  {
    text: "Alors n'attendez plus. Commandez maintenant sur WhatsApp, pour seulement vingt et un mille francs CFA.",
  },
];

function pickFemaleVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("fr"));
  if (!voices.length) return null;
  const male = /thomas|paul|henri|claude|antoine|mathieu|nicolas|male|homme|jean|bernard/i;
  const female = /amelie|amélie|julie|marie|hortense|denise|eloise|audrey|google fran|female|femme|celine|céline|lea|léa|chantal|virginie|sylvie|brigitte/i;
  return (
    voices.find((v) => female.test(v.name)) ||
    voices.find((v) => !male.test(v.name)) ||
    voices[0]
  );
}

function SceneVisual({ i }: { i: number }) {
  switch (i) {
    case 0:
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-red-950 to-stone-900 flex items-center justify-center overflow-hidden">
          <div className="relative flex items-center justify-center">
            {[0, 0.6, 1.2].map((d) => (
              <span
                key={d}
                className="anim-pulse-ring absolute h-32 w-32 sm:h-48 sm:w-48 rounded-full border-4 border-red-500"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
            <div className="anim-shake text-6xl sm:text-8xl relative">😣</div>
          </div>
          {["Genoux", "Dos", "Arthrite", "Goutte", "Épaules"].map((t, k) => (
            <span
              key={t}
              className="anim-pop absolute rounded-full bg-red-600/90 px-3 py-1 text-xs sm:text-sm font-semibold text-white shadow-lg"
              style={{
                animationDelay: `${0.4 + k * 0.35}s`,
                top: `${[18, 70, 30, 76, 55][k]}%`,
                left: `${[10, 14, 68, 62, 82][k]}%`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      );
    case 1:
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-rose-500 flex items-center justify-center overflow-hidden">
          <div className="absolute h-72 w-72 sm:h-[26rem] sm:w-[26rem] rounded-full bg-white/10 blur-2xl" />
          <img
            src="/product.png"
            alt="Spray Zhufeng Tong"
            className="anim-pop anim-float relative h-[85%] rounded-2xl object-contain shadow-2xl"
          />
          {["🌿", "🍃", "🌿", "🍃"].map((e, k) => (
            <span
              key={k}
              className="anim-float absolute text-2xl sm:text-4xl"
              style={{
                animationDelay: `${k * 0.6}s`,
                top: `${[15, 65, 25, 70][k]}%`,
                left: `${[12, 18, 80, 76][k]}%`,
              }}
            >
              {e}
            </span>
          ))}
          <div className="anim-fade-up absolute bottom-3 left-0 right-0 text-center text-xs sm:text-base font-bold tracking-wide text-white drop-shadow" style={{ animationDelay: "0.8s" }}>
            100% NATUREL · À BASE DE PLANTES · 60 ML
          </div>
        </div>
      );
    case 2:
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-700 flex items-center justify-center overflow-hidden">
          <img src="/product.png" alt="" className="absolute left-4 sm:left-16 h-[75%] rounded-xl object-contain opacity-95 shadow-2xl" />
          <div className="absolute left-[38%] sm:left-[36%] top-[30%]">
            {Array.from({ length: 16 }).map((_, k) => (
              <span
                key={k}
                className="anim-mist absolute h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-white/80"
                style={{
                  ["--dx" as string]: `${60 + (k % 5) * 25}px`,
                  ["--dy" as string]: `${((k % 4) - 1.5) * 28}px`,
                  animationDelay: `${(k * 0.1).toFixed(1)}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute right-4 sm:right-14 flex flex-col gap-3">
            {["1. Vaporisez", "2. Massez", "3. Soulagez"].map((t, k) => (
              <span
                key={t}
                className="anim-fade-up rounded-xl bg-white/95 px-3 py-2 text-xs sm:text-lg font-bold text-emerald-900 shadow-lg"
                style={{ animationDelay: `${0.5 + k * 0.9}s` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      );
    case 3:
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 flex flex-col items-center justify-center gap-3 overflow-hidden">
          <div className="anim-pop text-5xl sm:text-7xl font-black text-white drop-shadow">4,8/5</div>
          <div className="flex gap-1 text-2xl sm:text-4xl">
            {[0, 1, 2, 3, 4].map((k) => (
              <span key={k} className="anim-pop" style={{ animationDelay: `${0.3 + k * 0.25}s` }}>⭐</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 px-4">
            {["Soulagement ressenti", "Plus de mobilité", "Facile à appliquer"].map((t, k) => (
              <span key={t} className="anim-fade-up rounded-full bg-white/95 px-3 py-1 text-xs sm:text-base font-semibold text-orange-700" style={{ animationDelay: `${1.2 + k * 0.5}s` }}>
                ✓ {t}
              </span>
            ))}
          </div>
        </div>
      );
    default:
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-red-900 to-stone-900 flex flex-col items-center justify-center gap-3 sm:gap-5 overflow-hidden">
          <img src="/product.png" alt="" className="anim-pop anim-float h-[42%] rounded-xl object-contain" />
          <div className="anim-fade-up text-center" style={{ animationDelay: "0.4s" }}>
            <div className="text-3xl sm:text-5xl font-black text-white">{formatFcfa(PRICE_FCFA)}</div>
            <div className="text-xs sm:text-sm text-red-200">soit 350 DH</div>
          </div>
          <a
            href={whatsappLink(1)}
            target="_blank"
            rel="noreferrer"
            className="anim-wa anim-pop inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg font-bold text-white"
            style={{ animationDelay: "0.8s" }}
          >
            Commander sur WhatsApp
          </a>
        </div>
      );
  }
}

export default function VideoExplainer() {
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [voiceReady, setVoiceReady] = useState(true);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setVoiceReady(false);
      return;
    }
    const load = () => {
      voiceRef.current = pickFemaleVoice();
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
    };
  }, []);

  const next = useCallback(() => {
    setScene((s) => {
      if (s >= SCENES.length - 1) {
        setPlaying(false);
        return s;
      }
      return s + 1;
    });
  }, []);

  // Narration + scene timing
  useEffect(() => {
    if (!playing) return;
    let done = false;
    const text = SCENES[scene].text;
    const go = () => {
      if (done) return;
      done = true;
      window.clearTimeout(safety);
      next();
    };
    const estimate = text.length * 75 + 1500;
    const safety = window.setTimeout(go, muted || !("speechSynthesis" in window) ? estimate : estimate + 6000);

    if (!muted && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-FR";
      u.rate = 0.95;
      u.pitch = 1.15;
      const v = voiceRef.current || pickFemaleVoice();
      if (v) u.voice = v;
      u.onend = () => window.setTimeout(go, 500);
      u.onerror = () => window.setTimeout(go, 1500);
      window.speechSynthesis.speak(u);
    }
    return () => {
      done = true;
      window.clearTimeout(safety);
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, [playing, scene, muted, next]);

  const toggle = () => {
    if (!started) {
      setStarted(true);
      setScene(0);
      setPlaying(true);
      return;
    }
    if (!playing && scene === SCENES.length - 1) {
      setScene(0);
    }
    setPlaying((p) => !p);
  };

  const replay = () => {
    window.speechSynthesis?.cancel();
    setScene(0);
    setStarted(true);
    setPlaying(true);
  };

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-black/10">
      <div className="relative aspect-video w-full">
        {started ? (
          <div key={scene} className="absolute inset-0">
            <SceneVisual i={scene} />
          </div>
        ) : (
          <button
            onClick={toggle}
            className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-800 via-red-700 to-rose-600 text-white"
            aria-label="Lancer la vidéo"
          >
            <img src="/product.png" alt="" className="absolute right-4 bottom-0 h-[85%] object-contain opacity-30 sm:opacity-60" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-red-700 shadow-2xl transition group-hover:scale-110">
              <span className="anim-pulse-ring absolute inset-0 rounded-full border-4 border-white" />
              <Play className="ml-1 h-9 w-9 fill-current" />
            </span>
            <span className="relative mt-4 px-4 text-center text-lg font-bold sm:text-2xl">
              Écoutez comment ce spray soulage vos douleurs
            </span>
            <span className="relative mt-1 text-sm text-red-100">🔊 Avec voix · 35 secondes</span>
          </button>
        )}

        {started && (
          <>
            {/* Voice wave indicator */}
            {playing && !muted && (
              <div className="absolute left-3 top-3 flex h-6 items-end gap-0.5 rounded-full bg-black/50 px-3 py-1">
                {[0, 0.15, 0.3, 0.1, 0.25].map((d, k) => (
                  <span key={k} className="anim-wave block h-4 w-1 rounded bg-white" style={{ animationDelay: `${d}s` }} />
                ))}
              </div>
            )}
            {/* Subtitles */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3 pt-10 sm:p-5 sm:pt-14">
              <p className="mx-auto max-w-2xl text-center text-xs font-medium leading-snug text-white sm:text-base">
                {SCENES[scene].text}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 bg-stone-900 px-4 py-3 text-white">
        <button onClick={toggle} className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Lecture / pause">
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button onClick={replay} className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Revoir">
          <RotateCcw className="h-5 w-5" />
        </button>
        <div className="flex flex-1 gap-1.5">
          {SCENES.map((_, k) => (
            <button
              key={k}
              onClick={() => {
                setStarted(true);
                setScene(k);
              }}
              className={`h-1.5 flex-1 rounded-full transition ${
                started && k < scene ? "bg-red-400" : started && k === scene ? "bg-red-500" : "bg-white/25"
              }`}
              aria-label={`Scène ${k + 1}`}
            />
          ))}
        </div>
        <button onClick={() => setMuted((m) => !m)} className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Son">
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
      {!voiceReady && (
        <p className="bg-stone-800 px-4 pb-3 text-center text-xs text-stone-300">
          La voix n'est pas disponible sur ce navigateur : lisez les sous-titres.
        </p>
      )}
    </div>
  );
}
