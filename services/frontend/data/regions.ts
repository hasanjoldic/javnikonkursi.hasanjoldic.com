export enum ERegion {
  "UNSKO_SANSKI_KANTON" = "UNSKO_SANSKI_KANTON",
  "POSAVSKI_KANTON" = "POSAVSKI_KANTON",
  "TUZLANSKI_KANTON" = "TUZLANSKI_KANTON",
  "ZENICKO_DOBOJSKI_KANTON" = "ZENICKO_DOBOJSKI_KANTON",
  "BOSANSKO_PODRINJSKI_KANTON" = "BOSANSKO_PODRINJSKI_KANTON",
  "SREDNJOBOSANSKI_KANTON" = "SREDNJOBOSANSKI_KANTON",
  "HERCEGOVACKO_NERETVANSKI_KANTON" = "HERCEGOVACKO_NERETVANSKI_KANTON",
  "ZAPADNOHERCEGOVACKI_KANTON" = "ZAPADNOHERCEGOVACKI_KANTON",
  "KANTON_SARAJEVO" = "KANTON_SARAJEVO",
  "KANTON_10" = "KANTON_10",
  "BANJALUCKA_REGIJA" = "BANJALUCKA_REGIJA",
  "DOBOJSKO_BIJELJINSKA_REGIJA" = "DOBOJSKO_BIJELJINSKA_REGIJA",
  "SARAJEVSKO_ZVORNICKA_REGIJA" = "SARAJEVSKO_ZVORNICKA_REGIJA",
  "TREBINJSKO_FOCANSKA_REGIJA" = "TREBINJSKO_FOCANSKA_REGIJA",
  "BRCKO_DISTRIKT" = "BRCKO_DISTRIKT",
}

export const regions = [
  {
    value: ERegion["UNSKO_SANSKI_KANTON"],
    label: "Unsko-sanski kanton",
    orderPriority: 100,
  },
  {
    value: ERegion["POSAVSKI_KANTON"],
    label: "Posavski kanton",
    orderPriority: 200,
  },
  {
    value: ERegion["TUZLANSKI_KANTON"],
    label: "Tuzlanski kanton",
    orderPriority: 300,
  },
  {
    value: ERegion["ZENICKO_DOBOJSKI_KANTON"],
    label: "Zeničko-dobojski kanton",
    orderPriority: 400,
  },
  {
    value: ERegion["BOSANSKO_PODRINJSKI_KANTON"],
    label: "Bosansko-podrinjski kanton",
    orderPriority: 500,
  },
  {
    value: ERegion["SREDNJOBOSANSKI_KANTON"],
    label: "Srednjobosanski kanton",
    orderPriority: 600,
  },
  {
    value: ERegion["HERCEGOVACKO_NERETVANSKI_KANTON"],
    label: "Hercegovačko-neretvanski kanton",
    orderPriority: 700,
  },
  {
    value: ERegion["ZAPADNOHERCEGOVACKI_KANTON"],
    label: "Zapadnohercegovački kanton",
    orderPriority: 800,
  },
  {
    value: ERegion["KANTON_SARAJEVO"],
    label: "Kanton Sarajevo",
    orderPriority: 900,
  },
  { value: ERegion["KANTON_10"], label: "Kanton 10", orderPriority: 1000 },
  {
    value: ERegion["BANJALUCKA_REGIJA"],
    label: "Banjalučka regija",
    orderPriority: 1100,
  },
  {
    value: ERegion["DOBOJSKO_BIJELJINSKA_REGIJA"],
    label: "Dobojsko-bijeljinska regija",
    orderPriority: 1200,
  },
  {
    value: ERegion["SARAJEVSKO_ZVORNICKA_REGIJA"],
    label: "Sarajevsko-zvornička regija",
    orderPriority: 1300,
  },
  {
    value: ERegion["TREBINJSKO_FOCANSKA_REGIJA"],
    label: "Trebinjsko-fočanska regija",
    orderPriority: 1400,
  },
  {
    value: ERegion["BRCKO_DISTRIKT"],
    label: "Brčko distrikt",
    orderPriority: 1500,
  },
];

export function getRegionLabel(region: ERegion): string {
  return regions.find((o) => o.value === region)?.label || "";
}
