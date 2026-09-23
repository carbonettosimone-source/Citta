/**
 * Portafoglio di sessione. Non è il server: un'autorità futura
 * sostituisce grant/spend/settle e manda qui solo lo snapshot.
 */
export type Session = {
  coins: number;
  claimed: Set<string>;
  courseClear: boolean;
  /** Miglior rango settimanale visto in questa sessione. Null finché non chiudi una gara. */
  weekRank: number | null;
};

export function createSession(): Session {
  return {
    coins: 0,
    claimed: new Set(),
    courseClear: false,
    weekRank: null,
  };
}

export function grant(session: Session, amount: number): void {
  session.coins += Math.max(0, Math.round(amount));
}

export function trySpend(session: Session, amount: number): boolean {
  const cost = Math.max(0, Math.round(amount));
  if (session.coins < cost) return false;
  session.coins -= cost;
  return true;
}

export type MatchAward = {
  place: number;
  payout: number;
  rank: number;
  clean: boolean;
};

/**
 * Chiusura locale di una stanza. Il server futuro manda lo stesso
 * riepilogo (posto, incasso, rango) e questo metodo sparisce.
 */
export function applyMatchResult(session: Session, award: MatchAward): void {
  grant(session, award.payout);
  if (session.weekRank === null || award.rank < session.weekRank) {
    session.weekRank = award.rank;
  }
  if (award.clean) session.courseClear = true;
}
