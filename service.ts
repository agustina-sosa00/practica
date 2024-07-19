// CREAR UN SERVICES QUE SEA DE TIPO GETALL

export const getAllDataBase = async () => {
    try {
        const data = await AppDataSource.getRepository(User).find()
        return data
    } catch (error) {
        console.log(error)
    }
}