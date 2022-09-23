package com.jordan.pokemons.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.jordan.pokemons.entity.models.Pokemon;

public interface IPokemonDao extends CrudRepository<Pokemon, Long> {
	
}
