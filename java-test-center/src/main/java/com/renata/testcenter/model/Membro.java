package com.renata.testcenter.model;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
public class Membro {
	
	@EmbeddedId
	private MembroPK id;
	
	@Embeddable
	public static class MembroPK implements Serializable {

		private static final long serialVersionUID = -5386042604437172832L;
		
		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name = "usuario_email")
		private Usuario usuario;
		
		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name = "projeto_id")
		private Projeto projeto;

		
		public MembroPK() {
			
		}
		
		public MembroPK(Projeto projeto, Usuario usuario) {
			this.projeto = projeto;
			this.usuario = usuario;
		}
		
		public Usuario getUsuario() {
			return usuario;
		}

		public void setUsuario(Usuario usuario) {
			this.usuario = usuario;
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
			result = prime * result + ((projeto == null) ? 0 : projeto.hashCode());
			result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
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
			MembroPK other = (MembroPK) obj;
			if (projeto == null) {
				if (other.projeto != null)
					return false;
			} else if (!projeto.equals(other.projeto))
				return false;
			if (usuario == null) {
				if (other.usuario != null)
					return false;
			} else if (!usuario.equals(other.usuario))
				return false;
			return true;
		}
	}

	public MembroPK getId() {
		return id;
	}

	public void setId(MembroPK id) {
		this.id = id;
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
		Membro other = (Membro) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
