package com.renata.testcenter.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
public class Defeito {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@Size(max = 100)
	private String titulo;
	@NotNull
	private String conteudo;
	@NotNull
	private String dataCriacao;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "usuario_criador")
	private Usuario usuarioCriador;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "usuario_atribuido")
	private Usuario usuarioAtribuido;
	
	private String status;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_projeto")
	private Projeto projeto;

	@NotNull
	private String nivelDeCriticidade;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public String getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(String dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Projeto getProjeto() {
		return projeto;
	}

	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}
	
	public String getNivelDeCriticidade() {
		return nivelDeCriticidade;
	}

	public void setNivelDeCriticidade(String nivelDeCriticidade) {
		this.nivelDeCriticidade = nivelDeCriticidade;
	}

	public Usuario getUsuarioCriador() {
		return usuarioCriador;
	}

	public void setUsuarioCriador(Usuario usuarioCriador) {
		this.usuarioCriador = usuarioCriador;
	}

	public Usuario getUsuarioAtribuido() {
		return usuarioAtribuido;
	}

	public void setUsuarioAtribuido(Usuario usuarioAtribuido) {
		this.usuarioAtribuido = usuarioAtribuido;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((conteudo == null) ? 0 : conteudo.hashCode());
		result = prime * result + ((dataCriacao == null) ? 0 : dataCriacao.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((nivelDeCriticidade == null) ? 0 : nivelDeCriticidade.hashCode());
		result = prime * result + ((projeto == null) ? 0 : projeto.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
		result = prime * result + ((titulo == null) ? 0 : titulo.hashCode());
		result = prime * result + ((usuarioAtribuido == null) ? 0 : usuarioAtribuido.hashCode());
		result = prime * result + ((usuarioCriador == null) ? 0 : usuarioCriador.hashCode());
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
		Defeito other = (Defeito) obj;
		if (conteudo == null) {
			if (other.conteudo != null)
				return false;
		} else if (!conteudo.equals(other.conteudo))
			return false;
		if (dataCriacao == null) {
			if (other.dataCriacao != null)
				return false;
		} else if (!dataCriacao.equals(other.dataCriacao))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (nivelDeCriticidade == null) {
			if (other.nivelDeCriticidade != null)
				return false;
		} else if (!nivelDeCriticidade.equals(other.nivelDeCriticidade))
			return false;
		if (projeto == null) {
			if (other.projeto != null)
				return false;
		} else if (!projeto.equals(other.projeto))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		if (titulo == null) {
			if (other.titulo != null)
				return false;
		} else if (!titulo.equals(other.titulo))
			return false;
		if (usuarioAtribuido == null) {
			if (other.usuarioAtribuido != null)
				return false;
		} else if (!usuarioAtribuido.equals(other.usuarioAtribuido))
			return false;
		if (usuarioCriador == null) {
			if (other.usuarioCriador != null)
				return false;
		} else if (!usuarioCriador.equals(other.usuarioCriador))
			return false;
		return true;
	}
}
