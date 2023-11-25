import { Sequelize } from "sequelize"

const pool = new Sequelize(
    "node_postgres", "postgres", "123", {
        host: "localhost",
        dialect: "postgres"
    }
)

export default pool