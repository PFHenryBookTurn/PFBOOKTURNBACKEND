module.exports = {
    async afterCreate(event) {
        const { data, where, select, populate } = event.params

        try {
            console.log(event)
            await strapi.plugins["email"].services.email.send({
                to: data.email,
                from: "bookturnnotification@gmail.com",
                subject: "Bienvenido a bookturn",
                text: `Te damos la bienvenida ${data.username} a Bookturn!`
            })
        } catch (error) {
            console.log(error)
        }
    }
}