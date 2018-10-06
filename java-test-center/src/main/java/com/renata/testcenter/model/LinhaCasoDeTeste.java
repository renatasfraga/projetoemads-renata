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

@Entity
public class LinhaCasoDeTeste {

	@EmbeddedId
	private LinhaCasoDeTestePK id;
	@NotNull
	private Long idOrdenacao;
	@NotNull
	private String entrada;
	@NotNull
	private String saidaEsperada;
	private String resultado;
	private Boolean passou;
	
	@Embeddable
	public static class LinhaCasoDeTestePK implements Serializable {
		
		private static final long serialVersionUID = -1068240744318706225L;
		
		@ManyToOne
		@JoinColumn(name = "casoDeTeste_id")
		private CasoDeTeste casoDeTeste;
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long idLinha;

		public CasoDeTeste getCasoDeTeste() {
			return casoDeTeste;
		}

		public void setCasoDeTeste(CasoDeTeste casoDeTeste) {
			this.casoDeTeste = casoDeTeste;
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
			result = prime * result + ((casoDeTeste == null) ? 0 : casoDeTeste.hashCode());
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
			LinhaCasoDeTestePK other = (LinhaCasoDeTestePK) obj;
			if (casoDeTeste == null) {
				if (other.casoDeTeste != null)
					return false;
			} else if (!casoDeTeste.equals(other.casoDeTeste))
				return false;
			if (idLinha == null) {
				if (other.idLinha != null)
					return false;
			} else if (!idLinha.equals(other.idLinha))
				return false;
			return true;
		}
		
		
	}

	public LinhaCasoDeTestePK getId() {
		return id;
	}

	public void setId(LinhaCasoDeTestePK id) {
		this.id = id;
	}

	public Long getIdOrdenacao() {
		return idOrdenacao;
	}

	public void setIdOrdenacao(Long idOrdenacao) {
		this.idOrdenacao = idOrdenacao;
	}

	public String getEntrada() {
		return entrada;
	}

	public void setEntrada(String entrada) {
		this.entrada = entrada;
	}

	public String getSaidaEsperada() {
		return saidaEsperada;
	}

	public void setSaidaEsperada(String saidaEsperada) {
		this.saidaEsperada = saidaEsperada;
	}

	public String getResultado() {
		return resultado;
	}

	public void setResultado(String resultado) {
		this.resultado = resultado;
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
		LinhaCasoDeTeste other = (LinhaCasoDeTeste) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
