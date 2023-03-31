type Prefix = string | (() => string);

class Color {
  public color: string;
  public prefix: Prefix;

  public constructor(color: string, prefix: Prefix = '') {
    this.color = color;
    this.prefix = prefix;
  }

  public log(message: string) {
    let prefix = this.prefix;
    if (prefix instanceof Function) {
      prefix = prefix();
    }
    console.log(this.color, prefix, message, '\x1b[0m');
  }
}

export class Blue extends Color {
  public constructor(prefix: Prefix = '[Info]:') {
    super('\x1b[34m', prefix);
  }
}

export class Green extends Color {
  public constructor(prefix: Prefix = '[Done]:') {
    super('\x1b[32m', prefix);
  }
}

export class Red extends Color {
  public constructor(prefix: Prefix = '[Error]:') {
    super('\x1b[31m', prefix);
  }
}
