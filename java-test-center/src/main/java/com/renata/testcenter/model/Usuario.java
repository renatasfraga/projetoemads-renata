package com.renata.testcenter.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class Usuario {

	@Id
	private String email;
	@NotEmpty
	private String nome;
	@NotEmpty
	private String senha;
	
	@NotNull
	private LocalDate dataIngressoSistema;
	
	private String funcaoExercida;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public LocalDate getDataIngressoSistema() {
		return dataIngressoSistema;
	}
	
	public void setDataIngressoSistema(LocalDate dataIngressoSistema) {
		this.dataIngressoSistema = dataIngressoSistema; 
	}

	public String getFuncaoExercida() {
		return funcaoExercida;
	}

	public void setFuncaoExercida(String funcaoExercida) {
		this.funcaoExercida = funcaoExercida;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		return true;
	}
	
}
