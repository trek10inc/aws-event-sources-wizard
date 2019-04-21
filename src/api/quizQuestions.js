var quizQuestions = {
    strictOrdering: {
        question: "Do you have strict ordering guarantees?",
        description: "Consider financial systems, or other systems where a millisecond of difference is life, death or a lot of money.",
        answers: [
            {
                content: "Yes, my business depends on it.",
                next: "manySubscribers"
            },
            {
                content: "No, we can live without.",
                next: "bigData"
            }
        ]
    },
    manySubscribers: {
        question: "Do you need to support many subscribers?",
        description: "Sometimes there are completely different parts of an organization interested in working with an event stream for many different reasons!",
        answers: [
            {
                content: "Just my services.",
                next: "endKinesis"
            },
            {
                content: "Other folks in the company will read & write to the stream",
                next: "endKinesisEnhancedFanout"
            }
        ]
    },
    bigData: {
        question: "Are your events going to be bigger than 256kb?",
        description: "Generally, many lambda services limit to 256kb, or in some cases 1MB.",
        answers: [

        ]
    },

    // End states
    endKinesis: {
        question: "Amazon Kinesis",
        description: "<p>Amazon Kinesis is one of the only <strong>event sources</strong> in AWS that integrates</p>",
        icon: "kinesis.svg"
    },
    endKinesisEnhancedFanout: {
        question: "Amazon Kinesis with Enhanced Fanout",
        description: "Kinesis is going to be your best bet",
        icon: "kinesis.svg"
    },



}

export default quizQuestions;
