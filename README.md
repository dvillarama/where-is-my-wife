# where-is-my-wife

A Node module to interact with iCloud/Alex

# Installation

```
 npm install
 zip -r ../where.zip *
 load where.zip in Amazon lambda
 create an Alexa skill and point to your lambda endpoint
```

# Summary

Using the find-my-phone library and AWS lambda, we can ask Alexa the location/distance of an apple device.

# Links
 • https://console.aws.amazon.com/lambda
 • https://developer.amazon.com/edw/home.html#/

# Environment Variables in Lambda
 • name (icloud email/username)
 • pass (icloud password)
 • device_name (device name)
 • my_latitude (used for distance measurement)
 • my_longtitude (used for distance measurement)

# Alexa Settings
## Intent Schema
```{
"intents": [
{
"intent": "WhereIntent"
},
{
"intent": "HowFarIntent"
},
{
"intent": "AMAZON.HelpIntent"
}
]
}```

## Sample Utterances
```
WhereIntent Where
HowFarIntent How far
```
