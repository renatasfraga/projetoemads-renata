package com.renata.testcenter.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
public class LinhaTesteDeAceitacao {
	
	@EmbeddedId
	private LinhaTesteDeAceitacaoPK id;
	
	@NotNull
	private Long idOrdenacao;
	@NotEmpty
	private String descricaoLinha;
	
	private Boolean passou;
	@Embeddable
	public static class LinhaTesteDeAceitacaoPK implements Serializable {
	
		private static final long serialVersionUID = 2313052358175756603L;

		@JoinColumn(name = "id_linha",
					referencedColumnName = "id_linha")
		private Long linhaCriterioDeAceitacao;
		
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long idLinhaTesteAceitacao;

		
		public Long getIdLinhaTesteAceitacao() {
			return idLinhaTesteAceitacao;
		}

		public void setIdLinhaTesteAceitacao(Long idLinhaTesteAceitacao) {
			this.idLinhaTesteAceitacao = idLinhaTesteAceitacao;
		}
		
		public Long getLinhaCriterioDeAceitacao() {
			return linhaCriterioDeAceitacao;
		}
		
		public void setLinhaCriterioDeAceitacao(Long linhaCriterioDeAceitacao) {
			this.linhaCriterioDeAceitacao = linhaCriterioDeAceitacao;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((idLinhaTesteAceitacao == null) ? 0 : idLinhaTesteAceitacao.hashCode());
			result = prime * result + ((linhaCriterioDeAceitacao == null) ? 0 : linhaCriterioDeAceitacao.hashCode());
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
			LinhaTesteDeAceitacaoPK other = (LinhaTesteDeAceitacaoPK) obj;
			if (idLinhaTesteAceitacao == null) {
				if (other.idLinhaTesteAceitacao != null)
					return false;
			} else if (!idLinhaTesteAceitacao.equals(other.idLinhaTesteAceitacao))
				return false;
			if (linhaCriterioDeAceitacao == null) {
				if (other.linhaCriterioDeAceitacao != null)
					return false;
			} else if (!linhaCriterioDeAceitacao.equals(other.linhaCriterioDeAceitacao))
				return false;
			return true;
		}
		
	}

	public LinhaTesteDeAceitacaoPK getId() {
		return id;
	}

	public void setId(LinhaTesteDeAceitacaoPK id) {
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

	public Boolean getPassou() {
		return passou;
	}

	public void setPassou(Boolean passou) {
		this.passou = passou;
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
		LinhaTesteDeAceitacao other = (LinhaTesteDeAceitacao) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
