export class Stuff {
  constructor(private _title: string, private _url: string) {}

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get url(): string {
    return this._url;
  }

  set url(url: string) {
    this._url = url;
  }
}
