export enum Field {
  Mechanics = 1,
  Electro,
  Thermo
}

export interface Quantity {
  name: string
  symbol : string
  unit : string
  unitName : String
  field : Field
  formula? : string

  // TODO can I provide a tostring method for an interface?
}

export type Quiz = Quantity[]
