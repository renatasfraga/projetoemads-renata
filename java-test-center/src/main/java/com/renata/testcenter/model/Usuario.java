package com.renata.testcenter.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.CreatedDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
public class Usuario {

	@Id
	@Size(max = 50)
	private String email;
	@NotNull
	@Size(max = 100)
	private String nome;
	@NotNull
	@Size(max = 12)
	private String senha;
	@Transient
	@Size(max = 12)
	private String repitaSenha;
	@NotNull
	@CreatedDate
	private Date dataIngressoSistema;
	@NotNull
	private String funcaoExercida;
	@JsonIgnore
	@ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(name = "membros", 
        	   joinColumns = { @JoinColumn(name = "usuario_email") }, 
        	   inverseJoinColumns = { @JoinColumn(name = "projeto_id") })
	private List<Projeto> projetos;

	
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
	public String getRepitaSenha() {
		return repitaSenha;
	}
	public void setRepitaSenha(String repitaSenha) {
		this.repitaSenha = repitaSenha;
	}
	public Date getDataIngressoSistema() {
		return dataIngressoSistema;
	}
	public void setDataIngressoSistema(Date dataIngressoSistema) {
		this.dataIngressoSistema = dataIngressoSistema;
	}
	public String getFuncaoExercida() {
		return funcaoExercida;
	}
	public void setFuncaoExercida(String funcaoExercida) {
		this.funcaoExercida = funcaoExercida;
	}
	public List<Projeto> getProjetos() {
		return projetos;
	}
	public void setProjetos(List<Projeto> projetos) {
		this.projetos = projetos;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dataIngressoSistema == null) ? 0 : dataIngressoSistema.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((funcaoExercida == null) ? 0 : funcaoExercida.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + ((projetos == null) ? 0 : projetos.hashCode());
		result = prime * result + ((repitaSenha == null) ? 0 : repitaSenha.hashCode());
		result = prime * result + ((senha == null) ? 0 : senha.hashCode());
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
		if (dataIngressoSistema == null) {
			if (other.dataIngressoSistema != null)
				return false;
		} else if (!dataIngressoSistema.equals(other.dataIngressoSistema))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (funcaoExercida != other.funcaoExercida)
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		if (projetos == null) {
			if (other.projetos != null)
				return false;
		} else if (!projetos.equals(other.projetos))
			return false;
		if (repitaSenha == null) {
			if (other.repitaSenha != null)
				return false;
		} else if (!repitaSenha.equals(other.repitaSenha))
			return false;
		if (senha == null) {
			if (other.senha != null)
				return false;
		} else if (!senha.equals(other.senha))
			return false;
		return true;
	}
}
