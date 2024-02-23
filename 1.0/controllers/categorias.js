import categoria from "../models/categorias.js"

const httpCategorias = {
    getCategorias: async (req, res) => {
        const Categorias = await categoria.find()
        res.json({ Categorias })

    },
    getCategoriasID: async (req, res) => {
        const { id } = req.params
        const categorias = await categoria.findById(id)
        res.json({ categorias })
    },
    postCategorias: async (req, res) => {

        const { descripcion } = req.body
        const Categoria = new categoria({ descripcion });

        await Categoria.save()
        res.json({ Categoria })
    },
    putCategorias: async (req, res) => {
        const { id } = req.params
        const { descripcion } = req.body
        const categorias = await categoria.findByIdAndUpdate(id, { descripcion })
        res.json({ categorias })
    },
    putCategoriasActivar: async (req, res) => {
        const { id } = req.params
        const categorias = await categoria.findByIdAndUpdate(id, { estado: 1 }, ({ new: true }))
        res.json({ categorias })

    },
    putCategoriasDesactivar: async (req, res) => {
        const { id } = req.params
        const categorias = await categoria.findByIdAndUpdate(id, { estado: 0 }, ({ new: true }))
        res.json({ categorias })
    },
    deleteCategoria: async (req, res) => {
        const { id } = req.params
        const categorias = await categoria.findByIdAndDelete(id, ({ new: true }))
        res.json({ categorias })
    }
}

export default httpCategorias