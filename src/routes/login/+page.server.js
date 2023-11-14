import { redirect } from '@sveltejs/kit';
import { singleCart } from '../../lib';




/** @type {import('./$types').PageLoad} */
export async function load({locals}) {

  let record=await singleCart('qett7m0yfuiarps')

}



export const actions={
    login: async ({ locals, request }) => {
		const formData = await request.formData();
        const form=Object.fromEntries([...formData])

        try{
            const {token,user} = await locals.pb.collection('users').authWithPassword(
                form.email,
                form.password,
            );
            console.log("Token",token,"user",user)
        }
        catch(err){
            return {
                notVerified:true
            }
        }
        throw redirect(303,'/home')
	},
}