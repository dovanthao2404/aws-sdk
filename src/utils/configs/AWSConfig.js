import AWS from 'aws-sdk';
AWS.config.update({
    credentials: {
        accessKeyId: "",
        secretAccessKey: ""
    },
    region: "us-east-1"
})