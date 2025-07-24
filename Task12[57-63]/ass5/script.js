function createSelectBox(startYear, endYear) {
    document.writeln (`<div>`);
        document.writeln(`<select>`);
        document.writeln(`<option value="">Select a year</option>`);
            for (let i = startYear; i <= endYear; i++) {
                document.writeln(`<option value="${i}">${i}</option>`);
            }
        document.writeln(`</select>`);
    document.writeln (`</div>`);
}
createSelectBox(2000, 2021);