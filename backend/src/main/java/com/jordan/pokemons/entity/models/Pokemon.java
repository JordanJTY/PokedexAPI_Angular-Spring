package com.jordan.pokemons.entity.models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "pokemon")
public class Pokemon implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idpoke;

	private int numpokemon;

	private String name;

	private String type1;

	private String type2;

	private int hp;

	private int attack;

	private int defense;

	private int sp_attack;

	private int sp_defense;

	private int speed;

	public long getIdpoke() {
		return idpoke;
	}

	public void setIdpoke(long idpoke) {
		this.idpoke = idpoke;
	}

	public int getNumpokemon() {
		return numpokemon;
	}

	public void setNumpokemon(int numpokemon) {
		this.numpokemon = numpokemon;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType1() {
		return type1;
	}

	public void setType1(String type1) {
		this.type1 = type1;
	}

	public String getType2() {
		return type2;
	}

	public void setType2(String type2) {
		this.type2 = type2;
	}

	public int getHp() {
		return hp;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public int getAttack() {
		return attack;
	}

	public void setAttack(int attack) {
		this.attack = attack;
	}

	public int getDefense() {
		return defense;
	}

	public void setDefense(int defense) {
		this.defense = defense;
	}

	public int getSp_attack() {
		return sp_attack;
	}

	public void setSp_attack(int sp_attack) {
		this.sp_attack = sp_attack;
	}

	public int getSp_defense() {
		return sp_defense;
	}

	public void setSp_defense(int sp_defense) {
		this.sp_defense = sp_defense;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}

	public Pokemon(int numpokemon, String name, String type1, String type2, int hp, int attack, int defense,
			int sp_attack, int sp_defense, int speed) {
		super();
		this.numpokemon = numpokemon;
		this.name = name;
		this.type1 = type1;
		this.type2 = type2;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.sp_attack = sp_attack;
		this.sp_defense = sp_defense;
		this.speed = speed;
	}

	public Pokemon() {

	}

}
