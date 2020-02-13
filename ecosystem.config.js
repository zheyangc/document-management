module.exports = {
    apps: [{
        name: "client",
        cwd: "./client",
        script: "npm",
        args: 'start',
        autorestart: true,
        watch: false,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }, 
    {
        name: 'server',
        cwd: './server',
        script: 'npm',
        args: 'start',
        autorestart: true,
    }]
}