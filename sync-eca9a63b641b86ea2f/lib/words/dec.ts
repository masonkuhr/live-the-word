// Some word files store letters as ~XX (hex offset from a script's Unicode block) so they stay plain ASCII.
export function dec(base: number, m: Record<string, string[]>): Record<string, string[]> {
  const f = (s: string) => s.replace(/~([0-9a-f]{2})/g, (_, h) => String.fromCharCode(base + parseInt(h, 16)));
  const o: Record<string, string[]> = {};
  for (const k in m) o[k] = m[k].map(f);
  return o;
}

export function decS(base: number, m: Record<string, string>): Record<string, string> {
  const o: Record<string, string> = {};
  for (const k in m) o[k] = m[k].replace(/~([0-9a-f]{2})/g, (_, h) => String.fromCharCode(base + parseInt(h, 16)));
  return o;
}
