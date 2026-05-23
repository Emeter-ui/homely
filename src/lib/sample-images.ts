const u = (id: string, w = 800, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const PROPERTY_IMG = {
  oceanStudio:       u('1502672260266-1c1ef2d93688'),
  shoreditchLoft:    u('1493809842364-78817add7ffb'),
  tarkwaBungalow:    u('1568605114967-8130f3a36994'),
  brutalistApt:      u('1560448204-e02f11c3d0e2'),
  lekkiStudio:       u('1522708323590-d24dbb6b0267'),
  mileEndFlat:       u('1505691938895-1758d7feb511'),
  quietBungalow:     u('1512917774080-9991f1c4c750'),
  beachHouse:        u('1499793983690-e29da59ef1c2'),
  cityApartment:     u('1502672023488-70e25813eb80'),
  natureCabin:       u('1449158743715-0a90ebb6d2d8'),
  modernHome:        u('1600585154340-be6161a56a0c'),
  mapLagos:          u('1524813686514-a57563d77965'),
} as const;

export const AVATAR_IMG = {
  amelia: u('1494790108377-be9c29b29330', 200),
  tunde:  u('1500648767791-00dcc994a43e', 200),
  mira:   u('1438761681033-6461ffad8d80', 200),
  ada:    u('1531123897727-8f129e1688ce', 200),
  james:  u('1507003211169-0a1dd7228f2d', 200),
  sofia:  u('1487412720507-e7ab37603c6f', 200),
} as const;
