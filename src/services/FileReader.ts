import { readFile } from 'fs/promises';

export async function readInputFile(path: string): Promise<string[]> {
  const content = await readFile(path, 'utf-8');
  return content.trim().split('\n');
}