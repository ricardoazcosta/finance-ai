const { config } = require("dotenv");
const { defineConfig } = require("prisma/config");

config();

module.exports = defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
	},
	datasource: {
		url: process.env.DATABASE_URL,
	},
});
