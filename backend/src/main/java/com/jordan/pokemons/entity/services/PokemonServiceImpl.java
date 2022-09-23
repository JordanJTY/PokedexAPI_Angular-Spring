package com.jordan.pokemons.entity.services;

import java.util.List;

import com.jordan.pokemons.entity.dao.IPokemonDao;
import com.jordan.pokemons.entity.models.Pokemon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonServiceImpl implements IPokemonService {

	@Autowired
	private IPokemonDao pokemonDao;

	@Override
	public Pokemon get(long id) {
		return pokemonDao.findById(id).get();
	}

	@Override
	public List<Pokemon> getAll() {
		return (List<Pokemon>) pokemonDao.findAll();
	}

	@Override
	public void post(Pokemon pokemon) {
		pokemonDao.save(pokemon);
	}

	@Override
	public void put(Pokemon pokemon, long id) {
		pokemonDao.findById(id).ifPresent((x) -> {
			pokemon.setIdpoke(id);
			pokemonDao.save(pokemon);
		});
	}

	@Override
	public void delete(long id) {
		pokemonDao.deleteById(id);
	}

}