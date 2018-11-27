package com.renata.testcenter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import com.renata.testcenter.enuns.DominioGrafico;

@Entity
public class Grafico {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	private String conteudo;
	@NotNull
	private DominioGrafico tipoGrafico;
	@NotNull
	@ManyToOne
	@JoinColumn(name = "id_projeto")
	private Projeto projeto;
	@NotNull
	@ManyToOne
	@JoinColumn(name = "usuario_criador")
	private Usuario usuarioCriador;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getConteudo() {
		return conteudo;
	}
	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}
	public DominioGrafico getTipoGrafico() {
		return tipoGrafico;
	}
	public void setTipoGrafico(DominioGrafico tipoGrafico) {
		this.tipoGrafico = tipoGrafico;
	}
	public Projeto getProjeto() {
		return projeto;
	}
	public void setProjeto(Projeto projeto) {
		this.projeto = projeto;
	}
	public Usuario getUsuarioCriador() {
		return usuarioCriador;
	}
	public void setUsuarioCriador(Usuario usuarioCriador) {
		this.usuarioCriador = usuarioCriador;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((conteudo == null) ? 0 : conteudo.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((projeto == null) ? 0 : projeto.hashCode());
		result = prime * result + ((tipoGrafico == null) ? 0 : tipoGrafico.hashCode());
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
		Grafico other = (Grafico) obj;
		if (conteudo == null) {
			if (other.conteudo != null)
				return false;
		} else if (!conteudo.equals(other.conteudo))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (projeto == null) {
			if (other.projeto != null)
				return false;
		} else if (!projeto.equals(other.projeto))
			return false;
		if (tipoGrafico != other.tipoGrafico)
			return false;
		if (usuarioCriador == null) {
			if (other.usuarioCriador != null)
				return false;
		} else if (!usuarioCriador.equals(other.usuarioCriador))
			return false;
		return true;
	}
}
