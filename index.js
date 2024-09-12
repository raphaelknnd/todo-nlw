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

    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0) {
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true
    })

    console.log("Meta(s) concluída(s)")

}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0){
        console.log("Não existem metas realizadas :'(")
        return
    }

    await select({
        message: "Metas realizadas",
        choices: [...realizadas]
    })
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
                    name: 'Metas realizadas',
                    value: 'realizadas'
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
            case "realizadas":
                await metasRealizadas()
            case "remover":
                console.log("vamos remover")
                break
            case "sair":
                return
        }
    }
}

start()