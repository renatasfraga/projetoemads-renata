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

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class LinhaCriterioDeAceitacao {

	@EmbeddedId
	private LinhaCriterioDeAceitacaoPK id;

	@NotNull
	private Long idOrdenacao;
	@NotEmpty
	private String descricaoLinha;

	@Embeddable
	public static class LinhaCriterioDeAceitacaoPK implements Serializable {

		private static final long serialVersionUID = -5635266465865040292L;

		@ManyToOne
		@JoinColumn(name = "historiausuario_id",
					referencedColumnName = "id")
		private HistoriaDeUsuario historiaDeUsuario;

		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long idLinha;

		public HistoriaDeUsuario getHistoriaDeUsuario() {
			return historiaDeUsuario;
		}

		public void setHistoriaDeUsuario(HistoriaDeUsuario historiaDeUsuario) {
			this.historiaDeUsuario = historiaDeUsuario;
		}

		public Long getIdLinha() {
			return idLinha;
		}

		public void setIdLinha(Long idLinha) {
			this.idLinha = idLinha;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((idLinha == null) ? 0 : idLinha.hashCode());
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
			LinhaCriterioDeAceitacaoPK other = (LinhaCriterioDeAceitacaoPK) obj;
			if (idLinha == null) {
				if (other.idLinha != null)
					return false;
			} else if (!idLinha.equals(other.idLinha))
				return false;
			return true;
		}

	}

	public LinhaCriterioDeAceitacaoPK getId() {
		return id;
	}

	public void setId(LinhaCriterioDeAceitacaoPK id) {
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
		LinhaCriterioDeAceitacao other = (LinhaCriterioDeAceitacao) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
