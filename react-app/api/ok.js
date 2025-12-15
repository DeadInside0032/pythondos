/**POST /api/ok */

export default async function handler(req,res){
    const method= req.method
    if(method !== 'POST'){
        const body= req.bodyconsole.log('body', body)

        return res.sendStatus(201);

    }else{
        return res.sendStatus(405);
    }
    //TODO- process data
}