const { select } = require('@inquirer/prompts')

const start =  async () => {
    let count = 0

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
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
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