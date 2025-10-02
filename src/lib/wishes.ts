// src/lib/wishes.ts
export type Wish = {
  id: string;
  name: string;
  message: string;
  createdAt: number;
};

const KEY = 'ame_wishes_v1';

function readAll(): Wish[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Wish[]) : [];
  } catch {
    return [];
  }
}

function saveAll(list: Wish[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function addWish(name: string, message: string): Wish {
  const now = Date.now();
  const id = `${now}-${Math.random().toString(36).slice(2, 8)}`;
  const wish: Wish = { id, name: name.trim() || 'Anonymous', message: message.trim(), createdAt: now };
  const list = readAll();
  list.unshift(wish); // ใหม่สุดไว้บน
  saveAll(list);
  return wish;
}

export function getWish(id: string): Wish | undefined {
  return readAll().find(w => w.id === id);
}

export function listWishes(offset = 0, limit = 10): Wish[] {
  const list = readAll();
  return list.slice(offset, offset + limit);
}

export function countWishes(): number {
  return readAll().length;
}
