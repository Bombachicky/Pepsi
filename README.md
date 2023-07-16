# Pepsi
Recreated the Pepsi website by scratch using Vite, React.js, Tailwind CSS, Express.js, and a PostGreSQL database

Here is a video detailing it: https://www.youtube.com/watch?v=osPCvNVCLmM&ab_channel=DaemonZap
To run,

Install Vite, React, Tailwind CSS, and Express.js

Afterwards, run npm run dev

cd into src and then into api then run node index.js in a seperate powershell terminal.

Then, set up a local database in Postgres with a 2 tables, one for the items, and the other for the cart. 

The tables parameters are

brand VARCHAR(30),
product VARCHAR(30),
image TEXT,

make a table called cans and another called cart.

within index.js, I have stored an array containing all the items inside of cans you need to manually input

afterwards, configure the pooling settings in queries.js as per the settings of your local database

Now, you have a working recreation of the Pepsi website. YAY!
