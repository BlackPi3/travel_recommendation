const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', search);
}

const clearBtn = document.getElementById('clearBtn');
if (clearBtn) {
    clearBtn.addEventListener('click', clear);
}

const result = document.getElementById("result");

var travelCategories;


async function search() {
    let input = searchInput.value;
    if (input) {
        input = input.toLowerCase().trim();
        if (input.includes("country")) {
            input = 'countries';
        }
        if (!travelCategories) {
            travelCategories = await getData();
        }
        clear();
        for (const t in travelCategories) {
            if (t.includes(input)) {
                for (const i of travelCategories[t]) {
                    result.innerHTML +=
                        `<div>
                        <img src='${i.imageUrl}'>
                        <h3>${i.name}</h3>
                        </div>`;
                }
            }
        }

        searchInput.value = "";
    }
}

async function getData() {
    try {
        const response = await fetch('./travel_recommendation_api.json');
        const data = response.json();
        return data;
    } catch (error) {
        alert("There's something wrong: ", error);
    }
}

function clear() {
    result.innerHTML = "";
}