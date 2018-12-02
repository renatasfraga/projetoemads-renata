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

import org.springframework.data.annotation.LastModifiedBy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
public class PlanoDeTeste {
	
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

	private Boolean passou;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "usuario_criador")
	private Usuario usuarioCriador;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "usuario_atualizador")
	@LastModifiedBy
	private Usuario usuarioAtualizador;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_projeto")
	private Projeto projeto;
	
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
	public Boolean getPassou() {
		return passou;
	}
	public void setPassou(Boolean passou) {
		this.passou = passou;
	}
	public Usuario getUsuarioCriador() {
		return usuarioCriador;
	}
	public void setUsuarioCriador(Usuario usuarioCriador) {
		this.usuarioCriador = usuarioCriador;
	}
	public Usuario getUsuarioAtualizador() {
		return usuarioAtualizador;
	}
	public void setUsuarioAtualizador(Usuario usuarioAtualizador) {
		this.usuarioAtualizador = usuarioAtualizador;
	}
	public Projeto getProjeto() {
		return projeto;
	}
	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((conteudo == null) ? 0 : conteudo.hashCode());
		result = prime * result + ((dataCriacao == null) ? 0 : dataCriacao.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((passou == null) ? 0 : passou.hashCode());
		result = prime * result + ((projeto == null) ? 0 : projeto.hashCode());
		result = prime * result + ((titulo == null) ? 0 : titulo.hashCode());
		result = prime * result + ((usuarioAtualizador == null) ? 0 : usuarioAtualizador.hashCode());
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
		PlanoDeTeste other = (PlanoDeTeste) obj;
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
		if (passou == null) {
			if (other.passou != null)
				return false;
		} else if (!passou.equals(other.passou))
			return false;
		if (projeto == null) {
			if (other.projeto != null)
				return false;
		} else if (!projeto.equals(other.projeto))
			return false;
		if (titulo == null) {
			if (other.titulo != null)
				return false;
		} else if (!titulo.equals(other.titulo))
			return false;
		if (usuarioAtualizador == null) {
			if (other.usuarioAtualizador != null)
				return false;
		} else if (!usuarioAtualizador.equals(other.usuarioAtualizador))
			return false;
		if (usuarioCriador == null) {
			if (other.usuarioCriador != null)
				return false;
		} else if (!usuarioCriador.equals(other.usuarioCriador))
			return false;
		return true;
	}
	
}
