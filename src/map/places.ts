import type { Region } from '../shared/dialects';

/**
 * 地図上の位置。@svg-maps/japan（viewBox 0 0 438 516）はメルカトル図法で、
 * 沖縄・離島も実際の位置に描かれているため、緯度経度から直接座標を求める。
 * 係数は東京・福岡・那覇の重心から合わせた（誤差は 1〜2 単位）。
 */
const LON0 = 139.4;
const LAT0 = 35.7;
const X0 = 311.4;
const Y0 = 254.8;
const K = 19.66; // 経度 1 度あたりの単位
const R = (K * 180) / Math.PI;
const merc = (lat: number) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

export function project(lat: number, lon: number): [number, number] {
  return [X0 + (lon - LON0) * K, Y0 - (merc(lat) - merc(LAT0)) * R];
}

/** 方言ごとの代表地点（その方言が話される中心的な都市）: [緯度, 経度, 都道府県] */
export const PLACES: Record<string, [number, number, string]> = {
  hokkaido: [43.06, 141.35, 'hokkaido'],
  tsugaru: [40.6, 140.46, 'aomori'],
  nanbu: [40.51, 141.49, 'aomori'],
  morioka: [39.7, 141.15, 'iwate'],
  akita: [39.72, 140.1, 'akita'],
  yamagata: [38.25, 140.33, 'yamagata'],
  sendai: [38.27, 140.87, 'miyagi'],
  fukushima: [37.75, 140.47, 'fukushima'],
  aizu: [37.49, 139.93, 'fukushima'],
  ibaraki: [36.37, 140.47, 'ibaraki'],
  tochigi: [36.56, 139.88, 'tochigi'],
  gunma: [36.39, 139.06, 'gunma'],
  edo: [35.71, 139.8, 'tokyo'],
  hachijo: [33.11, 139.79, 'tokyo'],
  niigata: [37.9, 139.02, 'niigata'],
  nagano: [36.65, 138.18, 'nagano'],
  koshu: [35.66, 138.57, 'yamanashi'],
  toyama: [36.7, 137.21, 'toyama'],
  kanazawa: [36.56, 136.65, 'ishikawa'],
  fukui: [36.06, 136.22, 'fukui'],
  shizuoka: [34.98, 138.38, 'shizuoka'],
  enshu: [34.71, 137.73, 'shizuoka'],
  mikawa: [34.85, 137.3, 'aichi'],
  nagoya: [35.18, 136.91, 'aichi'],
  gifu: [35.42, 136.76, 'gifu'],
  mie: [34.72, 136.42, 'mie'],
  omi: [35.13, 136.1, 'shiga'],
  kyoto: [35.01, 135.77, 'kyoto'],
  osaka: [34.69, 135.5, 'osaka'],
  kawachi: [34.68, 135.6, 'osaka'],
  senshu: [34.46, 135.37, 'osaka'],
  kobe: [34.695, 135.175, 'hyogo'],
  banshu: [34.82, 134.69, 'hyogo'],
  nara: [34.69, 135.8, 'nara'],
  wakayama: [34.23, 135.17, 'wakayama'],
  tottori: [35.5, 134.24, 'tottori'],
  izumo: [35.37, 132.75, 'shimane'],
  okayama: [34.66, 133.92, 'okayama'],
  hiroshima: [34.39, 132.46, 'hiroshima'],
  yamaguchi: [34.18, 131.47, 'yamaguchi'],
  sanuki: [34.34, 134.05, 'kagawa'],
  awa: [34.043, 134.51, 'tokushima'],
  iyo: [33.84, 132.77, 'ehime'],
  tosa: [33.56, 133.53, 'kochi'],
  kitakyushu: [33.88, 130.88, 'fukuoka'],
  hakata: [33.59, 130.4, 'fukuoka'],
  chikugo: [33.32, 130.51, 'fukuoka'],
  saga: [33.25, 130.3, 'saga'],
  nagasaki: [32.75, 129.88, 'nagasaki'],
  kumamoto: [32.8, 130.71, 'kumamoto'],
  oita: [33.24, 131.61, 'oita'],
  miyazaki: [31.915, 131.37, 'miyazaki'],
  satsuma: [31.6, 130.56, 'kagoshima'],
  uchinaa: [26.35, 127.805, 'okinawa'],
  okinawa: [26.2, 127.73, 'okinawa'],
  miyako: [24.8, 125.28, 'okinawa'],
  yaeyama: [24.38, 124.1, 'okinawa'],
};

/** 都道府県 → 方言区分（地図の塗り分け用） */
export const PREF_REGION: Record<string, Region> = {
  hokkaido: '北海道・東北', aomori: '北海道・東北', iwate: '北海道・東北', akita: '北海道・東北',
  miyagi: '北海道・東北', yamagata: '北海道・東北', fukushima: '北海道・東北',
  ibaraki: '関東', tochigi: '関東', gunma: '関東', saitama: '関東', chiba: '関東', tokyo: '関東', kanagawa: '関東',
  niigata: '甲信越・北陸', nagano: '甲信越・北陸', yamanashi: '甲信越・北陸',
  toyama: '甲信越・北陸', ishikawa: '甲信越・北陸', fukui: '甲信越・北陸',
  shizuoka: '東海', aichi: '東海', gifu: '東海', mie: '東海',
  shiga: '近畿', kyoto: '近畿', osaka: '近畿', hyogo: '近畿', nara: '近畿', wakayama: '近畿',
  tottori: '中国', shimane: '中国', okayama: '中国', hiroshima: '中国', yamaguchi: '中国',
  kagawa: '四国', tokushima: '四国', ehime: '四国', kochi: '四国',
  fukuoka: '九州', saga: '九州', nagasaki: '九州', kumamoto: '九州', oita: '九州', miyazaki: '九州', kagoshima: '九州',
  okinawa: '沖縄・離島',
};

/** 方言区分の色（ピンの点と、陸地の淡い塗り） */
export const REGION_COLOR: Record<string, string> = {
  '北海道・東北': '#4f8a63',
  関東: '#b07f2c',
  '甲信越・北陸': '#3f74a3',
  東海: '#7d5fa6',
  近畿: '#c0474f',
  中国: '#9a8a1f',
  四国: '#25897f',
  九州: '#a64f80',
  '沖縄・離島': '#2a86c0',
};
