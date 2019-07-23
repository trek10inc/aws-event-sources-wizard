var quizQuestions = {
    strictOrdering: {
        question: "Do you have strict ordering guarantees?",
        description: "Consider financial systems, or other systems where a millisecond of difference is life, death or a lot of money.",
        answers: [
            {
                content: "Yes, my business depends on it.",
                next: "manySubscribersKinesis"
            },
            {
                content: "No, we can live without.",
                next: "bigData"
            }
        ]
    },
    manySubscribersKinesis: {
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
            {
                content: "Nope, we keep it reasonable.",
                next: "publicClients"
            },
            {
                content: "I have the biggest big data!",
                next: "endS3"
            }
            
        ]
    },

    publicClients: {
        question: "What about your service clients?",
        description:"",
        answers: [
            {
                content: "Internal only. I control all the clients, and everything, with an iron fist.",
                next: "manySubscribers"
            },
            {
                content: "We have / need a public endpoint, so let's be secure about it! (Frontend apps, third party calling your api, etc)",
                next: "publicIngress"
            }
        ]
    },

    manySubscribers: {
        question: "Do you need to support many subscribers?",
        description: "Sometimes there are completely different parts of an organization interested in working with an event stream for many different reasons!",
        answers: [
            {
                content: "Just my services.",
                next: "endSQS"
            },
            {
                content: "There is, or will be, others.",
                next: "endSNSCWE"
            }
        ]
    },

    publicIngress: {
        question: "What does your public access look like?",
        answers: [
            {
                content: "A few million requests a month or less, maybe some authorization needs.",
                next: "endAPIGateway"
            },
            {
                content: "Crazy high volume (10's of millions to billions).",
                next: "endALB"
            }
        ]
    },

    // End states
    endKinesis: {
        question: "Amazon Kinesis",
        description: "kinesis.html",
        icon: "kinesis.svg"
    },
    endKinesisEnhancedFanout: {
        question: "Amazon Kinesis with Enhanced Fanout",
        description: "kinesisEnhanced.html",
        icon: "kinesis.svg"
    },
    endS3: {
        question: "Amazon S3",
        description: "s3.html",
        icon: "s3.svg"
    },
    endAPIGateway: {
        question: "Amazon API Gateway",
        description: "apig.html",
        icon: "apig.svg"
    },
    endALB: {
        question: "Application Load Balancer",
        description: "alb.html",
        icon: "alb.svg"
    },
    endSNSCWE: {
        question: "Simple Notification Service",
        description: "sns.html",
        icon: "sns.svg"
    },
    endSQS: {
        question: "Simple Queue Service",
        description: "sqs.html",
        icon: "sqs.svg"
    }
}

export default quizQuestions;
