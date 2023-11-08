import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const actions={
    login: async ({ cookies, request }) => {
		const formData = await request.formData();
        const form=Object.fromEntries([...formData])

        try{
            const authData = await pb.collection('users').authWithPassword(
                form.email,
                form.password,
            );

        }
        catch(err){
            return {
                notVerified:true
            }
        }
        throw redirect(303,'/')

	},
}