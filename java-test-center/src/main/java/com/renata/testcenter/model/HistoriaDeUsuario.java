package com.renata.testcenter.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

import com.renata.testcenter.enuns.Parecer;

@Entity
public class HistoriaDeUsuario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotEmpty
	private String titulo;
	private String descricao;
	@NotNull
	private LocalDate dataCriacao;
	private LocalDateTime tempoEstimado;
	private LocalDateTime tempoDecorrido;
	@NotNull
	@ManyToOne
	@JoinColumn(name = "usuario_criador")
	private Usuario usuarioCriador;
	@NotNull
	@ManyToOne
	@JoinColumn(name = "usuario_atualizador")
	private Usuario usuarioAtualizador;
	
	@Enumerated(EnumType.STRING)
	private Parecer parecerQualidade;
	private String descricaoParecer;
		
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
	public LocalDate getDataCriacao() {
		return dataCriacao;
	}
	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
	public LocalDateTime getTempoEstimado() {
		return tempoEstimado;
	}
	public void setTempoEstimado(LocalDateTime tempoEstimado) {
		this.tempoEstimado = tempoEstimado;
	}
	public LocalDateTime getTempoDecorrido() {
		return tempoDecorrido;
	}
	public void setTempoDecorrido(LocalDateTime tempoDecorrido) {
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
	public Parecer getParecerQualidade() {
		return parecerQualidade;
	}
	public void setParecerQualidade(Parecer parecerQualidade) {
		this.parecerQualidade = parecerQualidade;
	}
	public String getDescricaoParecer() {
		return descricaoParecer;
	}
	public void setDescricaoParecer(String descricaoParecer) {
		this.descricaoParecer = descricaoParecer;
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
		HistoriaDeUsuario other = (HistoriaDeUsuario) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
}
