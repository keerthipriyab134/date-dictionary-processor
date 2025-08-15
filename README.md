Date Dictionary Processing Algorithm

A JavaScript solution that processes a dictionary of dates and their corresponding integer values, transforming them into a weekly summary while intelligently filling in missing days.

Problem Description

Given a dictionary D where:

Key: Date string in format YYYY-MM-DD

Value: Integer representing some data for that date

The function returns a new dictionary where:

Key: Day name (Mon, Tue, Wed, Thu, Fri, Sat, Sun)

Value: Sum of all values that occurred on that day of the week

Special Feature: Missing Day Interpolation

If the input dictionary doesn't have data for certain days between consecutive dates, the algorithm fills those missing days with the mean (average) of the previous and next day's values.

Examples
Example 1: Consecutive Days
javascriptInput = {
    '2020-01-01': 4,   // Wed
    '2020-01-02': 4,   // Thu  
    '2020-01-03': 6,   // Fri
    '2020-01-04': 8,   // Sat
    '2020-01-05': 2,   // Sun
    '2020-01-06': -6,  // Mon
    '2020-01-07': 2,   // Tue
    '2020-01-08': -2   // Wed
}

Output = {
    'Mon': -6, 
    'Tue': 2, 
    'Wed': 2,    // 4 + (-2) = 2
    'Thu': 4, 
    'Fri': 6, 
    'Sat': 8, 
    'Sun': 2
}
Example 2: Missing Days (Gap Filling)

javascriptInput = {
    '2020-01-01': 6,   // Wed
    '2020-01-04': 12,  // Sat (Thu & Fri missing)
    '2020-01-05': 14,  // Sun
    '2020-01-06': 2,   // Mon
    '2020-01-07': 4    // Tue
}

// Algorithm fills missing Thu & Fri with mean of Wed(6) and Sat(12) = 9

Output = {
    'Mon': 2, 
    'Tue': 4, 
    'Wed': 6, 
    'Thu': 9,    // Interpolated: (6 + 12) / 2 = 9
    'Fri': 9,    // Interpolated: (6 + 12) / 2 = 9
    'Sat': 14, 
    'Sun': 12
}


Constraints

Date range: 1970-01-01 to 2100-01-01

Value range: -1,000,000 to 1,000,000

Input guaranteed to have at least Monday and Sunday data

Running Tests

The solution includes comprehensive unit tests. Simply run:

javascriptnode solution.js

This will execute all test cases and display the results.

