import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    printPdf(): void {
        var docDefinition = { content: 'This is an sample PDF printed with pdfMake' };
        pdfMake.createPdf(docDefinition).download();
    }
}
