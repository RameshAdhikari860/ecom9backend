import productServices from "../services/productServices.js";


const createProduct = async(req, res)=>{
    try{
        const product = req.body
    if(!product){
        // return new Error('')
        return res.status(400).send("Product required");
    }

    if(!product.price){
        return res.status(400).send("price is required")
    }

    const data = await productServices.createProduct(product);

    res.status(200).json({
        message: "product created successful",
        data
    })
    } catch(error){
        console.log(error.message)
        res.status(501).send("error occured to create the product")
    }
};

const getAllProduct = async(req, res)=>{
    try{

        console.log(req.query)

        const data = await productServices.getAllProduct(req.query)
        res.status(200).json({
        message:"All product fetched",
        data
    })
    } catch(error){
        console.log(error.message)
        res.status(400).send("Error occured to fetch all the product")
    }
};

const getProductById = async(req, res)=>{
    try{
        if(!req.params.id){
            return new Error('Id is required')
        }

        const id = req.params.id
        const data = await productServices.getProductById(id)

        res.status(200).json({
            message:"product fetch successful",
            data
        })

    } catch(error){
        console.log(error.message)
        res.status(400).send("error occured to get product")
    }
};

const deleteProductById = async(req, res)=>{
    try{
        if(!req.params.id){
            return new Error('Id is required')
        }

        const id = req.params.id
        const data = await productServices.deleteProductById(id)

        res.status(200).json({
            message:"product delete successful",
            
        })

    } catch(error){
        console.log(error.message)
        res.status(400).send("error occured to delete product")
    }
}

const updateProduct = async(req, res)=>{
    try{
        const id = req.params.id
        const product = req.body
        const data = await productServices.updateProduct(product, id)

        res.status(200).json({
            message:"Product update successful",
            data
        });
    } catch(error){
        console.log(error.message)
        res.send(400).json({
            message: "error occured",
            error : error.message
        })
    }
}



export {createProduct, getAllProduct, getProductById, deleteProductById, updateProduct}