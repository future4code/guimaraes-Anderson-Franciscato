# - Exercício 1
    
    Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 
    
    O uso dele é simples, veja abaixo:
    
    ```tsx
    import { v4 } from "uuid"
    
    const id = v4();
    
    console.log("Generated Id: ", id);
    ```
    
    a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

    **Resposta:**
    Usar strings para representar os ids é mais simples e fácil de guardar, entretanto isso torna id muito difícil de serem gerados por outros programas, o que pode causar problemas de segurança. Entretanto utilizar numeros faz uma sequencia de ids o que pode acabar ajudando a ser mais facil de quebrar um id por exemplo, ou de ser encontrado.


# Exercicio 2

    Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:

    - os dados que serão salvos no token (no nosso caso, o id);
    - a chave secreta usada pra criptografar o token;
    - algumas configurações, como o tempo de expiração

    Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:

    ```tsx
    import * as jwt from "jsonwebtoken";

    const expiresIn = "1min"

    const generateToken = (id: string): string => {
    const token = jwt.sign(
        {
        id
        },
        process.env.JWT_KEY as string,
        {
        expiresIn
        }
    );
    return token;
    }
    ```

    a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*

    **Resposta:**
    A linha `as string` é para dizer que o tipo do token é uma string. Isso é necessário pois o token é uma string e não um objeto.

# 
