"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FakeNotification from "@/components/fakenotifications";
import LiveViewers from "@/components/LiveViewers";
import FakeHeatmap from "@/components/FakeHeatMap";
import Countdown from "@/components/CountDown";
import { Space } from "lucide-react";

type Question = {
  id: string;
  title: string;
  strong_answer: string;
  weak_answer: string;
  insight: string;
  trap: string;
};

// const mockQuestions: Question[] = [
//   {
//     id: "1",
//     title: "What is Dependency Injection?",
//     weak_answer: "Inject dependency to reduce coupling",
//     strong_answer:
//       "A design pattern where dependencies are provided externally to improve testability, modularity, and separation of concerns.",
//     insight: "Connect DI to testing and flexibility, not just definition.",
//     trap: "If you only say 'reduce coupling', you sound junior. Interviewers expect real-world impact like testing and swapping implementations.",
//   },
//   {
//     id: "2",
//     title: "Why is DI important in large systems?",
//     weak_answer: "Because it's scalable",
//     strong_answer:
//       "DI helps manage complexity by improving maintainability, enabling easier testing, and allowing flexible replacement of implementations.",
//     insight: "Talk about maintainability, not scalability.",
//     trap: "Most devs say 'scalable' but can't explain how DI actually reduces complexity.",
//   },
//   {
//     id: "3",
//     title: "Difference between IEnumerable and IQueryable?",
//     weak_answer: "One is for memory, one is for database",
//     strong_answer:
//       "IEnumerable executes in memory, while IQueryable builds expression trees and executes queries in the database.",
//     insight: "Focus on execution location and performance.",
//     trap: "Most devs memorize definitions but can't explain SQL generation or performance impact.",
//   },
//   {
//     id: "4",
//     title: "Why is async/await not always faster?",
//     weak_answer: "Because async is slower",
//     strong_answer:
//       "Async improves scalability by freeing threads, but adds overhead and is not always faster.",
//     insight: "Scalability ≠ speed.",
//     trap: "If you say async is faster, interviewer knows you don't understand concurrency.",
//   },
//   {
//     id: "5",
//     title: "What is a deadlock?",
//     weak_answer: "Threads waiting for each other",
//     strong_answer:
//       "A situation where two or more threads block each other by holding resources the others need.",
//     insight: "Explain real scenario + prevention.",
//     trap: "Most devs define it but can't explain how to avoid or debug it.",
//   },
//   {
//     id: "6",
//     title: "What is middleware?",
//     weak_answer: "Something in the pipeline",
//     strong_answer:
//       "Middleware are components that handle HTTP requests/responses in a pipeline in ASP.NET Core.",
//     insight: "Explain request flow clearly.",
//     trap: "If you can't explain execution order, you don't understand backend flow.",
//   },
//   {
//     id: "7",
//     title: "What is REST?",
//     weak_answer: "API using HTTP",
//     strong_answer:
//       "An architectural style using stateless communication, standard HTTP methods, and resource-based design.",
//     insight: "Mention stateless + resources.",
//     trap: "Most devs confuse REST with just 'API endpoints'.",
//   },
//   {
//     id: "8",
//     title: "What is caching?",
//     weak_answer: "Store data to make it faster",
//     strong_answer:
//       "Caching stores frequently accessed data to reduce latency and load on underlying systems.",
//     insight: "Talk about performance trade-offs.",
//     trap: "Most devs ignore cache invalidation, which is the hardest problem.",
//   },
//   {
//     id: "9",
//     title: "What is SOLID?",
//     weak_answer: "5 principles",
//     strong_answer:
//       "A set of principles that improve maintainability and scalability of object-oriented systems.",
//     insight: "Explain at least 1 principle deeply.",
//     trap: "Listing all 5 without understanding any = instant fail.",
//   },
//   {
//     id: "10",
//     title: "What is Single Responsibility Principle?",
//     weak_answer: "One class one job",
//     strong_answer:
//       "A class should have only one reason to change, improving maintainability.",
//     insight: "Focus on 'reason to change'.",
//     trap: "Most devs misunderstand SRP as 'one method only'.",
//   },
//   {
//     id: "11",
//     title: "What is database indexing?",
//     weak_answer: "Make query faster",
//     strong_answer:
//       "Indexes improve query performance by allowing faster data lookup at the cost of write overhead.",
//     insight: "Always mention trade-off.",
//     trap: "If you ignore write cost, you don't understand real systems.",
//   },
//   {
//     id: "12",
//     title: "What is normalization?",
//     weak_answer: "Remove duplication",
//     strong_answer:
//       "A process to structure data to reduce redundancy and improve consistency.",
//     insight: "Talk about trade-offs.",
//     trap: "Most devs don't know when to denormalize.",
//   },
//   {
//     id: "13",
//     title: "What is a transaction?",
//     weak_answer: "Group of queries",
//     strong_answer:
//       "A unit of work that ensures ACID properties: atomicity, consistency, isolation, durability.",
//     insight: "Mention ACID.",
//     trap: "If you can't explain isolation, you're guessing.",
//   },
//   {
//     id: "14",
//     title: "What is eventual consistency?",
//     weak_answer: "Data becomes consistent later",
//     strong_answer:
//       "A model where data consistency is achieved over time rather than immediately.",
//     insight: "Used in distributed systems.",
//     trap: "Most devs don't know why it's needed.",
//   },
//   {
//     id: "15",
//     title: "What is load balancing?",
//     weak_answer: "Distribute traffic",
//     strong_answer:
//       "Distributes incoming traffic across multiple servers to improve availability and performance.",
//     insight: "Mention fault tolerance.",
//     trap: "If you can't explain why it's needed, answer is shallow.",
//   },
//   {
//     id: "16",
//     title: "What is microservices?",
//     weak_answer: "Split services",
//     strong_answer:
//       "An architectural style where systems are built as independent, loosely coupled services.",
//     insight: "Talk about trade-offs.",
//     trap: "Most devs ignore complexity (network, data consistency).",
//   },
//   {
//     id: "17",
//     title: "What is a race condition?",
//     weak_answer: "Multiple threads conflict",
//     strong_answer:
//       "Occurs when multiple threads access shared data and outcome depends on execution order.",
//     insight: "Explain unpredictability.",
//     trap: "Most devs can't give real example.",
//   },
//   {
//     id: "18",
//     title: "What is idempotency?",
//     weak_answer: "Same result",
//     strong_answer:
//       "An operation that produces the same result even if executed multiple times.",
//     insight: "Important for APIs.",
//     trap: "Most devs can't relate it to retries.",
//   },
//   {
//     id: "19",
//     title: "What is scalability?",
//     weak_answer: "Handle more users",
//     strong_answer:
//       "Ability of a system to handle increased load by scaling vertically or horizontally.",
//     insight: "Mention both types.",
//     trap: "Most devs only know one type.",
//   },
//   {
//     id: "20",
//     title: "What is latency vs throughput?",
//     weak_answer: "Speed vs volume",
//     strong_answer:
//       "Latency is response time, throughput is number of requests handled over time.",
//     insight: "Important trade-off.",
//     trap: "Most devs confuse the two.",
//   },
//   {
//     id: "21",
//     title: "What is JWT?",
//     weak_answer: "Token auth",
//     strong_answer:
//       "A compact token used for secure data transmission, often for authentication.",
//     insight: "Explain structure.",
//     trap: "Most devs don't know header/payload/signature.",
//   },
//   {
//     id: "22",
//     title: "What is OAuth?",
//     weak_answer: "Login with Google",
//     strong_answer:
//       "An authorization framework allowing third-party access without sharing credentials.",
//     insight: "Auth vs AuthZ.",
//     trap: "Most devs confuse authentication vs authorization.",
//   },
//   {
//     id: "23",
//     title: "What is CQRS?",
//     weak_answer: "Separate read/write",
//     strong_answer:
//       "Separates read and write operations to optimize performance and scalability.",
//     insight: "Explain use case.",
//     trap: "Most devs don't know when to use it.",
//   },
//   {
//     id: "24",
//     title: "What is event-driven architecture?",
//     weak_answer: "Use events",
//     strong_answer: "A system design where components communicate via events.",
//     insight: "Loose coupling.",
//     trap: "Most devs can't explain async communication.",
//   },
//   {
//     id: "25",
//     title: "What is eventual consistency vs strong consistency?",
//     weak_answer: "One is delayed",
//     strong_answer:
//       "Strong consistency ensures immediate consistency, eventual consistency allows delay for scalability.",
//     insight: "Trade-off CAP theorem.",
//     trap: "Most devs can't connect to distributed systems.",
//   },
// ];
// const realInterviewQuestions: Question[] = [
//   {
//     id: "1",
//     title: "In your last project, how did you manage dependencies between services?",
//     weak_answer: "We used DI",
//     strong_answer:
//       "We used constructor injection to decouple services and enable unit testing. It allowed us to mock dependencies easily and swap implementations without touching business logic.",
//     insight: "Always tie DI to testing and flexibility.",
//     trap: "Just saying 'reduce coupling' = textbook answer.",
//   },
//   {
//     id: "2",
//     title: "Tell me about a time DI made debugging harder.",
//     weak_answer: "DI is always good",
//     strong_answer:
//       "We had deeply nested dependencies, making it hard to trace execution. We improved logging and simplified service layers to reduce complexity.",
//     insight: "Senior = knows trade-offs.",
//     trap: "Saying DI has no downside = junior.",
//   },
//   {
//     id: "3",
//     title: "Have you ever had performance issues with Entity Framework?",
//     weak_answer: "EF is slow",
//     strong_answer:
//       "A query took ~3s due to loading unnecessary data via lazy loading. I fixed it by using projection and reducing joins, bringing it down to ~200ms.",
//     insight: "Problem → root cause → measurable fix.",
//     trap: "No real example = weak.",
//   },
//   {
//     id: "4",
//     title: "When would you avoid using async/await?",
//     weak_answer: "Async is always better",
//     strong_answer:
//       "For CPU-bound tasks or simple operations, async adds overhead. I use it mainly for I/O-bound operations like DB or API calls.",
//     insight: "Scalability ≠ speed.",
//     trap: "Async is faster = wrong.",
//   },
//   {
//     id: "5",
//     title: "Tell me about a deadlock you encountered.",
//     weak_answer: "Threads wait each other",
//     strong_answer:
//       "We had a deadlock due to inconsistent lock ordering. I fixed it by enforcing a consistent locking strategy and reducing shared resources.",
//     insight: "Always explain cause + fix.",
//     trap: "Definition only = fail.",
//   },
//   {
//     id: "6",
//     title: "Explain the middleware pipeline in ASP.NET Core.",
//     weak_answer: "Middleware handles requests",
//     strong_answer:
//       "Middleware runs in sequence, processing request and response. Order matters — for example, authentication must run before authorization.",
//     insight: "Execution order is key.",
//     trap: "If you can’t explain flow, you don’t understand backend.",
//   },
//   {
//     id: "7",
//     title: "How do you design a clean REST API?",
//     weak_answer: "Use HTTP methods",
//     strong_answer:
//       "I design around resources, ensure statelessness, use proper HTTP verbs, and meaningful status codes. I avoid verbs in URLs.",
//     insight: "REST is design, not syntax.",
//     trap: "GET/POST answer = shallow.",
//   },
//   {
//     id: "8",
//     title: "Tell me about a time caching caused issues.",
//     weak_answer: "Caching is good",
//     strong_answer:
//       "We had stale data issues due to improper invalidation. We implemented expiration policies and manual invalidation to balance performance and consistency.",
//     insight: "Cache invalidation = real problem.",
//     trap: "Ignoring stale data = no experience.",
//   },
//   {
//     id: "9",
//     title: "Which SOLID principle do you actually use the most?",
//     weak_answer: "All 5",
//     strong_answer:
//       "SRP — we separated business logic from controllers into services, improving maintainability and testing.",
//     insight: "Depth > listing.",
//     trap: "Listing all 5 = junior.",
//   },
//   {
//     id: "10",
//     title: "Tell me about a time you violated SRP.",
//     weak_answer: "Never",
//     strong_answer:
//       "We had a class handling DB + logic. It became hard to maintain. We refactored into separate services.",
//     insight: "Admitting mistakes = strong signal.",
//     trap: "Perfect answers = fake.",
//   },
//   {
//     id: "11",
//     title: "How do you decide when to add an index?",
//     weak_answer: "To make query faster",
//     strong_answer:
//       "Based on query patterns — frequent filters/joins. But I balance it with write overhead and avoid over-indexing.",
//     insight: "Trade-offs matter.",
//     trap: "Ignoring writes = incomplete.",
//   },
//   {
//     id: "12",
//     title: "Have you ever denormalized a database?",
//     weak_answer: "No",
//     strong_answer:
//       "Yes, for read-heavy reporting. It reduced joins and improved performance significantly.",
//     insight: "Real systems ≠ textbook.",
//     trap: "Normalization always best = junior.",
//   },
//   {
//     id: "13",
//     title: "How do you handle transaction isolation levels?",
//     weak_answer: "Use transactions",
//     strong_answer:
//       "I adjust isolation based on use case to avoid dirty reads while maintaining performance.",
//     insight: "Isolation = key concept.",
//     trap: "No isolation knowledge = guessing.",
//   },
//   {
//     id: "14",
//     title: "Where would you use eventual consistency?",
//     weak_answer: "When not important",
//     strong_answer:
//       "In distributed systems where strong consistency is costly — like async data sync between services.",
//     insight: "Tie to system design.",
//     trap: "Wrong reasoning = fail.",
//   },
//   {
//     id: "15",
//     title: "How does load balancing improve reliability?",
//     weak_answer: "Distribute traffic",
//     strong_answer:
//       "It removes single points of failure and ensures availability if one instance goes down.",
//     insight: "Mention fault tolerance.",
//     trap: "Only traffic = shallow.",
//   },
//   {
//     id: "16",
//     title: "When would you avoid microservices?",
//     weak_answer: "Never",
//     strong_answer:
//       "For small systems — adds complexity like network latency, deployment overhead, and data consistency issues.",
//     insight: "Knowing when NOT to use = senior.",
//     trap: "Blind microservices = junior.",
//   },
//   {
//     id: "17",
//     title: "Tell me about a race condition you debugged.",
//     weak_answer: "Threads conflict",
//     strong_answer:
//       "We had inconsistent results due to shared state. I fixed it using synchronization and reducing shared mutable data.",
//     insight: "Explain unpredictability.",
//     trap: "No real example = weak.",
//   },
//   {
//     id: "18",
//     title: "How do you design idempotent APIs?",
//     weak_answer: "Same result",
//     strong_answer:
//       "Using unique request IDs and safe methods like PUT to handle retries safely.",
//     insight: "Retries = key.",
//     trap: "Missing retry context.",
//   },
//   {
//     id: "19",
//     title: "How do you scale a system?",
//     weak_answer: "Add servers",
//     strong_answer:
//       "I evaluate vertical/horizontal scaling, caching, load balancing, and optimize bottlenecks.",
//     insight: "Multiple levers.",
//     trap: "One solution = naive.",
//   },
//   {
//     id: "20",
//     title: "Explain a performance optimization you did.",
//     weak_answer: "Made it faster",
//     strong_answer:
//       "Optimized DB queries and added caching, reducing latency significantly.",
//     insight: "Be specific.",
//     trap: "Vague = weak.",
//   },
//   {
//     id: "21",
//     title: "How do you secure APIs in production?",
//     weak_answer: "Use JWT",
//     strong_answer:
//       "JWT for authentication, validation, HTTPS, rate limiting, and proper authorization checks.",
//     insight: "Security is layered.",
//     trap: "JWT only = shallow.",
//   },
//   {
//     id: "22",
//     title: "Tell me about a bug that was hard to find.",
//     weak_answer: "Fixed a bug",
//     strong_answer:
//       "A race condition caused intermittent failures. I used logging and reproduction steps to isolate and fix it.",
//     insight: "Debugging process matters.",
//     trap: "No process = weak.",
//   },
//   {
//     id: "23",
//     title: "How do you handle logging in production?",
//     weak_answer: "Use logs",
//     strong_answer:
//       "Structured logging with levels, centralized logging system, and correlation IDs for tracing requests.",
//     insight: "Observability = senior skill.",
//     trap: "Basic logging = junior.",
//   },
//   {
//     id: "24",
//     title: "How do you design for failure?",
//     weak_answer: "Handle errors",
//     strong_answer:
//       "Retries, fallback strategies, circuit breakers, and graceful degradation.",
//     insight: "Failure is expected.",
//     trap: "Ignoring failure = naive.",
//   },
//   {
//     id: "25",
//     title: "What would you do if database becomes bottleneck?",
//     weak_answer: "Upgrade DB",
//     strong_answer:
//       "Optimize queries, add caching, indexing, read replicas, or split services depending on bottleneck.",
//     insight: "Multiple solutions.",
//     trap: "Single fix = weak.",
//   },
//   {
//     id: "26",
//     title: "How do you version APIs?",
//     weak_answer: "Add v1",
//     strong_answer:
//       "Use URL or header versioning, ensure backward compatibility, and avoid breaking clients.",
//     insight: "Client impact matters.",
//     trap: "Just 'v1' = shallow.",
//   },
//   {
//     id: "27",
//     title: "How do you handle large file uploads?",
//     weak_answer: "Upload file",
//     strong_answer:
//       "Stream uploads, validate size, and offload to storage like S3 to avoid memory issues.",
//     insight: "Memory awareness.",
//     trap: "Naive upload = risky.",
//   },
//   {
//     id: "28",
//     title: "How do you prevent duplicate requests?",
//     weak_answer: "Check data",
//     strong_answer:
//       "Use idempotency keys or unique constraints to ensure safe retries.",
//     insight: "Real-world API problem.",
//     trap: "No strategy = weak.",
//   },
//   {
//     id: "29",
//     title: "How do you test your APIs?",
//     weak_answer: "Unit test",
//     strong_answer:
//       "Unit tests for logic, integration tests for DB/API, and sometimes end-to-end tests.",
//     insight: "Multiple layers.",
//     trap: "Only unit test = incomplete.",
//   },
//   {
//     id: "30",
//     title: "What’s the biggest mistake you made in a backend system?",
//     weak_answer: "No mistake",
//     strong_answer:
//       "We over-engineered with microservices too early, causing complexity. Later simplified architecture improved delivery speed.",
//     insight: "Self-awareness = senior.",
//     trap: "No mistakes = fake.",
//   },
// ];
// const mockQuestions: Question[] = [
//   {
//     id: "1",
//     title:
//       "In your last project, how did you manage dependencies between services?",
//     weak_answer: "We used DI",
//     strong_answer:
//       "In my last project, we relied heavily on Dependency Injection to keep our architecture clean and maintainable as the system grew. Instead of instantiating dependencies directly inside classes, we used constructor injection to clearly define what each component depended on. This made the code much easier to test, since we could mock dependencies during unit testing without touching real implementations.\n\nA real benefit showed up when we had to switch an external payment provider. Because our services depended on interfaces rather than concrete implementations, we only needed to replace the implementation in the DI container without rewriting business logic. It also improved readability — when I look at a class constructor, I immediately understand what it needs to function.\n\nHowever, we also had to be careful not to overcomplicate things. At one point, too many layers of abstraction made debugging harder, so we simplified some services. Overall, DI helped us scale the codebase while keeping it flexible and testable.",
//     insight: "Story + real benefit + trade-off.",
//     trap: "No real usage = weak.",
//   },
//   {
//     id: "2",
//     title: "Tell me about a time DI made debugging harder.",
//     weak_answer: "DI is always good",
//     strong_answer:
//       "In one project, we went too far with abstraction using Dependency Injection. Almost every service depended on multiple interfaces, and those interfaces had multiple implementations registered in the container. While this looked clean architecturally, it created a real problem during debugging — it was hard to trace which implementation was actually being used at runtime.\n\nWe had a production issue where a service behaved differently than expected, and it took a while to realize that a different implementation was being injected due to environment-specific configuration. The fix wasn’t just technical — we had to rethink how we structured dependencies. We reduced unnecessary abstractions, added clearer naming conventions, and improved logging to show which implementations were being resolved.\n\nThat experience taught me that DI is powerful, but overusing abstraction can hurt clarity. There’s always a balance between flexibility and simplicity, and as systems grow, that balance becomes critical.",
//     insight: "Senior = understands downside.",
//     trap: "DI is perfect = junior.",
//   },
//   {
//     id: "3",
//     title: "Have you ever had performance issues with Entity Framework?",
//     weak_answer: "EF is slow",
//     strong_answer:
//       "Yes, we ran into a serious performance issue in a reporting feature where a query was taking around 3–5 seconds to complete. Initially, it wasn’t obvious what the problem was because the LINQ query looked clean and simple. After profiling the application and inspecting the generated SQL, we discovered that Entity Framework was loading far more data than necessary due to navigation properties and implicit joins.\n\nThe main issue was that we were returning full entities instead of projecting only the fields we needed. This resulted in unnecessary data transfer and memory usage. I refactored the query to use explicit projection (Select) and limited the dataset, which reduced execution time to under 300ms.\n\nThis experience changed how I use EF — I no longer trust the abstraction blindly. I always consider what SQL is being generated and whether the query is efficient. ORMs are powerful, but if you don’t understand what’s happening under the hood, they can easily become a performance bottleneck.",
//     insight: "Show investigation + fix.",
//     trap: "No SQL understanding.",
//   },
//   {
//     id: "4",
//     title: "When would you avoid using async/await?",
//     weak_answer: "Async is always better",
//     strong_answer:
//       "Async/await is great for improving scalability in I/O-bound operations, but I’ve learned that it’s not always the right choice. In one case, we applied async across the board, including simple CPU-bound operations. This actually made the code harder to read and introduced unnecessary overhead without any performance benefit.\n\nAsync shines when you're dealing with external resources like databases or APIs, where threads would otherwise be blocked waiting for responses. But for quick, in-memory computations, the overhead of context switching and task management isn’t worth it.\n\nI now treat async as a tool, not a default. I ask: is this operation I/O-bound? Will async actually free up resources? If not, I keep it simple and synchronous. This mindset helps avoid over-engineering and keeps the codebase easier to maintain while still gaining the scalability benefits where they actually matter.",
//     insight: "Decision-making mindset.",
//     trap: "Async everywhere.",
//   },
//   {
//     id: "5",
//     title: "Tell me about a deadlock you encountered.",
//     weak_answer: "Threads wait each other",
//     strong_answer:
//       "We encountered a deadlock in a background processing system where multiple threads were accessing shared resources. The issue wasn’t obvious at first because it only happened under high load. After investigating logs and reproducing the issue locally, we realized that different parts of the code were acquiring locks in inconsistent orders.\n\nFor example, one thread would lock resource A then B, while another would lock B then A. Under certain timing conditions, both threads would end up waiting indefinitely for each other to release the lock.\n\nTo fix it, we enforced a strict locking order across the codebase and reduced the number of shared resources where possible. In some cases, we replaced locks with concurrent data structures to avoid blocking entirely.\n\nThis taught me that deadlocks are not just theoretical — they happen in real systems, especially under load. Prevention requires discipline in how locks are used and minimizing shared state whenever possible.",
//     insight: "Real debugging story.",
//     trap: "Only definition.",
//   },
//   {
//     id: "6",
//     title: "Explain the middleware pipeline in ASP.NET Core.",
//     weak_answer: "Middleware handles requests",
//     strong_answer:
//       "In ASP.NET Core, middleware forms a pipeline where each component processes the HTTP request and optionally passes it to the next middleware. What’s important is that this pipeline is ordered — the sequence in which middleware is registered directly affects how requests and responses are handled.\n\nFor example, authentication middleware must run before authorization, otherwise the system won’t know who the user is when checking permissions. Similarly, exception handling middleware is usually placed early in the pipeline so it can catch errors from downstream components.\n\nEach middleware can also act on the response as it flows back up the pipeline, which makes it very powerful for things like logging or response transformation.\n\nIn practice, understanding this flow helped me debug issues where certain middleware didn’t behave as expected. Once I realized it was due to incorrect ordering, fixing it became straightforward. Middleware isn’t just a concept — it directly impacts how your application behaves at runtime.",
//     insight: "Flow + real impact.",
//     trap: "No execution understanding.",
//   },
//   {
//     id: "7",
//     title: "How do you design a clean REST API?",
//     weak_answer: "Use HTTP methods",
//     strong_answer:
//       "When designing a REST API, I focus on clarity, consistency, and usability from the client’s perspective. Instead of thinking in terms of actions, I design around resources — for example, /users or /orders — and use HTTP methods like GET, POST, PUT, and DELETE to represent operations.\n\nI also make sure the API is stateless, meaning each request contains all the information needed to process it. This simplifies scaling and reduces hidden dependencies between requests. Proper use of status codes is another important aspect — returning 200, 404, or 500 appropriately helps clients handle responses correctly.\n\nIn one project, we refactored an API that used action-based endpoints like /getUser or /createOrder into a more RESTful structure. This made the API easier to understand and reduced onboarding time for new developers.\n\nA clean API is not just about following rules — it’s about making the system intuitive and predictable for anyone who uses it.",
//     insight: "Client-centric thinking.",
//     trap: "Only syntax.",
//   },
//   {
//     id: "8",
//     title: "Tell me about a time caching caused issues.",
//     weak_answer: "Caching is good",
//     strong_answer:
//       "We implemented caching to reduce database load on a frequently accessed endpoint, and initially it worked great — response times dropped significantly. However, we started receiving complaints about outdated data being returned.\n\nThe issue was that we cached data aggressively but didn’t have a proper invalidation strategy. When underlying data changed, the cache wasn’t updated, leading to stale results.\n\nTo fix it, we introduced a combination of cache expiration and manual invalidation triggered by data updates. In some cases, we moved to shorter TTLs to reduce inconsistency risk.\n\nThis experience taught me that caching is not just about performance — it’s about managing consistency trade-offs. A fast system that returns incorrect data is worse than a slightly slower one that is accurate. Now, whenever I design caching, I think about invalidation strategy first, not just speed.",
//     insight: "Real-world trade-off.",
//     trap: "Ignoring stale data.",
//   },
//   {
//     id: "9",
//     title: "Which SOLID principle do you actually use the most?",
//     weak_answer: "All 5",
//     strong_answer:
//       "In practice, the principle I use most is Single Responsibility Principle. In one project, we had controllers handling business logic, validation, and database calls all in one place. It worked initially, but as the system grew, it became difficult to maintain and test.\n\nWe refactored the code by moving business logic into separate service classes and keeping controllers focused only on handling HTTP requests. This separation made the code much cleaner and easier to test, since each component had a clear responsibility.\n\nThe biggest benefit was not just cleaner code, but faster development. When a bug appeared, we knew exactly where to look. When we needed to add features, we didn’t risk breaking unrelated parts of the system.\n\nSOLID principles are often taught as theory, but applying even one of them properly can significantly improve real-world codebases.",
//     insight: "Depth over breadth.",
//     trap: "Listing principles.",
//   },
//   {
//     id: "10",
//     title: "Tell me about a time you violated SRP.",
//     weak_answer: "Never",
//     strong_answer:
//       "Early in one project, I created a service that handled both business logic and direct database operations. At first it seemed efficient, but as requirements grew, the class became large and difficult to maintain. Any change in business rules or database structure required modifying the same class, increasing the risk of bugs.\n\nThe problem became clear when we needed to add new features — every change felt risky and slowed down development. We decided to refactor by separating responsibilities: business logic into one service, and data access into another layer.\n\nAfter the refactor, the code was easier to understand, test, and extend. It also made onboarding new developers much smoother.\n\nThat experience taught me that violating SRP might feel faster initially, but it creates long-term complexity. Clean separation of responsibilities pays off as the system grows.",
//     insight: "Mistakes = credibility.",
//     trap: "Perfect dev = fake.",
//   },
// ];
const mockQuestions: Question[] = [
  {
    id: "1",
    title:
      "In your last project, how did you manage dependencies between services?",
    weak_answer: "We used Dependency Injection to reduce coupling",
    strong_answer:
      "We used DI to inject services via constructor, which allowed us to easily mock dependencies in unit tests and swap implementations without changing business logic. It also helped maintain clear separation between layers.",
    insight: "Always connect DI to testing and flexibility in real projects.",
    trap: "If you only say 'reduce coupling' without real usage, you sound like you’ve never applied it.",
  },
  {
    id: "2",
    title:
      "Tell me about a time DI caused problems or confusion in your system.",
    weak_answer: "DI is always good, no issues",
    strong_answer:
      "We had an issue where too many nested dependencies made debugging difficult. It became hard to trace which implementation was being injected. We solved it by simplifying service structure and improving logging.",
    insight: "Senior engineers acknowledge trade-offs, not just benefits.",
    trap: "Saying DI has no downside = junior mindset.",
  },
  {
    id: "3",
    title:
      "Have you ever had performance issues with LINQ or Entity Framework?",
    weak_answer: "LINQ is slow sometimes",
    strong_answer:
      "Yes, we had a query taking ~3 seconds due to loading too much data. The issue was using IQueryable with unintended joins. I fixed it by projecting only needed fields and reducing query complexity, bringing it down to ~200ms.",
    insight: "Talk about real debugging + measurable improvement.",
    trap: "If you can’t explain what caused slowness, you don’t understand ORM.",
  },
  {
    id: "4",
    title: "When would you NOT use async/await?",
    weak_answer: "Async is always better",
    strong_answer:
      "Async adds overhead and complexity. For CPU-bound tasks or simple operations, it may not provide benefits. I only use async when dealing with I/O-bound operations like database or API calls.",
    insight: "Scalability ≠ speed. Show decision-making.",
    trap: "Saying async is always faster shows lack of concurrency understanding.",
  },
  {
    id: "5",
    title: "Have you ever faced a deadlock? What did you do?",
    weak_answer: "Deadlock is when threads wait each other",
    strong_answer:
      "Yes, we had a deadlock due to improper locking order in multi-threaded code. I resolved it by enforcing consistent lock ordering and reducing shared resource locking.",
    insight: "Always include cause + fix.",
    trap: "Definition without real scenario = weak.",
  },
  {
    id: "6",
    title: "Explain the request flow in ASP.NET Core using middleware.",
    weak_answer: "Middleware handles requests",
    strong_answer:
      "Each middleware processes the request in sequence, can pass it to the next, and handle the response on the way back. Order is critical, for example authentication must run before authorization.",
    insight: "Execution order is key.",
    trap: "If you can’t explain flow, you don’t understand backend lifecycle.",
  },
  {
    id: "7",
    title: "In your API design, how do you ensure it follows REST principles?",
    weak_answer: "We use HTTP methods",
    strong_answer:
      "We design APIs around resources, use proper HTTP methods, ensure stateless communication, and structure endpoints for clarity. For example, avoiding verbs in URLs and using status codes properly.",
    insight: "REST = design thinking, not just endpoints.",
    trap: "Saying 'we use GET/POST' is too shallow.",
  },
  {
    id: "8",
    title:
      "Tell me about a time caching improved performance — or made things worse.",
    weak_answer: "Caching makes things faster",
    strong_answer:
      "Caching reduced load significantly, but we faced stale data issues. We had to implement cache invalidation strategies and expiration policies to balance consistency and performance.",
    insight: "Cache invalidation is the real challenge.",
    trap: "Ignoring stale data = no real experience.",
  },
  {
    id: "9",
    title:
      "Which SOLID principle do you use most in your code? Give an example.",
    weak_answer: "I use all 5 principles",
    strong_answer:
      "I often apply Single Responsibility Principle by separating business logic from data access. For example, moving logic out of controllers into services improved maintainability and testability.",
    insight: "Depth > listing all principles.",
    trap: "Listing 5 principles without example = instant fail.",
  },
  {
    id: "10",
    title: "Have you ever violated SRP? What happened?",
    weak_answer: "No",
    strong_answer:
      "Yes, we had a class handling both business logic and database operations. It became hard to maintain. We refactored it into separate services, improving readability and testability.",
    insight: "Admitting mistakes = senior signal.",
    trap: "Saying 'never' = unrealistic.",
  },
  {
    id: "11",
    title: "How do you decide when to add a database index?",
    weak_answer: "To make queries faster",
    strong_answer:
      "I add indexes based on query patterns, especially for frequently filtered or joined columns. But I also consider write overhead and avoid over-indexing.",
    insight: "Always mention trade-offs.",
    trap: "Ignoring write cost = incomplete understanding.",
  },
  {
    id: "12",
    title: "Have you ever had to denormalize a database? Why?",
    weak_answer: "Normalization is always better",
    strong_answer:
      "Yes, for performance reasons. In a reporting system, we denormalized some data to reduce joins and improve read performance.",
    insight: "Real systems require trade-offs.",
    trap: "Thinking normalization is always best = academic thinking.",
  },
  {
    id: "13",
    title: "How do you ensure data consistency in a transaction?",
    weak_answer: "Using transactions",
    strong_answer:
      "By ensuring ACID properties, especially isolation levels depending on use case. For example, we adjusted isolation to avoid dirty reads while maintaining performance.",
    insight: "Mention isolation = strong signal.",
    trap: "If you can’t explain isolation, you’re guessing.",
  },
  {
    id: "14",
    title: "Where would you use eventual consistency in your system?",
    weak_answer: "When data is not important",
    strong_answer:
      "In distributed systems where immediate consistency is costly, like event-driven architectures. For example, syncing data across services asynchronously.",
    insight: "Tie to distributed systems.",
    trap: "Saying 'not important data' = wrong thinking.",
  },
  {
    id: "15",
    title: "How does load balancing improve system reliability?",
    weak_answer: "It distributes traffic",
    strong_answer:
      "It distributes traffic across instances and prevents single points of failure. If one server goes down, others can handle the load, improving availability.",
    insight: "Mention fault tolerance.",
    trap: "Only saying 'distribute traffic' = shallow.",
  },
  {
    id: "16",
    title: "When would you avoid using microservices?",
    weak_answer: "Microservices are always good",
    strong_answer:
      "For small systems, microservices add unnecessary complexity like network latency, deployment overhead, and data consistency issues. A monolith can be more efficient initially.",
    insight: "Knowing when NOT to use is key.",
    trap: "Blindly promoting microservices = junior.",
  },
  {
    id: "17",
    title: "Have you ever debugged a race condition?",
    weak_answer: "Race condition is thread conflict",
    strong_answer:
      "Yes, we had inconsistent results due to shared state access. I fixed it using proper synchronization and reducing shared mutable state.",
    insight: "Explain unpredictability + fix.",
    trap: "No real example = weak.",
  },
  {
    id: "18",
    title: "How do you design idempotent APIs?",
    weak_answer: "Same result every time",
    strong_answer:
      "By ensuring repeated requests produce the same outcome, often using unique request IDs or safe HTTP methods like PUT. This is critical for retry mechanisms.",
    insight: "Connect to retries.",
    trap: "Not linking to retries = incomplete.",
  },
  {
    id: "19",
    title: "How would you scale a system under heavy load?",
    weak_answer: "Add more servers",
    strong_answer:
      "I would evaluate vertical vs horizontal scaling, use load balancing, caching, and optimize bottlenecks based on profiling.",
    insight: "Multiple strategies, not one.",
    trap: "Only saying 'add servers' = naive.",
  },
  {
    id: "20",
    title: "Explain a situation where you optimized latency or throughput.",
    weak_answer: "I made it faster",
    strong_answer:
      "We reduced latency by optimizing database queries and caching frequent responses, while maintaining throughput by scaling horizontally.",
    insight: "Differentiate latency vs throughput.",
    trap: "Confusing the two = common fail.",
  },
];
const FREE_LIMIT = 3;
type View = "practice" | "failed" | "progress";
export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const [activeQ, setActiveQ] = useState<Question | null>(null);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [view, setView] = useState<View>("practice");
  const [failedQuestions, setFailedQuestions] = useState<Question[]>([]);
  const [completed, setCompleted] = useState<number>(0);
  const router = useRouter();
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [rank, setRank] = useState<number | null>(null);
  const [startedCount, setStartedCount] = useState(0);
  const attemptsLeft = FREE_LIMIT - startedCount;
  const [isLastAttempt, setIsLastAttempt] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [plan, setPlan] = useState<"lifetime" | "monthly">("lifetime");

  const checkoutLinks = {
    lifetime:
      "https://noteflowai.lemonsqueezy.com/checkout/buy/98ea2ea8-1378-4bcc-900b-c0c3ea03e359",
    monthly:
      "https://noteflowai.lemonsqueezy.com/checkout/buy/4f3feb71-08f5-49d8-9193-bb533d1b1b68", // 👉 thay bằng link LemonSqueezy weekly
  };
  // 🔐 Auth check
  useEffect(() => {
    const stored = localStorage.getItem("user_email_practice");

    if (!stored) {
      router.push("/");
      return;
    }

    const parsed = JSON.parse(stored);

    if (Date.now() > parsed.expiry) {
      localStorage.removeItem("user_email_practice");
      router.push("/");
      return;
    }

    setUser(parsed);
  }, [router]);
  //   useEffect(() => {
  //     localStorage.setItem("startedCount", startedCount.toString());
  //   }, [startedCount]);
  useEffect(() => {
    const saved = localStorage.getItem("startedCount");

    if (saved) {
      setStartedCount(parseInt(saved));
    }
  }, []);
  //   useEffect(() => {
  //     localStorage.setItem("failedQuestions", JSON.stringify(failedQuestions));
  //   }, [failedQuestions]);
  useEffect(() => {
    const saved = localStorage.getItem("failedQuestions");

    if (saved) {
      setFailedQuestions(JSON.parse(saved));
    }
  }, []);
  if (!user) return null;

  const handleStart = (q: Question, index: number) => {
    // if (index >= FREE_LIMIT) {
    //   setShowPaywall(true);
    //   return;
    // }

    if (startedCount >= FREE_LIMIT) {
      setShowPaywall(true);
      return;
    }

    if (startedCount < FREE_LIMIT) {
      setStartedCount((prev) => prev + 1);
      localStorage.setItem("startedCount", (startedCount + 1).toString());
    }
    if (startedCount === FREE_LIMIT - 1) {
      setIsLastAttempt(true);
    } else {
      setIsLastAttempt(false);
    }
    setActiveQ(q);
    setSubmitted(false);
    setAnswer("");
  };
  const calculateRank = (score: number) => {
    // score từ 0 → 1

    if (score < 0.2) return 85 + Math.random() * 10; // 85–95%
    if (score < 0.4) return 65 + Math.random() * 10;
    if (score < 0.6) return 40 + Math.random() * 15;
    if (score < 0.8) return 20 + Math.random() * 15;

    return 5 + Math.random() * 10;
  };

  const evaluateAnswer = (userAnswer: string, strongAnswer: string) => {
    const keywords = strongAnswer
      .toLowerCase()
      .split(" ")
      .filter((w) => w.length > 4); // bỏ từ ngắn

    const user = userAnswer.toLowerCase();

    let matchCount = 0;

    keywords.forEach((word) => {
      if (user.includes(word)) {
        matchCount++;
      }
    });

    const score = matchCount / keywords.length;

    return score;
  };
  const handleSubmit = () => {
    const result = evaluateAnswer(answer, activeQ!.strong_answer);

    setScore(result);
    setSubmitted(true);

    const calculatedRank = calculateRank(result);
    setRank(calculatedRank);

    let fb = "";

    if (result < 0.3) {
      fb = "💀 You missed the core concept.";
      setFailedQuestions((prev) => {
        const map = new Map(prev.map((q) => [q.id, q]));

        if (activeQ) {
          map.set(activeQ.id, activeQ); // overwrite nếu trùng
        }

        return Array.from(map.values());
      });
      localStorage.setItem("failedQuestions", JSON.stringify(failedQuestions));
    } else if (result < 0.6) {
      fb = "⚠️ Decent, but lacks depth.";
    } else {
      fb = "✅ Strong answer. You're close to senior level.";
    }

    setFeedback(fb);
    setCompleted((prev) => prev + 1);
  };

  return (
    <>
      {/* <div className="flex min-h-screen bg-gray-50">
        <div className="sticky top-0 left-0 h-screen w-64 bg-white border-r flex flex-col hidden md:flex md:w-64">
          <div>
            <div className="px-5 py-4 border-b">
              <h1 className="font-semibold text-gray-800 text-lg tracking-tight">
                InterviewAI
              </h1>
              <p className="text-xs text-gray-400">Get hired faster</p>
            </div>

            <div className="p-3 space-y-1">
              {[
                { key: "practice", label: "Practice", icon: "🎯" },
                { key: "failed", label: "Failed Questions", icon: "🔥" },
                { key: "progress", label: "Progress", icon: "📈" },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => setView(item.key as View)}
                  className={`
            flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
            transition-all duration-200
            ${
              view === item.key
                ? "bg-gray-900 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }
          `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl p-4 shadow-md">
              <p className="text-sm font-semibold">Upgrade to Pro</p>
              <p className="text-xs opacity-80 mt-1">
                Unlock all questions + AI feedback
              </p>

              <button
                onClick={() => setShowPaywall(true)}
                className="mt-3 w-full bg-white text-indigo-600 text-sm font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between mb-6">
            <p className="text-sm text-gray-500">
              🔥 78% devs fail these questions
            </p>

            <button
              onClick={() => setShowPaywall(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Upgrade
            </button>
          </div>
          {view === "practice" && !activeQ && (
            <div className="space-y-4 relative">
              <p className="text-sm text-gray-500">Showing 10/159 questions</p>

              <p
                className={`text-sm ${
                  attemptsLeft <= 3
                    ? "text-red-600 font-semibold"
                    : "text-gray-500"
                }`}
              >
                ⏱ You have {attemptsLeft} free attempts left
              </p>
              {attemptsLeft <= 0 && (
                <div className="bg-black text-white p-5 rounded-xl text-center">
                  <p className="text-lg font-semibold">
                    You've used all free attempts.
                  </p>

                  <p className="text-sm text-gray-300 mt-2">
                    Most developers fail because they stop here.
                  </p>

                  <button
                    onClick={() => setShowPaywall(true)}
                    className="mt-4 bg-white text-black px-4 py-2 rounded-lg"
                  >
                    🔓 Continue Practicing
                  </button>
                </div>
              )}
              {mockQuestions.map((q, index) => {
                const isLocked = index >= 10;

                return (
                  <div
                    key={q.id}
                    className={`bg-white p-5 rounded-xl shadow-sm relative ${
                      isLocked ? "opacity-40 pointer-events-none" : ""
                    }`}
                  >
                    {isLastAttempt && (
                      <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg mb-4 text-sm">
                        🔥 This is your last free question. Use it wisely.
                      </div>
                    )}
                    <h3 className="font-semibold mb-3">{q.title}</h3>

                    {!isLocked ? (
                      <button
                        onClick={() => handleStart(q, index)}
                        className="bg-black text-white px-4 py-2 rounded-lg text-sm"
                      >
                        🎯 Start Answering
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowPaywall(true)}
                        className="bg-gray-400 text-white px-4 py-2 rounded-lg text-sm"
                      >
                        🔒 Locked
                      </button>
                    )}
                  </div>
                );
              })}

        
              <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-50 to-transparent flex items-end justify-center">
                <div className="mb-4 text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    🔒 Unlock 150 real interview questions
                  </p>

                  <button
                    onClick={() => setShowPaywall(true)}
                    className="bg-black text-white px-5 py-2 rounded-lg text-sm"
                  >
                    Unlock Full Access – $19
                  </button>
                </div>
              </div>
            </div>
          )}
          {view === "failed" && (
            <div className="space-y-4">
              {failedQuestions.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  You haven't failed any questions yet.
                </p>
              ) : (
                <>
             
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-red-600">
                      You failed {failedQuestions.length}/{completed} questions.
                    </p>

                    <p className="text-xs text-gray-600 mt-1">
                      This is why interviews feel hard.
                    </p>
                  </div>

          
                  {failedQuestions.map((q) => (
                    <div
                      key={q.id}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <p className="font-medium">{q.title}</p>

                      <p className="text-sm text-red-600 mt-1">
                        💀 You failed this. Try again.
                      </p>

                      <button
                        onClick={() => setActiveQ(q)}
                        className="mt-2 text-sm text-blue-600"
                      >
                        Retry
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
          {view === "progress" && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm mb-2">Questions completed: {completed}</p>

              <p className="text-sm mb-2">
                Failed questions: {failedQuestions.length}
              </p>

              <p className="text-sm text-gray-500">
                Keep practicing. Most devs fail before they pass.
              </p>
            </div>
          )}
          
        
          {activeQ && (
            <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl">
              <h2 className="font-semibold mb-4">{activeQ.title}</h2>

              {!submitted ? (
                <>
                  <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Type your answer like in a real interview..."
                    className="w-full border p-3 rounded-lg mb-4 text-sm"
                    rows={5}
                  />

                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-4 py-2 rounded-lg"
                  >
                    Submit Answer
                  </button>
                </>
              ) : (
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm font-medium">
                      🎯 Your score: {Math.round((score || 0) * 100)}%
                    </p>
                    <p className="text-sm mt-1">{feedback}</p>
                  </div>

                  {score !== null && score < 0.3 && (
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-red-600 font-medium">
                        💀 Why you sound like a junior:
                      </p>
                      <p className="text-sm mt-1">{activeQ?.trap}</p>
                    </div>
                  )}

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">
                      ✅ Strong answer:
                    </p>
                    <p className="text-sm mt-1">{activeQ?.strong_answer}</p>
                  </div>
                  <button
                    onClick={() => setShowPaywall(true)}
                    className="bg-black text-white px-4 py-2 rounded-lg w-full"
                  >
                    🔓 Unlock 150 Questions
                  </button>

                  <button
                    onClick={() => setActiveQ(null)}
                    className="text-xm text-gray-600"
                  >
                    Back
                  </button>
                </div>
              )}
              {rank !== null && (
                <div className="bg-black text-white p-5 rounded-xl text-center mt-4">
                  <p className="text-lg font-semibold">
                    You are worse than {Math.round(rank)}% of developers.
                  </p>

                  <p className="text-sm text-gray-300 mt-2">
                    Most candidates fail not because they don’t know. But
                    because they can’t explain clearly.
                  </p>

                  <button
                    onClick={() => setShowPaywall(true)}
                    className="mt-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    🔓 Fix this before your next interview
                  </button>
                </div>
              )}
              {submitted && failedQuestions.length > 0 && (
                <div className="bg-red-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-red-600 font-medium">
                    You failed {failedQuestions.length}/{completed + 1}{" "}
                    questions.
                  </p>

                  <p className="text-xs text-gray-600 mt-1">
                    This is why interviews feel hard.
                  </p>
                </div>
              )}
            </div>
          )}

          {showPaywall && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
              <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
                <h2 className="text-2xl font-semibold mb-3">
                  You don’t fail because you don’t know.
                </h2>

                <p className="text-sm text-gray-500 mb-6">
                  You fail because you answer like a junior.
                </p>

                <div className="text-left text-sm mb-6 space-y-2">
                  <p>✅ 150 real interview questions</p>
                  <p>🔥 Hidden traps explained</p>
                  <p>🎯 Practice like real interview</p>
                </div>

                <p className="text-3xl font-bold mb-2">$19</p>

                <Countdown />

                <button
                  onClick={() =>
                    window.open(
                      "https://noteflowai.lemonsqueezy.com/checkout/buy/98ea2ea8-1378-4bcc-900b-c0c3ea03e359",
                      "_blank",
                    )
                  }
                  className="w-full bg-black text-white py-3 rounded-lg mt-4"
                >
                  🔓 Unlock Now
                </button>

                <button
                  onClick={() => setShowPaywall(false)}
                  className="mt-4 text-xs text-gray-400"
                >
                  Maybe later
                </button>
              </div>
            </div>
          )}

          <div
            onClick={() => setShowPaywall(true)}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-xl shadow-lg text-sm"
          >
            🔓 Unlock full training – $19
          </div>

     
          <LiveViewers />
          <FakeHeatmap />
          <FakeNotification />
        </div>
      </div> */}
      <div className="flex min-h-screen bg-gray-50">
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <div
          className={`
          fixed md:sticky z-50
          top-0 left-0 h-screen
          w-64 bg-white border-r flex flex-col
          transform transition-transform duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
        >
          {/* TOP */}
          <div>
            {/* LOGO + CLOSE */}
            <div className="px-5 py-4 border-b flex justify-between items-center">
              <div>
                <h1 className="font-semibold text-gray-800 text-lg">
                  InterviewAI{" "}
                  <span className="text-xs text-gray-400">
                    Get hired faster
                  </span>
                </h1>
              </div>

              {/* Close mobile */}
              <button
                onClick={() => setIsOpen(false)}
                className="md:hidden text-gray-500"
              >
                ✕
              </button>
            </div>

            {/* MENU */}
            <div className="p-3 space-y-1">
              {[
                { key: "practice", label: "Practice", icon: "🎯" },
                { key: "failed", label: "Failed Questions", icon: "🔥" },
                { key: "progress", label: "Progress", icon: "📈" },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => {
                    setView(item.key as View);
                    setIsOpen(false);
                  }}
                  className={`
            flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
            transition-all duration-200
            ${
              view === item.key
                ? "bg-gray-900 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100"
            }
          `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="p-4">
            {/* UPGRADE CARD */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl p-4 shadow-md">
              <p className="text-sm font-semibold">Upgrade to Pro</p>
              <p className="text-xs opacity-80 mt-1">
                {/* Unlock all questions + AI feedback */}
                Pass your next .NET interview (or stay stuck)
              </p>

              <button
                onClick={() => setShowPaywall(true)}
                className="mt-3 w-full bg-white text-indigo-600 text-sm font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Pass Interview Faster
              </button>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="flex-1 flex flex-col">
          {/* TOPBAR */}
          <div className="flex items-center justify-between p-4 bg-white border-b">
            {/* Open mobile */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden bg-black text-white px-3 py-1 rounded"
            >
              ☰
            </button>

            <h1 className="font-semibold text-gray-800 text-lg">Dashboard</h1>

            <div>👤</div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 p-6">
            {/* Top */}
            <div className="flex justify-between mb-6">
              <p className="text-sm text-gray-500">
                🔥 78% devs fail these questions
              </p>

              <button
                onClick={() => setShowPaywall(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Pass Interview Faster
              </button>
            </div>
            {view === "practice" && !activeQ && (
              <div className="space-y-4 relative">
                <p className="text-sm text-gray-500">
                  Showing 10/159 questions
                </p>
                {/* <p className="text-sm text-gray-500">
              Free attempts: {startedCount}/{FREE_LIMIT}
            </p> */}
                <p
                  className={`text-sm ${
                    attemptsLeft <= 3
                      ? "text-red-600 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  🚨 Only {attemptsLeft} answers left before lock (Most users
                  fail before finishing)
                </p>
                {attemptsLeft <= 0 && (
                  <div className="bg-black text-white p-5 rounded-xl text-center">
                    <p className="text-lg font-semibold">
                      You've used all free attempts.
                    </p>

                    <p className="text-sm text-gray-300 mt-2">
                      Most developers fail because they stop here.
                    </p>

                    <button
                      onClick={() => setShowPaywall(true)}
                      className="mt-4 bg-white text-black px-4 py-2 rounded-lg"
                    >
                      🔓 Continue Practicing
                    </button>
                  </div>
                )}
                {mockQuestions.map((q, index) => {
                  const isLocked = index >= 10;

                  return (
                    <div
                      key={q.id}
                      className={`bg-white p-5 rounded-xl shadow-sm relative ${
                        isLocked ? "opacity-40 pointer-events-none" : ""
                      }`}
                    >
                      {isLastAttempt && (
                        <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg mb-4 text-sm">
                          🔥 This is your last free question. Use it wisely.
                        </div>
                      )}
                      <h3 className="font-semibold mb-3">{q.title}</h3>

                      {!isLocked ? (
                        <button
                          onClick={() => handleStart(q, index)}
                          className="bg-black text-white px-4 py-2 rounded-lg text-sm"
                        >
                          🎯 Start Answering
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowPaywall(true)}
                          className="bg-gray-400 text-white px-4 py-2 rounded-lg text-sm"
                        >
                          🔒 Locked
                        </button>
                      )}
                    </div>
                  );
                })}

                {/* 🔥 FADE OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-50 to-transparent flex items-end justify-center">
                  <div className="mb-4 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      🔒 Unlock 150+ real interview questions
                    </p>

                    <button
                      onClick={() => setShowPaywall(true)}
                      className="bg-black text-white px-5 py-2 rounded-lg text-sm"
                    >
                      Unlock Full Access
                    </button>
                  </div>
                </div>
              </div>
            )}
            {view === "failed" && (
              <div className="space-y-4">
                {failedQuestions.length === 0 ? (
                  <p className="text-gray-500 text-sm">
                    You haven't failed any questions yet.
                  </p>
                ) : (
                  <>
                    {/* Summary */}
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-red-600">
                        You failed {failedQuestions.length}/{completed}{" "}
                        questions.
                      </p>

                      <p className="text-xs text-gray-600 mt-1">
                        This is why interviews feel hard.
                      </p>
                    </div>

                    {/* List failed questions */}
                    {failedQuestions.map((q) => (
                      <div
                        key={q.id}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <p className="font-medium">{q.title}</p>

                        <p className="text-sm text-red-600 mt-1">
                          💀 You failed this. Try again.
                        </p>

                        <button
                          onClick={() => setActiveQ(q)}
                          className="mt-2 text-sm text-blue-600"
                        >
                          Retry
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
            {view === "progress" && (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-sm mb-2">Questions completed: {completed}</p>

                <p className="text-sm mb-2">
                  Failed questions: {failedQuestions.length}
                </p>

                <p className="text-sm text-gray-500">
                  Keep practicing. Most devs fail before they pass.
                </p>
              </div>
            )}
            {/* LIST */}
            {/* {!activeQ && (
          <div className="space-y-4">
            {mockQuestions.map((q, index) => (
              <div key={q.id} className="bg-white p-5 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-3">{q.title}</h3>

                <button
                  onClick={() => handleStart(q, index)}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm"
                >
                  🎯 Start Answering
                </button>
              </div>
            ))}
          </div>
        )} */}

            {/* INTERVIEW MODE */}
            {activeQ && (
              <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl">
                <h2 className="font-semibold mb-4">{activeQ.title}</h2>

                {!submitted ? (
                  <>
                    <textarea
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      placeholder="Type your answer like in a real interview..."
                      className="w-full border p-3 rounded-lg mb-4 text-sm"
                      rows={5}
                    />

                    <button
                      onClick={handleSubmit}
                      className="bg-black text-white px-4 py-2 rounded-lg"
                    >
                      Submit Answer
                    </button>
                  </>
                ) : (
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm font-medium">
                        🎯 Your score: {Math.round((score || 0) * 100)}%
                      </p>
                      <p className="text-sm mt-1">{feedback}</p>
                    </div>

                    {score !== null && score < 0.3 && (
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm text-red-600 font-medium">
                          💀 Why you sound like a junior:
                        </p>
                        <p className="text-sm mt-1">{activeQ?.trap}</p>
                      </div>
                    )}
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-sm text-red-600 font-medium">
                        ❌ Weak answer:
                      </p>
                      <p className="text-sm mt-1">{activeQ?.weak_answer}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg relative overflow-hidden">
                      <p className="text-sm text-green-600 font-medium">
                        ✅ Strong Answer (locked)
                      </p>

                      <p className="text-sm mt-1">
                        {activeQ?.strong_answer.slice(0, 90)}
                      </p>
                      <div className="relative">
                        <p className="text-sm blur-sm select-none">
                          {activeQ?.strong_answer.slice(90)}
                        </p>
                        <div className="absolute inset-0 bg-white/40"></div>
                      </div>

                      {/* CTA */}
                      <div className="mt-2 text-center">
                        <p className="text-xs text-gray-700 font-medium">
                          🔒 Unlock to see how senior devs answer this
                        </p>

                        <button
                          onClick={() => setShowPaywall(true)}
                          className="mt-2 px-4 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 transition"
                        >
                          Unlock Answers That Get You Hired
                        </button>
                      </div>
                    </div>
                    {/* <div className="bg-green-50 p-4 rounded-lg relative">
                      <p className="text-sm text-green-600 font-medium">
                        ✅ Strong Answer (locked)
                      </p>

                      <p className="text-sm mt-1">
                        {activeQ?.strong_answer.slice(0, 120)}
                      </p>
                      <div className="relative">
                        <p className="text-sm blur-sm select-none">
                          {activeQ?.strong_answer.slice(120)}
                        </p>
                        <div className="absolute inset-0 bg-white/40"></div>
                      </div>
                      <p className="text-sm mt-1 line-clamp-1">
                        {activeQ?.strong_answer}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-green-50 to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60">
                        <p className="text-xs text-gray-700 font-medium text-center px-4">
                          🔒 Unlock to see how senior devs answer this
                        </p>

                        <button
                          onClick={() => setShowPaywall(true)}
                          className="mt-2 px-4 py-1.5 text-xs bg-black text-white rounded-md hover:bg-gray-800 transition"
                        >
                          Unlock Answers That Get You Hired
                        </button>
                      </div>
                    </div> */}

                    <button
                      onClick={() => setActiveQ(null)}
                      className="text-xm text-gray-600"
                    >
                      Back
                    </button>
                  </div>
                )}
                {rank !== null && (
                  <div className="bg-black text-white p-5 rounded-xl text-center mt-4">
                    <p className="text-lg font-semibold">
                      You are worse than {Math.round(rank)}% of developers.
                    </p>

                    <p className="text-sm text-gray-300 mt-2">
                      Most candidates fail not because they don’t know. But
                      because they can’t explain clearly.
                    </p>

                    <button
                      onClick={() => setShowPaywall(true)}
                      className="mt-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      🔓 Fix this before your next interview
                    </button>
                  </div>
                )}
                {submitted && failedQuestions.length > 0 && (
                  <div className="bg-red-50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-red-600 font-medium">
                      You failed {failedQuestions.length}/{completed + 1}{" "}
                      questions.
                    </p>

                    <p className="text-xs text-gray-600 mt-1">
                      This is why interviews feel hard.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* PAYWALL */}
            {showPaywall && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
                  <h2 className="text-2xl font-semibold mb-3">
                    You don’t fail because you don’t know.
                  </h2>

                  <p className="text-sm text-gray-500 mb-6">
                    You fail because you answer like a junior.
                  </p>

                  <div className="text-left text-sm mb-6 space-y-2">
                    <p>✅ See how senior devs ACTUALLY answer </p>{" "}
                    <p>✅ Understand what interviewers are testing</p>
                    <p> ✅ Avoid the mistakes that get you rejected</p>{" "}
                    <p>✅ Think like a senior (not memorize like a junior) </p>
                  </div>
                  {/* Pricing toggle */}
                  <div className="flex gap-2 mb-6">
                    <button
                      onClick={() => setPlan("lifetime")}
                      className={`flex-1 py-2 rounded-lg border ${
                        plan === "lifetime"
                          ? "bg-black text-white"
                          : "text-gray-600"
                      }`}
                    >
                      $29 Lifetime <br></br>
                      <span className="text-xs text-green-500">Best value</span>
                    </button>
                    <button
                      onClick={() => setPlan("monthly")}
                      className={`flex-1 py-2 rounded-lg border ${
                        plan === "monthly"
                          ? "bg-black text-white"
                          : "text-gray-600"
                      }`}
                    >
                      $9 / month
                    </button>
                  </div>

                  {/* Price display */}
                  <div className="mb-6">
                    <p className="text-3xl font-bold">
                      {plan === "lifetime" ? "$29" : "$9"}
                    </p>
                    <p className="text-xs text-gray-400">
                      {plan === "lifetime"
                        ? "One-time payment"
                        : "Billed monthly"}
                    </p>
                  </div>

                  <Countdown />

                  {/* CTA */}
                  <button
                    onClick={() => {
                      if (window.gtag)
                        window.gtag("event", "buy_click_on_paywall", {
                          event_category: "engagement",
                          event_label: plan,
                        });

                      window.open(checkoutLinks[plan], "_blank");
                    }}
                    className="cursor-pointer w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90"
                  >
                    🔓 Unlock Full Access
                  </button>

                  <button
                    onClick={() => setShowPaywall(false)}
                    className="mt-4 text-xs text-gray-400"
                  >
                    Continue failing for free
                  </button>
                </div>
              </div>
            )}

            {/* FLOAT CTA */}
            <div
              onClick={() => setShowPaywall(true)}
              className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-xl shadow-lg text-sm"
            >
              🔓 Unlock Answers That Get You Hired
            </div>

            {/* EFFECTS */}
            <LiveViewers />
            <FakeHeatmap />
            <FakeNotification />
          </div>
        </div>
      </div>
    </>
  );
}
