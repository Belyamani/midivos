// ⚠️ Remplacez par VOTRE numéro WhatsApp (format international, sans + ni espaces)
export const WHATSAPP_NUMBER = "221770000000";

export const PRICE_MAD = 350;
// 1 DH ≈ 60 FCFA  →  350 DH ≈ 21 000 FCFA
export const MAD_TO_FCFA = 60;
export const PRICE_FCFA = PRICE_MAD * MAD_TO_FCFA;

export const formatFcfa = (n: number) =>
  n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ") + " FCFA";

export function whatsappLink(qty = 1) {
  const total = PRICE_FCFA * qty;
  const msg = `Bonjour 👋, je souhaite commander ${qty} Spray anti-douleur Zhufeng Tong 60ml (${formatFcfa(
    total
  )}). Pouvez-vous me confirmer la livraison ?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
