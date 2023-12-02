const questionBank = [
    {
        id: 1,
        type: "free_ans",
        question: "3 + 5 =",
        ans:[8, "eight"],
        attempts: 3
    },
    {
        id: 2,
        type: "fill_in_the_blanks",
        question: "Robbin have 2 Apples and 3 bananas, so Robbin has {5} no. of fruits ",
        options: [4, 5, 6, 7],
        attempts: 3
    },
    {
        id: 3,
        type: "fill_in_the_blanks",
        question: "Robbin {[play],[love],[hate]} soccer.",
        options: ["play", "love", "hate", "watch"],
        attempts: 3
    },
     {
        id: 4,
        type: "free_ans",
        question: "3 + 5 =",
        ans:[8, "eight"]
    },
    {
        id: 5,
        type: "sorting",
        question: "sort the option in correct order.",
        options:[
            {id:4,
            option: "D"
            },
             {id:3,
                option: "C"
            },
              {id:2,
                option: "B"
            },
            {id:5,
            option: "E"
            },
            {id:1,
            option: "A"
            },

        ],
        ans:[
            {id:1,
            option: "A"
            },
             {id:2,
                option: "B"
            },
              {id:3,
                option: "C"
            },
            {id:4,
            option: "D"
            },
            {id:5,
            option: "E"
            },

        ]
    },
    {
        id: 6,
        type: "single_choice",
        question: "3 + 5 = 8",
        options: ["correct", "incorrect"],
        ans:"correct"
    },
    {
        id: 7,
        type: "select_multiple",
        question: "Which of the following number is divisible by 2 ",
        options:[1,2,3,4,5,6,7,8],
        ans:[2,4,6,8]
    },


]
export default questionBank;