import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Animal from 'App/Models/Animal'



export default class AnimalsController {

    public async getAnimals(): Promise<Animal[]>{

        const animal = await Animal.all()
        return animal;

    }

    // Cats are listed as Species 0
    public async getByCat(): Promise<Animal[]>{

        const cats =  await Animal.query().where("species", 0).count ('*').from('species')
        return cats;

    }

    //Dogs are listed as Species 1
    public async getByDog(): Promise<Animal[]>{

        const animal = await Animal.query().where("species", 1).count ('*').from('species')
        return animal;

    }
    
    public async getByYoung(): Promise<Animal[]>{
        

        const animal = await Animal.query().where("age", 7 & 6 & 5 & 4 & 3 & 2 & 1).count ('*').from('age')
        return animal;

    }


    public async setAnimal ({request, response}: HttpContextContract) {
        const dataAnimal = request.only (['id', 'name', 'species',
        'breed', 'gender', 'age'])

        try {
            const animalId = dataAnimal.id;
            const registeredAnimal: Number = await this.getExistingAnimal(animalId)

            if (registeredAnimal == 0) {
                await Animal.create (dataAnimal)
                response.status (200).json ({ "msg": "Your pet has been registered"})
            } else {
                response.status (400).json ({ "msg":"Error, this 'ID' has already been registered"})
            } 
        }catch (error) {
                response.status (500).json ({ "msg":"Server Error"})
        }
    }

    private async getExistingAnimal(id: Number): Promise<Number>{
        const total = await Animal.query().where({"id":id}).count('*').from('animals')
        console.log(total)
        return parseInt(total[0].$extras["count(*)"])
    }

}
