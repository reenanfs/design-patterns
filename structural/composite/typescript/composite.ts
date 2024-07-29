import { FileSystemComponent } from "./component";

export class Directory implements FileSystemComponent {
    private children: FileSystemComponent[] = [];

    constructor(private name: string) {}

    add(component: FileSystemComponent): void {
        this.children.push(component);
    }

    remove(component: FileSystemComponent): void {
        this.children = this.children.filter(child => child !== component);
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.children.reduce((acc, child) => acc + child.getSize(), 0);
    }

    print(): void {
        console.log(`Directory: ${this.name} [Size: ${this.getSize()}]`);
        this.children.forEach(child => {
            if (child instanceof Directory) {
                child.print();
            } else {
                console.log(`  File: ${child.getName()} [Size: ${child.getSize()}]`);
            }
        });
    }
}