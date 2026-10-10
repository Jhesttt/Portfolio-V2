/**
 * next/image re-encodes every image. Its default (q75 WebP) is tuned for photos and visibly softens the
 * small text and thin lines in UI screenshots, so content images use q90. Must be listed in
 * `images.qualities` in next.config.ts (Next 16 rejects any quality not on that allowlist).
 */
export const IMAGE_QUALITY = 90;
