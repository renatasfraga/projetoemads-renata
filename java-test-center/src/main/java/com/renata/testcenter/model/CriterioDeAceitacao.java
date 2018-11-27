package com.renata.testcenter.model;

import java.io.Serializable;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
public class CriterioDeAceitacao {

	@EmbeddedId
	private CriterioDeAceitacaoPK id;

	@NotNull
	private Long idOrdenacao;
	@NotNull
	@Size(max = 200)
	private String descricaoLinha;

	@Embeddable
	public static class CriterioDeAceitacaoPK implements Serializable {

		private static final long serialVersionUID = -5635266465865040292L;

		@ManyToOne
		@JoinColumn(name = "id_historia_de_usuario",
					referencedColumnName = "id")
		private HistoriaDeUsuario historiaDeUsuario;

		@GeneratedValue(strategy = GenerationType.AUTO)
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


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
