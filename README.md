
# short-url generator

This is a shorurl generator done as a part of machine test provided by fingent





## how to run this project

- clone the project at first
- try npm i to install necessory node packages
- then npm start to run the project


## Demo

postman- create shortlink screenshot
https://ibb.co/PcQXPXq







## API Reference

#### create shortlink

```http
  POST /shortner
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. Your URL to be converted |

#### Get item

```http
  GET /{shortUrl_Generated}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `short url`      | `string` | **Required**. short url generated from create shortlink api. |
