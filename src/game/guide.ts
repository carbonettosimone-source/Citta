export type Mark = {
  name: string;
  x: number;
  y: number;
  z: number;
};

let mark: Mark | null = null;

export function setMark(next: Mark): void {
  mark = next;
}

export function getMark(): Mark | null {
  return mark;
}

export function clearMark(): void {
  mark = null;
}
