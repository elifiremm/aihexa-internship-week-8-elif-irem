const regressionTests = [
    {
        name: "Login Test",
        expected: "User can login",
        passed: true
    },
    {
        name: "Authorization Test",
        expected: "Unauthorized access blocked",
        passed: true
    },
    {
        name: "Input Validation",
        expected: "Invalid input rejected",
        passed: true
    },
    {
        name: "API Response Test",
        expected: "API returns valid response",
        passed: true
    }
];

const securityChecks = [
    {
        name: "Authentication control",
        passed: true
    },
    {
        name: "Authorization control",
        passed: true
    },
    {
        name: "Input validation",
        passed: true
    },
    {
        name: "Secrets are not exposed",
        passed: true
    },
    {
        name: "Sensitive data is not logged",
        passed: true
    }
];

const performanceMetrics = [
    {
        metric: "API Response Time",
        baseline: 300,
        current: 245,
        unit: "ms"
    },
    {
        metric: "Page Load Time",
        baseline: 1200,
        current: 950,
        unit: "ms"
    },
    {
        metric: "Memory Usage",
        baseline: 150,
        current: 138,
        unit: "MB"
    }
];


function displayRegressionTests() {

    const table =
        document.getElementById("testTable");

    regressionTests.forEach(test => {

        const row =
            document.createElement("tr");

        row.innerHTML = `
            <td>${test.name}</td>
            <td>${test.expected}</td>
            <td>${test.passed ? "PASS" : "FAIL"}</td>
        `;

        table.appendChild(row);
    });
}


function displaySecurityChecks() {

    const list =
        document.getElementById("securityList");

    securityChecks.forEach(check => {

        const item =
            document.createElement("li");

        item.textContent =
            `${check.name}: ${check.passed ? "PASS" : "FAIL"}`;

        list.appendChild(item);
    });
}


function displayPerformance() {

    const table =
        document.getElementById("performanceTable");

    performanceMetrics.forEach(item => {

        const status =
            item.current <= item.baseline
                ? "PASS"
                : "FAIL";

        const row =
            document.createElement("tr");

        row.innerHTML = `
            <td>${item.metric}</td>
            <td>${item.baseline} ${item.unit}</td>
            <td>${item.current} ${item.unit}</td>
            <td>${status}</td>
        `;

        table.appendChild(row);
    });
}


function evaluateFinalRelease() {

    const regressionPassed =
        regressionTests.every(test => test.passed);

    const securityPassed =
        securityChecks.every(check => check.passed);

    const performancePassed =
        performanceMetrics.every(
            item => item.current <= item.baseline
        );


    document.getElementById("testResult")
        .textContent =
        regressionPassed ? "PASS" : "FAIL";


    document.getElementById("securityResult")
        .textContent =
        securityPassed ? "PASS" : "FAIL";


    document.getElementById("performanceResult")
        .textContent =
        performancePassed ? "PASS" : "FAIL";
}


displayRegressionTests();
displaySecurityChecks();
displayPerformance();
evaluateFinalRelease();