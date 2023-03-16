
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
