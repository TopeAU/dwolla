Overview:

This is the deployment of a serverless application that displays the current time as JSON data

Technologies used:

1. Aws lambda: This is where the code that creates the application is deployed to.
2. Nodejs: This is the runtime for the lambda function, the lambda handler is also written in nodejs
3. Serverless framework: This is the IAC used to provision the infrastructure; such as the lambda function, api gateway. It uses the file “serverless.yml” to achieve this.
4. GitHub actions: This is the CI/CD used to deploy the application 
5. API gateway: This is where the application endpoint is provisioned. 


Run the application:

Open the url in your browser to run the application:

 https://jv81xfgboa.execute-api.us-east-2.amazonaws.com/dev

This url endpoint can be viewed from the GitHub actions pipeline in the stage “Deploy Lambda Function”