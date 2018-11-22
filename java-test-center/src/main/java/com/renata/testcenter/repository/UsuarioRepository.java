package com.renata.testcenter.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {

	@Query("SELECT u FROM Usuario u WHERE u.email = :email and u.senha = :senha")
	public Usuario getLogin(@Param("email") String email,
			                @Param("senha") String senha);
}
