import { json } from "express";

const el_up = document.getElementById("GFG_UP");
import data from "./courses.json";


    function json_formatter() {
        const cols = [];
            
        for (let i = 0; i < data.length; i++) {
            for (const k in data[i]) {
                if (cols.indexOf(k) === -1) {
                        
                    // Push all keys to the array
                    cols.push(k);
                }
            }
        }
            
        // Create a table element
        const table = document.createElement("table");
            
        // Create table row tr element of a table
        const tr = table.insertRow(-1);
        for (let i = 0; i < cols.length; i++) {
                 
            // Create the table header th element
            const theader = document.createElement("th");
            theader.innerHTML = cols[i];
             
            // Append columnName to the table row
            tr.appendChild(theader);
        }
         
        // Adding the data to the table
        for (let i = 0; i < data.length; i++) {
             
            // Create a new row
            const trow = table.insertRow(-1);
            for (let j = 0; j < cols.length; j++) {
                const cell = trow.insertCell(-1);
                 
                // Inserting the cell at particular place
                cell.innerHTML = data[i][cols[j]];
            }
        }
         
        // Add the newly created table containing json data
        const el = document.getElementById("table");
        el.innerHTML = "";
        el.appendChild(table);
    }