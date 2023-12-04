let questionBank = [
    {
        id: 1,
        type: "free_ans",
        question: "3 + 5 =",
        ans:[8, "eight"],
        attempts: 3,
        status: "not Visited"
    },
    {
        id: 2,
        type: "fill_in_the_blanks",
        question: "Robbin have 2 Apples and 3 bananas, so Robbin has {5} no. of fruits ",
        options: [4, 5, 6, 7],
        attempts: 3,
        status: "not Visited"
    },
    {
        id: 3,
        type: "fill_in_the_blanks",
        question: "Robbin {[play],[love],[hate]} soccer.",
        options: ["play", "love", "hate", "watch"],
        attempts: 3,
        status: "not Visited"
    },
     {
        id: 4,
        type: "matrix_sorting",
        question: { statement : "Match the Following animals with there class.",
            choices:["Human", "birds", "snake", "Hydra"]},
        options: ["Hydrozoa","Reptilia","Aves","Mammalia"],
        ans:["Mammalia","Aves","Reptilia","Hydrozoa"],
        attempts: 3,
        status: "not Visited"
    },
    {
        id: 5,
        type: "sorting",
        question: "sort the option in correct order.",
        options:["D", "C","A", "E","B"],
         ans:["A","B","C","D","E"],
         attempts: 3,
         status: "not Visited"
        },
        {
            id: 6,
            type: "single_choice",
            question: "3 + 5 = 8",
            options: ["correct", "incorrect"],
        ans:"correct",
        attempts: 1,
        status: "not Visited"
    
    },
    {
        id: 7,
        type: "select_multiple",
        question: "Which of the following number is divisible by 2 ",
        options:[1,2,3,4,5,6,7,8],
        ans:[2,4,6,8],
        attempts: 3,
        status: "not Visited"
    
    },


]
export default questionBank;