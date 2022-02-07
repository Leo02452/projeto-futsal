# Sobre o projeto

## Objetivo
O objetivo desse projeto é criar uma aplicação web que permite que o usuário possa gerenciar um time de futsal da varzea, tanto financeiramente quanto nos jogos que o time faz. Para mais detalhes, olhe em Funcionalidades.

## Propósito
A ideia desse projeto é aplicar os conceitos aprendidos na Trybe, de forma que o código se modifique, se atualize e melhore a cada nova lição aprendida.

# Funcionalidades
- Criar um time, inserindo nome, foto e os jogadores, bem como separá-los por quadros.
- Poder criar uma partida em que o usuário possa registrar os jogadores presentes e as estatísticas em tempo em real, conforme elas acontecem.
- Ter uma área financeira, onde o usuário pode registrar a mensalidade dos jogadores e os gastos que o time tem a cada mês.
- Ter uma área de transferência, onde o usuário pode registrar a saída ou a chegada de um novo jogador.
- Manter um histórico do time, tanto das partidas quanto da gestão financeira e de seus jogadores individualmente.


# Requisitos

## Requisito 1
Criar a página principal, que contenha um formulário de cadastro que contenham os campos:
- Nome do time
- Inserir uma foto
- Email
- Senha
- Diretores
- Nome dos jogadores do segundo quadro
- Nome dos jogadores do primeiro quadro

## Requisito 2
Criar a página que permitirá ao usuário criar uma nova partida. Essa página precisa conter:
- Botão pra adicionar uma nova partida e a opção de dois quadros diferentes, além de selecionar dia, horário e local.
- Campo que apresente todos os jogadores para o usuário selecionar quais estão presentes na partida.
- Botão para criar um evento (gol feito, gol sofrido, falta feita e falta sofrida).
- Dentro desse botão, mostrar os jogadores presentes para o usuário selecionar o responsável pelo evento, além de ter a opção de assistência em caso de gol feito.
- Opção de adicionar o segundo tempo.
- Opções de editar, excluir ou mover um evento.
- Após concluído, mostrar o resumo da partida.

## Requisito 3
Criar a página financeira, onde o usuário possa:
- Registrar e/ou editar um novo pagamento de algum jogador.
- Verificar o montante arrecadado no mês.
- Registrar os gastos que o time teve naquele mês.
- Verificar o balanço do mês e saldo que o time tem disponível ao todo.

## Requisito 4
Criar página de histórico do time e dentro da página criar três abas:
- Financeiro, visível só para os administradores.
- Estatisticas do time, como vitórias, empates, derrotas, gols sofridos, gols marcados e saldo.
- Transferências de jogadores, com data de entrada e saída.

## Requisito 5
Criar página de histórico dos jogadores individualmente, por quadro, com:
- Número de jogos
- Gols
- Assistências

## Requisito 6
Criar página que permite alteração dos dados, tanto do time quanto dos jogadores.
