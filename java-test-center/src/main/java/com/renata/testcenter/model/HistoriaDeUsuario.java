package com.renata.testcenter.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.LastModifiedBy;


@Entity
public class HistoriaDeUsuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@Size(max = 100)
	private String titulo;
	@Size(max = 300)
	private String descricao;
	@NotNull
	private Date dataCriacao;
	private Date tempoEstimado;
	private Date tempoDecorrido;
	@NotNull
	@ManyToOne
	@JoinColumn(name = "usuario_criador")
	private Usuario usuarioCriador;
	@NotNull
	@ManyToOne
	@JoinColumn(name = "usuario_atualizador")
	@LastModifiedBy
	private Usuario usuarioAtualizador;
	private String parecerQualidade;
	@Size(max = 300)
	private String descricaoParecer;
	@ManyToOne
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
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Date getDataCriacao() {
		return dataCriacao;
	}
	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	public Date getTempoEstimado() {
		return tempoEstimado;
	}
	public void setTempoEstimado(Date tempoEstimado) {
		this.tempoEstimado = tempoEstimado;
	}
	public Date getTempoDecorrido() {
		return tempoDecorrido;
	}
	public void setTempoDecorrido(Date tempoDecorrido) {
		this.tempoDecorrido = tempoDecorrido;
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
	public String getParecerQualidade() {
		return parecerQualidade;
	}
	public void setParecerQualidade(String parecerQualidade) {
		this.parecerQualidade = parecerQualidade;
	}
	public String getDescricaoParecer() {
		return descricaoParecer;
	}
	public void setDescricaoParecer(String descricaoParecer) {
		this.descricaoParecer = descricaoParecer;
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
		result = prime * result + ((dataCriacao == null) ? 0 : dataCriacao.hashCode());
		result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
		result = prime * result + ((descricaoParecer == null) ? 0 : descricaoParecer.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((parecerQualidade == null) ? 0 : parecerQualidade.hashCode());
		result = prime * result + ((projeto == null) ? 0 : projeto.hashCode());
		result = prime * result + ((tempoDecorrido == null) ? 0 : tempoDecorrido.hashCode());
		result = prime * result + ((tempoEstimado == null) ? 0 : tempoEstimado.hashCode());
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
		HistoriaDeUsuario other = (HistoriaDeUsuario) obj;
		if (dataCriacao == null) {
			if (other.dataCriacao != null)
				return false;
		} else if (!dataCriacao.equals(other.dataCriacao))
			return false;
		if (descricao == null) {
			if (other.descricao != null)
				return false;
		} else if (!descricao.equals(other.descricao))
			return false;
		if (descricaoParecer == null) {
			if (other.descricaoParecer != null)
				return false;
		} else if (!descricaoParecer.equals(other.descricaoParecer))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (parecerQualidade != other.parecerQualidade)
			return false;
		if (projeto == null) {
			if (other.projeto != null)
				return false;
		} else if (!projeto.equals(other.projeto))
			return false;
		if (tempoDecorrido == null) {
			if (other.tempoDecorrido != null)
				return false;
		} else if (!tempoDecorrido.equals(other.tempoDecorrido))
			return false;
		if (tempoEstimado == null) {
			if (other.tempoEstimado != null)
				return false;
		} else if (!tempoEstimado.equals(other.tempoEstimado))
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
