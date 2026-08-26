const bugs = [
    {
        id: "BUG-001",
        problem: "Login sırasında boş e-posta kontrolü eksik",
        severity: "High",
        priority: "P1",
        status: "Fixed",
        blocker: false
    },
    {
        id: "BUG-002",
        problem: "API hata durumunda kullanıcıya mesaj gösterilmiyor",
        severity: "Medium",
        priority: "P2",
        status: "Fixed",
        blocker: false
    },
    {
        id: "BUG-003",
        problem: "Hassas verinin console log'a yazılma riski",
        severity: "Critical",
        priority: "P0",
        status: "Fixed",
        blocker: true
    },
    {
        id: "BUG-004",
        problem: "Mobil görünümde buton taşması",
        severity: "Low",
        priority: "P3",
        status: "Open",
        blocker: false
    },
    {
        id: "BUG-005",
        problem: "API erişilemediğinde uygulama hata veriyor",
        severity: "High",
        priority: "P1",
        status: "Fixed",
        blocker: true
    }
];


const risks = [
    {
        risk: "API servisinin erişilememesi",
        probability: "Medium",
        impact: "High",
        action: "Error handling kullan"
    },
    {
        risk: "Hassas verilerin loglanması",
        probability: "Low",
        impact: "Critical",
        action: "Sensitive data masking uygula"
    },
    {
        risk: "Login fonksiyonunun çalışmaması",
        probability: "Low",
        impact: "High",
        action: "Release öncesi login testi yap"
    },
    {
        risk: "Mobil UI problemi",
        probability: "Medium",
        impact: "Low",
        action: "Sonraki release için planla"
    }
];


const goNoGoCriteria = [
    "Critical açık bug bulunmamalı",
    "Açık release blocker bulunmamalı",
    "Login sistemi çalışmalı",
    "Kritik güvenlik problemi bulunmamalı",
    "Ana kullanıcı akışı çalışmalı",
    "Veri kaybı riski bulunmamalı"
];


function displayBugs() {

    const table = document.getElementById("bugTable");

    bugs.forEach(bug => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${bug.id}</td>
            <td>${bug.problem}</td>
            <td>${bug.severity}</td>
            <td>${bug.priority}</td>
            <td>${bug.status}</td>
            <td>${bug.blocker ? "Yes" : "No"}</td>
        `;

        table.appendChild(row);
    });
}


function displayRisks() {

    const table = document.getElementById("riskTable");

    risks.forEach(risk => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${risk.risk}</td>
            <td>${risk.probability}</td>
            <td>${risk.impact}</td>
            <td>${risk.action}</td>
        `;

        table.appendChild(row);
    });
}


function displayCriteria() {

    const list =
        document.getElementById("criteriaList");

    goNoGoCriteria.forEach(criteria => {

        const item =
            document.createElement("li");

        item.textContent = criteria;

        list.appendChild(item);
    });
}


function evaluateRelease() {

    const openBlockers = bugs.filter(
        bug =>
            bug.blocker === true &&
            bug.status !== "Fixed"
    );


    const openCriticalBugs = bugs.filter(
        bug =>
            bug.severity === "Critical" &&
            bug.status !== "Fixed"
    );


    document.getElementById("blockerCount")
        .textContent = openBlockers.length;


    const decision =
        document.getElementById("releaseDecision");


    if (
        openBlockers.length === 0 &&
        openCriticalBugs.length === 0
    ) {

        decision.textContent = "GO";

    } else {

        decision.textContent = "NO-GO";
    }
}


displayBugs();
displayRisks();
displayCriteria();
evaluateRelease();