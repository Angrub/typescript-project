import { createServer } from "vite";

const entry = process.argv[2];
if (!entry) {
	console.error("Use: node dev-runner.mjs <file>");
	process.exit(1);
}

const server = await createServer({
	appType: "custom",
	server: { hmr: true },
	environments: {
		ssr: {},
	},
});

const runner = server.environments.ssr.runner;

await runner.import(`/${entry}`);

// console.log(`\n🚀 Servidor de desarrollo escuchando en http://localhost:5173\n`);
