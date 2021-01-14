var Reader = require('./Reader');
var Writer = require('./Writer');
var Processor = require('./Processor');
var Table = require('./Table');
var HtmlParser = require('./HtmlParser');
var PDFWriter = require('./PDFWriter');

var reader = new Reader();
var writer = new Writer();

async function main(){
    var data = await reader.Read("./dados.csv");
    
    var processedData = Processor.Process(data);

    var users = new Table(processedData);

    var html = await HtmlParser.Parse(users);

    writer.Write(`./files/${Date.now()}.html`, html);

    PDFWriter.WritePDF(`./files/${Date.now()}.pdf`, html);

}

main();
