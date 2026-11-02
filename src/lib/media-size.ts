/* Pixel size of an image served as-is from public/ (README images, the
   poster frames of the looping clips), read from the file's header at build
   time.

   Astro's <Image> writes width and height for everything it processes, but
   files in public/ bypass it. Without those two attributes the browser cannot
   reserve the right box, so the page jumps when the image arrives: the
   layout shift that Core Web Vitals counts (CLS). Reading the size here keeps
   it correct when a clip or image is replaced, with no numbers to update by
   hand. Paths are resolved from the project root, as in lastmod.ts. */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface Size {
  width: number;
  height: number;
}

/** Size of a PNG or JPEG under public/, e.g. `/media/work/clip.jpg`; undefined if unreadable. */
export function publicImageSize(src: string): Size | undefined {
  let buf: Buffer;
  try {
    buf = readFileSync(join(process.cwd(), 'public', src));
  } catch {
    return undefined;
  }

  // PNG: the IHDR chunk follows the 8-byte signature.
  if (buf.length >= 24 && buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // JPEG: walk the segments to the first start-of-frame marker.
  if (buf.length >= 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) return undefined;
      const marker = buf[i + 1];
      if (marker === 0xff) {
        i += 1; // fill byte
        continue;
      }
      // SOF0–SOF15, except DHT (C4), JPG (C8) and DAC (CC).
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
      }
      // Markers without a length field: RSTn, SOI, TEM.
      if ((marker >= 0xd0 && marker <= 0xd8) || marker === 0x01) {
        i += 2;
        continue;
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return undefined;
}
