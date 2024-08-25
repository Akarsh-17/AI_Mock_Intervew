// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
// ];
// export const chatSession = model.startChat({
//   generationConfig,
//   safetySettings,
//   // See https://ai.google.dev/gemini-api/docs/safety-settings
// });

// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 64,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };
// const safetySettings = [
//   {
//     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
//   {
//     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//   },
// ];

// export const chatSession = model.startChat({
//   generationConfig,
//   safetySettings,
//   history: [
//     {
//       role: "user",
//       parts: [
//         {
//           text: "Job Position: Software Developer Engineer, JobDescription: React.js ,sql, nodejs , understanding of Api,c/c++, java,git ,javascript , year of Experience:6 Depending on this information please give 6 Interview question wiht answer in json format for a good MNC offering package of 8-14 Lpa . give Questions and answer as field in JSON.No extra data or information is required please...",
//         },
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: '```json\n[\n  {\n    "Question": "Describe your experience working with React.js and how you\'ve tackled complex UI challenges.",\n    "Answer": "I have [number] years of experience building complex, user-friendly interfaces using React.js. I\'ve successfully tackled challenges like [mention specific challenges, e.g., dynamic data rendering, component state management, performance optimization]. I am proficient in [mention specific React libraries/concepts, e.g., Redux, hooks, component lifecycle]. I am comfortable working with [mention specific tools, e.g., React Developer Tools, Jest, Enzyme]."\n  },\n  {\n    "Question": "Explain how you would design and implement a RESTful API using Node.js. Give an example of a typical API endpoint and its functionality.",\n    "Answer": "I would use Express.js framework in Node.js to build the API. I would define routes for different functionalities and handle requests using HTTP methods (GET, POST, PUT, DELETE). For example, a GET endpoint \'/users\' would retrieve a list of users from a database, while a POST endpoint \'/users\' would create a new user. I would use middleware to handle authentication, authorization, and error handling."\n  },\n  {\n    "Question": "Explain your understanding of SQL joins and give an example of when you would use a specific join type.",\n    "Answer": "I understand different types of SQL joins, including inner join, left join, right join, and full join. I use inner join to retrieve rows where both tables share a common value in the join column, left join to retrieve all rows from the left table and matching rows from the right table, right join for the opposite, and full join to retrieve all rows from both tables. For example, to get all orders and customer details, I would use a left join between the \'orders\' and \'customers\' tables, using the \'customer_id\' as the join column."\n  },\n  {\n    "Question": "Describe your experience with version control systems like Git. Explain your workflow for collaborating on a project with multiple developers.",\n    "Answer": "I am proficient with Git and use it daily for version control and collaboration. My workflow involves creating feature branches for new developments, committing changes frequently with descriptive messages, pushing changes to remote repositories, and using pull requests to merge changes into the main branch after code reviews. I am also familiar with branching strategies like Gitflow and feature branching."\n  },\n  {\n    "Question": "Discuss your understanding of object-oriented programming principles and how you apply them in your C++ or Java development.",\n    "Answer": "I understand core OOP principles like encapsulation, inheritance, polymorphism, and abstraction. I apply these principles in my C++/Java development by defining classes with private data members and public methods to encapsulate data and control access, using inheritance to create specialized classes based on existing ones, leveraging polymorphism to write generic code that can work with different objects, and abstracting common functionality into interfaces or abstract classes."\n  },\n  {\n    "Question": "What are your preferred tools and methodologies for debugging and testing JavaScript code? Give examples of how you\'ve used them in your projects.",\n    "Answer": "I use a combination of tools and methodologies for debugging and testing JavaScript code. For debugging, I rely on browser developer tools, console logging, and breakpoints. For testing, I prefer frameworks like Jest and Mocha for unit and integration testing. I also employ practices like test-driven development (TDD) to write tests before writing code. In my previous projects, I have used [mention specific tools and examples of how you applied them in past projects]."\n  }\n]\n``` \n',
//         },
//       ],
//     },
//   ],
// });

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export const chatSession = model.startChat({
  generationConfig,
  safetySettings,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Job Position: Software Developer Engineer, JobDescription: React.js ,sql, nodejs , understanding of Api,c/c++, java,git ,javascript , year of Experience:6 Depending on this information please give 6 Interview question with answer in Json Format . Give Question and Answer as field in JSON.No extra data or information is required please...",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "Question": "Describe your experience building user interfaces using React.js. What are some of the challenges you\'ve encountered and how did you overcome them?",\n    "Answer": "I have extensive experience with React.js, having used it to build complex web applications. I\'ve encountered challenges like managing state effectively, optimizing component performance, and ensuring code reusability. I addressed these through techniques like Redux for state management, React.memo for component optimization, and creating reusable custom components."\n  },\n  {\n    "Question": "Explain how you would implement a RESTful API using Node.js and Express. Provide an example of a specific endpoint and its functionality.",\n    "Answer": "I\'d use Express.js as a framework to build a RESTful API with Node.js. For example, an endpoint \'/users\' could handle GET requests to retrieve a list of users, POST requests to create a new user, PUT requests to update a user, and DELETE requests to remove a user. I\'d utilize middleware for authentication, error handling, and data validation."\n  },\n  {\n    "Question": "You need to optimize a React.js application for performance. Describe your approach and the tools you would use.",\n    "Answer": "I would start by profiling the application to identify performance bottlenecks. Tools like React Developer Tools and Chrome DevTools can help with this.  I\'d then focus on techniques like using React.memo for component optimization, code splitting to load only necessary code, and implementing lazy loading for images. If needed, I might also use libraries like React Virtualized for large lists."\n  },\n  {\n    "Question": "Explain the differences between SQL and NoSQL databases and when you would choose one over the other.",\n    "Answer": "SQL databases are relational, structured with tables and relationships, ideal for structured data with predictable queries. NoSQL databases are document-oriented or key-value stores, more flexible for unstructured data, scaling, and high availability. I\'d choose SQL for applications requiring strong data integrity and complex queries, and NoSQL for applications needing flexibility, scalability, and handling large volumes of data."\n  },\n  {\n    "Question": "How would you handle asynchronous operations in JavaScript, and what are the advantages and disadvantages of different methods like Promises and async/await?",\n    "Answer": "Promises provide a way to manage asynchronous operations, representing a value that may not be available yet. Async/await offers a cleaner syntax to work with Promises, making asynchronous code more readable. Promises are more flexible for chaining and error handling, while async/await is more concise and intuitive for sequential operations."\n  },\n  {\n    "Question": "Describe your experience working with Git for version control. How do you handle merging conflicts and collaborate effectively with other developers?",\n    "Answer": "I\'m proficient in Git, using it daily for version control. I utilize branching strategies like Gitflow for feature development and bug fixing. When merging conflicts occur, I carefully examine the changes, prioritize the relevant commits, and resolve conflicts through manual edits or using tools like Git\'s interactive rebase."\n  }\n]\n```',
        },
      ],
    },
  ],
});
