import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

const getCans = (request, response) => {
    pool.query('SELECT * FROM cans ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        })
}

const getCart = (request, response) => {
    pool.query('SELECT * FROM cart ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        })
}

const getCanById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM cans WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCanByBrand = (request, response) => {
    const brand  = request.params.brand;
    pool.query('SELECT * FROM cans WHERE brand = $1', [brand], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCan = (request, response) => {
    const { brand, product, image } = request.body

    pool.query('INSERT INTO cans (brand, product, image) VALUES ($1, $2, $3)', [brand, product, image], (error, results) => {
        if (error) {
        throw error
        }
        response.status(201).send(`Can added with ID: ${results.insertId}`)
    })
}

const createCartItem = (request, response) => {
    const brand = request.params.brand
    const product = request.params.product
    const image = request.params.image

    pool.query('INSERT INTO cart (brand, product, image) VALUES ($1, $2, $3)', [brand, product, image], (error, results) => {
        if (error) {
        throw error
        }
        response.status(201).send(`Can added with ID: ${results.insertId}`)
    })
}

const updateCan = (request, response) => {
    const id = parseInt(request.params.id)
    const { brand, product, image } = request.body

    pool.query(
        'UPDATE cans SET brand = $1, product = $2, image = $3, WHERE id = $4',
        [brand, product, image, id],
        (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Can modified with ID: ${id}`)
        }
    )
}

const deleteCan = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM cans WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Can deleted with ID: ${id}`)
    })
}

const deleteCartItem = (request, response) => {
    const product = request.params.product

    pool.query('DELETE FROM cart WHERE product = $1', [product], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Can deleted with ID: ${product}`)
    })
}

const deleteAllCartItem = (request, response) => {

    pool.query('DELETE FROM cart WHERE id > 0', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`All items in cart deleted`)
    })
}

const cartSize = (request, response) => {
    pool.query(`SELECT COUNT(*) FROM cart;`, (error, results) => {
        if (error) {
        throw error;
        }
        const rowCount = results.rows[0].count;
        response.status(200).send(`${rowCount}`);
    });
}

export default {
    getCans,
    getCart,
    getCanById,
    getCanByBrand,
    createCan,
    createCartItem,
    updateCan,
    deleteCan,
    deleteCartItem,
    deleteAllCartItem,
    cartSize
}