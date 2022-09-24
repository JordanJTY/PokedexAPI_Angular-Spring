package com.jordan.pokemons.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jordan.pokemons.entity.models.Pokemon;
import com.jordan.pokemons.entity.services.IPokemonService;

@RestController
@CrossOrigin(value = "*")
public class PokemonController {
	@Autowired
	IPokemonService pokemonService;

	@GetMapping("/pokemon")
	public List<Pokemon> getAllPokemons() {
		return pokemonService.getAll();
	}

	@GetMapping("/pokemon/{id}")
	public Pokemon getOne(@PathVariable(value = "id") Long id) {
		return pokemonService.get(id);
	}

	@PostMapping("/pokemon")
	public void post(Pokemon pokemon) {
		pokemonService.post(pokemon);
	}

	@PutMapping("/pokemon/{id}")
	public void put(Pokemon pokemon, @PathVariable(value = "id") int id) {
		pokemonService.put(pokemon, id);
	}

	@DeleteMapping("/pokemon/{id}")
	public void delete(@PathVariable(value = "id") int id) {
		pokemonService.delete(id);
	}
}