package com.jordan.pokemons.entity.services;

import java.util.List;

import com.jordan.pokemons.entity.models.Pokemon;

public interface IPokemonService {
	
	public Pokemon get(long id);

	public List<Pokemon> getAll();

	public void post(Pokemon pokemon);

	public void put(Pokemon pokemon, long id);

	public void delete(long id);
}
