import Articulo from "../models/articulos.js"

const httpArticulos = {
    getArticulos: async (req, res) => {
        const articulo = await Articulo.find()
        res.json({ articulo })
    },
    getArticuloID: async (req, res) => {
        const { id } = req.params
        const articulo = await Articulo.findById(id)
        res.json({ articulo })
    },
    postArticulo: async (req, res) => {

        const { idcategoria, nombre, precio, stock } = req.body
        const articulo = new Articulo({
            idcategoria, nombre, precio, stock
        });

        await articulo.save()
        res.json({ articulo })
    },
    putArticulos: async (req, res) => {
        const { id } = req.params
        const { nombre, precio, stock } = req.body
        const articulo = await Articulo.findByIdAndUpdate(id, { descripcion, estado })
        res.json({ articulo })
    }
    // putArticulosActivar:async()=>{
    //     const {id}=req.params
    //     const articulo = await categoria.findByIdAndUpdate(id,{estado:1})
    //     res.json({articulo})

    // },
    // putCategoriasDesactivar:async()=>{
    //     const {id}=req.params
    //     const categorias = await categoria.findByIdAndUpdate(id,{estado:0})
    //     res.json({categorias})
    // }

}

export default httpArticulos