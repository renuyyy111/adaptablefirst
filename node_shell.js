const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'ca00ec34-b75d-488b-95cc-8c5e85601d77'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
