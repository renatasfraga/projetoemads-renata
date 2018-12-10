package com.renata.testcenter.model;

import java.io.Serializable;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.LastModifiedBy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
public class CriterioDeAceitacao {

	@EmbeddedId
	private CriterioDeAceitacaoPK id;

	@NotNull
	private Long idOrdenacao;
	@NotNull
	private String titulo;
	@NotNull
	@Size(max = 200)
	private String descricaoLinha;
	@NotNull
	@ManyToOne(fetch= FetchType.EAGER)
	@JoinColumn(name = "usuario_criador")
	private Usuario usuarioCriador;
	@NotNull
	@ManyToOne(fetch= FetchType.EAGER)
	@JoinColumn(name = "usuario_atualizador")
	@LastModifiedBy
	private Usuario usuarioAtualizador;

	@Embeddable
	public static class CriterioDeAceitacaoPK implements Serializable {

		private static final long serialVersionUID = -5635266465865040292L;

		@ManyToOne
		@JoinColumn(name = "id_historia_de_usuario",
					referencedColumnName = "id")
		private HistoriaDeUsuario historiaDeUsuario;

      	private Long idLinhaCriterio;

		public HistoriaDeUsuario getHistoriaDeUsuario() {
			return historiaDeUsuario;
		}

		public void setHistoriaDeUsuario(HistoriaDeUsuario historiaDeUsuario) {
			this.historiaDeUsuario = historiaDeUsuario;
		}

		public Long getIdLinhaCriterio() {
			return idLinhaCriterio;
		}

		public void setIdLinhaCriterio(Long idLinhaCriterio) {
			this.idLinhaCriterio = idLinhaCriterio;
		}
		

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((historiaDeUsuario == null) ? 0 : historiaDeUsuario.hashCode());
			result = prime * result + ((idLinhaCriterio == null) ? 0 : idLinhaCriterio.hashCode());
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
			CriterioDeAceitacaoPK other = (CriterioDeAceitacaoPK) obj;
			if (historiaDeUsuario == null) {
				if (other.historiaDeUsuario != null)
					return false;
			} else if (!historiaDeUsuario.equals(other.historiaDeUsuario))
				return false;
			if (idLinhaCriterio == null) {
				if (other.idLinhaCriterio != null)
					return false;
			} else if (!idLinhaCriterio.equals(other.idLinhaCriterio))
				return false;
			return true;
		}
	}

	public CriterioDeAceitacaoPK getId() {
		return id;
	}

	public void setId(CriterioDeAceitacaoPK id) {
		this.id = id;
	}

	public Long getIdOrdenacao() {
		return idOrdenacao;
	}

	public void setIdOrdenacao(Long idOrdenacao) {
		this.idOrdenacao = idOrdenacao;
	}

	public String getDescricaoLinha() {
		return descricaoLinha;
	}

	public void setDescricaoLinha(String descricaoLinha) {
		this.descricaoLinha = descricaoLinha;
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
	
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((descricaoLinha == null) ? 0 : descricaoLinha.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((idOrdenacao == null) ? 0 : idOrdenacao.hashCode());
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
		CriterioDeAceitacao other = (CriterioDeAceitacao) obj;
		if (descricaoLinha == null) {
			if (other.descricaoLinha != null)
				return false;
		} else if (!descricaoLinha.equals(other.descricaoLinha))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (idOrdenacao == null) {
			if (other.idOrdenacao != null)
				return false;
		} else if (!idOrdenacao.equals(other.idOrdenacao))
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
