
import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';


// example create data

export const actions={
    register: async ({cookies, request }) => {
        const pb = new PocketBase('http://127.0.0.1:8090')
		const formData = await request.formData();
        const form=Object.fromEntries([...formData])
        let data = {
            "username": form.name.split(' ').join('')+Math.round(Math.random()*10),
            "email": form.email,
            "emailVisibility": true,
            "password": form.pass,
            "passwordConfirm":form.pass,
            "name": form.name
        };

        data=JSON.stringify(data)
        console.log("data",data)
        try{
            let record = await pb.collection('users').create(data);
            console.log("record",record)
        }
        catch(error){
            console.log("error",error)
            
            return {
                notVerified:true,
                err:JSON.stringify(error)
            }
        }
        throw redirect(300,'/login')
	},
}