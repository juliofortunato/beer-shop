# 🍺 BrewNest E-Commerce

![](https://images.unsplash.com/photo-1603989872391-359eb0b42a58?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

_This is a simple PDP built using Next.js and TailwindCSS to be used as Minutentag's technical test. It works as a simulation so the user can check the prices for beers on different sizes_

## ℹ Requirements

- NodeJS (used v20.7.0 on development)
- NPM / Yarn

## ⚙️ Setup

First of all, you'll need to install the project's dependencies by running

```
npm install
```

Rename the `.env.local.example` file to `.env.local` so we can use the ENV vars for the API

Then you can start the application using

```
npm run dev
```

## 🚀 Build

A production build can be generated with

```
npm run build
```

## 🔗 API Endpoints

<details>
<summary>Get stock and price for a SKU</summary>

- **URL**: `/stock-price/[sku]`
- **Method**: `GET`
- **Example**:
  ```
  GET http://127.0.0.1:3000/api/stock-price/10167
  ```
  ```json
  {
    "message": "OK",
    "data": {
      "stock": 130,
      "price": 2865
    }
  }
  ```
  </details>

<details>
<summary>Get all products</summary>

- **URL**: `/product`
- **Method**: `GET`
- **Example**:

  ```
  GET http://127.0.0.1:3000/api/product
  ```

  ```json
  {
    "message": "OK",
    "data": [
      {
        "id": 127,
        "brand": "Modelo Especial",
        "image": "/products/modelo-especial.jpeg",
        "style": "Lager",
        "substyle": "Light Lager",
        "abv": "4.4%",
        "origin": "Import",
        "information": "#2 selling imported beer in the US with nearly 60 million cases in annual sales (2), growing more than 15 million cases over the past 2 years (3). A full flavored Mexican lager consistently delivering a crisp, clean taste that has stood the test of time for 90 years. Modelo Especial embodies substance with style - a straightforward, uncomplicated and consistent experience with an understated style.\nModelo Especial earned the 2012 Market Watch \"Beer Brand of the Year\" due to 20 straight years of double-digit growth earning.",
        "skus": [
          {
            "code": "10167",
            "name": "12 - 24oz Cans"
          },
        ]
      },
      { ... },
      { ... }
    ]
  }
  ```

  </details>

<details>
<summary>Get a single product</summary>

- **URL**: `/product/[id]`
- **Method**: `GET`
- **Example**:
  ```
  GET http://127.0.0.1:3000/api/product/127
  ```
  ```json
  {
    "message": "OK",
    "data": {
      "id": 127,
      "brand": "Modelo Especial",
      "image": "/products/modelo-especial.jpeg",
      "style": "Lager",
      "substyle": "Light Lager",
      "abv": "4.4%",
      "origin": "Import",
      "information": "#2 selling imported beer in the US with nearly 60 million cases in annual sales (2), growing more than 15 million cases over the past 2 years (3). A full flavored Mexican lager consistently delivering a crisp, clean taste that has stood the test of time for 90 years. Modelo Especial embodies substance with style - a straightforward, uncomplicated and consistent experience with an understated style.\nModelo Especial earned the 2012 Market Watch \"Beer Brand of the Year\" due to 20 straight years of double-digit growth earning.",
      "skus": [
        {
          "code": "10167",
          "name": "12 - 24oz Cans"
        },
        {
          "code": "10166",
          "name": "18 - 12oz Cans"
        },
        {
          "code": "10170",
          "name": "Half Barrel"
        }
      ]
    }
  }
  ```
  </details>

## 🐛 Bugs and Known Issues

Since the challenge was regarding the PDP, some of the first page (the one with the product listing) features weren't implemented, such as the search and category filter.

Also, for that first page, since we don't know which SKU is being shown, I opted for displaying the product's first SKU price on the listing.
