function solution(D) {
    const entries = Object.entries(D).sort((a, b) => new Date(a[0]) - new Date(b[0]));
    const result = {};
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < entries.length; i++) {
        const currentDate = new Date(entries[i][0]);
        const currentValue = entries[i][1];
        const dayName = dayNames[currentDate.getDay()];
        if (!result[dayName]) {
            result[dayName] = 0;
        }
        result[dayName] += currentValue;
        if (i < entries.length - 1) {
            const nextDate = new Date(entries[i + 1][0]);
            const nextValue = entries[i + 1][1];
            const timeDiff = nextDate - currentDate;
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            if (daysDiff > 1) {
                const meanValue = Math.round((currentValue + nextValue) / 2);
                
                for (let j = 1; j < daysDiff; j++) {
                    const missingDate = new Date(currentDate);
                    missingDate.setDate(currentDate.getDate() + j);
                    const missingDayName = dayNames[missingDate.getDay()];
                    
                    if (!result[missingDayName]) {
                        result[missingDayName] = 0;
                    }
                    result[missingDayName] += meanValue;
                }
            }
        }
    }
    
    return result;
}


function runTests() {
    console.log("Running Unit Tests...\n");
    const test1 = {
        '2020-01-01': 4,
        '2020-01-02': 4,
        '2020-01-03': 6,
        '2020-01-04': 8,
        '2020-01-05': 2,
        '2020-01-06': -6,
        '2020-01-07': 2,
        '2020-01-08': -2
    };
    
    const expected1 = { 'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2 };
    const result1 = solution(test1);
    console.log("Test 1 - Consecutive days:");
    console.log("Input:", test1);
    console.log("Expected:", expected1);
    console.log("Got:", result1);
    console.log("Passed:", JSON.stringify(result1) === JSON.stringify(expected1) ? "✓" : "✗");
    console.log();
    
    // Missing days (Thu & Fri missing)
    const test2 = {
        '2020-01-01': 6,
        '2020-01-04': 12,
        '2020-01-05': 14,
        '2020-01-06': 2,
        '2020-01-07': 4
    };
    
    const expected2 = { 'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 9, 'Fri': 9, 'Sat': 14, 'Sun': 12 };
    const result2 = solution(test2);
    console.log("Test 2 - Missing days (Thu & Fri):");
    console.log("Input:", test2);
    console.log("Expected:", expected2);
    console.log("Got:", result2);
    console.log("Passed:", JSON.stringify(result2) === JSON.stringify(expected2) ? "✓" : "✗");
    console.log();
    
    // only Mon & Sun
    const test3 = {
        '2020-01-06': 10,
        '2020-01-12': 20
    };
    
    const expected3 = { 'Mon': 10, 'Tue': 15, 'Wed': 15, 'Thu': 15, 'Fri': 15, 'Sat': 15, 'Sun': 20 };
    const result3 = solution(test3);
    console.log("Test 3 - Only Mon & Sun (gap of 6 days):");
    console.log("Input:", test3);
    console.log("Expected:", expected3);
    console.log("Got:", result3);
    console.log("Passed:", JSON.stringify(result3) === JSON.stringify(expected3) ? "✓" : "✗");
    console.log();
}

runTests();

console.log("=== Example from Problem Statement ===");
const exampleInput = {
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2
};

console.log("Input:", exampleInput);
console.log("Output:", solution(exampleInput));
