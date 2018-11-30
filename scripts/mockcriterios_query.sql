INSERT INTO public.criterio_de_aceitacao(
            id_linha_criterio, descricao_linha, id_ordenacao, id_historia_de_usuario)
    VALUES (1, 'incluir corretamente', 1, 25);


select * from criterio_de_aceitacao

select * from criterio_de_aceitacao c inner join historia_de_usuario h
on c.id_historia_de_usuario = h.id  and c.id_linha_criterio = 1 and c.id_historia_de_usuario = 25 
 and h.id_projeto = 1;


