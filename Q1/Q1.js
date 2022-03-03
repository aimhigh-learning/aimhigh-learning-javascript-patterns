
/**
 * Lets go 
 */
$(document).ready(function () {
    $('#number').on('keyup', (evt)=>{
        const number = evt.target.value || 0;
        let html = `<br>`;
        const row = [];
        for (let index = 1; index <= number; index++) {
            const rowData = [];
            for (let j = index; j <= number; j++) {
                if(index ==1) {
                    html += ` ${j}`;
                    rowData.push(j);
                } else {
                    const first = row[index-2][j-index];
                    const second = row[index-2][j-(index-1)];
                    html += ` ${first + second}`;
                    rowData.push(first + second);
                }
            }
            row.push(rowData);
            html += `<br>`;
        }

        $('.container').html(html);

        $('.result').html(`<p>The last remainig number is : ${row[row.length-1]}</p>`);

    });
});

