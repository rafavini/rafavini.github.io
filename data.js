const data = {
    commands: {
        help: `
            <li><code>help</code>: Mostrar informações sobre mim</li>
            <li><code>clear</code>: Limpa o terminal</li>
            <li><code>experiencias</code>: Mostra uma lista das minhas experiencias</li>
            <li><code>sobre mim</code>: Mostra infomações sobre mim</li>
            <li><code>get linkedin</code>: link para o meu linkedin </li>
        `,
        sobreMim: `{<br>
      &nbsp;&nbsp;&nbsp;"nome" : "Rafael Vinicius Germinari Gonçalves",<br>
      &nbsp;&nbsp;&nbsp;"formação": "Ciência da computação - Universidade Federal de Mato Grosso do Sul",<br>
      &nbsp;&nbsp;&nbsp;"linguagem" : "JS, HTML, CSS, C#, PHP",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, ASPNET",<br>
      &nbsp;&nbsp;&nbsp;"IDE favorita": "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"cidade" : "Campo grande, Brasil"<br>
    }`,
        experiencias: `
            <strong>Experiência Profissional:</strong>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Companhia</th>
                        <th>Posição</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jul 2021 - nov 2021 </td>
                        <td>Ebserh</td>
                        <td>Estágio</td=>
                        <td>Desenvolvimento de uma wiki para o hospital universitário</td>
                    </tr>
                    <tr>
                        <td>fev 2022 - nov 2023 </td>
                        <td>EOS Systems</td>
                        <td>Dev full stack</td=>
                        <td>Desenvolvimento e gestão de soluções de segurança e autenticação, integradas à criação de APIs robustas e escaláveis. Implementação de sistemas para cálculo automatizado de contas de água, utilizando ASP.NET para desenvolvimento back-end e Crystal Reports para geração e impressão de relatórios personalizados.</td>
                    </tr>
                    <tr>
                        <td>nov 2023 - Hoje</td>
                        <td>SENAC</td>
                        <td>Professor</td=>
                        <td>Atuando em ensinar, gerenciar e acompanhar a fabrica de software em soluções para o mercado de trabalho </td>
                    </tr>
                </tbody>
            </table> 
        `,
    },
    defaultResponse: "Comando não reconhecido. Digite 'help' para ver a lista de comandos.",
};