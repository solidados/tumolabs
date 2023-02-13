export function renderTableRows(rows) {
    let html = '';
    rows.forEach((row) => html += `
        <tr>
            <td>${row[0]}</td>
            <td>${row[1]}</td>
        </tr>`
    );
    return html;
}