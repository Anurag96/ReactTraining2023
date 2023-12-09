import { getPokemon } from "../Component/Pokemon"


test('should map snapshot', async()=>{
    const eevee = await getPokemon('eevee')
    console.log(eevee)
    expect(eevee).toMachSnapshot()
})