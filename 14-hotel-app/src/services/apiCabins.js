import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        console.error(error);
        throw new Error('Cabins could not be loaded');
    }

    return data;
}

export async function deleteCabin(id) {

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        console.error(error);
        throw new Error('Cabins could not be deleted');
    }

    return data;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = typeof (newCabin?.image) === 'string' && newCabin?.image?.startsWith(supabaseUrl);

    const imageName = `${(new Date().toLocaleDateString()
    ).replaceAll('/', '')} - ${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from('cabins');
    if (!id) {
        query = query
            .insert([
                { ...newCabin, image: imagePath },
            ]);
    } else {
        query = query.update({ ...newCabin, image: imagePath })
            .eq('id', id)
            .select();
    }
    const { data, error } = await query.select().single();


    /* const { data, error } = await supabase
      .from('cabins')
      .update({ other_column: 'otherValue' })
      .eq('some_column', 'someValue')
      .select() */
    if (error) {
        console.error(error);
        throw new Error('Cabin could not be created');
    }

    //Upload Img
    const { error: storageError } = await supabase.storage
        .from('cabin-images')
        .upload(imageName, newCabin.image);

    // Delete cabin IF there was an error uploading image
    if (storageError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id);
        console.error(storageError);
        throw new Error('Cabin image cant be uploaded so cant create cabin');
    }

    return data;
}