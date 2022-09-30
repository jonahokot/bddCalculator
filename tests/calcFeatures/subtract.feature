Feature: Calculator

    The user should be able to provide 2 numbers and have basic calculations done

    Scenario Outline: Calculations
        Given the user is on the home page
        When the user inserts two numbers, <num1> and <num2> and selects "<sign>" option
        Then <answer> should be displayed

        Scenarios:
            | num1 | num2 | sign     | answer |
            | 20   | 7    | add      | 27     |
            | 10   | 7    | multiply | 70     |
            | 2    | 1    | subtract | 1      |
            | 2    | 1    | divide   | 2      |