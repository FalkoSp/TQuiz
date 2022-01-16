import {Field, Quantity} from "./Quantity";

// https://de.wikipedia.org/wiki/Liste_physikalischer_Gr%C3%B6%C3%9Fen
export const quantities : Quantity[] = [
  {name: "Zeit", symbol: "t", unit: "s", unitName: "Sekunde", field : Field.Mechanics},
  {name: "Weg", symbol: "s", unit: "m", unitName: "Meter", field : Field.Mechanics},
  {name: "Masse", symbol: "m", unit: "kg", unitName: "Kilogramm", field : Field.Mechanics},
  {name: "Geschwindigkeit", symbol: "v", unit: "m/s", unitName: "", field : Field.Mechanics},
  {name: "Beschleunigung", symbol: "a", unit: "m/s^2", unitName: "", field : Field.Mechanics},
  {name: "Kraft", symbol: "F", unit: "N", unitName: "Newton", formula: "kg m/s^2", field : Field.Mechanics},
  {name: "Energie", symbol: "E", unit: "J", unitName: "Joule", field : Field.Mechanics},
  {name: "Leistung", symbol: "P", unit: "W", unitName: "Watt", field : Field.Mechanics},
  {name: "Frequenz", symbol: "f", unit: "Hz", unitName: "Hertz", field : Field.Mechanics},
  {name: "Druck", symbol: "p", unit: "Pa", unitName: "Pascal", field : Field.Mechanics},
  // Electro
  {name: "Spannung", symbol: "U", unit: "V", unitName: "Volt", field : Field.Electro},
  {name: "Stromstärke", symbol: "I", unit: "A", unitName: "Ampere", field : Field.Electro},
  {name: "Ladung", symbol: "Q", unit: "C", unitName: "Coulomb", field : Field.Electro},
  // Thermo
  {name: "Temperatur", symbol: "T", unit: "K", unitName: "Kelvin", field : Field.Thermo},
  {name: "Stoffmenge", symbol: "n", unit: "mol", unitName: "", field : Field.Thermo},
]
