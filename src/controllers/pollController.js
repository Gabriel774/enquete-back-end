const Poll = require('../models/Poll')

const addPoll = async (res, {
    name,
    options,
    start,
    end,
    color
}) => {
    if (!name) return res.status(422).json({
        msg: "O título da enquete é obrigatário!"
    })

    if (!options) return res.status(422).json({
        msg: "As opções da enquete são obrigatárias!"
    })

    if (!start) return res.status(422).json({
        msg: "A data de início da enquete é obrigatária!"
    })

    if (!end) return res.status(422).json({
        msg: "A data do fim da enquete é obrigatária!"
    })

    if (!color) return res.status(422).json({
        msg: "As cores do card da enquete são obrigatárias!"
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

const getPolls = async (req, res) => {
    try {
        const query = await Poll.find({})
        res.status(200).json(query)
    } catch (err) {
        res.status(500).json({
            msg: "Ocorreu um erro, tente novamente mais tarde."
        })
    }
}

const removePoll = async ({
    id
}, res) => {
    if (!id) return res.status(422).json({
        msg: "O id da enquete a ser excluída é obrigatório"
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

module.exports = {
    addPoll,
    getPolls,
    removePoll
}