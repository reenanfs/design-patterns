import { ExcelReportGenerator, PDFReportGenerator } from './concrete';

const pdfReport = new PDFReportGenerator();
pdfReport.generateReport();

console.log('---');

const excelReport = new ExcelReportGenerator();
excelReport.generateReport();
