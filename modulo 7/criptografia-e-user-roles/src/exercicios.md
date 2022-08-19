# Exercicio 1
a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

*Resposta:*

Round é uma cost function que arredonda os valores para um numero inteiro, ela passa os dados para o Salt que é gerado pela função genSalt.
Eles se complementam para gerar a Hash no HashSync.

Já que o Salt é gerado pela função genSalt, ele é um valor aleatorio que não é conhecido por ninguém, ou seja, não é possivel saber qual é o Salt usado para gerar a Hash.

# Exercicio 2

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

*Resposta:*

O cadastro por ser o primeiro passo para o login, este é o que deve ser refatorado.

