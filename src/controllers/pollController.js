const Poll = require('../models/Poll')

const getPolls = async (res) => {
    try {
        const query = await Poll.find({})
        res.status(200).json(query)
    } catch (err) {
        res.status(500).json({
            msg: "Ocorreu um erro, tente novamente mais tarde."
        })
    }
}

const addPoll = async ({
    name,
    options,
    start,
    end,
    color
}, res) => {

    if (!name) return res.status(422).json({
        msg: "O título da enquete é obrigatório!"
    })

    if (!options) return res.status(422).json({
        msg: "As opções da enquete são obrigatórias!"
    })

    if (!start) return res.status(422).json({
        msg: "A data de início da enquete é obrigatória!"
    })

    if (!end) return res.status(422).json({
        msg: "A data do fim da enquete é obrigatória!"
    })

    if (!color) return res.status(422).json({
        msg: "As cores do card da enquete são obrigatórias!"
    })
    if (!color.background) return res.status(422).json({
        msg: "A cor de fundo do card da enquete é obrigatório!"
    })
    if (!color.text) return res.status(422).json({
        msg: "A cor do texto do card da enquete é obrigatório!"
    })

    const poll = new Poll({
        name,
        options,
        start,
        end,
        color
    })

    try {
        await poll.save()

        res.status(201).json({
            msg: 'Enquete criada com sucesso'
        })
    } catch (err) {
        res.status(500).json({
            msg: "Ocorreu um erro no cadastro, tente novamente mais tarde."
        })
    }
}

const removePoll = async ({
    id
}, res) => {
    if (!id) return res.status(422).json({
        msg: "O id da enquete a ser excluída é obrigatório"
    })

    const search = await Poll.findById(id)
    if (search === null) return res.status(404).json({
        msg: "Enquete não encontrada"
    })

    try {
        const query = await Poll.deleteOne({
            _id: id
        })
        res.status(200).json({
            msg: "Enquete deletada com sucesso!",
            count: query,
            id
        })
    } catch (err) {
        res.status(500).json({
            msg: "Ocorreu um erro na exclusão de enquete, tente novamente mais tarde."
        })
    }
}


const editPoll = async ({
    _id,
    name,
    options,
    start,
    end,
    color
}, res) => {

    if (!_id) return res.status(422).json({
        msg: "O ID da enquete é obrigatório!"
    })

    if (!name) return res.status(422).json({
        msg: "O título da enquete é obrigatório!"
    })

    if (!options) return res.status(422).json({
        msg: "As opções da enquete são obrigatórias!"
    })

    if (!start) return res.status(422).json({
        msg: "A data de início da enquete é obrigatória!"
    })

    if (!end) return res.status(422).json({
        msg: "A data do fim da enquete é obrigatória!"
    })

    if (!color) return res.status(422).json({
        msg: "As cores do card da enquete são obrigatórias!"
    })
    if (!color.background) return res.status(422).json({
        msg: "A cor de fundo do card da enquete é obrigatório!"
    })
    if (!color.text) return res.status(422).json({
        msg: "A cor do texto do card da enquete é obrigatório!"
    })

    const search = await Poll.findById(_id)
    if (search === null) return res.status(404).json({
        msg: "Enquete não encontrada"
    })

    const poll = {
        name,
        options,
        start,
        end,
        color
    }
    try {
        const query = await Poll.updateOne({
            _id
        }, poll)

        res.status(200).json({
            msg: "Enquete alterada com sucesso!",
            query
        })
    } catch (error) {
        res.status(500).json({
            msg: "Erro na alteração na enquete, tente novamente mais tarde."
        })
    }
}

module.exports = {
    addPoll,
    getPolls,
    removePoll,
    editPoll
}