
// import {getDropdown} from "./countries.js";

const countries = ["Netherlands", "Japan", "Mongolia"];

const getDropdown = countries => {
    let html = `<option value="">Please select</option>`;
    countries.forEach(country => html += `<option value="${country.toLowerCase()}">${country}</option>`);
    return html;
}

const html = getDropdown(countries);
const select = document.querySelector("#countries-dropdown");

select.innerHTML = html;