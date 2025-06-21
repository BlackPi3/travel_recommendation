const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', search);

const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click', clear);

var travelCategories;
fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => travelCategories = data)
    .catch(error => alert("There's something wrong: ", error))

function search() {
    const input = searchInput.value.toLowerCase().trim();
    if (input) {
        for (const t in travelCategories) {
            if (input && t.includes(input)) {
                alert(t);
            }
        }

        searchInput.value = "";
    }
}

function clear() {
    alert("clear results");
}