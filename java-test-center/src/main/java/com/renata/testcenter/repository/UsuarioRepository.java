package com.renata.testcenter.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {

	@Query("SELECT u FROM Usuario u WHERE u.email = :email and u.senha = :senha order by u.nome asc")
	public Usuario getLogin(@Param("email") String email,
			                @Param("senha") String senha);
	
	@Query(value = "Select u.* FROM usuario u inner join membro m on u.email = m.usuario_email inner join projeto "
			      + " p on p.id = m.projeto_id and p.id = :id",
		   nativeQuery = true)
	public List<Usuario> getUsuariosByProjeto(@Param("id") Long id);
	
	@Query(value = "select u.* from usuario u where not exists (select m from membro "
		     + "  m where m.usuario_email = u.email and m.projeto_id = :idProjeto)",
	   nativeQuery = true)
	public List<Usuario> listarUsuarioDisponiveis(@Param("idProjeto") Long id);
}
