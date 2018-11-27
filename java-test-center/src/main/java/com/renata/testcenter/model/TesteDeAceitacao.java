package com.renata.testcenter.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.renata.testcenter.model.CriterioDeAceitacao.CriterioDeAceitacaoPK;


@Entity
public class TesteDeAceitacao {
	
	@EmbeddedId
	private TesteDeAceitacaoPK id;
	
	@NotNull
	private Long idOrdenacao;
	@NotNull
	@Size(max = 200)
	private String descricaoLinha;
	
	@NotNull
	private Boolean passou;
	@Embeddable
	public static class TesteDeAceitacaoPK implements Serializable {
	
		private static final long serialVersionUID = 2313052358175756603L;

		@JoinColumns({
						@JoinColumn(name = "id_linha_criterio",
									referencedColumnName = "id_linha_criterio",
									insertable = false, 
		                            updatable = false),
						@JoinColumn(name = "id_historia_de_usuario",
									referencedColumnName = "id_historia_de_usuario",
									insertable = false, 
		                            updatable = false)
		})
		private CriterioDeAceitacaoPK criterioDeAceitacao;
		
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long idLinhaTeste;

		public CriterioDeAceitacaoPK getCriterioDeAceitacao() {
			return criterioDeAceitacao;
		}

		public void setCriterioDeAceitacao(CriterioDeAceitacaoPK criterioDeAceitacao) {
			this.criterioDeAceitacao = criterioDeAceitacao;
		}

		public Long getIdLinhaTeste() {
			return idLinhaTeste;
		}

		public void setIdLinhaTeste(Long idLinhaTeste) {
			this.idLinhaTeste = idLinhaTeste;
		}

		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((criterioDeAceitacao == null) ? 0 : criterioDeAceitacao.hashCode());
			result = prime * result + ((idLinhaTeste == null) ? 0 : idLinhaTeste.hashCode());
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
			TesteDeAceitacaoPK other = (TesteDeAceitacaoPK) obj;
			if (criterioDeAceitacao == null) {
				if (other.criterioDeAceitacao != null)
					return false;
			} else if (!criterioDeAceitacao.equals(other.criterioDeAceitacao))
				return false;
			if (idLinhaTeste == null) {
				if (other.idLinhaTeste != null)
					return false;
			} else if (!idLinhaTeste.equals(other.idLinhaTeste))
				return false;
			return true;
		}

	}
	public TesteDeAceitacaoPK getId() {
		return id;
	}
	public void setId(TesteDeAceitacaoPK id) {
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
		result = prime * result + ((descricaoLinha == null) ? 0 : descricaoLinha.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((idOrdenacao == null) ? 0 : idOrdenacao.hashCode());
		result = prime * result + ((passou == null) ? 0 : passou.hashCode());
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
		TesteDeAceitacao other = (TesteDeAceitacao) obj;
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
		if (passou == null) {
			if (other.passou != null)
				return false;
		} else if (!passou.equals(other.passou))
			return false;
		return true;
	}
}
