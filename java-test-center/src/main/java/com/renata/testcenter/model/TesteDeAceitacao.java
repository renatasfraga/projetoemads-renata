package com.renata.testcenter.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.LastModifiedBy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.renata.testcenter.model.CriterioDeAceitacao.CriterioDeAceitacaoPK;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
public class TesteDeAceitacao {
	
	@EmbeddedId
	private TesteDeAceitacaoPK id;
	
	@NotNull
	private Long idOrdenacao;
	@NotNull
	private String titulo;
	
	@NotNull
	@Size(max = 200)
	private String descricaoLinha;
	
	private Boolean passou;
	
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
		result = prime * result + ((passou == null) ? 0 : passou.hashCode());
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
