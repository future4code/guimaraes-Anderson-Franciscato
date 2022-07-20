# Exercicios 
#### Exercicios de Herança 
- ele chama o construtor uma vez, mas náo mostra o password nenhuma vez.
- A mensagem de chamando construtor da classe customer aparece uma vez no terminal, a mensagem de chamando construtor da classe User também aparece uma vez no terminal, esta ultima aparece por que a classe Customer herda da classe User.
- Sim pois esta instancia tem um get password e assim a senha se torna publica.
- A propriedade CalculateBill é privada, então não é possível acessá-la fora da classe.
- Typescript não permite acessar a propriedade cep fora da classe.
- Para acessar devemos deixar a propriedade cep como publica e chamar pelo metodo getCep.


#### Ecercicios de Polimorfismo
- Place é uma interface porque não tem nenhum metodo.
- Place é abstrata porque não tem nenhum metodo, então não é possível instanciar.
- as semelhanças entre as classes CommercialClient e IndustrialClient são: name, registrationNumber, consumedEnergy, cep, floorsQuantity.
- as diferenças entre as classes CommercialClient e IndustrialClient são: cnpj, machinesQuantity.
- Deve ser filha da classe industry, pois ela herda de ela.
- Entretanto o problema é que a classe industrial não tem nenhum metodo, então não é possível instanciar.
- Não é possível criar apenas o getters da classe industrial, pois ela não tem nenhum metodo.