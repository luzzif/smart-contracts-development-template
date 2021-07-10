const { task } = require("hardhat/config");

task("hello-world", "A test task that prints hello world").setAction(
    async () => {
        console.log("Hello world");
    }
);
