package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Membro;
import com.renata.testcenter.model.Membro.MembroPK;
import com.renata.testcenter.model.Usuario;

public interface MembroRepository extends JpaRepository<Membro, MembroPK> {

	@Query("Select m.id.usuario from Membro m where m.id.projeto.id = :idProjeto")
	public List<Usuario> getListarMembros(@Param("idProjeto") Long id);
	
}
