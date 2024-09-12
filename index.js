const { select, input, checkbox } = require('@inquirer/prompts')

/*let meta = {
    value: "item aqui",
    checked: false
} */

let metas = []

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta: "})

    if(meta.length == 0){
        console.log("A meta não pode ser vazia")
        return
    }

    metas.push({ value: meta, checked: false})
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, espaço para marcar/desmarcar e Enter para salvar",
        choices: [...metas],
        instructions: false
    })

    if(respostas.length == 0) {
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log("Meta(s) concluída(s)")

}

const start =  async () => {

    while(true){
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: 'Cadastrar meta',
                    value: 'cadastrar'
                },
                {
                    name: 'Listar metas',
                    value: 'listar'
                },
                {
                    name: 'Remover meta',
                    value: 'remover'
                },
                {
                    name: 'Sair',
                    value: 'sair'
                },
            ]
        })

        switch(opcao){
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMetas()
                break
            case "remover":
                console.log("vamos remover")
                break
            case "sair":
                return
        }
    }
}

start()