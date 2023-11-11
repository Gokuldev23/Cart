

/** @type {import('./$types').PageLoad} */
export async function load({locals}) {

    if(locals.pb.authStore.baseToken){
       return{
        profile:locals.pb.authStore.baseModel
       }
    }
}