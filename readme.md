
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/icon/pokeicon.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best pokemon API</h3>

  <p align="center">
    An awesome proyect inspired in Pokemon!
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][main-menu]

You will able to see your favourite pokemon in your web navigator! This application will show you the first seven generations of Pokemon. See below the different interfaces. 

![Product Name Screen Shot][pokemon-details]

![Product Name Screen Shot][create-pokemon]

![Product Name Screen Shot][search-pokemon]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

That are framework I used to create this API.

* [![Angular][Angular.io]][Angular-url]
* [![Ionix][Ionic.io]][Ionic-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To use this API, I recommend you to install Visual Studio Code and Eclipse/IntelliJ (IDEs of Java). In addition, you will need a MySQL Workbench to import a database .sql and install Node.js in your computer.

### Prerequisites

You need to install or update npm with this command.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Below you have commands to install all setup in Visual Studio Code.

1. Clone the repo
   ```sh
   git clone https://github.com/JordanJTY/PokedexAPI_Angular-Spring
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

3. Install NPM packages of ionic
    ```sh
    npm install -g @ionic/cli
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage


1. Go into folder of frontend to start server from Visual Studio Code.
   ```sh
   cd frontend/
   ionic serve
   ```
2. Go Eclipse or IntelliJ to start server in backend.
    ```sh
   run project with Spring
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ENDPOINTS -->
## Endpoints 

To check if the backend is OK, I used  [![Ionix][Postman.io]][Postman-url]  to get, update, delete and add pokemons.

### get pokemon

![Product Name Screen Shot][get-pokemon]

### Add pokemon

![Product Name Screen Shot][add-pokemon-request] | ![Product Name Screen Shot][add-pokemon-added]


### Post Pokemon

![Product Name Screen Shot][update-pokemon-request] | ![Product Name Screen Shot][update-pokemon-updated]


### Delete pokemon

![Product Name Screen Shot][delete-pokemon-request] | ![Product Name Screen Shot][delete-pokemon-deleted]



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Github of original API creator](https://github.com/fanzeyi/pokemon.json)
* [Pokemon images used from Pokemon Official Website](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [GitHub Pages](https://github.com/JordanJTY)
* [Icons of readme](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[get-pokemon]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/getPokemonRequest.png
[add-pokemon-request]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/addPokemonRequest.png
[add-pokemon-added]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/addPokemonAdded.png
[update-pokemon-request]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/udpatePokemonRequest.png
[update-pokemon-updated]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/udpatePokemonUpdated.png
[delete-pokemon-request]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/deletePokemonRequest.png
[delete-pokemon-deleted]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/deletePokemonDeleted.png
[main-menu]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/mainMenu.png
[create-pokemon]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/createPokemon.png
[pokemon-details]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/pokemonDetails.png
[search-pokemon]: https://github.com/JordanJTY/PokedexAPI_Angular-Spring/blob/master/frontend/src/assets/images/searchPokemon.png
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Ionic.io]: https://img.shields.io/badge/IONIC-black?style=for-the-badge&logo=ionic&logoColor=blue
[Ionic-url]: https://ionicframework.com
[Postman.io]: https://img.shields.io/badge/POSTMAN-white?style=for-the-badge&logo=postman&logoColor=orange
[Postman-url]: https://www.postman.com