export class Exchange {
  private readonly lastUpdated: string = new Date().toISOString();
  private readonly value: number;

  constructor(value) {
    this.value = value;
  }

  getLastUpdated(): string {
    return this.lastUpdated;
  }

  getValue(): number {
    return this.value;
  }
}
