export class Raw {
  public static readonly MIN_RAW_LENGTH = 5;
  public static readonly MAX_RAW_LENGTH = 10;
  public static rawCurrentNumber = 0;

  constructor(private _title: string, private _color: string) {
    Raw.rawCurrentNumber++;
  }

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
