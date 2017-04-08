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
| Env Variable  | Description     |
| ------------- |:---------------:|
| name          | icloud username |
| pass          | icloud password | 
| device_name   | mobile device   | 
| my_latitude   | your location   |
| my_longtitude | your location   |

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
}
```

## Sample Utterances
```
WhereIntent Where
HowFarIntent How far
```
