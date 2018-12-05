INSERT INTO defeito(
            id, conteudo, data_criacao, status, titulo, id_projeto, usuario_atribuido, 
            usuario_criador, nivel_de_criticidade)
    VALUES (4, 'ksksksk', '2018-01-20', 'T', 'Bug 01 - texto', 1, 'renatasfraga@gmail.com', 
            'renatasfraga@gmail.com', '5');
select * from defeito;


//nivel dificuldade
select count(*),d.nivel_de_criticidade from defeito d 
where d.id_projeto = 1
group by (d.nivel_de_criticidade);



//nivel de qualidade
select count(h),h.parecer_qualidade from historia_de_usuario h 
where h.id_projeto = 1
group by (h.parecer_qualidade) order by h.parecer_qualidade asc;

//bugs por mes
select d.data_criacao, count(*) from defeito d 
where d.id_projeto = 1
group by (d.data_criacao)


//bugs por pessoa criadora 
select count(*) from defeito d where d.usuario_criador = 'renatasfraga@gmail.com' and d.id_projeto = 1;
//bugs por atribuicao
select count(*) from defeito d where d.usuario_atribuido = 'renatasfraga@gmail.com' and d.id_projeto = 1;

//status dos bugs
select count(*), d.status from defeito d
where d.id_projeto = 1
group by (d.status) order by d.status;
