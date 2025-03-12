import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'Quark ETC Bridge';
export const APP_DESCRIPTION = 'A Dapp to connect ETC to any chain';
export const APP_URL = 'quarkfi.xyz';
export const BRAND_COLOR = Color.primary['500'];
export const BACKGROUND_COLOR = Color.gray['900'];
export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';
