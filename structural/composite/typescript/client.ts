import { Directory } from "./composite";
import { FileComponent } from "./leaf";

const file1 = new FileComponent('file1.txt', 10);
const file2 = new FileComponent('file2.txt', 20);
const file3 = new FileComponent('file3.txt', 30);

const directory1 = new Directory('directory1');
const directory2 = new Directory('directory2');

directory1.add(file1);
directory1.add(file2);
directory2.add(file3);
directory2.add(directory1);

directory2.print();
