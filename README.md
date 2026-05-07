# Projeto Pet Shop - Thomas Pet

Desafio extra do curso de introdução à programação Front e Back-End, produzido pela SCTECH, ciclo 2 da Carreira Tech
Atividade: desenvolver uma landing page funcional e responsiva para um pet shop.

Este projeto está publicado em (https://fabianodalmolin.github.io/ThomasPet/) 

## Autor
Fabiano Dalmolin Carvalho

## Créditos e Agradecimentos Especiais
Gostaria de deixar registrado que, antes das aulas ministradas pelos professores **Nicolas Macedo, Jaime Maretoli, André Coelho. Otto H. e Cesar Abascal**, eu enxergava a programação como algo impossível, um "talento nato" reservado apenas para quem já vivia nessa realidade. 

Hoje, ao finalizar este projeto, sinto que as barreiras foram quebradas e sei que posso ir muito mais além. Com os olhos marejados, agradeço profundamente a esses professores e a toda a equipe envolvida por tornarem o complexo em algo possível.

Um detalhe especial deste projeto: mantive a essência do exemplo do professor em homenagem ao **Blippi**, mas mudei o nome para **Thomas** porque, bem... ele ficou com ciúmes!

## Como eu desenvolvi este projeto
Para chegar no resultado final, eu segui este passo a passo:

1. Primeiro, eu segui o passo a passo do professor Nicholas em relação as cores e leioute 
2. Depois, montei o HTML usando as tags certas (como header e footer) para deixar o código organizado.
3. No CSS, usei Flexbox para alinhar o menu e o conteúdo. Para os serviços, usei o Grid, que facilitou muito a criação dos cards (tive bastante dificuldade nesse ponto mas melhorou minha experiência nos conceitos de DIVs)
4. Usei a propriedade `aspect-ratio` para que as fotos dos serviços não ficassem esticadas ou achatadas, mantendo um padrão visual.
5. Na seção Hero, utilizei o position: relative no container principal para criar um contexto de posicionamento. Isso foi essencial para que eu pudesse usar o position: absolute na imagem do pet, garantindo que ela ficasse "presa" ao canto inferior direito da moldura verde, criando o efeito de sobreposição sem quebrar o alinhamento dos textos à esquerda

6. Criei um formulário de contato que funciona de verdade através do FormSubmit e adicionei um pouco de JavaScript para mostrar um alerta de "enviado" e limpar os campos. Quando o usuário enviar uma mensagem, o FormSubmit recebe os dados do inseridos pelo visitante do site e envia para o meu e-mail (o de verdade, não o Thomaspet@). Tive receio de travas com captcha, mas pesquisei e descobri os comandos <**input type="hidden" name="_captcha" value="false"**> que faciliou o envio direto

## Referências e Ferramentas
Para o desenvolvimento deste projeto, utilizei as seguintes fontes e ferramentas de consulta:

**W3Schools:** Para consulta de propriedades CSS e tags HTML.
**Google Fonts:** Para experimentação de outras fontes além das utilizadas Fredoka e Poppins.
**Dribbble:** Utilizado como referência visual para o design dos cards e paleta de cores.
**Regex101:** Para a validação das expressões regulares nos campos de formulário.
**Inteligência Artificial (IA pesquisa Google):** Utilizada como suporte na revisão do código, sugestões de melhorias como por exemplo para melhorar a experiência de quem visita o site e auxílio na redação desta documentação.


## Como testar o site no seu computador
Se quiser rodar o projeto na sua máquina:
- Baixe a pasta com os arquivos index.html, styles.css e java.js.
- Deixe todos na mesma pasta.
- É só abrir o arquivo index.html no seu navegador (Chrome, Edge ou Firefox).

O site também é responsivo, então você pode diminuir a janela do navegador para ver como ele se ajusta para o celular.
