class HashTable {
  // ─── Constructor ────────────────────────────────────────────────────────────────
  constructor(private storageLimit: number) {}

  // ─── Setup Storage ──────────────────────────────────────────────────────────────
  private storage: [key: string, value: string][][] = [];

  // ─── Create Hash Function ───────────────────────────────────────────────────────
  private hash: (key: string) => number = (key) => {
    let hash: number = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.storageLimit;
  };

  // ─── Print Full Array ───────────────────────────────────────────────────────────
  print: Function = () => {
    console.log(this.storage);
  };

  // ─── Insert A Data ──────────────────────────────────────────────────────────────
  add = (key: string, value: string) => {
    const index = this.hash(key);
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
      return;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          return;
        }
      }
    }
    this.storage[index].push([key, value]);
  };

  // ─── Lookup A Data ──────────────────────────────────────────────────────────────
  lookup: (key: string) => string | undefined = (key) => {
    const index = this.hash(key);
    if (this.storage[index] === undefined) return undefined;
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) return this.storage[index][i][1];
    }
  };

  // ─── Remove A Data ──────────────────────────────────────────────────────────────
  remove: (key: string) => [key: string, value: string] | undefined = (key) => {
    const index = this.hash(key);
    if (this.storage[index] === undefined) return undefined;
    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i][0] === key) {
        const deletedItem: [key: string, value: string] =
          this.storage[index][i];
        this.storage[index].splice(i, 1);
        return deletedItem;
      }
    }
  };
}

const ht = new HashTable(9);

ht.add("mehedi", "hasan");
ht.add("abdur", "rahman");
ht.add("karima", "khatun");
ht.add("suriya", "aktar");
ht.add("tanjila", "begum");
ht.add("moksed", "ali");

ht.print();

console.log(ht.remove("mehedi"));

console.log(ht.lookup("mehedi"));
console.log(ht.lookup("karima"));

ht.print();
