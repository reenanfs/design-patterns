import { Invoice, Resume, Report } from './concrete-element';
import { PrintVisitor, SaveToDatabaseVisitor } from './concrete-visitor';
import { Document } from './element';

const documents: Document[] = [new Report(), new Invoice(), new Resume()];

const printVisitor = new PrintVisitor();
const saveToDatabaseVisitor = new SaveToDatabaseVisitor();

console.log('Using PrintVisitor:');
documents.forEach(doc => doc.accept(printVisitor));

console.log('\nUsing SaveToDatabaseVisitor:');
documents.forEach(doc => doc.accept(saveToDatabaseVisitor));
