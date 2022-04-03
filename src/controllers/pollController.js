const Poll = require('../models/Poll')


const addPoll = async (res, {name, options, start, end, color}) => {
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
            msg: 'usuário criado com sucesso'
        })
    } catch (err) {
        res.status(500).json({
            msg: "Ocorreu um erro no cadastro, tente mais tarde."
        })
    }

}

module.exports = {
    addPoll
}