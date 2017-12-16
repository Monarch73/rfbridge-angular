export class EntityNewSwitch {
  constructor(
    public name: string,
    public houseCode: string,
    public deviceCode: string,
    public triStateOn: string,
    public triStateOff: string,
    public urlOn: string,
    public urlOff: string
  ) { }
}
