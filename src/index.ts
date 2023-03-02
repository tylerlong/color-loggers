type Prefix = string | (() => string);

class Color {
  color: string;
  prefix: Prefix;

  constructor(color: string, prefix: Prefix = '') {
    this.color = color;
    this.prefix = prefix;
  }

  log(message: string) {
    let prefix = this.prefix;
    if (prefix instanceof Function) {
      prefix = prefix();
    }
    console.log(this.color, prefix, message, '\x1b[0m');
  }
}

export class Blue extends Color {
  constructor(prefix: Prefix = '[Info]:') {
    super('\x1b[34m', prefix);
  }
}

export class Green extends Color {
  constructor(prefix: Prefix = '[Done]:') {
    super('\x1b[32m', prefix);
  }
}

export class Red extends Color {
  constructor(prefix: Prefix = '[Error]:') {
    super('\x1b[31m', prefix);
  }
}
