﻿(function (jsPDFAPI) {
var callAddFont = function () {
this.addFileToVFS('Times-New-Roman-normal.ttf', font);
this.addFont('Times-New-Roman-normal.ttf', 'Times-New-Roman', 'normal');
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);