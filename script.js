const divContainer = document.getElementById("container");

const newCandidates = [
    { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
    { name: "Mario", skills: ["Python", "AWS"] },
    { name: "Jacquline", skills: ["JavaScript", "Azure"] },
    { name: "Kathy", skills: ["JavaScript", "Java"] },
    { name: "Anna", skills: ["JavaScript", "AWS"] },
    { name: "Matt", skills: ["PHP", "AWS"] },
    { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
];

function filterArrayBySkill(candidates, skill) {
    return candidates.filter(function(candidate) {
        return candidate.skills.indexOf(skill) !== -1;
    });
}

// insert a candidate into the table
function insertCandidate(tbody, name, skills) {
    const newRow = tbody.insertRow();
    const nameCell = newRow.insertCell();
    const skillCell = newRow.insertCell();

    const candidateName = document.createTextNode(name);
    const candidateSkills = document.createTextNode(skills.join(', '));

    nameCell.appendChild(candidateName);
    skillCell.appendChild(candidateSkills);
}

function renderTable(skill) {
    const array = filterArrayBySkill(newCandidates, skill);
    const table = document.createElement("table");
    const heading = document.createElement("h2");
    heading.innerHTML = skill + " Candidates";
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");
    tableHead.innerHTML = `<tr>
                                <th>Name</th>
                                <th>Skills</th>
                            </tr>`;
    // populate tableBody using the insertCandidate function
    array.forEach(candidate => insertCandidate(tableBody, candidate.name, candidate.skills));

    table.appendChild(tableHead);                            
    table.appendChild(tableBody);                            
    
    divContainer.appendChild(table);
    divContainer.insertBefore(heading, table);
}

renderTable('JavaScript');
renderTable('PHP');