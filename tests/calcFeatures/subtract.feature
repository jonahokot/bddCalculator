Feature: Subtraction

    The user should be able to provide 2 numbers and have them subtracted by clicking a button

    Scenario Outline: Subtracting two numbers
        Given the user is on the home page
        When the user inserts two numbers, <num1> and <num2>
        Then the <answer> should be displayed

        Scenarios:
            | num1 | num2 | answer |
            | 20   | 7    | 13     |
            | 10   | 7    | 3      |
            | 2    | 1    | 1      |