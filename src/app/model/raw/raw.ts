export class Raw {
  constructor(private _title: string, private _color: string) {}

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get color(): string {
    return this._color;
  }

  set color(color: string) {
    this._color = color;
  }
}
