    <!--sheetjs插件-->
doit('xlsx');
    <script type="text/javascript" src="../../../../layuiadmin/lib/sheetjs/shim.min.js"></script>
    <script type="text/javascript" src="../../../../layuiadmin/lib/sheetjs/xlsx.full.min.js"></script>
    <script type="text/javascript" src="../../../../layuiadmin/lib/sheetjs/Blob.js"></script>
    <script type="text/javascript" src="../../../../layuiadmin/lib/sheetjs/FileSaver.js"></script>
    <script>
        function doit(type, fn, dl) {
            var elt = document.getElementById('table');
            var wb = XLSX.utils.table_to_book(elt, {sheet: "月报表"});
            return dl ?
                XLSX.write(wb, {bookType: type, bookSST: true, type: 'base64'}) :
                XLSX.writeFile(wb, fn || ('月报表.' + (type || 'xlsx')));
        }
    </script>