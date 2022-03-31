var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    
    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '71999451212',
            address: {
                postalcode: '41760200',
                street: 'Rua Monsenhor Gaspar Sadoc',
                number: '686',
                details: 'Ap 101',
                district: 'Costa Azul',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}