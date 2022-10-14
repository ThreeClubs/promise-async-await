"use-strict";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  }); // == await eg below

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  });

async function asyncFetch(api, index) {
  try {
    const fetchResult = await fetch(api);
    const fetchJson = await fetchResult.json();
    const divData = document.getElementById("display");
    divData.innerHTML = `<ul>
        <li>The count is ${fetchJson.count}</li>
        <li>next is ${fetchJson.next}</li>
        <li>previous is ${fetchJson.previous}</li>
        <li>pokemon names are ${fetchJson.results[index].name}</li>
        <li>and pokemon urls are ${fetchJson.results[index].url}</li>
        </ul>`;
    console.log(fetchJson);
  } catch (err) {
    console.log(err);
  }
}

asyncFetch("https://pokeapi.co/api/v2/pokemon", 2);
