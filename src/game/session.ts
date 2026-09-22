export type Session = {
  coins: number;
  claimed: Set<string>;
  courseClear: boolean;
};

export function createSession(): Session {
  return {
    coins: 0,
    claimed: new Set(),
    courseClear: false,
  };
}
