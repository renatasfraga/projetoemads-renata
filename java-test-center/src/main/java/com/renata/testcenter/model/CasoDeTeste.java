package com.renata.testcenter.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotEmpty;

import com.renata.testcenter.enuns.Parecer;

@Entity
public class CasoDeTeste {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotEmpty
	private String titulo;
	private String descricao;
	private String objetivo;
	@NotEmpty
	private String preCondicao;
	@NotEmpty
	private String posCondicao;
	@NotNull
	private LocalDate dataCriacao;
	private LocalTime tempoEstimado;
	private LocalTime tempoDecorrido;
	@NotNull
	@OneToOne
	private Usuario usuarioCriador;
	@NotNull
	@OneToOne
	private Usuario usuarioAtualizador;
	
	@Enumerated(EnumType.STRING)
	private Parecer parecerQualidade;
	private String descricaoParecer;
	@OneToMany
	@JoinColumn(name = "casoDeTeste_id")
	private List<LinhaCasoDeTeste> linhasCasoDeTeste;

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

	public String getObjetivo() {
		return objetivo;
	}

	public void setObjetivo(String objetivo) {
		this.objetivo = objetivo;
	}

	public String getPreCondicao() {
		return preCondicao;
	}

	public void setPreCondicao(String preCondicao) {
		this.preCondicao = preCondicao;
	}

	public String getPosCondicao() {
		return posCondicao;
	}

	public void setPosCondicao(String posCondicao) {
		this.posCondicao = posCondicao;
	}

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public LocalTime getTempoEstimado() {
		return tempoEstimado;
	}

	public void setTempoEstimado(LocalTime tempoEstimado) {
		this.tempoEstimado = tempoEstimado;
	}

	public LocalTime getTempoDecorrido() {
		return tempoDecorrido;
	}

	public void setTempoDecorrido(LocalTime tempoDecorrido) {
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
	
	public List<LinhaCasoDeTeste> getLinhasCasoDeTeste() {
		return linhasCasoDeTeste;
	}

	public void setLinhasCasoDeTeste(List<LinhaCasoDeTeste> linhasCasoDeTeste) {
		this.linhasCasoDeTeste = linhasCasoDeTeste;
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
		CasoDeTeste other = (CasoDeTeste) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
