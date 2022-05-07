import React from 'react';
import PageTittle from '../PageTittle/PageTittle';
const Blog = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <div className='md:w-2/4 w-3/4 mx-auto mt-10'>
                <article >
                    <h2 className='font-bold text-3xl mb-3 text-white uppercase text-center'>JavaScript <span className='block'>VS</span> Nodejs</h2>
                    <h1 className='mb-3'> <span className='text-white'>Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers.It is basically used on the client-side.	Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 	Javascript is used in frontend development.</span>
                    </h1>
                    <h1>
                        <span className='text-white'>NodeJS is a Javascript runtime environment.We can run Javascript outside the browser with the help of NodeJS.It is mostly used on the server-side.Nodejs does not have capability to add HTML tags.V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development.</span>
                    </h1>
                </article>
               
            </div>
            <div className='md:w-2/4 w-3/4 mx-auto mt-10'>
                <article >
                    <h2 className='font-bold text-3xl mb-3 text-white uppercase text-center'>when use NodeJs? <span className='block'>VS</span> when use mongodb?</h2>
                    <h1 className='mb-3'> <span className='text-white'>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code.Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...</span>
                    </h1>
                    <h1>
                        <span className='text-white'>MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</span>
                    </h1>
                </article>
               
            </div>
            <div className='md:w-2/4 w-3/4 mx-auto mt-10'>
                <article >
                    <h2 className='font-bold text-3xl mb-3 text-white uppercase text-center'>SQL <span className='block'>VS</span> NOSQL</h2>
                    <h1 className='mb-3'> <span className='text-white'>Sql is a relational data structure.These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries</span>
                    </h1>
                    <h1>
                        <span className='text-white'>NoSql is a non-relational data structure.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries</span>
                    </h1>
                </article>
               
            </div>
            <div className='md:w-2/4 w-3/4 mx-auto mt-10'>
                <article >
                    <h2 className='font-bold text-3xl mb-3 text-white uppercase text-center'>What is jwt?</h2>
                    <h1 className='my-5'> <span className='text-white'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. A token is a string of data that represents something else, such as an identity.jwt differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</span>
                    </h1>
                </article>
               
            </div>
            <PageTittle location="Men's Perfume - Blog"></PageTittle>
            
        </div>
    );
};

export default Blog;